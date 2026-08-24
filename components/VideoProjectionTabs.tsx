"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectorCatalog from "@/components/ProjectorCatalog";

const features = [
  {
    title: "Puissance lumineuse",
    desc: "De 3 000 à 50 000 lumens selon vos besoins. Projection grand format dans des environnements lumineux exigeants.",
  },
  {
    title: "Résolution 4K et au-delà",
    desc: "Images nettes et précises pour des présentations d'un niveau professionnel irréprochable.",
  },
  {
    title: "Optiques interchangeables",
    desc: "Large gamme d'objectifs pour adapter la distance de projection à la configuration de votre salle.",
  },
  {
    title: "Fiabilité et longévité",
    desc: "Conçus pour une utilisation intensive. Sources laser sans entretien régulier de lampe.",
  },
  {
    title: "Installation flexible",
    desc: "Plafond, plancher, installation inversée. Orientation et positionnement adaptés à chaque espace.",
  },
  {
    title: "Maintenance simplifiée",
    desc: "Diagnostic à distance, filtres accessibles, support technique Panasonic garanti.",
  },
];

const tabs = [
  { key: "presentation", label: "Présentation" },
  { key: "catalogue", label: "Catalogue & tarifs" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function VideoProjectionTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active: TabKey = searchParams.get("onglet") === "catalogue" ? "catalogue" : "presentation";

  const setActive = useCallback(
    (key: TabKey) => {
      const query = key === "catalogue" ? "?onglet=catalogue" : "";
      router.replace(`${pathname}${query}`, { scroll: false });
    },
    [pathname, router]
  );

  return (
    <section className="bg-[#020b3c] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tab switcher */}
        <div className="flex gap-2 mb-14 border-b border-[#1a2a8c]">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="relative px-5 py-3 text-sm font-semibold tracking-wide transition-colors"
              style={{ color: active === t.key ? "#EDE8DC" : "#9A9078" }}
            >
              {t.label}
              {active === t.key && (
                <span
                  className="absolute left-0 right-0 -bottom-px h-0.5"
                  style={{ background: "#1E7BFF" }}
                />
              )}
            </button>
          ))}
        </div>

        {active === "presentation" && (
          <div>
            {/* Intro */}
            <div className="max-w-3xl mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
                Notre approche
              </p>
              <h2
                className="text-2xl lg:text-3xl font-semibold text-white mb-5"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Chaque projet nécessite une analyse précise
              </h2>
              <div className="space-y-4 text-[#AAB2BD] leading-relaxed">
                <p>
                  Pour une salle de spectacle, une salle polyvalente ou un théâtre, le choix du
                  vidéoprojecteur est déterminant. Puissance lumineuse, type d&apos;optique, distance de
                  projection, résolution, niveau sonore, installation au plafond, maintenance,
                  compatibilité avec vos sources vidéo : chaque paramètre compte.
                </p>
                <p>
                  Pixel Audiovisuel Pro vous accompagne dans le choix de vidéoprojecteurs professionnels
                  Panasonic adaptés aux environnements exigeants : grandes images, forte luminosité,
                  utilisation intensive et besoin de fiabilité.
                </p>
                <p>
                  Panasonic Connect propose une gamme 4K complète jusqu&apos;à 50 000 lumens — des grandes
                  salles de spectacle aux salles de classe, une solution existe pour chaque besoin.
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-8">
                Points clés
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6"
                  >
                    <div className="w-1 h-5 bg-[#1E7BFF] rounded-full mb-4" />
                    <h3
                      className="text-base font-semibold text-white mb-2"
                      style={{ fontFamily: "var(--font-sora, system-ui)" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#AAB2BD] leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Catalogue link */}
            <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-sora, system-ui)" }}
                >
                  Catalogue & tarifs
                </p>
                <p className="text-sm text-[#AAB2BD]">
                  Consultez les 58 vidéoprojecteurs Panasonic avec leurs tarifs publics HT
                </p>
              </div>
              <button
                onClick={() => setActive("catalogue")}
                className="flex items-center gap-2 px-6 py-3 bg-[#1E7BFF] hover:bg-[#1565d8] text-white font-semibold rounded-full text-sm transition-colors whitespace-nowrap"
              >
                Voir le catalogue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {active === "catalogue" && (
          <div>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
                Gamme complète
              </p>
              <h2
                className="text-2xl lg:text-3xl font-semibold text-white mb-5"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                58 vidéoprojecteurs Panasonic, filtrables et triables
              </h2>
              <p className="text-[#AAB2BD] leading-relaxed">
                Recherchez par usage, filtrez par luminosité, résolution ou catégorie, triez par prix
                ou puissance — toute la gamme Panasonic Connect avec tarifs publics HT, en un seul endroit.
              </p>
            </div>
            <ProjectorCatalog />
          </div>
        )}
      </div>
    </section>
  );
}
