import { motion } from "motion/react";
import { MessageCircle, MapPin } from "lucide-react";
import { BUSINESS, getGeneralWhatsappUrl } from "../data/business";
import { translations } from "../data/translations";

interface CtaSectionProps {
  language: "ar" | "fr";
}

export default function CtaSection({ language }: CtaSectionProps) {
  const t = translations[language];

  return (
    <section className="py-20 bg-[#030303] overflow-hidden relative text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] to-[#010101]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gold-accent/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 md:p-16 rounded-none border border-gold-accent/15 bg-[#0C0C0C]/90 backdrop-blur-md shadow-2xl flex flex-col items-center"
        >
          <div className="mb-6 h-14 w-14 overflow-hidden rounded-full border border-gold-accent/35 bg-black shadow-md">
            <img
              src={BUSINESS.logoUrl}
              alt={
                language === "ar"
                  ? "شعار مخبزة جوهرة"
                  : "Boulangerie Jawhara logo"
              }
              className="h-full w-full object-cover scale-[1.08]"
              width="56"
              height="56"
            />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] mb-4 tracking-tight font-serif leading-snug">
            {t.ctaSection.title}
          </h3>

          <p className="text-chocolate-dark text-sm sm:text-base leading-relaxed max-w-2xl px-2 mb-10 font-sans font-light">
            {t.ctaSection.subtitle}
          </p>

          {/* Buttons double bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg">
            <a
              href={getGeneralWhatsappUrl(language)}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-3 w-full py-4 rounded-full bg-[#E6C47E] hover:bg-white text-black font-extrabold text-xs tracking-widest uppercase shadow-lg hover:shadow-[#E6C47E]/10 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>{t.ctaSection.ctaWhatsapp}</span>
            </a>

            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 w-full py-4 rounded-full border border-gold-accent/25 hover:border-[#E6C47E] bg-white/5 hover:bg-white/10 text-[#E6C47E] font-extrabold text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#E6C47E]" />
              <span>{t.ctaSection.ctaContact}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
