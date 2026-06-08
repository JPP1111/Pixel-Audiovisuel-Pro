"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const solutions = [
  {
    href: "/videoprojection",
    label: "Panasonic",
    title: "Vidéoprojecteurs professionnels",
    desc: "De 3 000 à 50 000 lumens. Grandes images, forte luminosité, utilisation intensive. Pour salles de spectacle, théâtres, auditoriums.",
    accent: "#D4A847",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="12" width="40" height="28" rx="2" />
        <circle cx="24" cy="26" r="6" />
        <path d="M4 18h4M40 18h4" strokeLinecap="round" />
        <path d="M18 40v4M30 40v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/ecrans-professionnels",
    label: "Panasonic",
    title: "Écrans professionnels",
    desc: "Écrans et murs d'images pour espaces d'accueil, auditoriums, régies. Conçus pour une utilisation intensive 24h/24.",
    accent: "#D4A847",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="26" rx="2" />
        <path d="M16 36h16M24 32v4" strokeLinecap="round" />
        <path d="M12 14h24M12 20h16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/ecrans-projection",
    label: "ORAY",
    title: "Écrans de projection",
    desc: "Expertise française depuis 1947. Écrans motorisés, cadres, toiles adaptées pour salles de réunion, théâtres et auditoriums.",
    accent: "#A87030",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8h32v28H8z" />
        <path d="M8 8L4 4M40 8l4-4M8 36l-4 4M40 36l4 4" strokeLinecap="round" />
        <path d="M20 22l5-4 5 4-5 4-5-4z" />
      </svg>
    ),
  },
  {
    href: "/sonorisation",
    label: "Yamaha",
    title: "Sonorisation professionnelle",
    desc: "Diffusion sonore, enceintes, amplification et traitement audio. Solutions d'intégration CIS pour salles exigeantes.",
    accent: "#A87030",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8v32M30 14v20" strokeLinecap="round" />
        <path d="M8 20v8a6 6 0 006 6v0a6 6 0 006-6v-8a6 6 0 00-6-6v0a6 6 0 00-6 6z" />
        <path d="M28 22v4a6 6 0 006 6v0a6 6 0 006-6v-4a6 6 0 00-6-6v0a6 6 0 00-6 6z" />
      </svg>
    ),
  },
];

export default function SolutionsGrid() {
  return (
    <section style={{ background: "#0C0907" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A847] mb-3">
            Nos solutions
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-[#EDE8DC] mb-4"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Des équipements pour chaque besoin
          </h2>
          <p className="text-[#9A9078] max-w-2xl mx-auto">
            Marques reconnues, conseil technique, installation et mise en service. Un interlocuteur
            unique pour votre projet audiovisuel.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {solutions.map((s) => (
            <motion.div key={s.href} variants={cardVariants}>
              <Link href={s.href} className="block h-full">
                <motion.div
                  className="relative rounded-lg p-8 overflow-hidden h-full flex flex-col"
                  style={{ background: "#161009", border: "1px solid #2A2010" }}
                  whileHover={{ y: -5, borderColor: `${s.accent}60` }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: `radial-gradient(ellipse at top left, ${s.accent}10 0%, transparent 55%)` }}
                  />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Badge + icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded border"
                        style={{ color: s.accent, borderColor: `${s.accent}35`, background: `${s.accent}08` }}
                      >
                        {s.label}
                      </span>
                      <motion.div
                        style={{ color: s.accent }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        {s.icon}
                      </motion.div>
                    </div>

                    <h3
                      className="text-xl font-semibold text-[#EDE8DC] mb-3"
                      style={{ fontFamily: "var(--font-sora, system-ui)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#9A9078] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

                    {/* Arrow CTA */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: s.accent }}
                      whileHover="hover"
                      initial="rest"
                    >
                      En savoir plus
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
