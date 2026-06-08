"use client";

import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Animated numeric counter */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        node.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const reasons = [
  { value: 30, suffix: "+", isCounter: true,  title: "Années d'expertise",     desc: "Distributeur Panasonic agréé depuis plus de 30 ans. Une expertise audiovisuelle professionnelle reconnue.", accent: "#D4A847" },
  { value: 0,  suffix: "↗", isCounter: false, title: "Conseil avant achat",    desc: "Nous analysons votre salle, ses contraintes techniques et vos usages avant de proposer une solution.", accent: "#A87030" },
  { value: 3,  suffix: "",  isCounter: true,  title: "Marques de référence",   desc: "Panasonic, ORAY et Yamaha Pro Audio — trois marques mondiales, une seule source de conseil.", accent: "#D4A847" },
  { value: 0,  suffix: "◈", isCounter: false, title: "Matériel adapté",        desc: "Chaque salle est différente. Nous dimensionnons la solution à votre espace réel.", accent: "#A87030" },
  { value: 0,  suffix: "✓", isCounter: false, title: "Accompagnement technique",desc: "De l'étude initiale à la mise en service, Pixel reste votre interlocuteur technique.", accent: "#D4A847" },
  { value: 0,  suffix: "☏", isCounter: false, title: "Contact direct",         desc: "Un numéro direct, un email — pas de hotline généraliste. Une réponse rapide et personnalisée.", accent: "#A87030" },
];

export default function WhyPixel() {
  return (
    <section style={{ background: "#161009", borderTop: "1px solid #2A2010" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A847] mb-3">
              Pourquoi Pixel
            </p>
            <h2
              className="text-3xl lg:text-4xl font-semibold text-[#EDE8DC] max-w-xl leading-tight"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Un interlocuteur technique, pas un simple vendeur
            </h2>
          </motion.div>
          <motion.p
            className="text-[#9A9078] text-sm max-w-sm leading-relaxed lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
          >
            Pixel Audiovisuel Pro accompagne les professionnels qui cherchent un conseil fiable, du
            matériel reconnu et un suivi sérieux.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              className="relative rounded-lg p-7 overflow-hidden"
              style={{ background: "#0C0907", border: "1px solid #2A2010" }}
              whileHover={{ y: -4, borderColor: `${r.accent}50` }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ background: `radial-gradient(ellipse at top left, ${r.accent}07 0%, transparent 60%)` }}
              />

              <div className="relative z-10">
                <div
                  className="text-3xl font-bold mb-4 leading-none"
                  style={{ color: r.accent, fontFamily: "var(--font-sora, system-ui)" }}
                >
                  {r.isCounter
                    ? <Counter value={r.value} suffix={r.suffix} />
                    : r.suffix
                  }
                </div>
                <h3
                  className="text-base font-semibold text-[#EDE8DC] mb-2"
                  style={{ fontFamily: "var(--font-sora, system-ui)" }}
                >
                  {r.title}
                </h3>
                <p className="text-sm text-[#9A9078] leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
