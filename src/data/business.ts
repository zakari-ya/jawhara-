export const BUSINESS = {
  brand: {
    ar: "مخبزة وحلويات جوهرة",
    fr: "Boulangerie & Pâtisserie Jawhara",
  },
  phoneDisplay: "0622212159",
  whatsappNumber: "212622212159",
  mapCode: "G6JJ+Q23",
  address: {
    ar: "رمز الخريطة: G6JJ+Q23، شيشاوة، المغرب",
    fr: "Code Maps : G6JJ+Q23, Chichaoua, Maroc",
  },
  mapUrl: "https://maps.google.com/?q=G6JJ+Q23,Chichaoua,Morocco",
  facebookUrl:
    "https://web.facebook.com/p/%D9%85%D8%AE%D8%A8%D8%B2%D8%A9-%D9%88%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA-%D8%AC%D9%88%D9%87%D8%B1%D8%A9-61577146906275/?_rdc=1&_rdr",
  reviewSummary: {
    score: 4.5,
    totalReviews: 12,
  },
} as const;

export function getWhatsappUrl(message?: string) {
  const baseUrl = `https://wa.me/${BUSINESS.whatsappNumber}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
