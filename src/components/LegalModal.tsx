import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { BUSINESS } from "../data/business";

export type LegalView = "privacy" | "terms";

interface LegalModalProps {
  language: "ar" | "fr";
  view: LegalView | null;
  onClose: () => void;
}

const legalCopy = {
  privacy: {
    ar: {
      title: "سياسة الخصوصية",
      intro:
        "هذا الموقع تعريفي ولا يجمع بيانات شخصية مباشرة أو يستعمل حسابات مستخدمين.",
      items: [
        `عند الضغط على واتساب، فيسبوك أو خرائط جوجل، ستنتقلون إلى خدمات خارجية تطبق سياساتها الخاصة.`,
        `طلباتكم ومحادثاتكم تتم مباشرة عبر واتساب على رقم ${BUSINESS.phoneDisplay}.`,
        "لا توجد مدفوعات، حسابات، أو تتبع تحليلي داخل هذا الموقع.",
      ],
    },
    fr: {
      title: "Politique de confidentialité",
      intro:
        "Ce site est une vitrine et ne collecte pas directement de données personnelles.",
      items: [
        "Les liens WhatsApp, Facebook et Google Maps ouvrent des services externes avec leurs propres politiques.",
        `Les commandes et échanges se font directement sur WhatsApp au ${BUSINESS.phoneDisplay}.`,
        "Le site ne contient pas de paiement, de compte client ni de suivi analytique intégré.",
      ],
    },
  },
  terms: {
    ar: {
      title: "شروط الاستخدام",
      intro:
        "باستخدامكم لهذا الموقع، تقبلون أنه مخصص للتعريف بالمخبزة وتسهيل التواصل فقط.",
      items: [
        "الأسعار والصور والمعلومات قابلة للتحديث، ويتم تأكيد الطلب النهائي مباشرة مع المخبزة.",
        "روابط الطلب والخرائط والشبكات الاجتماعية تفتح خارج الموقع.",
        "أي طلب خاص أو مناسبة يتم تأكيده عبر الهاتف أو واتساب حسب التوفر.",
      ],
    },
    fr: {
      title: "Conditions d'utilisation",
      intro:
        "Ce site présente la boulangerie et facilite le contact direct avec l'équipe.",
      items: [
        "Les prix, photos et informations peuvent évoluer; la commande finale se confirme directement avec la boulangerie.",
        "Les liens de commande, de localisation et de réseaux sociaux ouvrent des services externes.",
        "Toute demande spéciale ou événement est confirmé par téléphone ou WhatsApp selon disponibilité.",
      ],
    },
  },
} as const;

export default function LegalModal({ language, view, onClose }: LegalModalProps) {
  const copy = view ? legalCopy[view][language] : null;

  useEffect(() => {
    if (!view) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [view, onClose]);

  return (
    <AnimatePresence>
      {copy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          aria-describedby="legal-modal-description"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="max-h-[min(82vh,720px)] w-full max-w-2xl overflow-y-auto border border-gold-accent/20 bg-[#090909] p-6 sm:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-gold-accent/10 pb-4">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gold-accent/70 font-sans">
                  {BUSINESS.brand[language]}
                </p>
                <h2
                  id="legal-modal-title"
                  className="text-2xl font-bold text-[#FAF7F2] font-serif"
                >
                  {copy.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] min-w-[44px] border border-gold-accent/20 p-2 text-[#FAF7F2] transition-colors hover:border-gold-accent hover:text-gold-accent"
                aria-label={language === "ar" ? "إغلاق" : "Fermer"}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p id="legal-modal-description" className="mb-5 text-sm leading-relaxed text-[#A19A93] font-sans">
              {copy.intro}
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-[#A19A93] font-sans">
              {copy.items.map((item) => (
                <li key={item} className="border-s border-gold-accent/30 ps-4">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
