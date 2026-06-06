import React from "react";
import { Phone, Heart, Facebook } from "lucide-react";
import { translations } from "../data/translations";

interface FooterProps {
  language: "ar" | "fr";
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black text-[#A19A93]/75 py-16 border-t border-gold-accent/10 bg-artisan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gold-accent/10">
          {/* Column 1: Brand Info & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E6C47E] flex items-center justify-center border border-white/5 shadow-md">
                <span className="text-black font-extrabold text-xs font-sans">J</span>
              </div>
              <span className="font-bold text-lg text-[#FAF7F2] tracking-tight font-serif">
                {language === "ar" ? "مخبة وحلويات جوهرة" : "Boulangerie Jawhara"}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A19A93] font-sans font-light max-w-sm leading-relaxed pr-1">
              {t.footer.slogan}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.facebook.com/search/top?q=%D9%85%D8%AE%D8%A8%D8%B2%D8%A9%20%D9%85%D9%88%D8%A7%D9%84%20%D8%AD%D9%84%D9%88%D9%8ي%D8%A7%D8%AA%20%D8%AC%D9%88%D9%87%D8%B1%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-[#E6C47E] text-[#FAF7F2] hover:text-black border border-gold-accent/20 hover:border-[#E6C47E] transition-all duration-300 cursor-pointer text-center flex items-center justify-center shadow-lg"
                aria-label="Facebook link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212622212159"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-[#E6C47E] text-[#FAF7F2] hover:text-black border border-gold-accent/20 hover:border-[#E6C47E] transition-all duration-300 cursor-pointer text-center flex items-center justify-center shadow-lg"
                aria-label="WhatsApp / Phone link"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#E6C47E] tracking-widest uppercase font-sans">
              {t.footer.links}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home")}
                className="hover:text-[#E6C47E] transition-colors w-fit font-sans"
              >
                {t.nav.home}
              </a>
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, "#products")}
                className="hover:text-[#E6C47E] transition-colors w-fit font-sans"
              >
                {t.nav.products}
              </a>
              <a
                href="#occasions"
                onClick={(e) => handleLinkClick(e, "#occasions")}
                className="hover:text-[#E6C47E] transition-colors w-fit font-sans"
              >
                {t.nav.occasions}
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleLinkClick(e, "#gallery")}
                className="hover:text-[#E6C47E] transition-colors w-fit font-sans"
              >
                {t.nav.gallery}
              </a>
            </div>
          </div>

          {/* Column 3: Location Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#E6C47E] tracking-widest uppercase font-sans">
              {language === "ar" ? "المقر الرسمي" : "Atelier"}
            </h4>
            <p className="text-xs sm:text-sm text-[#A19A93] font-sans font-light leading-relaxed">
              {language === "ar" ? "حي شيشاوة المركزي، بجوار الشارع الرئيسي." : "Centre-ville de Chichaoua, Maroc."}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF7F2] font-bold leading-none select-all pt-1 font-mono tracking-wider">
              G6JJ+Q23, Chichaoua
            </p>
          </div>
        </div>

        {/* Bottom Credits copyright bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-light text-center md:text-start font-sans text-neutral-500">
            {t.footer.copyright}
          </p>

          <p className="flex items-center gap-1.5 font-sans font-light text-neutral-500">
            <span>Avec amour pour Chichaoua</span>
            <Heart className="w-3.5 h-3.5 text-[#E6C47E] fill-[#E6C47E]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
