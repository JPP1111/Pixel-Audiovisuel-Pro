"use client";

import Link from "next/link";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function HeroVideo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const rawBgY = useTransform(scrollY, [0, 700], [0, -100]);
  const bgY = useSpring(rawBgY, { stiffness: 60, damping: 20 });

  const rawContentY = useTransform(scrollY, [0, 500], [0, -60]);
  const contentY = useSpring(rawContentY, { stiffness: 60, damping: 20 });
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#010e4e" }}
    >
      {/* ── Vidéo plein écran ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/Vidéos/hero.mp4"
        />
        {/* Overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-[#010e4e]/30" />
        {/* Bottom fade vers le fond de page */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#010e4e] to-transparent" />
      </div>

      {/* ── Content (scrolls + fades out) ── */}
      <motion.div
        className="relative z-10 w-full px-8 lg:px-16 text-left mt-24"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-3xl"
        >
          {/* Title — 3 lines staggered */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDE8DC] leading-none mb-1"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Équipez vos salles
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none mb-1"
            style={{ fontFamily: "var(--font-sora, system-ui)", color: "#EDE8DC" }}
          >
            avec des solutions
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#EDE8DC] leading-none mb-6"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            audiovisuelles pro
          </motion.h1>

          {/* Ornement */}
          <motion.div variants={itemVariants} className="flex items-center justify-start gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #EDE8DC)" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #EDE8DC)" }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#EDE8DC] text-base lg:text-lg leading-relaxed max-w-sm mb-12 font-bold"
          >
            Vidéoprojecteurs grande puissance, écrans professionnels, écrans de projection et sonorisation pour salles de spectacle, théâtres, auditoriums et espaces collectifs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Link href="/contact">
              <motion.span
                className="flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full text-sm tracking-wide cursor-pointer"
                style={{ background: "#010e4e", color: "#EDE8DC", boxShadow: "0 8px 32px rgba(1,14,78,0.25)" }}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(1,14,78,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Contactez-nous
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>

          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <div className="scroll-bounce flex flex-col items-center gap-2 opacity-40">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#9A9078]">Découvrir</span>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
