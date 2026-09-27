import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CATEGORIES } from "@/data/categories";
import { SITE } from "@/data/site";
import "./globals.css";

// Tipografía principal del manual de marca: Poppins (Light, Regular, Medium, Bold, Black)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Construcción y tecnología para la minería`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1c1c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const categories = CATEGORIES.map(({ slug, name, tagline, image }) => ({ slug, name, tagline, image }));
  return (
    <html lang="es-PE" className={poppins.variable}>
      <body className="flex min-h-dvh flex-col">
        <Header categories={categories} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
