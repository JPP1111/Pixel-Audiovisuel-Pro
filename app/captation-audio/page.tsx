import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Captation audio sans fil Sennheiser — Pixel Audiovisuel Pro",
  description:
    "Micros HF et systèmes de captation audio sans fil Sennheiser pour scènes de spectacle, théâtres et espaces de conférence. Fiabilité et qualité sonore professionnelle.",
};

const features = [
  {
    title: "Micros-cravates (lavalier)",
    desc: "Discrets et fiables, adaptés aux conférences, formations et prises de parole prolongées.",
  },
  {
    title: "Micros main",
    desc: "Pour le chant, l'animation et les interventions sur scène. Confort de prise en main et qualité de captation.",
  },
  {
    title: "Systèmes multicanaux",
    desc: "Plusieurs micros HF simultanés sans interférence, pour tables rondes, théâtre et événements complexes.",
  },
  {
    title: "Gestion des fréquences",
    desc: "Diversité RF et scan automatique des fréquences libres pour une liaison stable, même en environnement saturé.",
  },
  {
    title: "Autonomie et fiabilité",
    desc: "Batteries longue durée, boîtiers robustes, conçus pour une utilisation intensive en tournée ou en salle fixe.",
  },
  {
    title: "Intégration système",
    desc: "Compatibilité avec vos consoles et systèmes de sonorisation existants pour une mise en œuvre sans friction.",
  },
];

export default function CaptationAudioPage() {
  return (
    <>
      <PageHero
        brand="Sennheiser — Captation audio"
        title="Captation audio sans fil"
        subtitle="Micros-cravates, micros main et systèmes HF professionnels Sennheiser. Pixel Audiovisuel Pro vous accompagne dans le choix de la solution de captation adaptée à votre scène et à votre nombre d'intervenants."
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
              Une captation fiable, même en environnement exigeant
            </h2>
            <div className="space-y-4 text-[#AAB2BD] leading-relaxed">
              <p>
                Nombre d&apos;intervenants, distance de scène, présence d&apos;autres émetteurs RF,
                intelligibilité recherchée : chaque configuration de captation audio a ses propres
                contraintes. Pixel Audiovisuel Pro vous accompagne dans le choix des micros HF
                Sennheiser adaptés à votre scène, votre salle ou votre espace de conférence.
              </p>
              <p>
                Référence mondiale en microphones et systèmes sans fil depuis plus de 75 ans, Sennheiser
                propose une gamme complète pour les environnements professionnels les plus exigeants :
                spectacles, théâtres, conférences et événements.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-8">
              Points clés
            </p>
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
                Gamme Sennheiser
              </p>
              <p className="text-sm text-[#AAB2BD]">
                Micros et systèmes sans fil professionnels
              </p>
            </div>
            <a
              href="https://www.sennheiser.com/fr-fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-semibold rounded-full text-sm transition-colors whitespace-nowrap"
            >
              Site Sennheiser
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Un projet de captation audio pour votre scène ?"
        subtitle="Décrivez-nous votre configuration : nombre d'intervenants, type de scène, contraintes RF. Nous vous orientons vers la solution Sennheiser adaptée."
      />
    </>
  );
}
