import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";
import BackButton from "@/components/BackButton";
import ProjectorThumb from "@/components/ProjectorThumb";
import QuoteRequestButton from "@/components/QuoteRequestButton";
import { projectors, slugFromRef, getProjectorBySlug } from "@/components/data/panasonicProjectors";
import { formatPrice, statusStyle } from "@/components/lib/projectorFormat";

interface PageProps {
  params: Promise<{ ref: string }>;
}

export function generateStaticParams() {
  return projectors.map((p) => ({ ref: slugFromRef(p.ref) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ref } = await params;
  const projector = getProjectorBySlug(ref);
  if (!projector) return {};

  return {
    title: `${projector.ref} — Vidéoprojecteur Panasonic ${projector.lumens.toLocaleString("fr-FR")} lumens | Pixel Audiovisuel Pro`,
    description: `${projector.ref} — ${projector.lumens.toLocaleString("fr-FR")} lumens, résolution ${projector.resolution}, technologie ${projector.technology}. ${projector.highlight}. Tarif public HT et devis chez Pixel Audiovisuel Pro.`,
  };
}

const specRows = (p: NonNullable<ReturnType<typeof getProjectorBySlug>>) => [
  { label: "Catégorie", value: p.category },
  { label: "Luminosité", value: `${p.lumens.toLocaleString("fr-FR")} lumens` },
  { label: "Résolution", value: p.resolution },
  { label: "Technologie", value: p.technology },
  { label: "Configuration optique", value: p.optic },
  { label: "Atout principal", value: p.highlight },
];

export default async function ProjectorDetailPage({ params }: PageProps) {
  const { ref } = await params;
  const projector = getProjectorBySlug(ref);

  if (!projector) notFound();

  const related = projectors
    .filter((p) => p.category === projector.category && p.ref !== projector.ref)
    .slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "#010e4e" }}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-12 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center top, #EDE8DC 0%, transparent 68%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <BackButton label="Retour" />

          <span
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full border mb-6"
            style={{ color: "#EDE8DC", borderColor: "#EDE8DC40", background: "#EDE8DC08" }}
          >
            Panasonic — {projector.category}
          </span>

          <h1
            className="text-4xl lg:text-5xl font-semibold text-[#EDE8DC] leading-tight mb-4"
            style={{ fontFamily: "var(--font-sora, system-ui)" }}
          >
            {projector.ref}
          </h1>
          <p className="text-[#9A9078] text-lg leading-relaxed max-w-2xl">{projector.usage}</p>
        </div>
      </section>

      <section className="bg-[#020b3c] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {projector.image && (
            <div className="bg-white rounded-lg p-8 mb-8 flex items-center justify-center">
              <Image
                src={projector.image}
                alt={projector.ref}
                width={640}
                height={472}
                className="object-contain max-h-72 w-auto"
                priority
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Specs */}
            <div className="md:col-span-2 bg-[#030d38] border border-[#1a2a8c] rounded-lg overflow-hidden">
              {specRows(projector).map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-start justify-between gap-6 px-6 py-4 ${i !== specRows(projector).length - 1 ? "border-b border-[#1a2a8c]" : ""}`}
                >
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078] pt-0.5 whitespace-nowrap">
                    {row.label}
                  </span>
                  <span className="text-sm text-white text-right">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Price / CTA card */}
            <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6 flex flex-col gap-5 h-fit">
              <div>
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4"
                  style={statusStyle(projector.status)}
                >
                  {projector.status}
                </span>
                <p
                  className="text-2xl font-semibold text-white leading-snug"
                  style={{ fontFamily: "var(--font-sora, system-ui)" }}
                >
                  {formatPrice(projector.price)}
                </p>
                <p className="text-xs text-[#5A628C] mt-2">Tarif public HT</p>
              </div>
              <QuoteRequestButton
                productRef={projector.ref}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7BFF] hover:bg-[#1565d8] text-white font-semibold rounded-full text-sm transition-colors"
              >
                Demander un devis
              </QuoteRequestButton>
              <a
                href="tel:+33478431616"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#1a2a8c] hover:border-[#EDE8DC]/50 text-white font-semibold rounded-full text-sm transition-colors"
              >
                04 78 43 16 16
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-6">
                Autres modèles — {projector.category}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.ref}
                    href={`/videoprojection/${slugFromRef(r.ref)}`}
                    className="bg-[#030d38] border border-[#1a2a8c] hover:border-[#1E7BFF]/50 rounded-lg p-5 transition-colors"
                  >
                    <ProjectorThumb image={r.image} refLabel={r.ref} size={40} />
                    <p className="text-sm font-semibold text-white mt-3 mb-1">{r.ref}</p>
                    <p className="text-xs text-[#9A9078] mb-3">{r.lumens.toLocaleString("fr-FR")} lm · {r.resolution}</p>
                    <p className="text-sm text-white font-medium">{formatPrice(r.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Un projet pour ce vidéoprojecteur ?"
        subtitle="Décrivez-nous votre salle et votre usage : nous confirmons que ce modèle est adapté et vous accompagnons de la fourniture à l'installation."
      />
    </>
  );
}
