import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, CookingPot } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";
import { IMAGES } from "../data/products";

interface GalleryProps {
  language: "ar" | "fr";
}

export default function Gallery({ language }: GalleryProps) {
  const [filter, setFilter] = useState<"all" | "sweet" | "bread" | "cake">("all");
  const t = translations[language];

  // Collection of our custom high-end gallery files
  const galleryItems = [
    {
      id: "g1",
      src: IMAGES.moroccanSweets,
      category: "sweet",
      title: { ar: "كعب الغزال والبريوات الراقية", fr: "Cornes de Gazelle & Briouates" }
    },
    {
      id: "g2",
      src: IMAGES.viennoiserieBread,
      category: "bread",
      title: { ar: "الكرواسون والخبز اليومي", fr: "Croissants & Pains d'Artisan" }
    },
    {
      id: "g3",
      src: IMAGES.celebrationCake,
      category: "cake",
      title: { ar: "كعكة الزفاف الكبرى الذهبية", fr: "Grande Pièce Montée Royale" }
    },
    {
      id: "g4",
      src: IMAGES.hero,
      category: "sweet",
      title: { ar: "عرض الحلويات والمعرض العصري", fr: "Vitrine de Pâtisseries Fines" }
    },
    {
      id: "g5",
      src: IMAGES.moroccanSweets,
      category: "sweet",
      title: { ar: "تشكيلة الغريبة المغربية الفاخرة", fr: "Plateau d'Assortiments Ghriba" }
    },
    {
      id: "g6",
      src: IMAGES.viennoiserieBread,
      category: "bread",
      title: { ar: "الخبز البلدي الساخن", fr: "Khobz Traditionnel au Blé" }
    }
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#030303] overflow-hidden border-b border-gold-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          badge={language === "ar" ? "ألبوم المخبزة" : "Galerie Photos"}
        />

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans duration-300 ${
              filter === "all"
                ? "bg-[#E6C47E] text-black border border-[#E6C47E]"
                : "bg-black text-[#FAF7F2] hover:bg-white/5 border border-gold-accent/15 hover:border-[#E6C47E]"
            }`}
          >
            {t.gallery.all}
          </button>
          <button
            onClick={() => setFilter("sweet")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans duration-300 ${
              filter === "sweet"
                ? "bg-[#E6C47E] text-black border border-[#E6C47E]"
                : "bg-black text-[#FAF7F2] hover:bg-white/5 border border-gold-accent/15 hover:border-[#E6C47E]"
            }`}
          >
            {t.gallery.sweet}
          </button>
          <button
            onClick={() => setFilter("bread")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans duration-300 ${
              filter === "bread"
                ? "bg-[#E6C47E] text-black border border-[#E6C47E]"
                : "bg-black text-[#FAF7F2] hover:bg-white/5 border border-gold-accent/15 hover:border-[#E6C47E]"
            }`}
          >
            {t.gallery.bread}
          </button>
          <button
            onClick={() => setFilter("cake")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer font-sans duration-300 ${
              filter === "cake"
                ? "bg-[#E6C47E] text-black border border-[#E6C47E]"
                : "bg-black text-[#FAF7F2] hover:bg-white/5 border border-gold-accent/15 hover:border-[#E6C47E]"
            }`}
          >
            {t.gallery.cake}
          </button>
        </div>

        {/* Responsive Gallery Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const label = item.title[language];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square rounded-none overflow-hidden bg-neutral-950 border border-gold-accent/10 hover:border-[#E6C47E]/30 transition-colors"
                >
                  <img
                    src={item.src}
                    alt={label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Absolute Zoom overlay cover on hover */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 select-none">
                    <motion.div
                      initial={{ y: 15 }}
                      whileInView={{ y: 0 }}
                      className="flex flex-col items-start gap-2"
                    >
                      <span className="p-2.5 rounded-full bg-[#E6C47E] text-black shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                      <h4 className="text-[#FAF7F2] text-base font-bold font-serif leading-snug tracking-tight">
                        {label}
                      </h4>
                      <p className="text-xs text-[#E6C47E] font-semibold tracking-widest uppercase font-sans">
                        {item.category === "sweet" ? t.gallery.sweet : item.category === "bread" ? t.gallery.bread : t.gallery.cake}
                      </p>
                    </motion.div>
                  </div>

                  {/* Light overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
