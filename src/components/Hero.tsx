import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { BUSINESS, getGeneralWhatsappUrl } from "../data/business";
import { IMAGES } from "../data/products";
import { scrollToSection } from "../utils/scroll";

interface HeroProps {
  language: "ar" | "fr";
}

export default function Hero({ language }: HeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ratingScore = BUSINESS.reviewSummary.score;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      setScrollProgress(Math.min(scrolled / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-black pt-28 pb-10 overflow-hidden text-white border-b border-gold-accent/15 select-none"
    >
      {/* FULL-BLEED BREAD BACKGROUND IMAGE WITH OPTIMIZED HIGH-CLARITY OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: scrollProgress * 120 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={IMAGES.hero}
            alt={
              language === "ar"
                ? "خبز وحلويات مخبزة جوهرة في واجهة داكنة مضاءة"
                : "Fresh bakery display for Boulangerie Jawhara"
            }
            className="w-full h-full object-cover scale-105 opacity-80 filter brightness-[0.55] contrast-[1.12]"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        {/* Gradient mask: solid black at the extreme top/bottom edges for legible menu & footer, keeping the main center bright and crisp */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/90 z-10" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.72)_100%)] opacity-40 z-10" />

        {/* Blueprint fine subtle visual grids for premium branding feel */}
        <div className="absolute inset-0 opacity-[0.02] z-10 bg-artisan-pattern" />
      </div>

      {/* spacer to make it center perfectly vertically */}
      <div className="flex-grow flex items-center justify-center relative z-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Centered Rating Stars Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6 px-3.5 py-1 text-xs tracking-wider"
          >
            <div className="flex items-center gap-0.5 text-gold-accent mr-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const starValue = index + 1;
                if (ratingScore >= starValue) {
                  return <Star key={starValue} className="w-4 h-4 fill-gold-accent text-gold-accent" />;
                }
                if (ratingScore > index) {
                  return (
                    <span key={starValue} className="relative inline-block h-4 w-4 text-neutral-800">
                      <Star className="absolute left-0 top-0 h-4 w-4 fill-neutral-800 text-neutral-800" />
                      <span className="absolute left-0 top-0 h-4 w-1/2 overflow-hidden">
                        <Star className="h-4 w-4 fill-gold-accent text-gold-accent" />
                      </span>
                    </span>
                  );
                }
                return <Star key={starValue} className="w-4 h-4 fill-neutral-800 text-neutral-800" />;
              })}
            </div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#FAF7F2]/80 uppercase">
              {language === "ar"
                ? `${ratingScore.toFixed(1)} (${BUSINESS.reviewSummary.totalReviews} تقييم)`
                : `${ratingScore.toFixed(1)} (${BUSINESS.reviewSummary.totalReviews} AVIS)`}
            </span>
          </motion.div>

          {/* Centered Luxury Serif Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif text-white font-normal tracking-tight leading-[1.08] text-shadow-lg mb-6 max-w-3xl"
          >
            {language === "ar" ? (
              <span className="block italic text-[#FAF7F2] font-serif leading-snug drop-shadow-md">
                {BUSINESS.brand.ar}
                <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl text-[#E6C47E] font-normal tracking-normal">
                  فخامة الجودة والتميز
                </span>
              </span>
            ) : (
              <span className="block font-serif tracking-wide drop-shadow-md">
                Boulangerie Jawhara
                <span className="mt-3 block text-2xl sm:text-3xl md:text-4xl text-[#E6C47E] italic font-normal tracking-normal">
                  Artisanat & Tradition
                </span>
              </span>
            )}
          </motion.h1>

          {/* Centered Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light tracking-wide mb-10 text-[#FAF7F2]/80 px-2 text-shadow-lg"
          >
            {language === "ar"
              ? "منذ سنوات، نصنع بحبٍ وشغف طعم الخبز الحقيقي الأصيل والحلويات الفاخرة المحضرة بفرننا الحرفي بشيشاوة."
              : "Depuis des années, nous façonnons le goût du pain authentique et des douceurs raffinées à Chichaoua."}
          </motion.p>

          {/* Clear Side-by-Side Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            {/* Left Button: Rounded Solid Gold Button */}
            <a
              href={getGeneralWhatsappUrl(language)}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-3.5 px-8 py-3.5 bg-gold-accent hover:bg-white text-black font-sans text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-xl active:scale-95 cursor-pointer border border-gold-accent"
              aria-label={
                language === "ar"
                  ? "اطلب من مخبزة جوهرة عبر واتساب"
                  : "Order from Boulangerie Jawhara on WhatsApp"
              }
            >
              <span>{language === "ar" ? "اطلب عبر واتساب الآن" : "COMMANDER MAINTENANT"}</span>
            </a>

            {/* Right Button: Transparent Bordered Glass Button */}
            <button
              type="button"
              onClick={() => scrollToSection("#products")}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-3.5 border border-[#FAF7F2]/30 hover:border-gold-accent bg-transparent hover:bg-white/5 text-white hover:text-gold-accent font-sans text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              <span>{language === "ar" ? "تصفح قائمتنا" : "NOTRE CARTE"}</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* CENTERED SCROLL DOWN DEFILER INDICATOR */}
      <div className="w-full relative z-20 flex flex-col items-center justify-center pt-2 select-none">
        <span className="text-[9px] font-mono tracking-[0.25em] text-[#E6C47E]/60 uppercase mb-2">
          {language === "ar" ? "مرر للأسفل" : "DÉFILER"}
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-accent/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 40, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full bg-gold-accent h-3"
          />
        </div>
      </div>
    </section>
  );
}
