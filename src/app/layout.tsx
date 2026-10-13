import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: "Whittier", addressRegion: "CA", postalCode: "90601" },
    telephone: site.phoneCecilia,
    url: "https://victorbarron.com",
  };
  return (
    <html lang="en" className={newsreader.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
