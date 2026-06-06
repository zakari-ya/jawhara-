import { motion } from "motion/react";
import { Award, Soup, Flame } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";
import { IMAGES } from "../data/products";

interface StoryProps {
  language: "ar" | "fr";
}

export default function Story({ language }: StoryProps) {
  const t = translations[language];

  const features = [
    {
      icon: Soup,
      title: t.story.feature1Title,
      desc: t.story.feature1Desc,
    },
    {
      icon: Flame,
      title: t.story.feature2Title,
      desc: t.story.feature2Desc,
    },
    {
      icon: Award,
      title: t.story.feature3Title,
      desc: t.story.feature3Desc,
    },
  ];

  return (
    <section id="story" className="py-24 bg-black overflow-hidden relative border-b border-gold-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Interactive Plating Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant outer frame border */}
            <div className="absolute inset-2 border border-gold-accent/20 translate-x-1.5 translate-y-1.5 rotate-2 z-0" />

            <div className="relative rounded-none overflow-hidden aspect-[4/5] shadow-2xl z-10 bg-neutral-950 border-8 border-[#0C0C0C] -rotate-1">
              <img
                src={IMAGES.moroccanSweets}
                alt={
                  language === "ar"
                    ? "تشكيلة حلويات مغربية تقليدية من مخبزة جوهرة"
                    : "Traditional Moroccan sweets from Boulangerie Jawhara"
                }
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float badge inside image frame */}
            <div className={`absolute bottom-8 ${language === "ar" ? "left-8" : "right-8"} z-20`}>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-black/95 text-[#FAF7F2] px-5 py-3 rounded-none shadow-xl flex items-center gap-3 border border-gold-accent/30"
              >
                <div className="w-10 h-10 rounded-none bg-[#E6C47E] flex items-center justify-center text-black font-black text-sm font-sans">
                  J
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#E6C47E] uppercase tracking-widest font-sans">
                    {language === "ar" ? "صناعة حرفية" : "Savoir-faire"}
                  </h5>
                  <p className="text-[10px] text-chocolate-dark font-sans mt-0.5">
                    {language === "ar" ? "تحضير بعناية" : "Préparé avec soin"}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7">
            <SectionTitle
              title={t.story.title}
              subtitle={t.story.subtitle}
              badge={language === "ar" ? "حكايتنا وشغفنا" : "Notre Maison & Savoir-Faire"}
              align="left"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-[#A19A93] leading-relaxed mb-12 text-sm sm:text-base md:text-lg"
            >
              <p className="font-sans font-light">{t.story.paragraph1}</p>
              <p className="text-[#E6C47E] border border-[#E6C47E]/20 bg-[#E6C47E]/5 p-4 italic font-serif">
                {t.story.paragraph2}
              </p>
            </motion.div>

            {/* Feature lists items */}
            <div className="space-y-4">
              {features.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-none bg-[#0C0C0C]/80 border border-gold-accent/10 hover:border-[#E6C47E]/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-gold-accent/5 rounded-none text-[#E6C47E]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#FAF7F2] mb-1 font-serif">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[#A19A93] leading-relaxed font-sans font-light">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
