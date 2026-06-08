"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Vous avez un projet d'équipement audiovisuel ?",
  subtitle = "Contactez Pixel Audiovisuel Pro pour une première analyse de votre besoin. Nous vous aidons à choisir la solution réellement adaptée à votre salle.",
}: CTABannerProps) {
  return (
    <section style={{ background: "#030d38", borderTop: "1px solid #102070" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center"
        >
          {/* Top ornement */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #EDE8DC)" }} />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white">
              Parlez-nous de votre projet
            </span>
            <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #EDE8DC)" }} />
          </div>

          <h2
            className="text-3xl lg:text-4xl font-semibold text-[#EDE8DC] mb-5 leading-snug"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            {title}
          </h2>
          <p className="text-[#9A9078] text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+33687356702"
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full text-sm"
              style={{ background: "#010e4e", color: "#EDE8DC", boxShadow: "0 8px 28px rgba(1,14,78,0.22)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(1,14,78,0.38)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 87 35 67 02
            </motion.a>

            <motion.a
              href="mailto:contact@pixelaudiovisuelpro.fr"
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-full text-sm text-[#EDE8DC]"
              style={{ border: "1px solid #102070" }}
              whileHover={{ borderColor: "#010e4e", color: "#EDE8DC", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyer un message
            </motion.a>
          </div>

          <p className="mt-8 text-xs text-[#9A9078]">
            Réponse rapide — Conseil technique gratuit avant achat
          </p>
        </motion.div>
      </div>
    </section>
  );
}
