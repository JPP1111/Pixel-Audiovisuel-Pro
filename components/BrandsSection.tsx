"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const brands = [
  {
    name: "Panasonic Connect",
    tagline: "Vidéoprojecteurs & Écrans professionnels",
    desc: "Gamme 4K de 3 000 à 50 000 lumens. Référence mondiale en vidéoprojection professionnelle pour les grandes salles. Pixel Audiovisuel Pro est distributeur agréé Panasonic.",
    href: "https://eu.connect.panasonic.com/fr/fr/videoprojecteurs",
    accent: "#D4A847",
    letter: "P",
  },
  {
    name: "ORAY",
    tagline: "Écrans de projection",
    desc: "Expertise française depuis 1947. Fabricant d'écrans de projection professionnels pour salles de réunion, théâtres, auditoriums et espaces de présentation.",
    href: "https://oray.fr/",
    accent: "#A87030",
    letter: "O",
  },
  {
    name: "Yamaha Pro Audio",
    tagline: "Sonorisation professionnelle",
    desc: "Solutions d'intégration audio CIS / Commercial Installation Solutions. Enceintes, amplification, traitement audio et pilotage pour tous types d'espaces.",
    href: "https://fr.yamaha.com/fr/business/audio/",
    accent: "#A87030",
    letter: "Y",
  },
];

export default function BrandsSection() {
  return (
    <section style={{ background: "#0C0907", borderTop: "1px solid #2A2010" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A847] mb-3">
            Nos partenaires
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-[#EDE8DC] mb-4"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Des marques reconnues mondialement
          </h2>
          <p className="text-[#9A9078] max-w-2xl mx-auto text-sm">
            Pixel Audiovisuel Pro sélectionne uniquement des marques dont la fiabilité, la qualité et
            le support technique sont reconnus dans les environnements professionnels les plus exigeants.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={cardVariants}
              className="relative rounded-lg p-8 flex flex-col gap-5 overflow-hidden"
              style={{ background: "#161009", border: "1px solid #2A2010" }}
              whileHover={{ y: -5, borderColor: `${brand.accent}50` }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Animated top line on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: `linear-gradient(90deg, transparent, ${brand.accent}, transparent)`, scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease }}
              />

              {/* Ambient glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ background: `radial-gradient(ellipse at top, ${brand.accent}08 0%, transparent 60%)` }}
              />

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                {/* Logo + name */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded flex items-center justify-center font-bold text-xl border flex-shrink-0"
                    style={{
                      color: brand.accent,
                      borderColor: `${brand.accent}40`,
                      background: `${brand.accent}10`,
                      fontFamily: "var(--font-sora, system-ui)",
                    }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    {brand.letter}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-[#EDE8DC] text-base" style={{ fontFamily: "var(--font-sora, system-ui)" }}>
                      {brand.name}
                    </p>
                    <p className="text-xs text-[#9A9078] mt-0.5">{brand.tagline}</p>
                  </div>
                </div>

                <div className="h-px w-full opacity-30" style={{ background: `linear-gradient(90deg, ${brand.accent}60, transparent)` }} />

                <p className="text-[#9A9078] text-sm leading-relaxed flex-1">{brand.desc}</p>

                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 mt-2 group/link"
                  style={{ color: brand.accent }}
                >
                  Voir le site officiel
                  <motion.svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
