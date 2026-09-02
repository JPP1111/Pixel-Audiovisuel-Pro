"use client";

import Link from "next/link";
import Image from "next/image";
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
    href: "/videoprojection?onglet=catalogue",
    label: "Panasonic",
    badge: "/Images/etiquette_panasonic_panasonic.png",
    title: "Vidéoprojecteurs professionnels",
    desc: "De 3 000 à 50 000 lumens. Grandes images, forte luminosité, utilisation intensive. Pour salles de spectacle, théâtres, auditoriums.",
    accent: "#EDE8DC",
  },
  {
    href: "/ecrans-projection",
    label: "Oray",
    badge: "/Images/etiquette_panasonic_oray.png",
    title: "Écrans de projection",
    desc: "Expertise française depuis 1947. Écrans motorisés, cadres, toiles adaptées pour salles de réunion, théâtres et auditoriums.",
    accent: "#EDE8DC",
  },
  {
    href: "/sonorisation",
    label: "Yamaha",
    badge: "/Images/etiquette_panasonic_yamaha.png",
    title: "Sonorisation professionnelle",
    desc: "Diffusion sonore, enceintes, amplification et traitement audio. Solutions d'intégration CIS pour salles exigeantes.",
    accent: "#EDE8DC",
  },
  {
    href: "/captation-audio",
    label: "Sennheiser",
    badge: "/Images/etiquette_panasonic_sennheiser.png",
    title: "Captation audio sans fil",
    desc: "Microphones et systèmes HF professionnels pour scènes de spectacle, théâtres et espaces de conférence. Fiabilité et qualité sonore.",
    accent: "#EDE8DC",
  },
];

export default function SolutionsGrid() {
  return (
    <section style={{ background: "#010e4e" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
            Nos solutions
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-[#EDE8DC] mb-4"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Des équipements pour chaque besoin
          </h2>
          <p className="text-[#9A9078] max-w-2xl mx-auto">
            Expert Panasonic depuis 30 ans, nous avons complété notre offre avec d&apos;autres marques
            de références sélectionnées pour leur qualité, leur fiabilité et leur support technique
            dans des environnements professionnels exigeants.
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
                  style={{ background: "#030d38", border: "1px solid #102070" }}
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

                  <div className="relative z-10 flex flex-col flex-1 items-center text-center">
                    <h3
                      className="text-xl font-semibold text-[#EDE8DC] mb-3"
                      style={{ fontFamily: "var(--font-sora, system-ui)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[#9A9078] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

                    {/* Expert badge */}
                    <Image
                      src={s.badge}
                      alt={`Expert ${s.label}`}
                      width={180}
                      height={108}
                      className="w-32 sm:w-40 h-auto mb-4 rounded-md"
                    />

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
