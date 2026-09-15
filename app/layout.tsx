import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pixel Audiovisuel Pro — Solutions audiovisuelles professionnelles",
  description:
    "Revendeur Panasonic depuis 30 ans. Vidéoprojecteurs professionnels, écrans de projection ORAY, sonorisation Yamaha pour salles de spectacle, théâtres et espaces collectifs.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixel Audiovisuel Pro",
  url: "https://pixelaudiovisuelpro.com",
  telephone: "+33478431616",
  email: "contact@pixelaudiovisuelpro.fr",
  areaServed: "FR",
  description:
    "Revendeur Panasonic agréé depuis plus de 30 ans. Vidéoprojecteurs professionnels, écrans de projection ORAY, sonorisation Yamaha et captation audio Sennheiser pour salles de spectacle, théâtres et espaces collectifs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
