export default function robots() {
  const baseUrl = "https://www.julisama.fr";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
