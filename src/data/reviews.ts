export interface Review {
  id: string;
  name: string;
  rating: number;
  date: {
    ar: string;
    fr: string;
  };
  comment: {
    ar: string;
    fr: string;
  };
  metrics?: {
    food: number;
    service: number;
    atmosphere: number;
  };
}

export const bakeryRating = {
  score: BUSINESS.reviewSummary.score,
  totalReviews: BUSINESS.reviewSummary.totalReviews,
  stars: 5
};

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Faouzia Ait mbarek",
    rating: 5,
    date: {
      ar: "منذ شهر",
      fr: "Il y a un mois"
    },
    comment: {
      ar: "مخبزة رائعة جداً! جودة المخبوزات والحلويات ممتازة، والخدمة في غاية اللطف والمهنية. الأجواء دافئة ومثالية.",
      fr: "Une excellente boulangerie ! La qualité de la viennoiserie et des gâteaux est superbe. Très bon accueil et service impeccable."
    },
    metrics: {
      food: 5,
      service: 5,
      atmosphere: 5
    }
  },
  {
    id: "rev-2",
    name: "pryce lloyd",
    rating: 4.5,
    date: {
      ar: "منذ ٣ أشهر",
      fr: "Il y a 3 mois"
    },
    comment: {
      ar: "أعجبتني المنتجات والمأكولات لديهم بشكل كبير، الخبز طازج والحلويات المغربية شهية جداً ومحضرة بإتقان.",
      fr: "I like the food very much, especially the fresh bread and the traditional pastries. They taste authentic."
    },
    metrics: {
      food: 5,
      service: 4,
      atmosphere: 4
    }
  }
];
import { BUSINESS } from "./business";
