"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SocialIcon from "./SocialIcon";

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = ({ content, design, global }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!content) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = "hero";
      const sections = content.links.map((link) => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 200;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            currentSection = section;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  if (!content) return null;

  const isSolid = scrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isSolid ? `py-3 md:py-4 ${design?.bgScrolled}` : `py-4 md:py-6 ${design?.bgTransparent}`}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-14 md:h-16">
        <a
          href="#hero"
          className={`z-50 block w-max ${design?.logoText}`}
          aria-label="Retour à l'accueil"
        >
          {global?.logo?.image ? (
            <div className="relative w-32 h-10 md:w-56 md:h-16 transition-opacity duration-300 hover:opacity-80">
              <Image
                src={global.logo.image}
                alt="Logo Julisama"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          ) : (
            global?.logo?.text || "LOGO"
          )}
        </a>

        <div className="hidden lg:flex items-center space-x-12">
          {content.links.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeLink === sectionId;

            return (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setActiveLink(sectionId)}
                className={`relative group transition-colors duration-300 ${isActive ? design?.linkActive : design?.link}`}
              >
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-500 h-px ${isActive ? `w-full ${design?.linkUnderlineActive}` : `w-0 group-hover:w-full ${design?.linkUnderline}`}`}
                ></span>
              </a>
            );
          })}

          <div className="flex items-center gap-4">
            {content?.socials?.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter notre page ${social.name}`}
              >
                <SocialIcon
                  name={social.name}
                  className={`w-4 h-4 transition-colors duration-300 ${design?.iconClass}`}
                />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className={`px-8 py-3 transition-all duration-300 ${global?.buttonRadius} ${design?.btnPrimary}`}
          >
            {content.cta}
          </a>
        </div>

        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none transition-transform active:scale-90"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <CloseIcon
                className={`w-8 h-8 md:w-8 md:h-8 ${design?.burgerClass}`}
              />
            ) : (
              <MenuIcon
                className={`w-8 h-8 md:w-8 md:h-8 ${design?.burgerClass}`}
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${design?.mobileMenuBg} ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6 text-center">
          {content.links.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeLink === sectionId;
            return (
              <a
                key={link.title}
                href={link.href}
                onClick={() => {
                  setActiveLink(sectionId);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-colors duration-300 ${isActive ? design?.mobileLinkActive : design?.mobileLink}`}
              >
                {link.title}
              </a>
            );
          })}
          <div className="flex justify-center gap-6 py-4">
            {content?.socials?.map((social) => (
              <a
                key={social.name}
                href={social.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Visiter notre page ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon
                  name={social.name}
                  className={`w-6 h-6 transition-colors duration-300 ${design?.mobileIcon}`}
                />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`inline-block mt-4 px-8 py-4 transition-all duration-300 ${global?.buttonRadius} ${design?.mobileBtn}`}
          >
            {content.cta}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
