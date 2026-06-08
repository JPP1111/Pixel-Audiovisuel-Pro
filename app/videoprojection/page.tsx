import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vidéoprojecteurs professionnels Panasonic — Pixel Audiovisuel Pro",
  description:
    "Gamme complète de vidéoprojecteurs Panasonic de 3 000 à 50 000 lumens. Conseil, fourniture et installation pour salles de spectacle, théâtres et auditoriums.",
};

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

export default function VideoProjectionPage() {
  return (
    <>
      <PageHero
        brand="Panasonic — Vidéoprojection"
        title="Vidéoprojecteurs professionnels"
        subtitle="De 3 000 à 50 000 lumens. Pixel Audiovisuel Pro vous accompagne dans le choix du vidéoprojecteur Panasonic adapté à votre salle, à votre luminosité et à vos contraintes d'installation."
        accent="gold"
      />

      {/* Main content */}
      <section className="bg-[#020b3c] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          {/* External link */}
          <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Gamme complète sur le site Panasonic
              </p>
              <p className="text-sm text-[#AAB2BD]">
                Consultez l&apos;ensemble de la gamme vidéoprojecteurs Panasonic Connect
              </p>
            </div>
            <a
              href="https://eu.connect.panasonic.com/fr/fr/videoprojecteurs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1E7BFF] hover:bg-[#1565d8] text-white font-semibold rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Site Panasonic
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Quel vidéoprojecteur pour votre salle ?"
        subtitle="Décrivez-nous votre projet : dimensions de la salle, distance de projection, luminosité ambiante et usage prévu. Nous vous orientons vers la solution Panasonic adaptée."
      />
    </>
  );
}
