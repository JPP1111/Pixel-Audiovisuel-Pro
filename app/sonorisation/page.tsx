import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Sonorisation professionnelle Yamaha — Pixel Audiovisuel Pro",
  description:
    "Sonorisation Yamaha Pro Audio pour salles de spectacle, conférences, événements. Enceintes, amplification, traitement audio et intégration CIS.",
};

const features = [
  {
    title: "Diffusion sonore",
    desc: "Enceintes professionnelles adaptées au volume et à l'acoustique de votre salle. Son clair et homogène.",
  },
  {
    title: "Amplification",
    desc: "Amplificateurs professionnels Yamaha. Puissance adaptée, gestion de l'impédance, protection des équipements.",
  },
  {
    title: "Traitement audio",
    desc: "Processeurs de signal, égalisation, gestion du délai et de la réverbération pour une acoustique optimisée.",
  },
  {
    title: "Pilotage et supervision",
    desc: "Contrôle centralisé via réseau, preset par usage (spectacle, conférence, prise de parole), automation.",
  },
  {
    title: "Solutions CIS",
    desc: "Commercial Installation Solutions de Yamaha : des équipements pensés pour l'intégration permanente.",
  },
  {
    title: "Étude acoustique",
    desc: "Nous analysons votre salle (volume, matériaux, réverbération) avant de proposer une solution cohérente.",
  },
];

export default function SonorisationPage() {
  return (
    <>
      <PageHero
        brand="Yamaha Pro Audio"
        title="Sonorisation professionnelle"
        subtitle="Une salle bien équipée offre une image de qualité, mais aussi un son clair, intelligible et homogène. Yamaha Pro Audio, référence mondiale en intégration audio professionnelle."
        accent="gold"
      />

      <section className="bg-[#020b3c] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">
              Notre approche
            </p>
            <h2
              className="text-2xl lg:text-3xl font-semibold text-white mb-5"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Chaque salle a ses propres contraintes acoustiques
            </h2>
            <div className="space-y-4 text-[#AAB2BD] leading-relaxed">
              <p>
                Pixel Audiovisuel Pro vous accompagne dans vos projets de sonorisation professionnelle
                Yamaha : diffusion sonore, enceintes, amplification, traitement audio, pilotage et
                intégration.
              </p>
              <p>
                Nous étudions votre salle afin de proposer une solution cohérente avec son volume, son
                acoustique et ses usages : spectacle, conférence, réunion publique, projection,
                événement ou prise de parole.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6">
                  <div className="w-1 h-5 bg-white rounded-full mb-4" />
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

          <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Gamme Yamaha Pro Audio
              </p>
              <p className="text-sm text-[#AAB2BD]">
                Solutions d&apos;intégration audio professionnelle CIS
              </p>
            </div>
            <a
              href="https://fr.yamaha.com/fr/business/audio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Site Yamaha
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Un projet de sonorisation pour votre salle ?"
        subtitle="Décrivez-nous votre salle, son volume, son acoustique et vos usages. Nous vous proposons une solution Yamaha cohérente avec vos contraintes réelles."
      />
    </>
  );
}
