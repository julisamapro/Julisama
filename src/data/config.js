export const siteData = {
  global: {
    fontFamily: "font-sans",
    primaryColor: "custom",
    buttonRadius: "rounded-full",
    imageRadius: "rounded-3xl",
    logo: {
      text: "JULISAMA",
      image: "/logo.png",
    },
  },

  navbar: {
    design: {
      bgScrolled: "bg-[#faf7f3] border-b border-[#303030]/10 shadow-sm",
      bgTransparent: "bg-transparent",

      logoText:
        "text-[#303030] font-serif font-black text-2xl md:text-3xl tracking-tighter",
      link: "text-[11px] font-bold tracking-[0.2em] uppercase text-[#303030]/70 hover:text-[#a2623d]",
      linkActive:
        "text-[11px] font-bold tracking-[0.2em] uppercase text-[#a2623d]",
      iconClass: "text-[#303030] hover:text-[#a2623d]",
      burgerClass: "text-[#303030]",
      linkUnderline: "bg-[#a2623d]",

      logoTextTransparent:
        "text-white font-serif font-black text-2xl md:text-3xl tracking-tighter",
      linkTransparent:
        "text-[11px] font-bold tracking-[0.2em] uppercase text-white/90 hover:text-white",
      linkActiveTransparent:
        "text-[11px] font-bold tracking-[0.2em] uppercase text-white font-black",
      iconTransparent: "text-white/90 hover:text-white",
      burgerTransparent: "text-white",
      linkUnderlineTransparent: "bg-white",

      btnPrimary:
        "bg-[#8c5233] text-[#faf7f3] hover:bg-[#a2623d] text-[10px] font-bold uppercase tracking-[0.2em] shadow-md",
      mobileMenuBg: "bg-[#faf7f3] border-t border-[#303030]/10",
      mobileLink:
        "font-serif text-2xl font-medium text-[#303030]/80 hover:text-[#a2623d]",
      mobileLinkActive: "font-serif text-2xl font-black text-[#a2623d]",
      mobileIcon: "text-[#303030] hover:text-[#a2623d]",
      mobileBtn:
        "font-sans text-sm font-bold uppercase tracking-widest bg-[#8c5233] text-[#faf7f3]",
    },
    content: {
      links: [
        { title: "L'UNIVERS", href: "#about" },
        { title: "PRESTATIONS", href: "#services" },
        { title: "RÉALISATIONS", href: "#portfolio" },
      ],
      cta: "PARLONS PROJET",
      socials: [
        { name: "instagram", href: "https://www.instagram.com/julisama_deco/" },
        {
          name: "facebook",
          href: "https://www.facebook.com/people/Julisama-D%C3%A9coratrice-dint%C3%A9rieur/61563882805625/",
        },
      ],
    },
  },

  hero: {
    design: {
      bgColor: "bg-[#faf7f3]",
      bgImage: "/hero.png",
      imagePlaceholderBg: "bg-[#42726b]/10",
      imagePlaceholderText:
        "font-sans font-light text-2xl text-[#42726b] uppercase tracking-widest",
      overlay: "bg-[#303030]/60",
      borderOverlay: "border border-[#faf7f3]/30",
      tagline:
        "font-sans text-[11px] md:text-sm font-bold uppercase tracking-[0.4em] text-[#faf7f3] drop-shadow-md opacity-100",
      titleLine1:
        "font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] md:leading-[0.9] text-[#faf7f3] uppercase drop-shadow-md",
      titleLine2:
        "font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] text-[#63aba0] uppercase drop-shadow-md",
      btnPrimary:
        "mt-8 md:mt-14 bg-[#8c5233] text-[#faf7f3] px-8 md:px-10 py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#faf7f3] hover:text-[#303030] transition-colors duration-300",
      scrollIcon: "text-[#faf7f3] drop-shadow-md opacity-90",
    },
    content: {
      tagline: "DONNEZ VIE À VOS ENVIES DE DÉCORATION",
      titleLine1: "UN INTÉRIEUR",
      titleLine2: "QUI PREND SOIN DE VOUS",
      imagePlaceholderText: "ESPACE INSPIRATION",
      cta: "Découvrir mon univers",
      ctaHref: "#about",
    },
  },

  trustBar: {
    design: {
      bgColor: "bg-[#303030]",
      textClass:
        "font-serif font-light italic text-xl md:text-2xl cursor-default text-[#faf7f3]/90 hover:text-[#faf7f3] tracking-widest",
      separator: "bg-[#faf7f3]/30",
    },
    content: [
      "AUTHENTICITÉ",
      "BIEN-ÊTRE AU QUOTIDIEN",
      "ÉCOUTE BIENVEILLANTE",
      "AMÉNAGEMENT FONCTIONNEL",
      "VISUALISATION 3D",
      "UN INTÉRIEUR À VOTRE IMAGE",
    ],
  },

  about: {
    design: {
      bgColor: "bg-[#ffffff]",
      bottomDivider: "text-[#faf7f3]",
      lineDecoration: "bg-[#a2623d]",
      subtitle:
        "font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#a2623d]",
      title:
        "font-serif text-4xl md:text-6xl leading-[0.9] font-black text-[#303030] uppercase",
      textContainer:
        "font-sans text-base font-medium leading-relaxed text-justify text-[#303030]/80",
      founderContainer: "border-l-2 border-[#42726b]",
      founderName: "font-serif font-black text-2xl text-[#42726b]",
      founderRole:
        "font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#303030]/70",
      imageWrapper: "shadow-2xl bg-[#faf7f3]",
      imagePlaceholder:
        "font-sans font-light text-xl text-[#303030]/40 tracking-widest uppercase",
      imageBackgroundDecor: "border border-[#42726b]/20 bg-[#42726b]/5",
    },
    content: {
      subtitle: "L'HISTOIRE JULISAMA",
      title: "PRENDRE SOIN DE VOTRE HABITAT",
      desc1:
        "Avant de devenir décoratrice, j'ai travaillé en tant qu'aide-soignante. J'ai accompagné des personnes dans des moments de vie parfois très difficiles, avec une seule conviction : prendre soin des autres. Aujourd'hui, j'ai transposé cette valeur fondamentale dans la décoration d'intérieur.",
      desc2:
        "Car un intérieur bien pensé n'est pas un luxe réservé à une élite. C'est un espace qui libère, qui apaise et qui soutient votre quotidien. Mon rôle est de révéler le potentiel de votre maison avec une approche authentique et fonctionnelle, pour que vous ressentiez enfin ce précieux sentiment : « Enfin chez moi ».",
      founders: "Isabelle Roussel",
      foundersRole: "Fondatrice & Décoratrice",
      image: "/JULISAMA-Isabelle.jpg",
    },
  },

  services: {
    design: {
      section: "bg-[#faf7f3]",
      bottomDivider: "text-[#ffffff]",
      subtitle:
        "font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#a2623d]",
      title:
        "font-serif text-5xl md:text-7xl leading-none font-black text-[#303030] uppercase",
      titleHighlight: "text-[#42726b] font-light italic",
      quoteWrapper: "border-[#303030]/20",
      quote:
        "font-serif text-lg font-medium leading-relaxed text-[#303030]/80 italic",
      tabWrapper: "",
      tabActive:
        "font-sans bg-[#42726b] text-[#faf7f3] text-xs font-bold tracking-[0.2em] uppercase shadow-lg",
      tabInactive:
        "font-sans bg-white text-[#303030]/70 hover:text-[#303030] text-xs font-bold tracking-[0.2em] uppercase border border-[#303030]/20 hover:bg-[#faf7f3]",
      panelActive: "shadow-2xl ring-1 ring-[#a2623d]/20",
      panelInactive:
        "bg-white border border-[#303030]/10 shadow-sm hover:bg-[#ffffff]",
      imageActive: "opacity-100 grayscale-0",
      imageInactive: "opacity-60 grayscale",
      overlayActive: "bg-[#303030]/20 opacity-100",
      overlayInactive: "bg-[#303030]/80 opacity-100",
      iconInactive: "text-[#faf7f3] drop-shadow-md",
      titleInactiveMobile:
        "font-serif text-lg font-black text-[#faf7f3] uppercase tracking-tighter drop-shadow-md",
      iconInactivePC:
        "text-[#faf7f3] drop-shadow-lg group-hover:text-[#a2623d]",
      titleInactivePC:
        "font-serif text-2xl font-black text-[#faf7f3] group-hover:text-[#a2623d] uppercase tracking-tighter drop-shadow-lg",
      iconActive: "text-[#a2623d]",
      numberActive: "text-[#faf7f3] border-white/20 bg-white/10",
      titleActive:
        "font-serif text-3xl md:text-4xl font-black text-[#faf7f3] uppercase tracking-tighter",
      descActive:
        "font-sans font-medium text-sm leading-relaxed text-[#faf7f3]/90",
      listContainer: "border-white/10",
      listTitle:
        "font-sans text-[#faf7f3] font-bold text-[10px] uppercase tracking-widest",
      listDesc:
        "font-sans text-[#faf7f3]/90 text-[10px] uppercase tracking-widest",
      listPrice:
        "text-[#faf7f3] font-black bg-white/10 font-serif italic text-sm",
      contentBoxBg: "bg-[#303030]/90 backdrop-blur-xl",
    },
    content: {
      subtitle: "VOS PROJETS",
      titleLine1: "MES",
      titleLine2: "PRESTATIONS",
      quote:
        "Une offre modulable et sur-mesure. Du simple conseil pour débloquer une idée, jusqu'à la métamorphose complète de votre intérieur.",
      tabParticuliers: "Pour les Particuliers",
      tabPros: "Pour les Professionnels",
      particuliersItems: [
        {
          icon: "lightbulb",
          title: "SOS Déco",
          details:
            "Une réponse claire et rapide à une question précise (canapé, couleur, disposition d'un meuble...).",
          image: "/sosDeco.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire rapide, envoi de vos photos/plans et analyse personnalisée.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Mon avis de décoratrice sur votre problématique : une solution simple, efficace et unique.",
            },
            {
              name: "Tarif",
              price: "39 €",
            },
          ],
        },
        {
          icon: "ruler",
          title: "Flash Déco",
          details:
            "Une analyse de votre pièce pour identifier son potentiel et savoir par où commencer.",
          image: "/flashDeco.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire rapide, analyse de l'espace à partir de vos photos/vidéos et plan d'action clair.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Un plan d'action pas à pas et des recommandations personnalisées.",
            },
            {
              name: "Tarif",
              price: "89 €",
            },
          ],
        },
        {
          icon: "book",
          title: "Mini-Book",
          details:
            "Un book digital avec des idées d'ambiance et des pistes déco adaptées à vos envies.",
          image: "/miniBook.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire détaillé, planche d'inspiration, suggestions couleurs, matières et mobilier.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Un guide visuel qui reflète vos goûts et offre une base solide pour avancer.",
            },
            {
              name: "Options & Tarif",
              desc: "+ 79 € pour des visuels 3D.",
              price: "149 € / espace",
            },
          ],
        },
        {
          icon: "users",
          title: "RDV Coaching",
          details:
            "Un rendez-vous personnalisé (en visio ou présentiel) pour répondre à toutes vos questions et vous guider dans vos choix.",
          image: "/coachingDeco.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire détaillé, échange 1h30, conseils en direct sur l'aménagement, les couleurs et le mobilier.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Des réponses concrètes et détaillées ainsi qu'un compte-rendu écrit de notre rendez-vous.",
            },
            {
              name: "Tarif",
              price: "199 €",
            },
          ],
        },
        {
          icon: "cube",
          title: "Immersion Déco",
          details:
            "Une projection réaliste de votre futur intérieur pour vous aider à vous projeter et éviter les erreurs.",
          image: "/immersionDeco.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire détaillé, relevé de vos besoins, proposition d'agencement, recherche et validation du style décoratif et liste shopping.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Un guide prêt à l'emploi incluant des visuels 3D pour passer à l'action sereinement.",
            },
            {
              name: "Tarif",
              desc: "Prix de base jusqu'à 10 m². Ajustable selon superficie et spécificités.",
              price: "Dès 299 €",
            },
          ],
        },
        {
          icon: "home",
          title: "Maison Révélée",
          details:
            "Un dossier clé en main. L'objectif est de repenser chaque espace pour que la maison redevienne une source de bien-être au quotidien.",
          image: "/maisonRevelee.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Questionnaire détaillé, visite complète et tri. On relooke ce qui peut l’être et on transforme ce qui doit changer. Tarif préférentiel multi-pièces.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Une nouvelle lecture de votre intérieur mise en valeur par des visuels 3D immersifs.",
            },
            {
              name: "Tarif",
              price: "Sur Devis",
            },
          ],
        },
      ],
      prosItems: [
        {
          icon: "sparkles",
          title: "Petit Coup de Neuf",
          details:
            "Redonner vie à un espace déjà existant sans tout transformer. Idéal pour moderniser et harmoniser votre activité rapidement.",
          image: "/petitcoupdeneuf.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Analyse de l'espace, valorisation de l'existant, sélection couleurs/mobilier et projection visuelle en option.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Un espace rafraîchi, cohérent et attractif, sans gros travaux.",
            },
            {
              name: "Tarif",
              price: "Sur Devis",
            },
          ],
        },
        {
          icon: "building",
          title: "Je m'installe",
          details:
            "Accompagnement complet pour créer un lieu professionnel à votre image, dès l'ouverture.",
          image: "/jeMinstalle.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Étude des besoins, plans d'agencement, sélection du mobilier, visuels 3D inclus et feuille de route déco.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Des locaux fonctionnels où vos clients se sentent bien dès le premier jour.",
            },
            {
              name: "Tarif",
              price: "Sur Devis",
            },
          ],
        },
        {
          icon: "key",
          title: "Investissement Meublé",
          details:
            "Valorisation d'un bien locatif ou touristique (Airbnb, meublé de tourisme, gîte, hôtel).",
          image: "/investissementMeuble.png",
          detailsList: [
            {
              name: "Ce que ça comprend",
              desc: "Analyse des cibles, étude d'agencement, sélection de déco résistante et visuels 3D.",
            },
            {
              name: "Ce que vous obtenez",
              desc: "Un bien qui se démarque, attire plus de clients et augmente sa rentabilité.",
            },
            {
              name: "Tarif",
              price: "Sur Devis",
            },
          ],
        },
      ],
    },
  },

  portfolio: {
    design: {
      bgColor: "bg-[#ffffff]",
      subtitle:
        "font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#a2623d]",
      title:
        "font-serif text-3xl sm:text-5xl md:text-7xl font-black text-[#303030] uppercase leading-[1.1] md:leading-[0.9] break-words",
      imageWrapper: "bg-[#faf7f3] shadow-xl",
      imagePlaceholder:
        "font-sans font-black text-2xl text-[#42726b]/20 tracking-widest uppercase",
      itemTitle:
        "font-serif text-2xl font-black text-[#303030] uppercase tracking-tighter",
      itemCategory:
        "font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#a2623d]",
      textBoxWrapper:
        "bg-[#faf7f3]/95 backdrop-blur-md shadow-2xl border border-[#303030]/10",
      textBoxText:
        "font-sans text-[#303030]/90 font-medium text-sm text-center leading-relaxed",
    },
    content: {
      subtitle: "INSPIRATIONS",
      title: "RÉALISATIONS",
      items: [
        {
          title: "Appartement Audacieux",
          category: "Réagencement & Décoration",
          description:
            "Projet de décoration pour un appartement en location. Transformation d'un espace froid en un cocon chaleureux sans travaux lourds. Un aménagement fonctionnel et audacieux qui sublime la luminosité naturelle.",
          images: [
            "/realisation_1.jpg",
            "/realisation_1.1.jpg",
            "/realisation_1.2.jpg",
          ],
        },
        {
          title: "Suite Sous les Toits",
          category: "Conception 3D & Optimisation sur plan",
          description:
            "Aménagement d'une suite parentale avec dressing sur mesure et salle d'eau intégrée. Optimisation des espaces en sous-pente pour garantir une circulation fluide dans une ambiance naturelle et cocooning.",
          images: ["/realisation_2.jpg", "/realisation_2.1.jpg"],
        },
        {
          title: "Rénovation Salle de Bain & Travertin",
          category: "Conception technique & Accompagnement complet",
          description:
            "Projet de rénovation complète de salle de bain. Résolution des contraintes techniques et création d'un agencement moderne avec meuble vasque semi sur-mesure. Matériaux lumineux alliant l'authenticité du bois et l'élégance du travertin.",
          images: [
            "/realisation_3.jpg",
            "/realisation_3.1.jpg",
            "/realisation_3.2.jpg",
          ],
        },
        {
          title: "Cuisine Industrielle & Rouge de Terre",
          category: "Agencement complet & Coaching budgétaire",
          description:
            "Agencement sur mesure d'une cuisine atypique au style industriel. Optimisation de l'espace avec vue sur le jardin et gestion stricte du budget. Une décoration de caractère mariant façades noires, plan de travail en bois et mur rouge terracotta.",
          images: ["/realisation_4.jpg", "/realisation_4.1.jpg"],
        },
      ],
    },
  },

  contact: {
    design: {
      bgColor: "bg-[#303030]",
      topDivider: "text-[#ffffff]",
      bgImage:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
      overlay: "bg-[#303030]/95",
      title:
        "font-serif text-5xl md:text-7xl leading-[0.9] text-[#faf7f3] font-black uppercase",
      titleHighlight: "text-[#a2623d] font-light italic",
      subtitle:
        "font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#42726b]",
      linkText:
        "font-sans font-medium text-lg md:text-xl leading-relaxed cursor-pointer text-[#faf7f3] hover:text-[#a2623d]",
      formWrapper:
        "bg-[#faf7f3]/5 backdrop-blur-md border border-[#faf7f3]/20 p-8",
      inputClass:
        "w-full bg-transparent border-b border-[#faf7f3]/30 pb-3 text-[#faf7f3] placeholder:text-[#faf7f3]/60 focus:outline-none focus:border-[#a2623d] transition-colors font-sans text-sm",
      labelClass:
        "block font-sans text-[10px] font-bold uppercase tracking-widest text-[#faf7f3]/80 mb-2",
      buttonClass:
        "w-full bg-[#8c5233] text-[#faf7f3] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#faf7f3] hover:text-[#303030] transition-colors",
    },
    content: {
      titleLine1: "DISCUTONS DE",
      titleLine2: "VOS ENVIES",
      addressTitle: "ZONE D'INTERVENTION",
      address: "À domicile et prestations à distance",
      contactTitle: "CONTACT DIRECT",
      email: "contact@julisama.fr",
      phone: "07 56 80 57 44",
      form: {
        title: "ÉCRIVEZ-MOI",
        nameLabel: "Nom & Prénom",
        emailLabel: "Adresse Email",
        phoneLabel: "Numéro de téléphone",
        typeLabel: "Vous êtes",
        typeOptions: ["Un Particulier", "Un Professionnel"],
        serviceLabel: "Type de projet",
        serviceOptionsParticuliers: [
          "Salon / Salle à manger",
          "Cuisine",
          "Chambre / Bureau",
          "Entrée / Couloir",
          "Salle de bain / Buanderie",
          "Extension / Véranda",
          "Terrasse Balcon",
          "Projet complet (Toute la maison)",
          "Autre demande",
        ],
        serviceOptionsPros: [
          "Cabinet médical / Paramédical",
          "Bureaux / Coworking / Salle d’attente",
          "Boutique / Commerce de proximité",
          "Investissement locatif (Airbnb, Gîte)",
          "Restaurant / Café",
          "Autre demande",
        ],
        messageLabel: "Votre message",
        gdprLabel:
          "En soumettant ce formulaire, j'accepte que mes informations saisies soient utilisées exclusivement dans le cadre de ma demande et de la relation commerciale qui peut en découler. Elles ne seront jamais partagées à des tiers.",
        submitText: "ENVOYER LE MESSAGE",
        loadingText: "ENVOI EN COURS...",
        successMessage:
          "Merci ! Votre message a bien été envoyé. Je vous réponds très vite.",
        errorMessage: "Une erreur est survenue. Veuillez réessayer.",
      },
    },
  },

  footer: {
    design: {
      bgColor: "bg-[#faf7f3]",
      textColor: "text-[#303030]",
      logoText:
        "font-serif text-3xl font-black tracking-tighter uppercase text-[#303030] hover:text-[#a2623d]",
      logoDot: "text-[#a2623d]",
      descriptionText:
        "font-sans font-medium text-sm leading-relaxed text-[#303030]/80",
      columnTitle:
        "font-sans font-black text-[10px] tracking-[0.3em] uppercase text-[#303030]",
      linkClass:
        "font-sans font-bold text-xs tracking-widest uppercase text-[#303030]/70 hover:text-[#a2623d]",
      textClass:
        "font-sans font-bold text-xs tracking-widest text-[#303030]/70 uppercase",
      copyrightText:
        "font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-[#303030]/70",
      socialIconClass: "text-[#303030]/80 hover:text-[#a2623d]",
      signatureText:
        "font-sans font-bold tracking-widest text-[9px] text-[#303030]/70 uppercase",
      signatureHighlight:
        "font-black text-[#a2623d] hover:text-[#303030] cursor-pointer",
    },
    content: {
      description:
        "Julisama - Décoratrice d'intérieur & Designer d'espace. Créer des intérieurs où l'on se sent bien, avec authenticité et fonctionnalité.",
      columns: [
        {
          title: "NAVIGATION",
          links: [
            { title: "L'Histoire", href: "#about" },
            { title: "Prestations", href: "#services" },
            { title: "Réalisations", href: "#portfolio" },
          ],
        },
        {
          title: "COORDONNÉES",
          textLines: [
            "07 56 80 57 44",
            "contact@julisama.fr",
            "Intervention France entière",
          ],
        },
        {
          title: "LÉGAL",
          links: [
            { title: "Mentions Légales", href: "#" },
            { title: "Politique de confidentialité", href: "#" },
          ],
        },
      ],
      socials: [
        { name: "instagram", href: "https://www.instagram.com/julisama_deco/" },
        {
          name: "facebook",
          href: "https://www.facebook.com/people/Julisama-D%C3%A9coratrice-dint%C3%A9rieur/61563882805625/",
        },
      ],
      signatureLink: "https://stellionweb.fr/",
    },
  },
};
