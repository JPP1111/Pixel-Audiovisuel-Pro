import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pixel Audiovisuel Pro — Solutions audiovisuelles professionnelles",
  description:
    "Distributeur Panasonic depuis 30 ans. Vidéoprojecteurs professionnels, écrans de projection ORAY, sonorisation Yamaha pour salles de spectacle, théâtres et espaces collectifs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
