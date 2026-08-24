import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import VideoProjectionTabs from "@/components/VideoProjectionTabs";

export const metadata: Metadata = {
  title: "Vidéoprojecteurs professionnels Panasonic — Pixel Audiovisuel Pro",
  description:
    "Gamme complète de vidéoprojecteurs Panasonic de 3 000 à 50 000 lumens, avec tarifs publics HT. Conseil, fourniture et installation pour salles de spectacle, théâtres et auditoriums.",
};

export default function VideoProjectionPage() {
  return (
    <>
      <PageHero
        brand="Panasonic — Vidéoprojection"
        title="Vidéoprojecteurs professionnels"
        subtitle="De 3 000 à 50 000 lumens. Pixel Audiovisuel Pro vous accompagne dans le choix du vidéoprojecteur Panasonic adapté à votre salle, à votre luminosité et à vos contraintes d'installation."
        accent="gold"
      />

      <Suspense fallback={null}>
        <VideoProjectionTabs />
      </Suspense>

      <CTABanner
        title="Quel vidéoprojecteur pour votre salle ?"
        subtitle="Décrivez-nous votre projet : dimensions de la salle, distance de projection, luminosité ambiante et usage prévu. Nous vous orientons vers la solution Panasonic adaptée."
      />
    </>
  );
}
