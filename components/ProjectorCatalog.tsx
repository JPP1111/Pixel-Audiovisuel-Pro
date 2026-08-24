"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projectors, categories, slugFromRef } from "@/components/data/panasonicProjectors";
import { formatPrice, statusStyle } from "@/components/lib/projectorFormat";
import ProjectorThumb from "@/components/ProjectorThumb";
import QuoteRequestButton from "@/components/QuoteRequestButton";

const lumensBuckets = [
  { label: "Toutes puissances", min: 0, max: Infinity },
  { label: "Jusqu'à 5 200 lm", min: 0, max: 5200 },
  { label: "6 000 – 8 000 lm", min: 6000, max: 8000 },
  { label: "10 000 – 15 000 lm", min: 10000, max: 15000 },
  { label: "16 000 lm et +", min: 16000, max: Infinity },
];

const resolutions = ["WUXGA", "4K", "4K Natif"];

const opticOptions = [
  { label: "Toutes optiques", value: "Toutes" },
  { label: "Optique interchangeable", value: "interchangeable" },
  { label: "Optique fixe", value: "fixe" },
] as const;

type SortKey = "priceAsc" | "priceDesc" | "lumensAsc" | "lumensDesc";

export default function ProjectorCatalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");
  const [activeResolution, setActiveResolution] = useState<string>("Toutes");
  const [activeOptic, setActiveOptic] = useState<string>("Toutes");
  const [bucketIndex, setBucketIndex] = useState(0);
  const [sort, setSort] = useState<SortKey>("lumensAsc");

  const filtered = useMemo(() => {
    const bucket = lumensBuckets[bucketIndex];
    const q = search.trim().toLowerCase();

    const result = projectors.filter((p) => {
      if (activeCategory !== "Toutes" && p.category !== activeCategory) return false;
      if (activeResolution !== "Toutes" && p.resolution !== activeResolution) return false;
      if (activeOptic === "interchangeable" && p.optic === "Optique intégrée") return false;
      if (activeOptic === "fixe" && p.optic !== "Optique intégrée") return false;
      if (p.lumens < bucket.min || p.lumens > bucket.max) return false;
      if (q && !p.ref.toLowerCase().includes(q) && !p.usage.toLowerCase().includes(q)) return false;
      return true;
    });

    result.sort((a, b) => {
      if (sort === "lumensAsc") return a.lumens - b.lumens;
      if (sort === "lumensDesc") return b.lumens - a.lumens;
      const priceA = a.price ?? Infinity;
      const priceB = b.price ?? Infinity;
      if (sort === "priceAsc") return priceA - priceB;
      return priceB - priceA;
    });

    return result;
  }, [search, activeCategory, activeResolution, activeOptic, bucketIndex, sort]);

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("Toutes");
    setActiveResolution("Toutes");
    setActiveOptic("Toutes");
    setBucketIndex(0);
    setSort("lumensAsc");
  };

  return (
    <div>
      {/* Filters */}
      <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-5">
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078] mb-2">
              Rechercher
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Référence, usage (ex: PT-RZ17K, auditorium…)"
              className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-4 py-2.5 text-sm text-white placeholder:text-[#5A628C] focus:outline-none focus:border-[#1E7BFF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078] mb-2">
              Résolution
            </label>
            <select
              value={activeResolution}
              onChange={(e) => setActiveResolution(e.target.value)}
              className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
            >
              <option value="Toutes">Toutes résolutions</option>
              {resolutions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078] mb-2">
              Luminosité
            </label>
            <select
              value={bucketIndex}
              onChange={(e) => setBucketIndex(Number(e.target.value))}
              className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
            >
              {lumensBuckets.map((b, i) => (
                <option key={b.label} value={i}>{b.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078] mb-2">
              Optique
            </label>
            <select
              value={activeOptic}
              onChange={(e) => setActiveOptic(e.target.value)}
              className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
            >
              {opticOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["Toutes", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className="text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full border transition-colors"
              style={
                activeCategory === c
                  ? { color: "#020b3c", background: "#EDE8DC", borderColor: "#EDE8DC" }
                  : { color: "#AAB2BD", background: "transparent", borderColor: "#1a2a8c" }
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1a2a8c]">
          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">
              Trier par
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-[#020b3c] border border-[#1a2a8c] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
            >
              <option value="lumensAsc">Luminosité croissante</option>
              <option value="lumensDesc">Luminosité décroissante</option>
              <option value="priceAsc">Prix croissant</option>
              <option value="priceDesc">Prix décroissant</option>
            </select>
          </div>
          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-[#9A9078] hover:text-white transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#AAB2BD] mb-5">
        {filtered.length} modèle{filtered.length > 1 ? "s" : ""} sur {projectors.length}
      </p>

      {/* Table — desktop */}
      <div className="hidden lg:block overflow-x-auto bg-[#030d38] border border-[#1a2a8c] rounded-lg mb-16">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1a2a8c] text-left">
              <th className="px-5 py-4"></th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Référence</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Usage</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Lumens</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Résolution</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Techno</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Tarif public</th>
              <th className="px-5 py-4 text-xs font-semibold tracking-[0.15em] uppercase text-[#9A9078]">Statut</th>
              <th className="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.ref} className="border-b border-[#1a2a8c] last:border-0 hover:bg-[#041049] transition-colors">
                <td className="px-5 py-4">
                  <ProjectorThumb image={p.image} refLabel={p.ref} size={48} />
                </td>
                <td className="px-5 py-4 font-semibold text-white whitespace-nowrap">{p.ref}</td>
                <td className="px-5 py-4 text-[#AAB2BD] max-w-xs">{p.usage}</td>
                <td className="px-5 py-4 text-[#AAB2BD] whitespace-nowrap">{p.lumens.toLocaleString("fr-FR")} lm</td>
                <td className="px-5 py-4 text-[#AAB2BD] whitespace-nowrap">{p.resolution}</td>
                <td className="px-5 py-4 text-[#AAB2BD] whitespace-nowrap">{p.technology}</td>
                <td className="px-5 py-4 text-white font-medium whitespace-nowrap">{formatPrice(p.price)}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                    style={statusStyle(p.status)}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/videoprojection/${slugFromRef(p.ref)}`}
                      className="text-xs font-semibold text-[#9A9078] hover:text-white transition-colors"
                    >
                      Fiche
                    </Link>
                    <QuoteRequestButton
                      productRef={p.ref}
                      className="text-xs font-semibold text-[#1E7BFF] hover:text-[#4a9dff] transition-colors"
                    >
                      Devis →
                    </QuoteRequestButton>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="px-5 py-10 text-center text-[#9A9078]">
                  Aucun modèle ne correspond à ces critères.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Cards — mobile / tablet */}
      <div className="lg:hidden space-y-4 mb-16">
        {filtered.map((p) => (
          <div key={p.ref} className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <ProjectorThumb image={p.image} refLabel={p.ref} size={44} />
                <h3 className="text-base font-semibold text-white">{p.ref}</h3>
              </div>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap"
                style={statusStyle(p.status)}
              >
                {p.status}
              </span>
            </div>
            <p className="text-sm text-[#AAB2BD] mb-4">{p.usage}</p>
            <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
              <div>
                <p className="text-[#9A9078] text-xs mb-1">Lumens</p>
                <p className="text-white font-medium">{p.lumens.toLocaleString("fr-FR")}</p>
              </div>
              <div>
                <p className="text-[#9A9078] text-xs mb-1">Résolution</p>
                <p className="text-white font-medium">{p.resolution}</p>
              </div>
              <div>
                <p className="text-[#9A9078] text-xs mb-1">Techno</p>
                <p className="text-white font-medium">{p.technology}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#1a2a8c]">
              <p className="text-sm font-semibold text-white">{formatPrice(p.price)}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={`/videoprojection/${slugFromRef(p.ref)}`}
                  className="text-xs font-semibold text-[#9A9078] hover:text-white transition-colors"
                >
                  Fiche
                </Link>
                <QuoteRequestButton
                  productRef={p.ref}
                  className="text-xs font-semibold text-[#1E7BFF] hover:text-[#4a9dff] transition-colors"
                >
                  Devis →
                </QuoteRequestButton>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="bg-[#030d38] border border-[#1a2a8c] rounded-lg p-8 text-center text-[#9A9078]">
            Aucun modèle ne correspond à ces critères.
          </div>
        )}
      </div>

      <p className="text-xs text-[#5A628C] leading-relaxed">
        Tarifs publics HT donnés à titre indicatif, susceptibles d&apos;évoluer sans préavis.{" "}
        <Link href="/contact" className="underline hover:text-[#9A9078] transition-colors">
          Contactez-nous
        </Link>{" "}
        pour une offre chiffrée et personnalisée incluant installation et mise en service.
      </p>
    </div>
  );
}
