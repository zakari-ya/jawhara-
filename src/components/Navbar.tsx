import { Fragment, useState, useEffect, type MouseEvent } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getWhatsappUrl } from "../data/business";
import { translations } from "../data/translations";
import { scrollToSection } from "../utils/scroll";

interface NavbarProps {
  language: "ar" | "fr";
  setLanguage: (lang: "ar" | "fr") => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "ar" ? "fr" : "ar";
    setLanguage(newLang);
  };

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.occasions, href: "#occasions" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#000000]/85 backdrop-blur-md shadow-lg border-gold-accent/15 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group"
            >
              {/* Visual symbol - sleek premium gold wheat brand ring */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-accent/20 to-gold-accent/5 flex items-center justify-center border border-gold-accent/30 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-gold-accent fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-sm md:text-base font-black tracking-widest flex items-baseline font-sans text-espresso">
                  <span className="text-gold-accent tracking-tighter">JAWHARA</span>
                  <span className="mx-1.5 text-[8px] opacity-40">•</span>
                  <span className="text-[10px] font-medium tracking-normal opacity-80">جوهرة</span>
                </div>
                <span className="text-[8px] font-bold text-chocolate-dark tracking-widest uppercase -mt-0.5">
                  {language === "ar" ? "شيشاوة • مخبزة وحلويات فاخرة" : "FINE ATELIER • CHICHAOUA"}
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Centered dot list perfectly organized */}
            <nav className="hidden lg:flex items-center gap-1.5 px-6 py-2 rounded-full border border-gold-accent/10 bg-white/5 backdrop-blur-sm shadow-inner">
              {navItems.map((item, idx) => (
                <Fragment key={item.href}>
                  {idx > 0 && <span className="text-[10px] text-gold-accent/20 mx-1 select-none">•</span>}
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-espresso/70 hover:text-gold-accent text-[11px] font-semibold uppercase tracking-widest font-sans transition-all duration-200 rounded-sm"
                  >
                    {item.name}
                  </a>
                </Fragment>
              ))}
            </nav>

            {/* Language Switcher and CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Dynamic language link style resembling "Current Customer?" */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="min-h-[44px] text-chocolate-dark hover:text-gold-accent text-xs font-medium font-sans tracking-wide transition-colors cursor-pointer"
              >
                {language === "ar" ? (
                  <span>En Français? <span className="text-gold-accent">→</span></span>
                ) : (
                  <span>العربية؟ <span className="text-gold-accent">→</span></span>
                )}
              </button>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[44px] items-center gap-2 bg-[#E6C47E] hover:bg-white text-[#000000] px-5 py-2 text-[11px] font-bold font-sans uppercase tracking-[0.16em] rounded-full transition-all shadow-md duration-300"
              >
                <span>{t.nav.order}</span>
                <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-black group-hover:translate-x-1.5 transition-transform duration-300">
                  <svg className="w-3 h-3 stroke-black fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Actions: Language Toggler & Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 px-2.5 py-1 border border-gold-accent/20 bg-white/5 text-[10px] font-bold text-espresso tracking-wider uppercase transition-colors"
                aria-label="Toggle language"
              >
                <span>{language === "ar" ? "FR" : "AR"}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="min-h-[44px] min-w-[44px] p-2 border border-gold-accent/20 bg-[#090909] text-espresso hover:bg-[#151515] transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            />
            <motion.div
              id="mobile-navigation"
              initial={{ x: language === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: language === "ar" ? "100%" : "-100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className={`fixed top-0 bottom-0 ${
                language === "ar" ? "right-0" : "left-0"
              } w-[80%] max-w-[320px] bg-gold-cream z-50 p-6 shadow-2xl flex flex-col justify-between border-y border-gold-accent/20 lg:hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-accent/20">
                  <div className="flex flex-col">
                    <span className="font-bold text-base font-serif text-espresso">
                      {language === "ar" ? "جوهرة" : "JAWHARA"}
                    </span>
                    <span className="text-[9px] text-gold-accent font-semibold uppercase tracking-wider">
                      {language === "ar" ? "شيشاوة • مخبزة وحلويات" : "Artisan Bakery"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="min-h-[44px] min-w-[44px] p-1.5 border border-gold-accent/20 flex items-center justify-center"
                    aria-label={language === "ar" ? "إغلاق القائمة" : "Fermer le menu"}
                  >
                    <X className="w-4 h-4 text-espresso" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="flex min-h-[44px] items-center justify-between py-3 px-4 text-espresso hover:text-gold-accent hover:bg-gold-accent/5 font-semibold text-xs tracking-widest uppercase transition-all"
                    >
                      <span>{item.name}</span>
                      <ChevronRight className={`w-3.5 h-3.5 text-gold-accent/40 ${language === "ar" ? "rotate-180" : ""}`} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gold-accent/20 flex flex-col gap-3">
                <p className="text-[10px] tracking-wider text-espresso/60 italic text-center font-serif leading-relaxed">
                  {language === "ar"
                    ? "الجودة، الإتقان، والذوق الرفيع"
                    : "L'art de la pâtisserie d'excellence."}
                </p>

                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 w-full py-3.5 bg-espresso text-gold-cream font-bold text-xs tracking-widest uppercase rounded-none hover:bg-gold-accent hover:text-espresso transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-accent" />
                  <span>{t.nav.order}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
