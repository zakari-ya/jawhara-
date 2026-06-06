import { useState, useEffect } from "react";
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

export default function App() {
  // Default to Arabic since the local target audience in Chichaoua, Morocco is prominent
  const [language, setLanguage] = useState<"ar" | "fr">("ar");

  // Keep HTML root attributes in sync with current language selection
  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.dir = "rtl";
      root.lang = "ar";
    } else {
      root.dir = "ltr";
      root.lang = "fr";
    }
    // Set standard artisan font styling
    root.style.fontFamily = '"Amiri", "Playfair Display", serif';
  }, [language]);

  return (
    <div className="min-h-screen bg-black text-[#FAF7F2] selection:bg-gold-accent/30 selection:text-[#FAF7F2] font-serif antialiased overflow-x-hidden">
      {/* Premium Sticky Navigation */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Main Structural Section Stream */}
      <main>
        {/* 1. Cinematic Hero Intro Banner */}
        <Hero language={language} />

        {/* 2. Distinct Handcrafted Product Series */}
        <Categories language={language} />

        {/* 3. Top-selling item showcase menu */}
        <BestSellers language={language} />

        {/* 4. Brand narrative, heritage and benefit features */}
        <Story language={language} />

        {/* 5. Custom event booking & Wedding cakes overview */}
        <Occasions language={language} />

        {/* 6. Filterable image gallery masonry preview */}
        <Gallery language={language} />

        {/* 7. Testimonials block showcasing genuine feedback */}
        <Reviews language={language} />

        {/* 8. Opening times, lines, maps directions and socials */}
        <Contact language={language} />

        {/* 9. Direct highlighted bottom conversion prompt */}
        <CtaSection language={language} />
      </main>

      {/* 10. Bottom informative Brand Footer */}
      <Footer language={language} />
    </div>
  );
}
