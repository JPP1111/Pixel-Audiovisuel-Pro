import type { MetadataRoute } from "next";
import { projectors, slugFromRef } from "@/components/data/panasonicProjectors";

const BASE_URL = "https://pixelaudiovisuelpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/videoprojection`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ecrans-projection`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ecrans-professionnels`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sonorisation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/captation-audio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/marques`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = projectors.map((p) => ({
    url: `${BASE_URL}/videoprojection/${slugFromRef(p.ref)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
