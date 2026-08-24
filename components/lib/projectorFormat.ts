import type { ProjectorStatus } from "@/components/data/panasonicProjectors";

export function formatPrice(price: number | null) {
  if (price === null) return "Nous consulter";
  return `À partir de ${price.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € HT`;
}

export function statusStyle(status: ProjectorStatus) {
  if (status === "Disponible") return { color: "#5FE0A0", borderColor: "#5FE0A040", background: "#5FE0A00C" };
  if (status === "Nouveauté 2026") return { color: "#EDE8DC", borderColor: "#EDE8DC40", background: "#EDE8DC0C" };
  return { color: "#9A9078", borderColor: "#9A907840", background: "#9A907808" };
}
