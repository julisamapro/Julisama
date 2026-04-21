export default function sitemap() {
  const baseUrl = "https://www.julisama.fr"; // À changer si le domaine est différent

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0, // Indique à Google que c'est la page la plus importante
    },
    // Si plus tard tu rajoutes des pages indépendantes (ex: Mentions Légales),
    // tu pourras les ajouter ici :
    // {
    //   url: `${baseUrl}/mentions-legales`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.3,
    // },
  ];
}
