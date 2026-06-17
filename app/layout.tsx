import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { contractorSchema, websiteSchema } from "@/lib/jsonld";
import { SITE, HERO } from "@/lib/site-data";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const HOME_TITLE =
  "Landscaping & Outdoor Living in Dallas–Fort Worth | Stoneward Outdoor Living";

// OG / Twitter share image — swap for a branded /public/og.jpg once you have one.
const OG_IMAGE = HERO.image;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_TITLE,
    template: "%s | Stoneward Outdoor Living",
  },
  description:
    "Stoneward Outdoor Living is an award-winning DFW design-build firm for patios, outdoor kitchens, custom pools, pergolas, landscape design & lighting. 500+ backyards built · 5.0★ on Houzz. Free on-site estimates & financing.",
  applicationName: SITE.legalName,
  keywords: [
    "landscaping Dallas",
    "outdoor kitchen builder DFW",
    "paver patio Plano",
    "pool builder Frisco",
    "hardscaping Southlake",
    "landscape design Dallas",
    "backyard design build Dallas Fort Worth",
    "pergola builder McKinney",
  ],
  authors: [{ name: SITE.studioName }],
  creator: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.legalName,
    title: HOME_TITLE,
    description:
      "Award-winning outdoor-living design-build in Dallas–Fort Worth — patios, outdoor kitchens, custom pools, pergolas, landscape & lighting. Free estimates, financing available.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Modern Dallas backyard at dusk with a lit, landscaped outdoor living space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      "DFW outdoor-living design-build — patios, kitchens, pools, pergolas & lighting. 500+ backyards · 5.0★ Houzz. Free estimates.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#23271E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={[contractorSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-olive focus:px-5 focus:py-2 focus:text-mist"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <MobileBar />
        <Footer />
      </body>
    </html>
  );
}
