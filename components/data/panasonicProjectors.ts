export type ProjectorStatus = "Disponible" | "Nouveauté 2026" | "Fin de vie";

export interface Projector {
  ref: string;
  category: string;
  usage: string;
  lumens: number;
  resolution: string;
  technology: string;
  optic: string;
  highlight: string;
  price: number | null;
  status: ProjectorStatus;
  image: string | null;
}

export const categories = [
  "Réunion & mobilité",
  "Courte focale",
  "Installation 3LCD",
  "Installation 1DLP",
  "Grands espaces 3DLP",
] as const;

export function slugFromRef(ref: string) {
  return ref.toLowerCase();
}

export function getProjectorBySlug(slug: string) {
  return projectors.find((p) => slugFromRef(p.ref) === slug);
}

const PANASONIC_MEDIA = "https://eu.connect.panasonic.com/sites/default/files/styles/large/public/media/image";

const img = {
  vmq: `${PANASONIC_MEDIA}/2026-04/pt-vmq-series-slant-high-res-transparent-featured-image_1.webp`,
  vmz82: `${PANASONIC_MEDIA}/2026-04/pt-vmz82-series-slant-high-res-transparent-featured-image_1.webp`,
  cmz50: `${PANASONIC_MEDIA}/2026-04/pt-cmz50-slant-high-res-transparent-featured-image.webp`,
  vmz7st: `${PANASONIC_MEDIA}/2026-04/pt-vmz7st-series-slant-high-res-transparent-featured-image.webp`,
  mz882: `${PANASONIC_MEDIA}/2026-04/pt-mz882-series-slant-high-res-transparent-featured-image.webp`,
  rqWhite: `${PANASONIC_MEDIA}/2026-04/pt-rqseries-slanthighreswhitetransparent-featuredimage.webp`,
  rq: `${PANASONIC_MEDIA}/2026-04/pt-rqseries-slanthighrestransparent-featuredimage.webp`,
  req: `${PANASONIC_MEDIA}/2026-04/pt-reqseries-slanthighrestransparent-featuredimage.webp`,
  rez: `${PANASONIC_MEDIA}/2026-04/pt-rezseries-fronthighrestransparent-featuredimage.webp`,
  rq25k: `${PANASONIC_MEDIA}/2026-04/pt-rq25k-slanthighrestransparent-featuredimage.webp`,
  rq45k: `${PANASONIC_MEDIA}/2026-03/pt-rq45kslanthighrestransparent-featuredimage.webp`,
  rz44k: `${PANASONIC_MEDIA}/2026-03/pt-rz44kslanthighrestransparent-featuredimage.webp`,
  rq50k: `${PANASONIC_MEDIA}/2026-04/pt-rq50kfronthighrestransparent.webp`,
};

export const projectors: Projector[] = [
  { ref: "PT-LMZ420", category: "Réunion & mobilité", usage: "Petites et moyennes salles de réunion, formation et mobilité", lumens: 4200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Format compact et mise en œuvre rapide", price: 1378.00, status: "Disponible", image: "/Images/projecteurs/pt-lmz420.jpg" },
  { ref: "PT-LMZ460", category: "Réunion & mobilité", usage: "Petites et moyennes salles de réunion, formation et mobilité", lumens: 4600, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Format compact et mise en œuvre rapide", price: 1445.60, status: "Disponible", image: "/Images/projecteurs/pt-lmz460.jpg" },
  { ref: "PT-VMZ51", category: "Réunion & mobilité", usage: "Grandes salles de réunion, conférence et enseignement supérieur", lumens: 5200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Polyvalence, luminosité et faible encombrement", price: 2519.26, status: "Disponible", image: "/Images/projecteurs/pt-vmz51.jpg" },
  { ref: "PT-VMZ51S", category: "Réunion & mobilité", usage: "Grandes salles de réunion, conférence et enseignement supérieur", lumens: 5200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Polyvalence, luminosité et faible encombrement", price: 2329.43, status: "Disponible", image: "/Images/projecteurs/pt-vmz51s.jpg" },
  { ref: "PT-VMQ65", category: "Réunion & mobilité", usage: "Réunions premium, grandes salles et présentations 4K", lumens: 6500, resolution: "4K", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "4K lumineux dans un format compact", price: 3529.10, status: "Nouveauté 2026", image: img.vmq },
  { ref: "PT-VMZ62", category: "Réunion & mobilité", usage: "Grandes salles de réunion, conférence et enseignement supérieur", lumens: 6500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Polyvalence, luminosité et faible encombrement", price: 3272.44, status: "Disponible", image: img.vmz82 },
  { ref: "PT-VMQ75", category: "Réunion & mobilité", usage: "Réunions premium, grandes salles et présentations 4K", lumens: 7300, resolution: "4K", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "4K lumineux dans un format compact", price: 4313.35, status: "Nouveauté 2026", image: img.vmq },
  { ref: "PT-VMZ72", category: "Réunion & mobilité", usage: "Grandes salles de réunion, conférence et enseignement supérieur", lumens: 7300, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Polyvalence, luminosité et faible encombrement", price: 3999.65, status: "Disponible", image: img.vmz82 },
  { ref: "PT-VMQ85", category: "Réunion & mobilité", usage: "Réunions premium, grandes salles et présentations 4K", lumens: 8000, resolution: "4K", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "4K lumineux dans un format compact", price: 4840.00, status: "Nouveauté 2026", image: img.vmq },
  { ref: "PT-VMZ82", category: "Réunion & mobilité", usage: "Grandes salles de réunion, conférence et enseignement supérieur", lumens: 8000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Polyvalence, luminosité et faible encombrement", price: 4488.00, status: "Disponible", image: img.vmz82 },

  { ref: "PT-TMZ400", category: "Courte focale", usage: "Salles de réunion, salles de classe et espaces avec faible recul", lumens: 4000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Grande image avec peu de recul", price: null, status: "Fin de vie", image: "/Images/projecteurs/pt-tmz400.jpg" },
  { ref: "PT-CMZ50", category: "Courte focale", usage: "Salles de réunion, salles de classe et espaces avec faible recul", lumens: 5200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Grande image avec peu de recul", price: 3796.00, status: "Disponible", image: img.cmz50 },
  { ref: "PT-VMZ6ST", category: "Courte focale", usage: "Salles de réunion, salles de classe et espaces avec faible recul", lumens: 6200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Grande image avec peu de recul", price: 3978.00, status: "Disponible", image: img.vmz7st },
  { ref: "PT-VMZ7ST", category: "Courte focale", usage: "Salles de réunion, salles de classe et espaces avec faible recul", lumens: 7000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique intégrée", highlight: "Grande image avec peu de recul", price: 4896.00, status: "Disponible", image: img.vmz7st },

  { ref: "PT-MZ682", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 6500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique standard incluse", highlight: "Installation professionnelle polyvalente", price: 5289.38, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ682L", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 6500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Installation professionnelle polyvalente", price: 5136.80, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ782", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 7500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique standard incluse", highlight: "Installation professionnelle polyvalente", price: 6142.50, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ782L", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 7500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Installation professionnelle polyvalente", price: 5965.31, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ882", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 8200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Optique standard incluse", highlight: "Installation professionnelle polyvalente", price: 7336.88, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ882L", category: "Installation 3LCD", usage: "Auditoriums, salles polyvalentes et installations fixes", lumens: 8200, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Installation professionnelle polyvalente", price: 7125.23, status: "Disponible", image: img.mz882 },
  { ref: "PT-MZ11KL", category: "Installation 3LCD", usage: "Auditoriums, salles de spectacle et grands écrans", lumens: 11000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Forte luminosité et couleurs homogènes", price: 11200.00, status: "Disponible", image: "/Images/projecteurs/pt-mz11kl.jpg" },
  { ref: "PT-MZ14KL", category: "Installation 3LCD", usage: "Auditoriums, salles de spectacle et grands écrans", lumens: 14000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Forte luminosité et couleurs homogènes", price: 15200.00, status: "Disponible", image: "/Images/projecteurs/pt-mz14kl.jpg" },
  { ref: "PT-MZ17KL", category: "Installation 3LCD", usage: "Auditoriums, salles de spectacle et grands écrans", lumens: 16500, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Forte luminosité et couleurs homogènes", price: 19088.00, status: "Disponible", image: "/Images/projecteurs/pt-mz17kl.jpg" },
  { ref: "PT-MZ20KL", category: "Installation 3LCD", usage: "Auditoriums, salles de spectacle et grands écrans", lumens: 20000, resolution: "WUXGA", technology: "3LCD Laser", optic: "Sans optique", highlight: "Forte luminosité et couleurs homogènes", price: 26400.00, status: "Disponible", image: "/Images/projecteurs/pt-mz20kl.jpg" },

  { ref: "PT-FRZ55", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 5000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique intégrée", highlight: "Robustesse et flexibilité d'installation", price: 6500.00, status: "Disponible", image: "/Images/projecteurs/pt-frz55.jpg" },
  { ref: "PT-FRQ50", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 5200, resolution: "4K", technology: "1DLP Laser", optic: "Optique intégrée", highlight: "4K, traitement rapide et grande flexibilité", price: 4928.74, status: "Disponible", image: "/Images/projecteurs/pt-frq50.jpg" },
  { ref: "PT-FRZ50", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 5200, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique intégrée", highlight: "Robustesse et flexibilité d'installation", price: 4265.62, status: "Disponible", image: "/Images/projecteurs/pt-frz50.jpg" },
  { ref: "PT-FRQ60", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 6000, resolution: "4K", technology: "1DLP Laser", optic: "Optique intégrée", highlight: "4K, traitement rapide et grande flexibilité", price: 6404.58, status: "Disponible", image: "/Images/projecteurs/pt-frq60.jpg" },
  { ref: "PT-FRZ60", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 6000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique intégrée", highlight: "Robustesse et flexibilité d'installation", price: 5971.88, status: "Disponible", image: "/Images/projecteurs/pt-frz60.jpg" },
  { ref: "PT-RQ6L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 6500, resolution: "4K", technology: "1DLP Laser", optic: "Optique interchangeable", highlight: "4K, traitement rapide et grande flexibilité", price: 9680.00, status: "Disponible", image: img.rqWhite },
  { ref: "PT-RZ6L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 6500, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique interchangeable", highlight: "Robustesse et flexibilité d'installation", price: 8873.81, status: "Disponible", image: img.rqWhite },
  { ref: "PT-RQ7L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 7500, resolution: "4K", technology: "1DLP Laser", optic: "Optique interchangeable", highlight: "4K, traitement rapide et grande flexibilité", price: 11440.00, status: "Disponible", image: img.rq },
  { ref: "PT-RZ7L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 7500, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique interchangeable", highlight: "Robustesse et flexibilité d'installation", price: 10764.00, status: "Disponible", image: img.rq },
  { ref: "PT-REQ80", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 8000, resolution: "4K", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "4K, traitement rapide et grande flexibilité", price: 14080.00, status: "Disponible", image: img.req },
  { ref: "PT-REQ80L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 8000, resolution: "4K", technology: "1DLP Laser", optic: "Sans optique", highlight: "4K, traitement rapide et grande flexibilité", price: 13024.00, status: "Disponible", image: img.req },
  { ref: "PT-REZ80", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 8000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "Robustesse et flexibilité d'installation", price: 10560.00, status: "Disponible", image: img.rez },
  { ref: "PT-REZ80L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 8000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Sans optique", highlight: "Robustesse et flexibilité d'installation", price: 9504.00, status: "Disponible", image: img.rez },
  { ref: "PT-REQ10", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 10000, resolution: "4K", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "4K, traitement rapide et grande flexibilité", price: 17600.00, status: "Disponible", image: img.req },
  { ref: "PT-REQ10L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 10000, resolution: "4K", technology: "1DLP Laser", optic: "Sans optique", highlight: "4K, traitement rapide et grande flexibilité", price: 16544.00, status: "Disponible", image: img.req },
  { ref: "PT-REZ10", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 10000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "Robustesse et flexibilité d'installation", price: 14080.00, status: "Disponible", image: img.rez },
  { ref: "PT-REZ10L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 10000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Sans optique", highlight: "Robustesse et flexibilité d'installation", price: 13024.00, status: "Disponible", image: img.rez },
  { ref: "PT-REQ12", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 12000, resolution: "4K", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "4K, traitement rapide et grande flexibilité", price: 21120.00, status: "Disponible", image: img.req },
  { ref: "PT-REQ12L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 12000, resolution: "4K", technology: "1DLP Laser", optic: "Sans optique", highlight: "4K, traitement rapide et grande flexibilité", price: 20064.00, status: "Disponible", image: img.req },
  { ref: "PT-REZ12", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 12000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "Robustesse et flexibilité d'installation", price: 17600.00, status: "Disponible", image: img.rez },
  { ref: "PT-REZ12L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 12000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Sans optique", highlight: "Robustesse et flexibilité d'installation", price: 16544.00, status: "Disponible", image: img.rez },
  { ref: "PT-REQ15", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 15000, resolution: "4K", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "4K, traitement rapide et grande flexibilité", price: 26400.00, status: "Disponible", image: img.req },
  { ref: "PT-REQ15L", category: "Installation 1DLP", usage: "Scénographie, musées, événementiel et installations 4K", lumens: 15000, resolution: "4K", technology: "1DLP Laser", optic: "Sans optique", highlight: "4K, traitement rapide et grande flexibilité", price: 25344.00, status: "Disponible", image: img.req },
  { ref: "PT-REZ15", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 15000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Optique standard incluse", highlight: "Robustesse et flexibilité d'installation", price: 22880.00, status: "Disponible", image: img.rez },
  { ref: "PT-REZ15L", category: "Installation 1DLP", usage: "Spectacle, location, auditoriums et installations intensives", lumens: 15000, resolution: "WUXGA", technology: "1DLP Laser", optic: "Sans optique", highlight: "Robustesse et flexibilité d'installation", price: 21824.00, status: "Disponible", image: img.rez },

  { ref: "PT-RQ18K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 16000, resolution: "4K", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 75032.31, status: "Disponible", image: img.rq25k },
  { ref: "PT-RZ17K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 16000, resolution: "WUXGA", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 59641.07, status: "Disponible", image: img.rq25k },
  { ref: "PT-RQ25K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 20000, resolution: "4K", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 81659.26, status: "Disponible", image: img.rq25k },
  { ref: "PT-RZ24K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 20000, resolution: "WUXGA", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 77377.55, status: "Disponible", image: img.rq25k },
  { ref: "PT-RQ35K2", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 30500, resolution: "4K", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 129290.91, status: "Nouveauté 2026", image: "/Images/projecteurs/pt-rq35k2.jpg" },
  { ref: "PT-RZ34K2", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 30500, resolution: "WUXGA", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 112181.02, status: "Nouveauté 2026", image: null },
  { ref: "PT-RQ45K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 42000, resolution: "4K", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 135000.00, status: "Disponible", image: img.rq45k },
  { ref: "PT-RZ44K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 42000, resolution: "WUXGA", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 114750.00, status: "Disponible", image: img.rz44k },
  { ref: "PT-RQ50K", category: "Grands espaces 3DLP", usage: "Grands événements, mapping, stades et très grandes salles", lumens: 50000, resolution: "4K Natif", technology: "3DLP Laser", optic: "Sans optique", highlight: "Très forte puissance lumineuse", price: 266526.00, status: "Disponible", image: img.rq50k },
];
