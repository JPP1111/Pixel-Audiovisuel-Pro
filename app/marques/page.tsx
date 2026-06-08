import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nos marques — Pixel Audiovisuel Pro",
  description:
    "Pixel Audiovisuel Pro distribue Panasonic, ORAY et Yamaha Pro Audio. Trois marques de référence pour équiper vos salles professionnelles.",
};

const brands = [
  {
    letter: "P",
    name: "Panasonic Connect",
    tagline: "Référence mondiale en vidéoprojection professionnelle",
    accent: "#1E7BFF",
    href: "https://eu.connect.panasonic.com/fr/fr/videoprojecteurs",
    body: [
      "Panasonic Connect est le partenaire de Pixel Audiovisuel Pro pour la vidéoprojection et les écrans professionnels. Distributeur agréé depuis plus de 30 ans, nous connaissons en profondeur les gammes et pouvons vous orienter vers la solution la mieux adaptée à votre salle.",
      "La gamme vidéoprojecteurs Panasonic couvre les besoins de 3 000 à 50 000 lumens, avec des technologies laser qui garantissent une longue durée de vie sans entretien régulier. Des installations légères en salle de réunion aux grandes projections en salle de spectacle, Panasonic propose une solution.",
    ],
    products: ["Vidéoprojecteurs laser 4K", "Écrans professionnels", "Murs d'images LED", "Accessoires et optiques"],
    linkLabel: "Voir les vidéoprojecteurs Panasonic",
  },
  {
    letter: "O",
    name: "ORAY",
    tagline: "Fabricant français d'écrans de projection depuis 1947",
    accent: "#EDE8DC",
    href: "https://oray.fr/",
    body: [
      "ORAY est une entreprise française fondée en 1947, spécialisée dans la fabrication d'écrans de projection professionnels. Leur expertise et leur longévité sur le marché témoignent d'un savoir-faire reconnu dans les environnements exigeants.",
      "Écrans motorisés, écrans à cadre fixe, toiles spécialisées (gain, microperforées, ambient light rejection) : la gamme ORAY répond aux besoins des salles de réunion, théâtres, auditoriums et espaces de conférence.",
    ],
    products: ["Écrans motorisés", "Écrans à cadre fixe", "Toiles spécialisées", "Grands formats sur mesure"],
    linkLabel: "Voir le site ORAY",
  },
  {
    letter: "Y",
    name: "Yamaha Pro Audio",
    tagline: "Solutions d'intégration audio professionnelle CIS",
    accent: "#EDE8DC",
    href: "https://fr.yamaha.com/fr/business/audio/",
    body: [
      "Yamaha Pro Audio propose des solutions d'intégration audio professionnelle sous la gamme CIS (Commercial Installation Solutions). Des enceintes aux processeurs de signal, en passant par l'amplification et les consoles, Yamaha couvre l'ensemble de la chaîne audio professionnelle.",
      "Pixel Audiovisuel Pro intègre les solutions Yamaha dans les projets de sonorisation pour salles de spectacle, théâtres, salles polyvalentes et espaces de conférence. Nous dimensionnons la solution selon le volume et l'acoustique réels de votre espace.",
    ],
    products: ["Enceintes d'installation", "Amplificateurs", "Processeurs de signal", "Solutions réseau audio"],
    linkLabel: "Voir le site Yamaha Pro",
  },
];

export default function MarquesPage() {
  return (
    <>
      <PageHero
        brand="Nos partenaires"
        title="Trois marques de référence mondiale"
        subtitle="Pixel Audiovisuel Pro sélectionne uniquement des marques dont la fiabilité, la qualité et le support technique sont reconnus dans les environnements professionnels les plus exigeants."
        accent="gold"
      />

      <section className="bg-[#020b3c] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
          {brands.map((brand, i) => (
            <div key={brand.name} className="relative">
              {/* Separator between brands */}
              {i > 0 && (
                <div
                  className="absolute -top-8 left-0 right-0 h-px opacity-30"
                  style={{ background: `linear-gradient(90deg, transparent, ${brand.accent}, transparent)` }}
                />
              )}

              <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg overflow-hidden">
                {/* Header bar */}
                <div
                  className="px-8 py-5 flex items-center gap-5 border-b border-[#1a2a8c]"
                  style={{ background: `${brand.accent}08` }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border flex-shrink-0"
                    style={{
                      color: brand.accent,
                      borderColor: `${brand.accent}40`,
                      background: `${brand.accent}10`,
                      fontFamily: "var(--font-sora, system-ui)",
                    }}
                  >
                    {brand.letter}
                  </div>
                  <div>
                    <p
                      className="text-xl font-semibold text-white"
                      style={{ fontFamily: "var(--font-sora, system-ui)" }}
                    >
                      {brand.name}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: brand.accent }}>
                      {brand.tagline}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {brand.body.map((para, j) => (
                      <p key={j} className="text-[#AAB2BD] leading-relaxed text-sm">
                        {para}
                      </p>
                    ))}
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium mt-2 transition-colors"
                      style={{ color: brand.accent }}
                    >
                      {brand.linkLabel}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#AAB2BD] mb-4">
                      Produits
                    </p>
                    <ul className="flex flex-col gap-2">
                      {brand.products.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-[#F4F6F8]">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: brand.accent }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Un projet d'équipement avec nos marques ?"
        subtitle="Panasonic, ORAY ou Yamaha — nous vous conseillons sur le meilleur choix pour votre salle et votre budget."
      />
    </>
  );
}
