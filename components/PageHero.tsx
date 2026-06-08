"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface PageHeroProps {
  brand: string;
  title: string;
  subtitle: string;
  accent?: "gold" | "amber";
}

export default function PageHero({ brand, title, subtitle, accent = "gold" }: PageHeroProps) {
  const accentColor = accent === "gold" ? "#EDE8DC" : "#EDE8DC";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#010e4e" }}>
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-12 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center top, ${accentColor} 0%, transparent 68%)` }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(237,232,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,220,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center"
        >
          <motion.span
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border mb-6"
            style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}08` }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {brand}
          </motion.span>

          <motion.h1
            className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDE8DC] leading-tight mb-6"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="h-px w-12" style={{ background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
            <div className="h-px w-12" style={{ background: `linear-gradient(to left, transparent, ${accentColor})` }} />
          </motion.div>

          <motion.p
            className="text-[#9A9078] text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
