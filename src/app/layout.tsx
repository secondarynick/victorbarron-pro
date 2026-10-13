import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://victorbarron.com",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "Whittier",
      addressRegion: "CA",
      postalCode: "90601",
      addressCountry: "US",
    },
    telephone: site.phoneCecilia,
    url: "https://victorbarron.com",
    areaServed: "Whittier, California",
  };
  return (
    <html lang="en" className={newsreader.variable}>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
