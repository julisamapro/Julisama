export const portfolioType = {
  name: "portfolio",
  title: "Réalisations",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de la réalisation",
      type: "string",
    },
    {
      name: "category",
      title: "Catégorie (Sous-titre)",
      type: "string",
    },
    {
      name: "description",
      title: "Description du projet",
      type: "text",
      validation: (Rule) =>
        Rule.max(300).error(
          "La description ne doit pas dépasser 300 caractères.",
        ),
    },
    {
      name: "images",
      title:
        "Images (Astuce : Lâchez jusqu'à 3 images N'IMPORTE OÙ sur cette page)",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          // Cette ligne tue le bug de la "case vide"
          validation: (Rule) =>
            Rule.required().error(
              "Cette case est vide. Ajoutez une image ou supprimez la case avec les 3 petits points verticaux.",
            ),
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.max(3).error("Vous ne pouvez pas ajouter plus de 3 images."),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Réalisation vide",
        media: media,
      };
    },
  },
};
