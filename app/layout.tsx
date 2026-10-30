import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { orgLd } from "@/lib/seo";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body", display: "swap" });
const hand = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | JEE, NEET & MHT CET Coaching in Mumbai`, template: `%s | ${SITE.shortName}` },
  description: "IIT JEE, NEET, MHT CET and Class 11-12 Science coaching in Mumbai. Small batches and personal attention since 2013.",
  applicationName: SITE.name,
  icons: { icon: "/images/logo-mark.png", apple: "/images/logo-mark.png" },
  robots: { index: true, follow: true },
  other: { "geo.region": "IN-MH", "geo.placename": "Mumbai" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#2E2A84" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={orgLd()} />
      </body>
    </html>
  );
}
