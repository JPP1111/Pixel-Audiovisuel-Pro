import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Écrans de projection ORAY — Pixel Audiovisuel Pro",
  description:
    "Écrans de projection ORAY : motorisés, cadres, toiles adaptées. Expertise française depuis 1947. Pour salles de réunion, théâtres et auditoriums.",
};

const types = [
  {
    title: "Écrans motorisés",
    desc: "Descente et remontée automatique. Intégration plafond ou murale. Pilotage par interrupteur ou domotique.",
  },
  {
    title: "Écrans à cadre fixe",
    desc: "Tension maximale de la toile pour une planéité parfaite. Idéal pour les salles dédiées à la projection.",
  },
  {
    title: "Toiles spécialisées",
    desc: "Blanc mat, gain, microperforée, ambient light rejection. Toile adaptée à votre projecteur et à votre environnement lumineux.",
  },
  {
    title: "Grandes dimensions",
    desc: "Formats sur mesure pour salles de spectacle, théâtres, auditoriums. Largeurs jusqu&apos;à plusieurs mètres.",
  },
  {
    title: "Intégration architecturale",
    desc: "Intégration discrète dans la structure du plafond ou du mur. Boîtier encastré ou apparent selon l&apos;espace.",
  },
  {
    title: "Format 16:9, 4:3, CinéScope",
    desc: "Ratio adapté à vos sources : présentation, cinéma, conférence. Plusieurs formats disponibles.",
  },
];

export default function EcrансProjectionPage() {
  return (
    <>
      <PageHero
        brand="ORAY — Écrans de projection"
        title="Écrans de projection professionnels"
        subtitle="La qualité d'une projection ne dépend pas uniquement du vidéoprojecteur. L'écran joue un rôle essentiel dans le rendu final. ORAY, expertise française depuis 1947."
        accent="gold"
      />

      <section className="bg-[#020b3c] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
              L&apos;importance de l&apos;écran
            </p>
            <h2
              className="text-2xl lg:text-3xl font-semibold text-white mb-5"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Un écran adapté pour une image optimale
            </h2>
            <div className="space-y-4 text-[#AAB2BD] leading-relaxed">
              <p>
                Pixel Audiovisuel Pro propose des solutions ORAY pour les salles de réunion, théâtres,
                salles polyvalentes, auditoriums et espaces de présentation.
              </p>
              <p>
                Écran motorisé, écran cadre, toile adaptée, dimensions spécifiques, intégration plafond
                ou murale : nous vous aidons à sélectionner l&apos;écran correspondant à vos contraintes
                techniques et esthétiques.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {types.map((t) => (
                <div key={t.title} className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6">
                  <div className="w-1 h-5 bg-white rounded-full mb-4" />
                  <h3
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: "var(--font-sora, system-ui)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#AAB2BD] leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Découvrir la gamme ORAY
              </p>
              <p className="text-sm text-[#AAB2BD]">
                Fabricant français d&apos;écrans de projection depuis 1947
              </p>
            </div>
            <a
              href="https://oray.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Site ORAY
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Quel écran de projection pour votre salle ?"
        subtitle="Dimensions, type de toile, intégration, distance de projection : partagez vos contraintes et nous sélectionnons l'écran ORAY adapté à votre installation."
      />
    </>
  );
}
