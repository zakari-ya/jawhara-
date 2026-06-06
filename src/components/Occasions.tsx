import { motion } from "motion/react";
import { MessageSquare, CheckCircle, Palette } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";
import { IMAGES } from "../data/products";

interface OccasionsProps {
  language: "ar" | "fr";
}

export default function Occasions({ language }: OccasionsProps) {
  const t = translations[language];

  const services = [
    t.occasions.service1,
    t.occasions.service2,
    t.occasions.service3,
    t.occasions.service4,
    t.occasions.service5,
    t.occasions.service6,
  ];

  const handleCustomOrder = () => {
    const textMsg = encodeURIComponent(
      language === "ar"
        ? "مرحباً مخبزة جوهرة، أريد حجز تصميم كعكة أو طلبيات لمناسبة خاصة. هل يمكنكم تزويدي بالأنواع المتوفرة والأسعار؟"
        : "Bonjour Boulangerie Jawhara, je souhaite réserver une création personnalisée ou passer une commande pour un événement. Quels sont vos tarifs et options ?"
    );
    window.open(`https://wa.me/212622212159?text=${textMsg}`, "_blank");
  };

  return (
    <section id="occasions" className="py-24 bg-black relative overflow-hidden border-b border-gold-accent/10 bg-artisan-pattern">
      {/* Decorative Ornaments Background */}
      <div className="absolute left-0 bottom-0 w-80 h-85 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Descriptive lists */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <SectionTitle
              title={t.occasions.title}
              subtitle={t.occasions.subtitle}
              badge={language === "ar" ? "تفاصيل ذكرياتكم السعيدة" : "Créations d'Exception"}
              align="left"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-[#A19A93] font-sans leading-relaxed mb-10 text-xs sm:text-sm md:text-base font-light"
            >
              <p>{t.occasions.p1}</p>
              <p>{t.occasions.p2}</p>
            </motion.div>

            {/* Structured responsive checkerboard lists of events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-none bg-[#0C0C0C]/80 border border-gold-accent/10 hover:border-gold-accent/40 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-[#E6C47E] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#FAF7F2]">{service}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA designer gâteau on WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={handleCustomOrder}
                className="flex items-center justify-center gap-3 w-gradient px-8 py-3.5 rounded-full bg-[#E6C47E] hover:bg-white text-black font-extrabold text-xs tracking-widest uppercase shadow-md transition-all cursor-pointer hover:scale-[1.02] active:scale-95 duration-300"
              >
                <Palette className="w-4 h-4 text-black rotate-12" />
                <span>{t.occasions.ctaCustom}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic floating cake display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Gold backing aura circle */}
              <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-2xl scale-95" />

              <div className="relative rounded-none overflow-hidden aspect-[4/5] shadow-2xl bg-neutral-950 border-8 border-[#0C0C0C] rotate-[1.5deg] z-10">
                <img
                  src={IMAGES.celebrationCake}
                  alt="Luxury Celebration Cake design"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Visual elegance shine block */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF7F2]/10 via-transparent to-black/50 pointer-events-none" />
              </div>

              {/* Decorative wheat or ribbon floating cards */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-black text-[#E6C47E] font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-none shadow-md border border-gold-accent/25">
                  MARIAGES & FETES
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
