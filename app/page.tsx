"use client";

import HeroVideo from "@/components/HeroVideo";
import SolutionsGrid from "@/components/SolutionsGrid";
import DomainsSection from "@/components/DomainsSection";
import BrandsSection from "@/components/BrandsSection";
import WhyPixel from "@/components/WhyPixel";
import CTABanner from "@/components/CTABanner";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* Animated counter for TrustBar */
function TrustCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) { node.textContent = Math.round(v) + suffix; },
    });
    return ctrl.stop;
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

type TrustItem =
  | { value: number; suffix: string; label: string; text?: never }
  | { text: string; label: string; value?: never; suffix?: never };

const trustItems: TrustItem[] = [
  { value: 30, suffix: "+", label: "Années d'expertise" },
  { text: "Panasonic",      label: "Distributeur agréé" },
  { text: "ORAY · Yamaha",  label: "Partenaires officiels" },
  { text: "B2B",            label: "Prix professionnels" },
];

function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease }}
      style={{ background: "#161009", borderBottom: "1px solid #2A2010" }}
      className="py-6"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease }}
            >
              {i > 0 && <div className="w-px h-8 hidden sm:block" style={{ background: "#D4A847", opacity: 0.4 }} />}
              <div>
                <p className="text-lg font-bold text-[#EDE8DC]" style={{ fontFamily: "var(--font-sora, system-ui)" }}>
                  {"value" in item
                    ? <TrustCounter value={item.value!} suffix={item.suffix ?? ""} />
                    : item.text
                  }
                </p>
                <p className="text-xs text-[#9A9078] tracking-wide">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <HeroVideo />
      <TrustBar />
      <SolutionsGrid />
      <DomainsSection />
      <BrandsSection />
      <WhyPixel />
      <CTABanner />
    </>
  );
}
