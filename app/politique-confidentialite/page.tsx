import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Pixel Audiovisuel Pro",
  description: "Politique de confidentialité et protection des données personnelles du site Pixel Audiovisuel Pro.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        brand="Protection des données"
        title="Politique de confidentialité"
        subtitle="Comment Pixel Audiovisuel Pro collecte, utilise et protège vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD)."
        accent="gold"
      />

      <section className="bg-[#020b3c] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12 text-[#AAB2BD] leading-relaxed">
          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données collectées sur ce site est la société{" "}
              <strong className="text-white">PIXEL</strong> (Pixel Audiovisuel Pro), EURL au capital de
              7 622,45 €, immatriculée au RCS de Lyon sous le numéro 348 235 292, dont le siège social est
              situé 11 Rue de la Voie Lactée, 69370 Saint-Didier-au-Mont-d&apos;Or.
            </p>
            <p className="mt-4">
              Pour toute question relative à vos données personnelles, vous pouvez nous contacter à
              l&apos;adresse{" "}
              <a href="mailto:contact@pixelaudiovisuelpro.fr" className="underline hover:text-white transition-colors">
                contact@pixelaudiovisuelpro.fr
              </a>{" "}
              ou par téléphone au 04 78 43 16 16.
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Données collectées
            </h2>
            <p>
              Ce site ne dépose aucun cookie de mesure d&apos;audience ou de suivi publicitaire. Les
              seules données personnelles collectées le sont via nos formulaires de contact et de demande
              de devis, lorsque vous les remplissez volontairement :
            </p>
            <ul className="mt-4 space-y-1.5 list-disc list-inside">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Contenu de votre message ou de votre demande</li>
            </ul>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Finalité du traitement
            </h2>
            <p>
              Ces données sont utilisées exclusivement pour répondre à votre demande de contact ou de
              devis, vous fournir un conseil technique adapté à votre projet, et assurer le suivi
              commercial de votre demande. Elles ne font l&apos;objet d&apos;aucune prospection non
              sollicitée ni d&apos;aucune cession à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Base légale
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement, exprimé lors de l&apos;envoi
              volontaire d&apos;un formulaire, ainsi que sur l&apos;intérêt légitime de Pixel Audiovisuel
              Pro à répondre aux demandes commerciales qui lui sont adressées.
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Destinataires des données
            </h2>
            <p>
              Vos données sont destinées exclusivement à Pixel Audiovisuel Pro. Pour l&apos;envoi
              technique des emails générés par nos formulaires, nous utilisons le prestataire{" "}
              <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                Resend
              </a>{" "}
              (société basée aux États-Unis), qui agit en tant que sous-traitant et ne conserve ni
              n&apos;exploite vos données à d&apos;autres fins que l&apos;acheminement de votre message.
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier
              échange, sauf obligation légale de conservation plus longue (notamment en matière comptable
              et commerciale).
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Vos droits
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de portabilité sur vos données
              personnelles.
            </p>
            <p className="mt-4">
              Vous pouvez exercer ces droits à tout moment en nous contactant à{" "}
              <a href="mailto:contact@pixelaudiovisuelpro.fr" className="underline hover:text-white transition-colors">
                contact@pixelaudiovisuelpro.fr
              </a>
              . Vous disposez également du droit d&apos;introduire une réclamation auprès de la
              Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                www.cnil.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2
              className="text-xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-sora, system-ui)" }}
            >
              Cookies
            </h2>
            <p>
              Ce site n&apos;utilise aucun cookie de mesure d&apos;audience, de traçage publicitaire ou de
              réseau social. Aucun bandeau de consentement n&apos;est donc nécessaire à ce jour. Cette
              politique sera mise à jour si cela venait à évoluer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
