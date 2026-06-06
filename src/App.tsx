import { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import Story from "./components/Story";
import Occasions from "./components/Occasions";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import LegalModal, { LegalView } from "./components/LegalModal";

export default function App() {
  const [language, setLanguage] = useState<"ar" | "fr">("ar");
  const [legalView, setLegalView] = useState<LegalView | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.dir = "rtl";
      root.lang = "ar";
    } else {
      root.dir = "ltr";
      root.lang = "fr";
    }
    root.style.fontFamily = '"Amiri", "Playfair Display", serif';
  }, [language]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-[#FAF7F2] selection:bg-gold-accent/30 selection:text-[#FAF7F2] font-serif antialiased overflow-x-hidden">
        <Navbar language={language} setLanguage={setLanguage} />

        <main>
          <Hero language={language} />
          <Categories language={language} />
          <BestSellers language={language} />
          <Story language={language} />
          <Occasions language={language} />
          <Gallery language={language} />
          <Reviews language={language} />
          <Contact language={language} />
          <CtaSection language={language} />
        </main>

        <Footer language={language} onOpenLegal={setLegalView} />
        <LegalModal
          language={language}
          view={legalView}
          onClose={() => setLegalView(null)}
        />
      </div>
    </MotionConfig>
  );
}
