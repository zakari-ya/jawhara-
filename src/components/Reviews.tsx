import { motion } from "motion/react";
import { Star, MessageSquareCode, BadgeCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { reviews, bakeryRating } from "../data/reviews";
import { translations } from "../data/translations";

interface ReviewsProps {
  language: "ar" | "fr";
}

export default function Reviews({ language }: ReviewsProps) {
  const t = translations[language];

  // Helper to render rating star loops
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
       if (i < fullStars) {
         stars.push(<Star key={i} className="w-4 h-4 fill-[#E6C47E] text-[#E6C47E]" />);
       } else if (i === fullStars && hasHalf) {
         stars.push(
           <div key={i} className="relative inline-block w-4 h-4 text-neutral-800">
             <Star className="absolute top-0 left-0 w-4 h-4 text-neutral-800" />
             <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
               <Star className="w-4 h-4 fill-[#E6C47E] text-[#E6C47E]" />
             </div>
           </div>
         );
       } else {
         stars.push(<Star key={i} className="w-4 h-4 text-neutral-800 fill-neutral-905" />);
       }
    }
    return stars;
  };

  return (
    <section id="reviews" className="py-24 bg-[#060606] relative border-b border-gold-accent/10 bg-artisan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
          badge={language === "ar" ? "ثكة الزبناء الكرام" : "Témoignages Clients"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left Column: Overall scorecard rating container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-[#0C0C0C]/95 backdrop-blur-md border border-gold-accent/15 p-8 rounded-none text-center shadow-2xl flex flex-col items-center justify-center lg:sticky lg:top-28"
          >
            <div className="w-12 h-12 rounded-none bg-gold-accent/5 flex items-center justify-center text-[#E6C47E] mb-4 border border-gold-accent/20">
              <MessageSquareCode className="w-5 h-5 animate-pulse" />
            </div>

            <h3 className="text-[10px] font-bold text-[#E6C47E]/60 uppercase tracking-widest font-sans mb-2">
              {t.reviews.metricsTitle}
            </h3>

            <div className="my-3 flex items-baseline gap-2">
              <span className="text-5xl font-black text-[#FAF7F2] tracking-tight font-serif">
                {bakeryRating.score}
              </span>
              <span className="text-neutral-500 text-lg font-medium">/ 5</span>
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              {renderStars(bakeryRating.score)}
            </div>

            <p className="text-[11px] text-[#A19A93] mb-8 font-sans font-medium tracking-wide">
              {language === "ar"
                ? `بناءً على ${bakeryRating.totalReviews} تقييم حقيقي على جوجل`
                : `Basé sur ${bakeryRating.totalReviews} avis réels Google Maps`}
            </p>

            {/* Performance breakdown indicators standard */}
            <div className="w-full space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5 text-[#FAF7F2] font-sans uppercase tracking-widest">
                  <span>{t.reviews.food}</span>
                  <span>5.0 / 5</span>
                </div>
                <div className="h-[3px] w-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-[#E6C47E]" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5 text-[#FAF7F2] font-sans uppercase tracking-widest">
                  <span>{t.reviews.service}</span>
                  <span>4.8 / 5</span>
                </div>
                <div className="h-[3px] w-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-[#E6C47E]" style={{ width: "96%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5 text-[#FAF7F2] font-sans uppercase tracking-widest">
                  <span>{t.reviews.atmosphere}</span>
                  <span>4.6 / 5</span>
                </div>
                <div className="h-[3px] w-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-[#E6C47E]" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Individual true feedback comments cards */}
          <div className="lg:col-span-8 space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0C0C0C]/80 border border-gold-accent/10 p-6 rounded-none shadow-2xl flex flex-col justify-between hover:border-gold-accent/35 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-gold-accent/10">
                    <div className="flex items-center gap-3">
                      {/* Custom Avatars representing the names in a geometric manner */}
                      <div className="w-10 h-10 rounded-none bg-neutral-950 border border-gold-accent/15 text-[#E6C47E] font-black text-sm flex items-center justify-center uppercase font-sans">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#FAF7F2] flex items-center gap-1.5 font-serif">
                          <span>{review.name}</span>
                          <span className="text-[#E6C47E]" title="Avis local vérifié">
                            <BadgeCheck className="w-4 h-4 fill-black text-[#E6C47E]" />
                          </span>
                        </h4>
                        <span className="text-[10px] text-chocolate-dark block font-sans">
                          {review.date[language]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A19A93] leading-relaxed font-serif italic pr-1">
                    "{review.comment[language]}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
