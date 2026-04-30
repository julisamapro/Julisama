import "./globals.css";
import AOSInit from "@/components/AOSInit";

/* block integration des meta donnees google et seo */
export const metadata = {
  metadataBase: new URL("https://www.julisama.fr"),

  title: "Julisama | Décoratrice d'intérieur & Designer d'espace",
  description:
    "Décoratrice d'intérieur près de Béthune. Aménagement sur mesure, conseils et modélisation 3D pour révéler le potentiel de votre habitat. Parlons projet !",

  keywords: [
    "décoratrice d'intérieur",
    "designer d'espace",
    "aménagement intérieur",
    "décoration",
    "coaching déco",
    "modélisation 3D",
    "rénovation intérieure",
    "décoration professionnelle",
    "aménagement Airbnb",
    "Julisama",
    "Béthune",
    "Burbure",
    "Arras",
    "Pas-de-Calais",
  ],

  authors: [{ name: "Isabelle Roussel" }],
  creator: "Isabelle Roussel",
  publisher: "Julisama",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Julisama | Décoratrice d'intérieur & Designer d'espace",
    description:
      "Découvrez mon univers et mes prestations pour particuliers et professionnels à Béthune et ses environs.",
    url: "https://www.julisama.fr",
    siteName: "Julisama Décoration",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julisama - Décoration d'intérieur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "y2IAHD8yfr0Nxu8zXVnBoBpLXThF-LGZ2OhmHlZXzxw",
  },
};

/* block structure principale html et body */
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Julisama",
    image: "https://www.julisama.fr/logo.png",
    description:
      "Décoratrice d'intérieur et Designer d'espace intervenant à Burbure, Béthune et dans le Pas-de-Calais. Créer des intérieurs où l'on se sent bien, avec authenticité et fonctionnalité.",
    url: "https://www.julisama.fr",
    telephone: "+33756805744",
    email: "contact@julisama.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burbure",
      postalCode: "62190",
      addressCountry: "FR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Béthune",
      },
      {
        "@type": "City",
        name: "Burbure",
      },
      {
        "@type": "State",
        name: "Pas-de-Calais",
      },
    ],
    sameAs: [
      "https://www.instagram.com/julisama_deco/",
      "https://www.facebook.com/people/Julisama-D%C3%A9coratrice-dint%C3%A9rieur/61563882805625/",
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-black text-white selection:bg-[#a2623d] selection:text-white">
        <AOSInit />
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
