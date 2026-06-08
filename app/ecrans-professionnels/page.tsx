import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Écrans professionnels Panasonic — Pixel Audiovisuel Pro",
  description:
    "Écrans professionnels et murs d'images Panasonic pour espaces d'accueil, auditoriums, régies. Conçus pour une utilisation intensive. Conseil et installation.",
};

const features = [
  {
    title: "Utilisation intensive",
    desc: "Contrairement aux téléviseurs grand public, conçus pour 18h/24 ou 24h/24 sans dégradation.",
  },
  {
    title: "Formats adaptés",
    desc: "Du petit format de salle de réunion aux grands murs d'images LED pour espaces institutionnels.",
  },
  {
    title: "Luminosité professionnelle",
    desc: "Niveaux de luminosité calibrés pour les environnements éclairés, vitrines et halls d'accueil.",
  },
  {
    title: "Connectivité complète",
    desc: "HDMI, DisplayPort, SDI, réseau. Intégration dans les infrastructures AV professionnelles existantes.",
  },
  {
    title: "Installation sécurisée",
    desc: "Fixations robustes, gestion thermique optimisée, points de montage certifiés.",
  },
  {
    title: "Supervision à distance",
    desc: "Contrôle via réseau, planification des contenus, monitoring de l'état des équipements.",
  },
];

export default function EcransProfessionnelsPage() {
  return (
    <>
      <PageHero
        brand="Panasonic — Écrans"
        title="Écrans professionnels & murs d'images"
        subtitle="Pour vos espaces d'accueil, salles de réunion, auditoriums, régies et halls institutionnels. Des écrans Panasonic conçus pour une utilisation professionnelle durable."
        accent="gold"
      />

      <section className="bg-[#0B111A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A86A] mb-3">
              Pourquoi un écran professionnel
            </p>
            <h2
              className="text-2xl lg:text-3xl font-semibold text-white mb-5"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              La différence entre écran grand public et écran professionnel
            </h2>
            <div className="space-y-4 text-[#AAB2BD] leading-relaxed">
              <p>
                Contrairement aux téléviseurs grand public, les écrans professionnels sont conçus pour
                une utilisation durable, une meilleure intégration, une installation sécurisée et une
                qualité d&apos;image adaptée aux environnements professionnels.
              </p>
              <p>
                Pixel Audiovisuel Pro vous conseille sur le format, la luminosité, le type
                d&apos;installation, la connectique et l&apos;intégration dans votre espace. Chaque projet est
                différent — nous dimensionnons la solution à votre besoin réel.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="bg-[#151A21] border border-[#303844] rounded-lg p-6">
                  <div className="w-1 h-5 bg-[#1E7BFF] rounded mb-4" />
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

          <div className="bg-[#151A21] border border-[#303844] rounded-lg p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-lg font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Solutions écrans sur le site Panasonic
              </p>
              <p className="text-sm text-[#AAB2BD]">
                Gamme complète d&apos;écrans professionnels Panasonic Connect
              </p>
            </div>
            <a
              href="https://eu.connect.panasonic.com/fr/fr/videoprojecteurs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1E7BFF] hover:bg-[#1565d8] text-white font-semibold rounded text-sm transition-colors whitespace-nowrap"
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
        title="Quel écran professionnel pour votre espace ?"
        subtitle="Format, luminosité, intégration, connectique : décrivez votre projet et nous vous proposons la solution Panasonic adaptée à vos contraintes réelles."
      />
    </>
  );
}
