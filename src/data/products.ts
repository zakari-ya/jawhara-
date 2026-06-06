export interface Product {
  id: string;
  name: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  price: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  title: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  image: string;
}

const heroImage = new URL("../assets/images/hero_bakery_1780698244565.png", import.meta.url).href;
const moroccanSweetsImage = new URL("../assets/images/moroccan_sweets_1780698261939.png", import.meta.url).href;
const celebrationCakeImage = new URL("../assets/images/celebration_cake_1780698277169.png", import.meta.url).href;
const viennoiserieBreadImage = new URL("../assets/images/viennoiserie_bread_1780698293101.png", import.meta.url).href;

// Custom assets loaded through Vite so production builds emit them correctly.
export const IMAGES = {
  hero: heroImage,
  moroccanSweets: moroccanSweetsImage,
  celebrationCake: celebrationCakeImage,
  viennoiserieBread: viennoiserieBreadImage
};

export const categories: Category[] = [
  {
    id: "moroccan-sweets",
    title: {
      ar: "حلويات مغربية",
      fr: "Pâtisserie Marocaine"
    },
    description: {
      ar: "حلويات أصيلة من كعب الغزال، الغريبة، البريوات بنكهة ماء الزهر اللوز البلدي.",
      fr: "Authentiques douceurs marocaines : Corne de gazelle, Ghriba, Briouates parfumées à la fleur d'oranger."
    },
    image: IMAGES.moroccanSweets
  },
  {
    id: "viennoiserie-bread",
    title: {
      ar: "الخبز اليومي والكرواسون",
      fr: "Boulangerie & Viennoiserie"
    },
    description: {
      ar: "خبز فرنسي ومغربي طازج، كرواسون ذهبي مقرمش محضر بالزبدة الممتازة صباح كل يوم.",
      fr: "Pains artisanaux et viennoiseries d'un doré croustillant, pétris au beurre fin chaque matin."
    },
    image: IMAGES.viennoiserieBread
  },
  {
    id: "celebration-cakes",
    title: {
      ar: "كيكات المناسبات والأعراس",
      fr: "Pièces Montées & Gâteaux"
    },
    description: {
      ar: "كيكات فاخرة مصممة خصيصاً لأفراحكم وعقد القران وأعياد الميلاد بلمسة فنية مذهلة.",
      fr: "Gâteaux d'exception sur mesure pour vos mariages, fiançailles et anniversaires."
    },
    image: IMAGES.celebrationCake
  },
  {
    id: "modern-sweets",
    title: {
      ar: "حلويات عصرية",
      fr: "Pâtisserie Fine"
    },
    description: {
      ar: "طورطات فرنسية راقية، ميلفوي، وحلويات الكريمة المخفوقة والشوكولاتة الفاخرة.",
      fr: "Entremets fins, mille-feuilles, tartes croustillantes et chocolats belges d'exception."
    },
    image: IMAGES.hero // reuse hero beautiful display
  }
];

export const bestSellers: Product[] = [
  {
    id: "bs-1",
    name: {
      ar: "كرواسون جوهرة الذهبي",
      fr: "Croissant d'Or Jawhara"
    },
    description: {
      ar: "كرواسون فرنسي هش ومقرمش، محضر بزبدة حيوانية نقية 100% وطبقات مورقة مثالية.",
      fr: "Croissant pur beurre, croustillant à l’extérieur et incroyablement fondant à l'intérieur."
    },
    price: "8 DH",
    image: IMAGES.viennoiserieBread,
    category: "viennoiserie-bread"
  },
  {
    id: "bs-2",
    name: {
      ar: "كعب الغزال الملكي",
      fr: "Corne de Gazelle Royale"
    },
    description: {
      ar: "عجين رقيق جداً محشو باللوز البلدي الفاخر ومعطر بماء الزهر الحر المقطر.",
      fr: "Pâte fine et fondante à l'amande locale noble, parfumée à l'eau de fleur d'oranger distillée."
    },
    price: "150 DH / kg",
    image: IMAGES.moroccanSweets,
    category: "moroccan-sweets"
  },
  {
    id: "bs-3",
    name: {
      ar: "كيك الملكة للمناسبات",
      fr: "Entremet Signature Célébration"
    },
    description: {
      ar: "طورطة فاخرة متعددة الطبقات بنكهة الكراميل المملح والشوكولاتة البلجيكية الراقية.",
      fr: "Gâteau multi-couches au caramel beurre salé et mousse au chocolat belge d'exception."
    },
    price: "220 DH",
    image: IMAGES.celebrationCake,
    category: "celebration-cakes"
  },
  {
    id: "bs-4",
    name: {
      ar: "طبق الغريبة والبريوات المشكلة",
      fr: "Assortiment Traditionnel"
    },
    description: {
      ar: "تشكيلة راقية من غريبة اللوز، والبريوات بالعسل الحر، والحلويات المغربية الأصيلة.",
      fr: "Plateau d'honneur composé de Ghriba, Briouates au miel pur et douceurs artisanales."
    },
    price: "140 DH / kg",
    image: IMAGES.moroccanSweets,
    category: "moroccan-sweets"
  },
  {
    id: "bs-5",
    name: {
      ar: "كعكة أعياد الميلاد المخصصة",
      fr: "Naked Cake Anniversaire"
    },
    description: {
      ar: "صمم الكيك الخاص بك باختيار النكهة وحجم الطبقات وكتابة الاسم مجاناً.",
      fr: "Conception de gâteau personnalisé avec le parfum, le design et le prénom de votre choix."
    },
    price: "180 DH",
    image: IMAGES.celebrationCake,
    category: "celebration-cakes"
  },
  {
    id: "bs-6",
    name: {
      ar: "مملحات وفاخرة الباريسي",
      fr: "Assortiment Salé Prestige"
    },
    description: {
      ar: "تشكيلة يومية من المملحات الفاخرة، البيتزا الصغيرة، الكيش، والفطائر المورقة الساخنة.",
      fr: "Mini-quiches, pizzas fines et feuilletés chauds pour vos buffets et soirées."
    },
    price: "120 DH / kg",
    image: IMAGES.viennoiserieBread,
    category: "viennoiserie-bread"
  }
];
