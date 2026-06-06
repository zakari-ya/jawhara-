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
          {/* Logo stamp symbol icon */}
          <div className="w-10 h-10 rounded-full bg-[#E6C47E]/5 flex items-center justify-center border border-gold-accent/20 text-[#E6C47E] mb-6 rotate-12">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
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
