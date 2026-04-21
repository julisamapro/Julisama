import { siteData } from "@/data/config";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const globalSettings = siteData?.global || {};

  return (
    <div
      className={`min-h-screen relative ${globalSettings.fontFamily || "font-sans"}`}
    >
      <Navbar
        content={siteData.navbar.content}
        design={siteData.navbar.design}
        global={globalSettings}
      />

      <Hero
        content={siteData.hero.content}
        design={siteData.hero.design}
        global={globalSettings}
      />

      <TrustBar
        content={siteData.trustBar.content}
        design={siteData.trustBar.design}
      />

      <About
        content={siteData.about.content}
        design={siteData.about.design}
        global={globalSettings}
      />

      <Services
        content={siteData.services.content}
        design={siteData.services.design}
        global={globalSettings}
      />

      <Portfolio
        content={siteData.portfolio.content}
        design={siteData.portfolio.design}
        global={globalSettings}
      />

      <Contact
        content={siteData.contact.content}
        design={siteData.contact.design}
        global={globalSettings}
      />

      <Footer
        content={siteData.footer.content}
        design={siteData.footer.design}
        global={globalSettings}
      />
    </div>
  );
}
