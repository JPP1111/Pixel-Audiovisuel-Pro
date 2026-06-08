"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const productLinks = [
  { href: "/videoprojection",       label: "Vidéoprojection Panasonic" },
  { href: "/ecrans-professionnels", label: "Écrans professionnels" },
  { href: "/ecrans-projection",     label: "Écrans de projection ORAY" },
  { href: "/sonorisation",          label: "Sonorisation Yamaha" },
];

const infoLinks = [
  { href: "/marques", label: "Nos marques" },
  { href: "/contact", label: "Contact" },
];

const brandLinks = [
  { href: "https://eu.connect.panasonic.com/fr/fr/videoprojecteurs", label: "Panasonic Connect" },
  { href: "https://oray.fr/",                                        label: "ORAY" },
  { href: "https://fr.yamaha.com/fr/business/audio/",               label: "Yamaha Pro Audio" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#010e4e", borderTop: "1px solid #102070" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-2xl font-bold text-[#EDE8DC]" style={{ fontFamily: "var(--font-sora, system-ui)" }}>
                Pixel
              </p>
              <p className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "#EDE8DC" }}>
                Audiovisuel Pro
              </p>
            </div>
            <p className="text-sm text-[#9A9078] leading-relaxed max-w-xs">
              Solutions audiovisuelles professionnelles pour salles, scènes et espaces collectifs.
              Distributeur Panasonic depuis plus de 30 ans.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href="tel:+33687356702" className="text-sm text-[#EDE8DC] hover:text-white transition-colors">
                06 87 35 67 02
              </a>
              <a href="mailto:contact@pixelaudiovisuelpro.fr" className="text-sm text-[#EDE8DC] hover:text-white transition-colors">
                contact@pixelaudiovisuelpro.fr
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "#EDE8DC" }}>
              Solutions
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9A9078] hover:text-[#EDE8DC] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "#EDE8DC" }}>
              Informations
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9A9078] hover:text-[#EDE8DC] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Constructeurs */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "#EDE8DC" }}>
              Sites constructeurs
            </h4>
            <ul className="flex flex-col gap-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#9A9078] hover:text-[#EDE8DC] transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid #102070" }}>
          <p className="text-xs text-[#9A9078]">
            © {new Date().getFullYear()} Pixel Audiovisuel Pro — Distributeur Panasonic agréé
          </p>
          <p className="text-xs" style={{ color: "#102070" }}>
            Solutions audiovisuelles professionnelles B2B
          </p>
        </div>
      </div>
    </footer>
  );
}
