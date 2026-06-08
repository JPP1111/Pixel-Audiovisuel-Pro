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
      style={{ background: "#0C0907" }}
    >
      {/* ── Parallax background layer ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Warm vignette base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C0907] via-[#100C07] to-[#0C0907]" />

        {/* Gold glow orb (stage light feeling) */}
        <div
          className="hero-glow-1 absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,168,71,0.18) 0%, transparent 65%)" }}
        />
        {/* Amber glow */}
        <div
          className="hero-glow-2 absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,112,48,0.14) 0%, transparent 65%)" }}
        />
        {/* Deep crimson hint (theatrical curtain) */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(140,30,50,0.25) 0%, transparent 70%)" }}
        />

        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(237,232,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,220,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] opacity-25"
          style={{ background: "linear-gradient(90deg, transparent, #D4A847 50%, transparent)" }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0907] to-transparent" />
      </motion.div>

      {/* ── Content (scrolls + fades out) ── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Title — 3 lines staggered */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#EDE8DC] leading-tight mb-2"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Équipez vos salles
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-2"
            style={{ fontFamily: "var(--font-sora, system-ui)", color: "#D4A847" }}
          >
            avec des solutions
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#EDE8DC] leading-tight mb-8"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            audiovisuelles pro
          </motion.h1>

          {/* Ornement */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #D4A847)" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A847]" />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #D4A847)" }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#9A9078] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Vidéoprojecteurs grande puissance, écrans professionnels, écrans de projection et
            sonorisation pour salles de spectacle, théâtres, auditoriums et espaces collectifs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.span
                className="flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded text-sm tracking-wide cursor-pointer"
                style={{ background: "#D4A847", color: "#0C0907", boxShadow: "0 8px 32px rgba(212,168,71,0.25)" }}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(212,168,71,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Demander une étude
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>

            <motion.a
              href="tel:+33687356702"
              className="flex items-center justify-center gap-2 px-8 py-4 border text-[#EDE8DC] font-semibold rounded text-sm tracking-wide"
              style={{ borderColor: "#2A2010" }}
              whileHover={{ borderColor: "#D4A847", color: "#D4A847", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 87 35 67 02
            </motion.a>

            <motion.a
              href="mailto:contact@pixelaudiovisuelpro.fr"
              className="flex items-center justify-center gap-2 px-8 py-4 border text-[#9A9078] font-semibold rounded text-sm tracking-wide"
              style={{ borderColor: "#2A2010" }}
              whileHover={{ borderColor: "#5A8FC8", color: "#5A8FC8", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyer un mail
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <div className="scroll-bounce flex flex-col items-center gap-2 opacity-40">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#9A9078]">Découvrir</span>
              <svg className="w-4 h-4 text-[#D4A847]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
