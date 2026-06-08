"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease } },
};

const domains = [
  { icon: "🎭", title: "Salles de spectacle", desc: "Scènes et grands espaces" },
  { icon: "🎪", title: "Théâtres",            desc: "Projection et sonorisation scénique" },
  { icon: "🏛️", title: "Auditoriums",         desc: "Conférences et événements" },
  { icon: "🏢", title: "Salles polyvalentes", desc: "Espaces modulables" },
  { icon: "💼", title: "Salles de conférence",desc: "Présentations professionnelles" },
  { icon: "🏛",  title: "Lieux institutionnels",desc: "Collectivités et mairies" },
  { icon: "🎓", title: "Lieux culturels",      desc: "Musées, médiathèques" },
];

export default function DomainsSection() {
  return (
    <section style={{ background: "#161009", borderTop: "1px solid #2A2010" }} className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A847] mb-3">
            Domaines d&apos;intervention
          </p>
          <h2
            className="text-2xl lg:text-3xl font-semibold text-[#EDE8DC]"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Nous équipons tous les espaces professionnels
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {domains.map((d) => (
            <motion.div
              key={d.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-4 rounded-lg cursor-default"
              style={{ background: "#0C0907", border: "1px solid #2A2010" }}
              whileHover={{
                borderColor: "rgba(212,168,71,0.4)",
                background: "rgba(212,168,71,0.04)",
                y: -3,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            >
              <motion.span
                className="text-2xl mb-3"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                {d.icon}
              </motion.span>
              <p
                className="text-xs font-semibold text-[#EDE8DC] leading-tight mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                {d.title}
              </p>
              <p className="text-[10px] text-[#9A9078]">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
