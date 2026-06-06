import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { bestSellers } from "../data/products";
import { translations } from "../data/translations";

interface BestSellersProps {
  language: "ar" | "fr";
}

export default function BestSellers({ language }: BestSellersProps) {
  const t = translations[language];

  return (
    <section id="bestsellers" className="py-24 bg-[#040404] border-b border-gold-accent/10 relative overflow-hidden bg-artisan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.bestSellers.title}
          subtitle={t.bestSellers.subtitle}
          badge={language === "ar" ? "قائمة المذاق الرفيع" : "Sélection D'exception"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
