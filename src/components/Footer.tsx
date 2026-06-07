import type { MouseEvent } from "react";
import { Phone, Heart, Facebook } from "lucide-react";
import { BUSINESS, getGeneralWhatsappUrl } from "../data/business";
import { translations } from "../data/translations";
import { LegalView } from "./LegalModal";
import { scrollToSection } from "../utils/scroll";

interface FooterProps {
  language: "ar" | "fr";
  onOpenLegal: (view: LegalView) => void;
}

export default function Footer({ language, onOpenLegal }: FooterProps) {
  const t = translations[language];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="bg-black text-[#A19A93]/75 py-16 border-t border-gold-accent/10 bg-artisan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gold-accent/10">
          {/* Column 1: Brand Info & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-gold-accent/35 bg-black shadow-md">
                <img
                  src={BUSINESS.logoUrl}
                  alt={
                    language === "ar"
                      ? "شعار مخبزة جوهرة"
                      : "Boulangerie Jawhara logo"
                  }
                  className="h-full w-full object-cover scale-[1.08]"
                  width="40"
                  height="40"
                />
              </div>
              <span className="font-bold text-lg text-[#FAF7F2] tracking-tight font-serif">
                {BUSINESS.brand[language]}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A19A93] font-sans font-light max-w-sm leading-relaxed pr-1">
              {t.footer.slogan}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-[#E6C47E] text-[#FAF7F2] hover:text-black border border-gold-accent/20 hover:border-[#E6C47E] transition-all duration-300 cursor-pointer text-center flex items-center justify-center shadow-lg"
                aria-label={
                  language === "ar"
                    ? "افتح صفحة مخبزة جوهرة على فيسبوك"
                    : "Open Boulangerie Jawhara on Facebook"
                }
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getGeneralWhatsappUrl(language)}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-neutral-900 hover:bg-[#E6C47E] text-[#FAF7F2] hover:text-black border border-gold-accent/20 hover:border-[#E6C47E] transition-all duration-300 cursor-pointer text-center flex items-center justify-center shadow-lg"
                aria-label={
                  language === "ar"
                    ? "تواصل مع مخبزة جوهرة عبر واتساب"
                    : "Contact Boulangerie Jawhara on WhatsApp"
                }
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
              {BUSINESS.address[language]}
            </p>
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit text-xs sm:text-sm text-[#FAF7F2] hover:text-[#E6C47E] font-bold leading-none pt-1 font-mono tracking-wider transition-colors"
            >
              {BUSINESS.mapDisplay[language]}
            </a>
            <div className="pt-4">
              <h4 className="mb-3 text-xs font-bold text-[#E6C47E] tracking-widest uppercase font-sans">
                {t.footer.legal}
              </h4>
              <div className="flex flex-col items-start gap-2 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onOpenLegal("privacy")}
                  className="min-h-[44px] font-sans text-start transition-colors hover:text-[#E6C47E]"
                >
                  {t.footer.privacy}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenLegal("terms")}
                  className="min-h-[44px] font-sans text-start transition-colors hover:text-[#E6C47E]"
                >
                  {t.footer.terms}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits copyright bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-light text-center md:text-start font-sans text-neutral-500">
            {t.footer.copyright}
          </p>

          <p className="flex items-center gap-1.5 font-sans font-light text-neutral-500">
            <span>{t.footer.closing}</span>
            <Heart className="w-3.5 h-3.5 text-[#E6C47E] fill-[#E6C47E]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
