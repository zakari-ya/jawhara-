import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "right" | "left";
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-16 flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-start"
      }`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-block px-3 py-1 border border-gold-accent text-gold-accent text-[9px] tracking-widest uppercase font-sans font-bold"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-espresso"
      >
        {title}
      </motion.h2>

      {/* Decorative Elegant Zellige / Wheat ornament in gold */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-5 flex items-center gap-3 w-40 justify-center h-4"
      >
        <span className="h-[1px] bg-gold-accent/30 w-full"></span>
        <div className="text-gold-accent flex items-center">
          {/* Subtle Islamic / Zellige geometric star representation */}
          <svg
            className="w-4 h-4 fill-current rotate-45"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-45 transform origin-center" />
          </svg>
        </div>
        <span className="h-[1px] bg-gold-accent/30 w-full"></span>
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-sm md:text-base text-chocolate-dark/85 font-sans leading-relaxed px-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
