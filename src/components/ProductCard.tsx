import { motion } from "motion/react";
import { MessageSquare, BadgeCheck } from "lucide-react";
import { getWhatsappUrl } from "../data/business";
import { Product } from "../data/products";
import { translations } from "../data/translations";

interface ProductCardProps {
  product: Product;
  language: "ar" | "fr";
  index: number;
}

export default function ProductCard({ product, language, index }: ProductCardProps) {
  const t = translations[language];
  const nameText = product.name[language];
  const descText = product.description[language];

  const handleProductOrder = () => {
    const message =
      language === "ar"
        ? `مرحباً مخبزة جوهرة، أريد طلب منتج: "${nameText}" بسعر ${product.price}.`
        : `Bonjour Boulangerie Jawhara, je souhaite commander : "${nameText}" au prix de ${product.price}.`;
    window.open(getWhatsappUrl(message), "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-[#0C0C0C]/90 backdrop-blur-md rounded-none overflow-hidden border border-gold-accent/10 p-4 flex flex-col justify-between group hover:border-gold-accent/30 shadow-2xl transition-all duration-300"
    >
      <div>
        {/* Aspect Ratio 4:3 Image Container with absolute tags */}
        <div className="relative aspect-[4/3] rounded-none overflow-hidden bg-neutral-950 mb-4">
          <img
            src={product.image}
            alt={nameText}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle vignette on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

          {/* Absolute Pricing Tag in bottom right/left corner depending on language */}
          <div className={`absolute bottom-3 ${language === "ar" ? "right-3" : "left-3"} z-10 shadow-md`}>
            <span className="inline-block bg-black text-[#FAF7F2] text-xs font-bold px-3 py-1.5 rounded-none border border-gold-accent/20">
              <span className="text-[9px] text-[#E6C47E] font-semibold block uppercase tracking-wider leading-none">
                {t.bestSellers.from}
              </span>
              <span className="text-[12px] font-sans mt-0.5 block">{product.price}</span>
            </span>
          </div>

          {/* Premium Tag */}
          <div className={`absolute top-3 ${language === "ar" ? "left-3" : "right-3"} z-10`}>
            <span className="inline-flex items-center gap-1 bg-[#E6C47E] text-black font-extrabold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-none font-sans">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>PRESTIGE</span>
            </span>
          </div>
        </div>

        {/* Title & Desc */}
        <div className="px-1.5">
          <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2 font-serif tracking-tight leading-snug group-hover:text-[#E6C47E] transition-colors">
            {nameText}
          </h4>
          <p className="text-sm text-[#A19A93] line-clamp-3 leading-relaxed mb-6 font-sans">
            {descText}
          </p>
        </div>
      </div>

      {/* order Trigger Button */}
      <div className="px-1.5 pt-2">
        <button
          type="button"
          onClick={handleProductOrder}
          className="flex min-h-[44px] items-center justify-center gap-2 w-full py-3 rounded-full bg-transparent hover:bg-[#E6C47E] text-[#E6C47E] hover:text-black border border-gold-accent/30 hover:border-[#E6C47E] text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.bestSellers.ctaOrder}</span>
        </button>
      </div>
    </motion.div>
  );
}
