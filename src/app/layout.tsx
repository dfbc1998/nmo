// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NMO Capacitación Neurolúdica | Transformación Profesional",
  description: "Capacitación Neurolúdica basada en neurociencias aplicadas. 30+ años transformando profesionales en Argentina, Paraguay y Chile.",
  keywords: "capacitación neurolúdica, neurociencias aplicadas, Daniel Deu, talleres empresariales, desarrollo profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Navbar />
        {/* pt-20 compensa la altura del navbar fixed (h-20) */}
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}