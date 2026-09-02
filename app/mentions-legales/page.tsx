import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales — Pixel Audiovisuel Pro",
  description: "Mentions légales du site Pixel Audiovisuel Pro.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        brand="Informations légales"
        title="Mentions légales"
        subtitle="Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)."
        accent="gold"
      />

      <section className="bg-[#020b3c] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12 text-[#AAB2BD] leading-relaxed">
          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Éditeur du site
            </h2>
            <p>
              Le site pixelaudiovisuelpro.com est édité par la société <strong className="text-white">PIXEL</strong>,
              exerçant sous le nom commercial <strong className="text-white">Pixel Audiovisuel Pro</strong>.
            </p>
            <ul className="mt-4 space-y-1.5">
              <li>Forme juridique : Société à responsabilité limitée à associé unique (EURL)</li>
              <li>Capital social : 7 622,45 €</li>
              <li>Siège social : 11 Rue de la Voie Lactée, 69370 Saint-Didier-au-Mont-d&apos;Or, France</li>
              <li>RCS Lyon : 348 235 292</li>
              <li>Numéro d&apos;identification européen (EUID) : FR6901.348235292</li>
              <li>Gérant : Jean-Paul Preher</li>
              <li>Téléphone : 04 78 43 16 16</li>
              <li>Email : contact@pixelaudiovisuelpro.fr</li>
            </ul>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Directeur de la publication
            </h2>
            <p>Jean-Paul Preher, en qualité de gérant de la société PIXEL.</p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Hébergement
            </h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-4 space-y-1.5">
              <li>Vercel Inc.</li>
              <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments présents sur ce site (textes, images, logos, graphismes) est,
              sauf mention contraire, la propriété de la société PIXEL ou de ses partenaires. Toute
              reproduction, représentation, modification ou diffusion, totale ou partielle, sans
              autorisation préalable est interdite.
            </p>
            <p className="mt-4">
              Les marques Panasonic, Oray, Yamaha et Sennheiser ainsi que leurs logos respectifs sont la
              propriété de leurs titulaires respectifs, cités sur ce site à titre informatif dans le
              cadre d&apos;un partenariat commercial de revente.
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
              <a href="/politique-confidentialite" className="underline hover:text-white transition-colors">
                politique de confidentialité
              </a>
              .
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Limitation de responsabilité
            </h2>
            <p>
              Pixel Audiovisuel Pro s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site, notamment les caractéristiques techniques et tarifs des
              produits présentés, sans garantie d&apos;exhaustivité. Les tarifs indiqués sont donnés à
              titre indicatif et peuvent évoluer sans préavis ; seul un devis établi par nos soins fait foi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
