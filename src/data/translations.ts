export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    occasions: string;
    gallery: string;
    reviews: string;
    contact: string;
    order: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    descriptionFr: string;
    ctaWhatsapp: string;
    ctaCollection: string;
    badgeElite: string;
    badgePhone: string;
    badgeCity: string;
    badgeQuality: string;
  };
  categories: {
    title: string;
    subtitle: string;
    ctaOrder: string;
  };
  bestSellers: {
    title: string;
    subtitle: string;
    ctaOrder: string;
    from: string;
  };
  story: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  occasions: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    service5: string;
    service6: string;
    ctaCustom: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    all: string;
    sweet: string;
    bread: string;
    cake: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    metricsTitle: string;
    food: string;
    service: string;
    atmosphere: string;
    scoreText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursVal: string;
    ctaWhatsapp: string;
    ctaFacebook: string;
    findUsTitle: string;
    facebookPageText: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaContact: string;
  };
  footer: {
    slogan: string;
    copyright: string;
    links: string;
    address: string;
  };
}

export const translations: Record<"ar" | "fr", TranslationSchema> = {
  ar: {
    nav: {
      home: "الرئيسية",
      products: "منتجاتنا",
      occasions: "حلويات المناسبات",
      gallery: "المعرض",
      reviews: "آراء الزبناء",
      contact: "تواصل معنا",
      order: "اطلب الآن"
    },
    hero: {
      title: "مخبزة وحلويات جوهرة",
      subtitle: "مذاق راقٍ يُحضّر كل يوم",
      description: "خبز طازج، حلويات مغربية وعصرية، كيكات للمناسبات، وكل ما يضيف لمائدتكم لمسة حلوة من الجودة والإتقان.",
      descriptionFr: "Pâtisserie fine et boulangerie artisanale à Chichaoua.",
      ctaWhatsapp: "اطلب عبر واتساب",
      ctaCollection: "اكتشف منتجاتنا",
      badgeElite: "حلويات راقية",
      badgePhone: "طلب عبر الهاتف",
      badgeCity: "في قلب شيشاوة",
      badgeQuality: "جودة وإتقان"
    },
    categories: {
      title: "منتجاتنا المميزة",
      subtitle: "نقدم لكم تشكيلة فاخرة من المخبوزات والحلويات المحضرة بكل شغف وعناية",
      ctaOrder: "اطلب الآن"
    },
    bestSellers: {
      title: "الأكثر طلباً",
      subtitle: "اكتشفوا الخيارات المفضلة لدى زبنائنا الكرام والأكثر مبيعاً هذا الأسبوع",
      ctaOrder: "اطلب عبر واتساب",
      from: "ابتداءً من"
    },
    story: {
      title: "جودة، إتقان، وذوق رفيع",
      subtitle: "عراقة المذاق ومسؤولية الجودة في شيشاوة",
      paragraph1: "في مخبزة وحلويات جوهرة، نحرص على تقديم مخبوزات وحلويات تجمع بين المذاق الأصيل واللمسة العصرية وجودة المكونات. كل قطعة تُحضّر بكل حب وعناية كأنها لوحة فنية لتقدم لضيوفكم وعائلتكم نكهة لا تُنسى.",
      paragraph2: "سواء كنتم تبحثون عن خبز يومي ساخن ومقرمش، أو تريدون تزيين طاولاتكم بأرقى الحلويات المغربية ككعب الغزال والغريبة والبريوات، أو تبحثون عن كعكة زفاف خيالية، فإن طاقم جوهرة مؤهل بالكامل لتلبية طلبياتكم بأعلى المواصفات.",
      feature1Title: "مكونات مختارة",
      feature1Desc: "نستخدم أجود أنواع المكونات الطبيعية: دقيق فاخر، زبدة حيوانية ممتازة، ولوز محلي مغربي خالص.",
      feature2Title: "تحضير يومي",
      feature2Desc: "مخبوزاتنا وطلبياتكم تُحضر طازجة من الفرن يومياً لضمان النكهة الرائعة والمثالية.",
      feature3Title: "حلويات للمناسبات",
      feature3Desc: "تصاميم كيك مخصصة، علب حلويات أنيقة للمآدب والمناسبات الرسمية والعائلية."
    },
    occasions: {
      title: "حلويات وكيكات لكل مناسبة",
      subtitle: "نصنع ذكرياتكم السعيدة بتفاصيل حلوة تحبس الأنفاس وترضي الأذواق الراقية",
      p1: "نحن في مخبزة جوهرة نفهم أهمية لحظاتكم السعيدة. لذا، صممنا قسماً خاصاً كلياً لاستقبال وتنسيق طلبيات مناسباتكم الكبرى والصغرى. من كيكة عيد الميلاد البسيطة إلىPieces Montées الفاخرة للأعراس وعقد القران والمؤتمرات.",
      p2: "كل تفصيل في الطلبيات الخاصة يتم الإشراف عليه بدقة متناهية: من حشوة الكعكة، الألوان المختارة، إلى علب التقديم الراقية لإبهار ضيوفكم.",
      service1: "أعياد الميلاد والمفاجآت",
      service2: "حفلات عقد القران",
      service3: "كيكات الأعراس الكبرى",
      service4: "المناسبات واللمّات العائلية",
      service5: "علب وتشكيلات الحلويات للضيوف",
      service6: "الطلبات والمشاريع الخاصة",
      ctaCustom: "اطلب تصميم حلويات مناسبتك"
    },
    gallery: {
      title: "من أجواء مخبزة جوهرة",
      subtitle: "معرض صور حي لطازج مخبوزاتنا وجلساتنا ومطبخنا الإبداعي بشيشاوة",
      all: "الكل",
      sweet: "حلويات",
      bread: "مخبوزات",
      cake: "كيكات المناسبات"
    },
    reviews: {
      title: "آراء زبنائنا الكرام",
      subtitle: "ثقة أهل شيشاوة وزوارها هي سر استمراريتنا ونجاحنا الباهر",
      metricsTitle: "تقييمات الأداء",
      food: "جودة المنتجات",
      service: "جودة الخدمة",
      atmosphere: "الأجواء والنظافة",
      scoreText: "درجة الرضا العام بناءً على تعليقات الزبناء الرسمية"
    },
    contact: {
      title: "زورونا في شيشاوة",
      subtitle: "نرحب بزيارتكم الكريمة للاستمتاع بمنتجاتنا أو استلام طلبياتكم",
      addressLabel: "العنوان وموقعنا",
      addressVal: "رمز الخريطة: G6JJ+Q23، شيشاوة، المغرب",
      phoneLabel: "الهاتف وواتساب مباشر",
      hoursLabel: "ساعات العمل والتوصيل",
      hoursVal: "يرجى التواصل معنا عبر الهاتف أو واتساب لتأكيد المواعيد وحجز الطلبيات",
      ctaWhatsapp: "تواصل معنا عبر واتساب",
      ctaFacebook: "تابعنا على فيسبوك",
      findUsTitle: "خريطتنا الجغرافية",
      facebookPageText: "مخبزة وحلويات جوهرة"
    },
    ctaSection: {
      title: "جاهزون لتحلية يومكم؟",
      subtitle: "اطلبوا الآن حلوياتكم المفضلة أو تواصلوا معنا لتحضير وتجهيز طلبات مناسباتكم الكبرى.",
      ctaWhatsapp: "اطلب الآن عبر واتساب",
      ctaContact: "موقعنا على الخريطة"
    },
    footer: {
      slogan: "الجودة، الإتقان، والذوق الرفيع — في قلب شيشاوة",
      copyright: "جميع الحقوق محفوظة © 2026 مخبزة وحلويات جوهرة. تصميم فاخر.",
      links: "روابط سريعة",
      address: "شيشاوة، المغرب"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Nos Produits",
      occasions: "Événements",
      gallery: "Galerie",
      reviews: "Avis Clients",
      contact: "Contact",
      order: "Commander Now"
    },
    hero: {
      title: "Boulangerie Jawhara",
      subtitle: "Un régal d'exception préparé chaque jour",
      description: "Pains d'artisans chauds, viennoiseries dorées, douceurs traditionnelles marocaines et gâteaux sur mesure pour magnifier tous vos moments privilégiés à Chichaoua.",
      descriptionFr: "Boulangerie & Pâtisserie artisanale à Chichaoua — pains frais, gâteaux et douceurs.",
      ctaWhatsapp: "Commander sur WhatsApp",
      ctaCollection: "Découvrir notre Carte",
      badgeElite: "Haute Pâtisserie",
      badgePhone: "Commande par Tél",
      badgeCity: "Au cœur de Chichaoua",
      badgeQuality: "Savoir-faire Royal"
    },
    categories: {
      title: "Nos Produits Vedettes",
      subtitle: "Découvrez notre gamme de douceurs et de pains croustillants façonnés à la main",
      ctaOrder: "Commander"
    },
    bestSellers: {
      title: "Les Incontournables",
      subtitle: "Nos meilleures ventes de la semaine plébiscitées par nos fidèles clients",
      ctaOrder: "Commander sur WhatsApp",
      from: "À partir de"
    },
    story: {
      title: "Qualité, Rigueur & Noblesse",
      subtitle: "La haute pâtisserie et la boulangerie traditionnelle à Chichaoua",
      paragraph1: "À la Boulangerie & Pâtisserie Jawhara, nous mettons un point d'honneur à allier l'héritage des saveurs marocaines d'exception avec la rigueur et la modernité de la pâtisserie française fine. Chaque ingrédient est sélectionné pour sa pureté absolue afin d'offrir à vos palais une harmonie mémorable.",
      paragraph2: "Que vous désiriez un pain rustique fraîchement sorti de notre four, de sublimes cornes de gazelle parfumées à la fleur d'oranger authentique, ou que vous souhaitiez concevoir la pièce montée de vos rêves, notre équipe de maîtres artisans met sa passion au service de toutes vos exigences.",
      feature1Title: "Ingrédients Nobles",
      feature1Desc: "Fleur d’oranger pure, beurre fin sélectionné, amandes marocaines locales d’une grande finesse.",
      feature2Title: "Pétri Frais Chaque Jour",
      feature2Desc: "Nos créations sont cuites et livrées chaudes chaque matin pour préserver croustillant et arômes.",
      feature3Title: "Événements d'Élite",
      feature3Desc: "Cocktails, buffets prestigieux, coffrets cadeaux élégants et services traiteur d'exception."
    },
    occasions: {
      title: "Vos Célébrations, nos Créations",
      subtitle: "Inscrivez vos moments magiques dans les mémoires grâce à des pièces architecturales gourmandes",
      p1: "Nous savons que chaque grand moment mérite une douceur spectaculaire. C'est pourquoi nous collaborons étroitement avec vous pour réaliser des chefs-d'œuvre sucrés sur mesure : gâteaux d'anniversaire personnalisés, fiançailles élégantes, baptêmes et grands mariages.",
      p2: "Sélection des textures, associations de saveurs uniques et packaging soigné : nous ne laissons aucune place au hasard pour éblouir et choyer vos invités.",
      service1: "Anniversaires & Surprises",
      service2: "Fiançailles et Hlel",
      service3: "Pièces Montées de Mariage",
      service4: "Réunions & Cafés d'Élite",
      service5: "Coffrets de Pâtisserie Prestige",
      service6: "Demandes & Traiteur Privé",
      ctaCustom: "Dessiner mon Gâteau sur Mesure"
    },
    gallery: {
      title: "Captures de notre Atelier",
      subtitle: "Un aperçu visuel de l'odeur du pain chaud, de nos gâteaux finis et du design de nos boîtes",
      all: "Tout",
      sweet: "Pâtisseries",
      bread: "Boulangerie",
      cake: "Gâteaux de Rêve"
    },
    reviews: {
      title: "Ce qu'en disent nos Clients",
      subtitle: "La satisfaction des foyers de Chichaoua et des voyageurs de passage",
      metricsTitle: "Nos Notes de Rigueur",
      food: "Qualité Gustative",
      service: "Accueil et Service",
      atmosphere: "Hygiène & Cadre",
      scoreText: "Niveau de recommandation issu des enquêtes de satisfaction officielles"
    },
    contact: {
      title: "Rendez-nous Visite",
      subtitle: "Venez nous rencontrer ou retirer vos commandes directement en magasin",
      addressLabel: "Adresse de l'Atelier",
      addressVal: "Code Maps : G6JJ+Q23, Chichaoua, Maroc",
      phoneLabel: "Ligne Directe / WhatsApp",
      hoursLabel: "Ouverture & Retraits",
      hoursVal: "Contactez-nous directement par téléphone ou WhatsApp pour réserver ou commander",
      ctaWhatsapp: "Nous écrire sur WhatsApp",
      ctaFacebook: "Nous suivre sur Facebook",
      findUsTitle: "Notre Localisation GPS",
      facebookPageText: "Boulangerie & Pâtisserie Jawhara"
    },
    ctaSection: {
      title: "Prêt à enchanter votre journée ?",
      subtitle: "Commandez dès maintenant vos douceurs préférées ou contactez notre chef pour planifier votre buffet.",
      ctaWhatsapp: "Commander via WhatsApp",
      ctaContact: "Trouver l'Adresse"
    },
    footer: {
      slogan: "L'art du bon goût, l'amour du travail bien fait à Chichaoua.",
      copyright: "Tous droits réservés © 2026 Boulangerie Jawhara. Design Prestige.",
      links: "Accès Rapide",
      address: "Chichaoua, Maroc"
    }
  }
};
