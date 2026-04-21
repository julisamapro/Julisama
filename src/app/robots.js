export default function robots() {
  const baseUrl = "https://www.julisama.fr";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/", // Utile si tu as une zone admin à cacher de Google plus tard
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Next.js génère l'extension .xml tout seul grâce au fichier précédent
  };
}
