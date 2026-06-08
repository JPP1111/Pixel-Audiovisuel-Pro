import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Pixel Audiovisuel Pro",
  description:
    "Contactez Pixel Audiovisuel Pro pour une étude de votre projet audiovisuel. Téléphone direct et email. Conseil technique gratuit avant achat.",
};

const usecases = [
  "Vous souhaitez équiper une salle de spectacle ou un théâtre",
  "Vous avez un projet de salle polyvalente ou d'auditorium",
  "Vous cherchez un vidéoprojecteur professionnel adapté à vos contraintes",
  "Vous avez besoin d'un écran de projection ou d'un écran professionnel",
  "Vous souhaitez une installation de sonorisation professionnelle",
  "Vous êtes collectivité, établissement culturel ou entreprise",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#020b3c] overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center top, #1E7BFF 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
            Parlons de votre projet
          </p>
          <h1
            className="text-4xl lg:text-5xl font-semibold text-white mb-6"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            Contactez Pixel Audiovisuel Pro
          </h1>
          <p className="text-[#AAB2BD] text-lg leading-relaxed">
            Un conseil technique gratuit avant achat. Nous analysons votre besoin et vous orientons
            vers la solution réellement adaptée à votre salle.
          </p>
        </div>
      </section>

      {/* Contact cards + info */}
      <section className="bg-[#020b3c] pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Phone */}
            <a
              href="tel:+33687356702"
              className="group bg-[#030d38] border border-[#1a2a8c] hover:border-[#1E7BFF]/50 rounded-lg p-8 flex flex-col gap-5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, #1E7BFF08 0%, transparent 60%)" }}
              />
              <div className="w-12 h-12 rounded-lg bg-[#1E7BFF]/10 border border-[#1E7BFF]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1E7BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#AAB2BD] mb-2">
                  Téléphone direct
                </p>
                <p
                  className="text-2xl font-semibold text-white group-hover:text-[#1E7BFF] transition-colors"
                  style={{ fontFamily: "var(--font-sora, system-ui)" }}
                >
                  06 87 35 67 02
                </p>
                <p className="text-sm text-[#AAB2BD] mt-1">
                  Appel direct — réponse personnalisée
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@pixelaudiovisuelpro.fr"
              className="group bg-[#030d38] border border-[#1a2a8c] hover:border-white/50 rounded-lg p-8 flex flex-col gap-5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, #010e4e08 0%, transparent 60%)" }}
              />
              <div className="w-12 h-12 rounded-lg bg-[#010e4e]/10 border border-[#010e4e]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#AAB2BD] mb-2">
                  Email
                </p>
                <p
                  className="text-xl font-semibold text-white group-hover:text-white transition-colors break-all"
                  style={{ fontFamily: "var(--font-sora, system-ui)" }}
                >
                  contact@pixelaudiovisuelpro.fr
                </p>
                <p className="text-sm text-[#AAB2BD] mt-1">
                  Réponse rapide — décrivez votre projet
                </p>
              </div>
            </a>
          </div>

          {/* Use cases */}
          <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-6">
              Nous contacter si…
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {usecases.map((u) => (
                <div key={u} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E7BFF] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[#AAB2BD] leading-relaxed">{u}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional pricing note */}
          <div className="mt-8 flex items-start gap-4 p-6 bg-[#020b3c] border border-[#010e4e]/20 rounded-lg">
            <div className="w-8 h-8 rounded-full border border-[#010e4e]/30 bg-[#010e4e]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p
                className="text-sm font-semibold text-white mb-1"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                Tarifs professionnels
              </p>
              <p className="text-sm text-[#AAB2BD] leading-relaxed">
                Pixel Audiovisuel Pro s&apos;adresse aux professionnels, collectivités, établissements
                culturels et entreprises. Des conditions tarifaires adaptées aux projets B2B sont
                disponibles sur demande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
