import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { categories } from "../data/products";
import { translations } from "../data/translations";

interface CategoriesProps {
  language: "ar" | "fr";
}

export default function Categories({ language }: CategoriesProps) {
  const t = translations[language];

  const handleCategoryOrder = (categoryName: string) => {
    const textMsg = encodeURIComponent(
      language === "ar"
        ? `مرحباً مخبزة جوهرة، أريد الاستفسار عن حجز طلبيات من فئة: ${categoryName}`
        : `Bonjour Boulangerie Jawhara, je souhaite me renseigner sur les commandes de la catégorie : ${categoryName}`
    );
    window.open(`https://wa.me/212622212159?text=${textMsg}`, "_blank");
  };

  return (
    <section id="products" className="py-24 border-y border-gold-accent/10 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.categories.title}
          subtitle={t.categories.subtitle}
          badge={t.hero.badgeElite}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const titleText = category.title[language];
            const descText = category.description[language];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-[#0B0B0B]/90 backdrop-blur-md rounded-none overflow-hidden border border-gold-accent/10 hover:border-gold-accent/40 transition-all duration-300"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={category.image}
                    alt={titleText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

                  {/* Absolute category code marker in gold */}
                  <div className={`absolute top-4 ${language === "ar" ? "right-4" : "left-4"} z-10 rounded-none bg-[#E6C47E] text-[9px] font-bold text-black px-3 py-1 uppercase tracking-widest font-sans`}>
                    {category.id.replace("-", " ")}
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#FAF7F2] group-hover:text-[#E6C47E] transition-colors mb-3 leading-tight font-serif">
                      {titleText}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A19A93] line-clamp-3 leading-relaxed mb-6 font-sans">
                      {descText}
                    </p>
                  </div>

                  {/* CTA Area */}
                  <button
                    onClick={() => handleCategoryOrder(titleText)}
                    className="group/btn flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#E6C47E] hover:text-[#FAF7F2] w-full pt-4 border-t border-gold-accent/10 transition-colors"
                  >
                    <span>{t.categories.ctaOrder}</span>
                    {language === "ar" ? (
                      <ArrowLeft className="w-3.5 h-3.5 transform group-hover/btn:-translate-x-1.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Bottom decorative golden sliver */}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E6C47E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
