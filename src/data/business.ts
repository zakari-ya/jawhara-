export const BUSINESS = {
  brand: {
    ar: "مخبزة وحلويات جوهرة",
    fr: "Boulangerie & Pâtisserie Jawhara",
  },
  logoUrl: "/logo-jawhara.png",
  phoneDisplay: "0622212159",
  whatsappNumber: "212622212159",
  mapDisplay: {
    ar: "الموقع على خرائط جوجل",
    fr: "Localisation Google Maps",
  },
  address: {
    ar: "الموقع الجديد على خرائط جوجل، شيشاوة، المغرب",
    fr: "Nouvelle localisation Google Maps, Chichaoua, Maroc",
  },
  mapUrl: "https://maps.app.goo.gl/v61Cm3Jo1FGhN3ce6",
  facebookUrl:
    "https://web.facebook.com/p/%D9%85%D8%AE%D8%A8%D8%B2%D8%A9-%D9%88%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA-%D8%AC%D9%88%D9%87%D8%B1%D8%A9-61577146906275/?_rdc=1&_rdr",
  reviewSummary: {
    score: 4.5,
    totalReviews: 12,
  },
} as const;

export type SiteLanguage = "ar" | "fr";

export const WHATSAPP_MESSAGES = {
  general: {
    ar: "السلام عليكم مخبزة جوهرة، أريد الاستفسار عن منتجاتكم أو تقديم طلب. هل يمكنكم مساعدتي بالأنواع المتوفرة والأسعار؟",
    fr: "Bonjour Boulangerie Jawhara, je souhaite me renseigner sur vos produits ou passer une commande. Pouvez-vous m'aider avec les disponibilités et les prix ?",
  },
} as const;

export function getWhatsappUrl(message?: string) {
  const baseUrl = `https://wa.me/${BUSINESS.whatsappNumber}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

export function getGeneralWhatsappUrl(language: SiteLanguage) {
  return getWhatsappUrl(WHATSAPP_MESSAGES.general[language]);
}
