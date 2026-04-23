import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, clientType, serviceType, message } =
      await request.json();

    const data = await resend.emails.send({
      from: "Formulaire Julisama <contact@julisama.fr>",
      to: ["contact@julisama.fr"],
      reply_to: email,
      subject: `Nouveau projet de ${name} - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #303030; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="color: #a2623d; border-bottom: 2px solid #faf7f3; padding-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; font-size: 18px;">
            Nouveau contact depuis le site
          </h2>
          
          <div style="margin-top: 25px;">
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #42726b; text-decoration: none;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Téléphone :</strong> <a href="tel:${phone}" style="color: #42726b; text-decoration: none;">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>Profil :</strong> ${clientType}</p>
            <p style="margin: 10px 0;"><strong>Type de projet :</strong> ${serviceType}</p>
          </div>
          
          <h3 style="margin-top: 35px; color: #303030; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">
            Message du client :
          </h3>
          
          <div style="background-color: #faf7f3; padding: 20px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6; color: #303030;">
            ${message}
          </div>
          
          <p style="margin-top: 40px; font-size: 11px; color: #303030; opacity: 0.6; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
            Cet e-mail a été envoyé automatiquement depuis julisama.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
