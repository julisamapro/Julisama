import Image from "next/image";
import SocialIcon from "./SocialIcon";

const Footer = ({ design, content, global }) => {
  const currentYear = new Date().getFullYear();
  const logo = global?.logo;

  return (
    <footer className={`relative z-20 ${design?.bgColor} ${design?.textColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 pt-16">
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className={`flex items-center mb-6 ${design?.logoText}`}
            >
              {logo?.image ? (
                <Image
                  src={logo.image}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              ) : (
                <>
                  {logo?.text || "LOGO"}
                  <span className={design?.logoDot}>.</span>
                </>
              )}
            </a>
            {content?.description && (
              <p className={`mt-4 max-w-sm ${design?.descriptionText}`}>
                {content.description}
              </p>
            )}
          </div>

          <div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {content?.columns?.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className={`mb-6 ${design?.columnTitle}`}>{col.title}</h4>

                {col.links && (
                  <div className="flex flex-col gap-4">
                    {col.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        className={design?.linkClass}
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}

                {col.textLines && (
                  <div className={design?.textClass}>
                    {col.textLines.map((line, tIdx) => (
                      <p key={tIdx} className={line === "" ? "h-4" : "mb-1"}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-6 pt-8 pb-8 border-t border-stone-200`}
        >
          <p className={design?.copyrightText}>
            © {currentYear} {logo?.text || "AGENCE"}. TOUS DROITS RÉSERVÉS.
          </p>

          <div className="flex gap-8">
            {content?.socials?.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon
                  name={social.name}
                  className={`w-5 h-5 ${design?.socialIconClass}`}
                />
              </a>
            ))}
          </div>

          <div className={design?.signatureText}>
            RÉALISÉ PAR{" "}
            {content?.signatureLink ? (
              <a
                href={content.signatureLink}
                target="_blank"
                rel="noopener noreferrer"
                className={design?.signatureHighlight}
              >
                STELLION WEB
              </a>
            ) : (
              <span className={design?.signatureHighlight}>STELLION WEB</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
