"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const NAV_LINKS = [
  { href: "/videoprojection",      label: "Vidéoprojection" },
  { href: "/ecrans-professionnels", label: "Écrans Pro" },
  { href: "/ecrans-projection",    label: "Écrans de projection" },
  { href: "/sonorisation",         label: "Sonorisation" },
  { href: "/marques",              label: "Nos marques" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]   = useState(false);
  const [mobileOpen,  setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      style={{
        background: scrolled ? "rgba(12,9,7,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #2A2010" : "1px solid transparent",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
            <span
              className="text-xl font-bold tracking-tight text-[#EDE8DC]"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Pixel
            </span>
            <br />
            <span
              className="text-[10px] font-medium tracking-[0.22em] uppercase"
              style={{ color: "#D4A847" }}
            >
              Audiovisuel Pro
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-[#9A9078] hover:text-[#EDE8DC] transition-colors duration-200 tracking-wide group"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-[#D4A847] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ width: "100%" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+33687356702"
            className="text-sm font-medium text-[#D4A847] hover:text-[#EDE8DC] transition-colors"
          >
            06 87 35 67 02
          </a>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded tracking-wide"
              style={{ background: "#D4A847", color: "#0C0907" }}
            >
              Demander une étude
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-[#EDE8DC] rounded"
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[#EDE8DC] rounded"
            animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[#EDE8DC] rounded"
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="lg:hidden overflow-hidden"
            style={{ background: "#161009", borderTop: "1px solid #2A2010" }}
          >
            <motion.div
              className="px-6 py-6 flex flex-col gap-4"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease }}
                >
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-[#EDE8DC] py-2"
                    style={{ borderBottom: "1px solid #2A2010" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded"
                style={{ background: "#D4A847", color: "#0C0907" }}
                onClick={() => setMobileOpen(false)}
              >
                Demander une étude
              </Link>
              <a href="tel:+33687356702" className="text-center text-sm font-medium text-[#D4A847] py-2">
                06 87 35 67 02
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
