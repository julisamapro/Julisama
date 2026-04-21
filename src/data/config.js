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
      bgScrolled: "bg-[#f9f6f0] border-b border-[#303030]/10 shadow-sm",
      bgTransparent: "bg-transparent",
      logoText:
        "text-[#303030] font-serif font-black text-2xl md:text-3xl tracking-tighter",
      link: "text-[11px] font-bold tracking-[0.2em] uppercase text-[#303030]/60 hover:text-[#a2623d]",
      linkActive:
        "text-[11px] font-bold tracking-[0.2em] uppercase text-[#a2623d]",
      btnPrimary:
        "bg-[#303030] text-[#f9f6f0] hover:bg-[#a2623d] text-[10px] font-bold uppercase tracking-[0.2em] shadow-md",
      iconClass: "text-[#303030] hover:text-[#a2623d]",
      burgerClass: "text-[#303030]",
      logoDot: "text-[#a2623d]",
      linkUnderline: "bg-[#a2623d]",
      linkUnderlineActive: "bg-[#a2623d]",
      mobileMenuBg: "bg-[#f9f6f0] border-t border-[#303030]/10",
      mobileLink:
        "font-serif text-2xl font-medium text-[#303030]/70 hover:text-[#a2623d]",
      mobileLinkActive: "font-serif text-2xl font-black text-[#a2623d]",
      mobileIcon: "text-[#303030] hover:text-[#a2623d]",
      mobileBtn:
        "font-sans text-sm font-bold uppercase tracking-widest bg-[#303030] text-[#f9f6f0]",
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
      bgColor: "bg-[#f9f6f0]",
      bgImage:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=80",
      imagePlaceholderBg: "bg-[#42726b]/10",
      imagePlaceholderText:
        "font-sans font-light text-2xl text-[#42726b] uppercase tracking-widest",
      overlay: "bg-[#303030]/60",
      borderOverlay: "border border-[#f9f6f0]/30",
      tagline:
        "font-sans text-[11px] md:text-sm font-bold uppercase tracking-[0.4em] text-[#f9f6f0] drop-shadow-md opacity-90",

      titleLine1:
        "font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] md:leading-[0.9] text-[#f9f6f0] uppercase drop-shadow-md",
      titleLine2:
        "font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] text-[#63aba0] uppercase drop-shadow-md",

      btnPrimary:
        "mt-8 md:mt-14 bg-[#a2623d] text-[#f9f6f0] px-8 md:px-10 py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#f9f6f0] hover:text-[#303030] transition-colors duration-300",
      scrollIcon: "text-[#f9f6f0] drop-shadow-md opacity-70",
    },
    content: {
      tagline: "DONNEZ VIE À VOS ENVIES",
      titleLine1: "UN INTÉRIEUR",
      titleLine2: "POUR SE RESSOURCER",
      imagePlaceholderText: "ESPACE INSPIRATION",
      cta: "Découvrir mon univers",
      ctaHref: "#about",
    },
  },

  trustBar: {
    design: {
      bgColor: "bg-[#303030]",
      textClass:
        "font-serif font-light italic text-xl md:text-2xl cursor-default text-[#f9f6f0]/70 hover:text-[#f9f6f0] tracking-widest",
      separator: "bg-[#f9f6f0]/20",
    },
    content: [
      "AUTHENTICITÉ",
      "BIEN-ÊTRE AU QUOTIDIEN",
      "ÉCOUTE BIENVEILLANTE",
      "AMÉNAGEMENT FONCTIONNEL",
      "ESPACES RESSOURÇANTS",
    ],
  },

  about: {
    design: {
      bgColor: "bg-[#ffffff]",
      bottomDivider: "text-[#f9f6f0]",
      lineDecoration: "bg-[#a2623d]",
      subtitle:
        "font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#a2623d]",
      title:
        "font-serif text-4xl md:text-6xl leading-[0.9] font-black text-[#303030] uppercase",
      textContainer:
        "font-sans text-base font-medium leading-relaxed text-justify text-[#303030]/70",
      founderContainer: "border-l-2 border-[#42726b]",
      founderName: "font-serif font-black text-2xl text-[#42726b]",
      founderRole:
        "font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#303030]/50",
      imageWrapper: "shadow-2xl bg-[#f9f6f0]",
      imagePlaceholder:
        "font-sans font-light text-xl text-[#303030]/30 tracking-widest uppercase",
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
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800&q=80",
    },
  },

  services: {
    design: {
      section: "bg-[#f9f6f0]",
      bottomDivider: "text-[#ffffff]",
      subtitle:
        "font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#a2623d]",
      title:
        "font-serif text-5xl md:text-7xl leading-none font-black text-[#303030] uppercase",
      titleHighlight: "text-[#42726b] font-light italic",
      quoteWrapper: "border-[#303030]/10",
      quote:
        "font-serif text-lg font-medium leading-relaxed text-[#303030]/60 italic",
      tabWrapper: "",
      tabActive:
        "font-sans bg-[#42726b] text-[#f9f6f0] text-xs font-bold tracking-[0.2em] uppercase shadow-lg",
      tabInactive:
        "font-sans bg-white text-[#303030]/50 hover:text-[#303030] text-xs font-bold tracking-[0.2em] uppercase border border-[#303030]/10 hover:bg-[#f9f6f0]",
      panelActive: "shadow-2xl ring-1 ring-[#a2623d]/20",
      panelInactive:
        "bg-white border border-[#303030]/5 shadow-sm hover:bg-[#ffffff]",
      imageActive: "opacity-100 grayscale-0",
      imageInactive: "opacity-60 grayscale",
      overlayActive: "bg-[#303030]/20 opacity-100",
      overlayInactive: "bg-[#303030]/80 opacity-100",
      iconInactive: "text-[#f9f6f0] drop-shadow-md",
      titleInactiveMobile:
        "font-serif text-lg font-black text-[#f9f6f0] uppercase tracking-tighter drop-shadow-md",
      iconInactivePC:
        "text-[#f9f6f0] drop-shadow-lg group-hover:text-[#a2623d]",
      titleInactivePC:
        "font-serif text-2xl font-black text-[#f9f6f0] group-hover:text-[#a2623d] uppercase tracking-tighter drop-shadow-lg",
      iconActive: "text-[#a2623d]",
      numberActive: "text-[#f9f6f0] border-white/20 bg-white/10",
      titleActive:
        "font-serif text-3xl md:text-4xl font-black text-[#f9f6f0] uppercase tracking-tighter",
      descActive:
        "font-sans font-medium text-sm leading-relaxed text-[#f9f6f0]/90",
      listContainer: "border-white/10",
      listTitle:
        "font-sans text-[#f9f6f0] font-bold text-[10px] uppercase tracking-widest",
      listDesc:
        "font-sans text-[#f9f6f0]/70 text-[10px] uppercase tracking-widest",
      listPrice:
        "text-[#f9f6f0] font-black bg-white/10 font-serif italic text-sm",
      contentBoxBg: "bg-[#303030]/90 backdrop-blur-xl",
    },
    content: {
      subtitle: "VOS PROJETS",
      titleLine1: "MES",
      titleLine2: "PRESTATIONS",
      quote:
        "Une offre modulable et accessible. Du simple conseil pour débloquer une idée, jusqu'à la métamorphose complète de votre intérieur.",
      tabParticuliers: "Pour les Particuliers",
      tabPros: "Pour les Professionnels",
      particuliersItems: [
        {
          icon: "hands",
          title: "SOS Déco",
          details:
            "Une réponse claire et rapide à une question précise (canapé, couleur, disposition d'un meuble...).",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Analyse personnalisée",
              desc: "Étude via vos photos/plans.",
              price: "39 €",
            },
          ],
        },
        {
          icon: "cube",
          title: "Flash Déco",
          details:
            "Une analyse de votre pièce pour identifier son potentiel. Un plan d'action clair pour harmoniser et désencombrer.",
          image:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Plan d'action",
              desc: "Recommandations d'agencement et couleurs.",
              price: "89 €",
            },
          ],
        },
        {
          icon: "stone",
          title: "Mini-Book",
          details:
            "Une feuille de route visuelle qui pose les bases de votre futur intérieur avec des idées d'ambiance adaptées à vos envies.",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Planche d'inspiration",
              desc: "Couleurs, matières et mobilier.",
              price: "149 €",
            },
            {
              name: "Option 3D",
              desc: "Visuels réalistes en option.",
              price: "+ 79 €",
            },
          ],
        },
        {
          icon: "hands",
          title: "RDV Coaching",
          details:
            "Un rendez-vous personnalisé d'1h30 (en visio ou présentiel) pour répondre à vos questions et vous guider dans vos choix.",
          image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Conseils en direct",
              desc: "Aménagement, couleurs, mobilier.",
              price: "199 €",
            },
          ],
        },
        {
          icon: "cube",
          title: "Immersion Déco",
          details:
            "Une projection réaliste de votre futur intérieur pour vous aider à vous projeter et éviter les erreurs d'aménagement.",
          image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Modélisation 3D",
              desc: "Visuels et plan d'agencement coté.",
              price: "299 € / pièce",
            },
          ],
        },
        {
          icon: "stone",
          title: "Maison Révélée",
          details:
            "L'offre Signature. On trie, on garde, on relooke. Je révèle le potentiel de votre maison sans tout casser, façon 'Maison à vendre' mais pour y rester !",
          image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Dossier clé en main",
              desc: "Plan d'action, 3D, shopping list complète.",
              price: "Sur Devis",
            },
          ],
        },
      ],
      prosItems: [
        {
          icon: "hands",
          title: "Petit Coup de Neuf",
          details:
            "Redonner vie à un espace déjà existant sans tout transformer. Idéal pour moderniser votre cabinet, commerce ou bureau.",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Relooking",
              desc: "Espace rafraîchi, cohérent et attractif.",
              price: "Sur Devis",
            },
          ],
        },
        {
          icon: "cube",
          title: "Je m'installe",
          details:
            "Accompagnement complet pour créer un lieu professionnel à votre image dès l'ouverture. Idéal pour un nouveau commerce ou restaurant.",
          image:
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Agencement total",
              desc: "Plans, mobilier, projection 3D.",
              price: "Sur Devis",
            },
          ],
        },
        {
          icon: "stone",
          title: "Investissement Meublé",
          details:
            "Valorisation d'un bien locatif ou touristique (Airbnb, gîte). Un bien qui se démarque attire plus de clients et augmente sa rentabilité.",
          image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
          detailsList: [
            {
              name: "Design rentable",
              desc: "Mobilier résistant, feuille de route déco.",
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
      imageWrapper: "bg-[#f9f6f0] shadow-xl",
      imagePlaceholder:
        "font-sans font-black text-2xl text-[#42726b]/20 tracking-widest uppercase",
      itemTitle:
        "font-serif text-2xl font-black text-[#303030] uppercase tracking-tighter",
      itemCategory:
        "font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#a2623d]",
      textBoxWrapper:
        "bg-[#f9f6f0]/95 backdrop-blur-md shadow-2xl border border-[#303030]/5",
      textBoxText:
        "font-sans text-[#303030]/70 font-medium text-sm text-center leading-relaxed",
    },
    content: {
      subtitle: "INSPIRATIONS",
      title: "RÉALISATIONS",
      items: [
        {
          title: "Maison Familiale",
          category: "Rénovation Complète",
          description:
            "Optimisation des espaces de vie pour une famille nombreuse. Priorité à la circulation et aux rangements.",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Appartement Haussmannien",
          category: "Agencement & Déco",
          description:
            "Mise en valeur des moulures existantes avec une décoration moderne et chaleureuse.",
          image:
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Cabinet Paramédical",
          category: "Aménagement Pro",
          description:
            "Création d'un espace d'accueil rassurant et de salles de soins fonctionnelles et apaisantes.",
          image:
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Investissement Locatif",
          category: "Optimisation Airbnb",
          description:
            "Décoration coup de cœur pour se démarquer sur les plateformes et maximiser la rentabilité.",
          image:
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
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
        "font-serif text-5xl md:text-7xl leading-[0.9] text-[#f9f6f0] font-black uppercase",
      titleHighlight: "text-[#a2623d] font-light italic",
      subtitle:
        "font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#42726b]",
      linkText:
        "font-sans font-medium text-lg md:text-xl leading-relaxed cursor-pointer text-[#f9f6f0] hover:text-[#a2623d]",
      formWrapper:
        "bg-[#f9f6f0]/5 backdrop-blur-md border border-[#f9f6f0]/10 p-8",
      inputClass:
        "w-full bg-transparent border-b border-[#f9f6f0]/20 pb-3 text-[#f9f6f0] placeholder:text-[#f9f6f0]/40 focus:outline-none focus:border-[#a2623d] transition-colors font-sans text-sm",
      labelClass:
        "block font-sans text-[10px] font-bold uppercase tracking-widest text-[#f9f6f0]/60 mb-2",
      buttonClass:
        "w-full bg-[#a2623d] text-[#f9f6f0] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#f9f6f0] hover:text-[#303030] transition-colors",
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
        typeLabel: "Vous êtes",
        typeOptions: ["Un Particulier", "Un Professionnel"],
        serviceLabel: "Prestation souhaitée",
        serviceOptions: [
          "SOS Déco (39€)",
          "Flash Déco (89€)",
          "Mini-Book (dès 149€)",
          "RDV Coaching (199€)",
          "Immersion Déco (299€/pièce)",
          "Maison Révélée (Sur devis)",
          "Petit Coup de Neuf (Pro)",
          "Je m'installe (Pro)",
          "Investissement Meublé (Pro)",
          "Autre demande",
        ],
        messageLabel: "Votre projet",
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
      bgColor: "bg-[#f9f6f0]",
      textColor: "text-[#303030]",
      logoText:
        "font-serif text-3xl font-black tracking-tighter uppercase text-[#303030] hover:text-[#a2623d]",
      logoDot: "text-[#a2623d]",
      descriptionText:
        "font-sans font-medium text-sm leading-relaxed text-[#303030]/60",
      columnTitle:
        "font-sans font-black text-[10px] tracking-[0.3em] uppercase text-[#303030]",
      linkClass:
        "font-sans font-bold text-xs tracking-widest uppercase text-[#303030]/50 hover:text-[#a2623d]",
      textClass:
        "font-sans font-bold text-xs tracking-widest text-[#303030]/50 uppercase",
      copyrightText:
        "font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-[#303030]/40",
      socialIconClass: "text-[#303030]/60 hover:text-[#a2623d]",
      signatureText:
        "font-sans font-bold tracking-widest text-[9px] text-[#303030]/40 uppercase",
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
