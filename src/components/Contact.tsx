import { motion } from "motion/react";
import { MapPin, Phone, Clock, Facebook, Map, Compass, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

interface ContactProps {
  language: "ar" | "fr";
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];

  const handleOpenMap = () => {
    // Open Google Maps search of the specific location plus code in Chichaoua
    window.open("https://maps.google.com/?q=G6JJ+Q23,Chichaoua,Morocco", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Structural backgrounds */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          badge={language === "ar" ? "معلومات التواصل والزيارة" : "Nous Situer"}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Card left: contact details lists */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#0C0C0C]/90 backdrop-blur-md border border-gold-accent/10 p-8 sm:p-10 rounded-none shadow-2xl space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-8">
              {/* Address detail card */}
              <div className="flex gap-4 items-start pb-4 border-b border-gold-accent/10">
                <div className="w-11 h-11 rounded-full bg-[#E6C47E]/5 flex items-center justify-center text-[#E6C47E] flex-shrink-0 border border-gold-accent/15">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-serif mb-1">
                    {t.contact.addressLabel}
                  </h4>
                  <p className="text-sm text-[#A19A93] font-light mb-2">
                    {t.contact.addressVal}
                  </p>
                  <p className="text-xs text-chocolate-dark font-light">
                    {language === "ar"
                      ? "الموقع المركزي بشيشاوة — يسهل الوصول إلينا بجوار الشارع الرئيسي."
                      : "Emplacement central facile d'accès à Chichaoua, près de l'avenue principale."}
                  </p>
                </div>
              </div>

              {/* Ligne Directe WhatsApp & Phone */}
              <div className="flex gap-4 items-start pb-4 border-b border-gold-accent/10">
                <div className="w-11 h-11 rounded-full bg-[#E6C47E]/5 flex items-center justify-center text-[#E6C47E] flex-shrink-0 border border-gold-accent/15">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-serif mb-1">
                    {t.contact.phoneLabel}
                  </h4>
                  <p className="text-lg font-extrabold text-[#E6C47E] tracking-tight mb-2 font-mono">
                    0622212159
                  </p>
                  <p className="text-xs text-chocolate-dark font-light">
                    {language === "ar"
                      ? "للاستفسار السريع أو طلب الكعكات للمناسبات يرجى الاتصال مباشرة."
                      : "Commandes directes de gâteaux de mariage et biscuits traditionnels par téléphone."}
                  </p>
                </div>
              </div>

              {/* Opening Hours list */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#E6C47E]/5 flex items-center justify-center text-[#E6C47E] flex-shrink-0 border border-gold-accent/15">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] font-serif mb-1">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-sm text-[#A19A93] font-light mb-1">
                    {t.contact.hoursVal}
                  </p>
                  <p className="text-xs font-semibold text-[#E6C47E] font-sans">
                    {language === "ar" ? "مفتوح طيلة أيام الأسبوع" : "Ouvert 7j / 7"}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick interactive channels buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gold-accent/10">
              <a
                href="https://wa.me/212622212159"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 flex-grow py-3.5 rounded-full bg-[#E6C47E] hover:bg-white text-black font-extrabold text-xs uppercase tracking-widest text-center shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-black" />
                <span>{t.contact.ctaWhatsapp}</span>
              </a>

              <a
                href="https://www.facebook.com/search/top?q=%D9%85%D8%AE%D8%A8%D8%B2%D8%A9%20%D9%85%D9%88%D8%A7%D9%84%20%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA%20%D8%AC%D9%88%D9%87%D8%B1%D8%A9"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 flex-grow py-3.5 border border-gold-accent/20 hover:border-[#E6C47E] rounded-full text-[#E6C47E] hover:text-white hover:bg-white/5 font-extrabold text-xs uppercase tracking-widest text-center transition-all duration-300 cursor-pointer"
              >
                <Facebook className="w-4 h-4 text-[#E6C47E]" />
                <span>{t.contact.ctaFacebook}</span>
              </a>
            </div>
          </motion.div>

          {/* Card right: Beautiful vector map visualization card (mocked directions maps beautifully styled in gold-tint) */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative rounded-none overflow-hidden border border-gold-accent/10 shadow-2xl min-h-[350px] bg-[#0c0c0c] p-[2px] group"
          >
            {/* Dynamic visual layout of stylized Moroccan arabesque and map roads representation */}
            <div className="absolute inset-0 z-0 bg-stone-950/90 flex flex-col justify-between p-6">
              {/* Backing decorative zellige watermarks */}
              <div className="absolute inset-0 bg-[radial-gradient(#E6C47E_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {/* Top map info */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] bg-neutral-900 text-[#E6C47E] font-bold rounded-none px-3 py-1 border border-gold-accent/20 uppercase tracking-widest font-sans">
                  CHICHAOUA GPS COORDINATES
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6C47E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6C47E]"></span>
                </span>
              </div>

              {/* Central pinpoint icon with concentric circles */}
              <div className="relative z-10 flex flex-col items-center justify-center py-10">
                <div className="relative mb-4">
                  {/* Concentric expanding ripples */}
                  <div className="absolute -inset-8 bg-[#E6C47E]/10 rounded-full animate-ping [animation-duration:3s]" />
                  <div className="absolute -inset-4 bg-[#E6C47E]/20 rounded-full animate-ping [animation-duration:2s]" />

                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E6C47E] to-[#FAF7F2] border border-white/10 shadow-xl flex items-center justify-center text-black scale-102">
                    <Map className="w-8 h-8 animate-bounce" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-white tracking-tight mb-1 text-center">
                  G6JJ+Q23, Chichaoua
                </h3>
                <p className="text-xs text-[#A19A93] font-light text-center max-w-sm leading-relaxed">
                  {language === "ar"
                    ? "انقر لفتح الاتجاهات الملاحية المباشرة في خرائط جوجل للوصول الفوري إلينا."
                    : "Appuyez pour lancer l'application Google Maps et commencer la navigation."}
                </p>
              </div>

              {/* CTA button to redirect to Maps */}
              <div className="relative z-10">
                <button
                  onClick={handleOpenMap}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-[#E6C47E] hover:bg-white text-black font-extrabold text-sm uppercase tracking-widest transition-all pointer-events-auto shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 rotate-45" />
                  <span>{t.contact.findUsTitle}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
