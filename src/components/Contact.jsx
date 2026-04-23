"use client";

import { useState } from "react";
import Image from "next/image";

const CustomSelect = ({ label, name, value, options, onChange, design }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className={design?.labelClass}>{label}</label>

      <div
        className={`${design?.inputClass} cursor-pointer flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-[#faf7f3]" : "text-[#faf7f3]/40"}>
          {value || "Sélectionnez une option"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 text-[#faf7f3]/60 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`absolute z-50 w-full mt-2 bg-[#2a2a2a] border border-[#faf7f3]/10 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
      >
        {options.map((option, idx) => (
          <div
            key={idx}
            className={`px-5 py-3 text-sm font-sans cursor-pointer transition-colors duration-200 ${
              value === option
                ? "bg-[#a2623d] text-[#faf7f3] font-bold"
                : "text-[#faf7f3]/70 hover:bg-[#faf7f3]/10 hover:text-[#faf7f3]"
            }`}
            onClick={() => {
              onChange({ target: { name, value: option } });
              setIsOpen(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = ({ content, design, global }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: "Un Particulier",
    serviceType:
      content?.form?.serviceOptionsParticuliers?.[0] ||
      "Salon / Salle à manger",
    message: "",
    gdpr: false,
  });
  const [status, setStatus] = useState("idle");

  if (!content) return null;

  const isPro = formData.clientType === "Un Professionnel";
  const currentServiceOptions = isPro
    ? content.form?.serviceOptionsPros || []
    : content.form?.serviceOptionsParticuliers || [];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "clientType") {
      const isNowPro = value === "Un Professionnel";
      const newOptions = isNowPro
        ? content.form?.serviceOptionsPros || []
        : content.form?.serviceOptionsParticuliers || [];

      setFormData({
        ...formData,
        clientType: value,
        serviceType: newOptions[0] || "Autre demande",
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        clientType: "Un Particulier",
        serviceType:
          content?.form?.serviceOptionsParticuliers?.[0] ||
          "Salon / Salle à manger",
        message: "",
        gdpr: false,
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center relative overflow-hidden py-32 px-6 ${design?.bgColor || ""}`}
    >
      <div
        className={`absolute top-0 left-0 w-full leading-none z-20 rotate-180 ${design?.topDivider || ""}`}
      >
        <svg
          className="relative block w-full h-[40px] md:h-[80px] drop-shadow-[0_-8px_15px_rgba(0,0,0,0.08)]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.5,187.38,97.71,232.88,85.73,277.53,70.62,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      {design?.bgImage && (
        <>
          <Image
            src={design.bgImage}
            alt="Contact Background"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div
            className={`absolute inset-0 z-0 ${design?.overlay || ""}`}
          ></div>
        </>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            className="flex flex-col justify-center lg:sticky lg:top-32"
          >
            <h2 className={`mb-16 ${design?.title}`}>
              {content.titleLine1}
              <br />
              <i className={design?.titleHighlight}>{content.titleLine2}</i>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <span className={`block mb-4 ${design?.subtitle}`}>
                  {content.addressTitle}
                </span>
                <p className={`block ${design?.linkText}`}>{content.address}</p>
              </div>

              <div>
                <span className={`block mb-4 ${design?.subtitle}`}>
                  {content.contactTitle}
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${content.email}`}
                    className={`block transition-colors duration-300 ${design?.linkText}`}
                  >
                    {content.email}
                  </a>
                  <a
                    href={`tel:${content.phone.replace(/\s/g, "")}`}
                    className={`block transition-colors duration-300 ${design?.linkText}`}
                  >
                    {content.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-offset="0" className="mt-8 lg:mt-0">
            <div
              className={`${design?.formWrapper} ${global?.imageRadius || "rounded-none"}`}
            >
              <h3 className="font-serif text-3xl font-medium text-[#faf7f3] mb-8">
                {content.form?.title || "CONTACT"}
              </h3>

              {status === "success" ? (
                <div className="py-12 px-6 text-center text-[#a2623d] font-medium border border-[#a2623d]/30 bg-[#a2623d]/10 rounded-xl">
                  {content.form?.successMessage}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className={design?.labelClass}>
                        {content.form?.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={design?.inputClass}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={design?.labelClass}>
                        {content.form?.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={design?.inputClass}
                        placeholder="jean@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className={design?.labelClass}>
                      {content.form?.phoneLabel || "Numéro de téléphone"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={design?.inputClass}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CustomSelect
                      label={content.form?.typeLabel}
                      name="clientType"
                      value={formData.clientType}
                      options={content.form?.typeOptions || []}
                      onChange={handleChange}
                      design={design}
                    />
                    <CustomSelect
                      label={content.form?.serviceLabel}
                      name="serviceType"
                      value={formData.serviceType}
                      options={currentServiceOptions}
                      onChange={handleChange}
                      design={design}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={design?.labelClass}>
                      {content.form?.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${design?.inputClass} resize-none`}
                      placeholder="Décrivez-moi vos envies, votre pièce, vos contraintes..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="gdpr"
                      name="gdpr"
                      required
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 accent-[#a2623d] cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-[10px] font-sans text-[#faf7f3]/70 leading-relaxed cursor-pointer"
                    >
                      {content.form?.gdprLabel ||
                        "En soumettant ce formulaire, j'accepte que mes informations saisies soient utilisées exclusivement dans le cadre de ma demande et de la relation commerciale qui peut en découler. Elles ne seront jamais partagées à des tiers."}
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm font-medium">
                      {content.form?.errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`${design?.buttonClass} ${global?.buttonRadius} ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {status === "loading"
                      ? content.form?.loadingText
                      : content.form?.submitText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
