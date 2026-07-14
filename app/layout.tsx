import type { Metadata } from "next";
import "./globals.css";

const websiteUrl = "https://www.smartliving-texas.com";

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),

  title: {
    default: "Smart Living Group | Outdoor Audio & Landscape Lighting Dallas",
    template: "%s | Smart Living Group",
  },

  description:
    "Smart Living Group provides professional outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart technology installations throughout Dallas–Fort Worth, Texas.",

  keywords: [
    "Smart Living Group",
    "outdoor audio Dallas",
    "outdoor speakers Dallas",
    "backyard audio Dallas",
    "landscape lighting Dallas",
    "outdoor lighting Dallas",
    "landscape lighting DFW",
    "outdoor TV installation Dallas",
    "motorized shades Dallas",
    "smart home installation Dallas",
    "outdoor entertainment systems Dallas",
    "patio speakers Dallas",
    "luxury outdoor living Dallas",
    "outdoor technology DFW",
  ],

  authors: [{ name: "Smart Living Group" }],
  creator: "Smart Living Group",
  publisher: "Smart Living Group",

  alternates: {
    canonical: websiteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Smart Living Group | Outdoor Audio & Landscape Lighting Dallas",
    description:
      "Professional outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart technology installations across Dallas–Fort Worth.",
    url: websiteUrl,
    siteName: "Smart Living Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Living Group outdoor audio and landscape lighting in Dallas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Living Group | Outdoor Audio & Landscape Lighting Dallas",
    description:
      "Outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart technology throughout Dallas–Fort Worth.",
    images: ["/og-image.jpg"],
  },

  verification: {
    // Paste only the Google Search Console code inside the quotes below if Google gave you one.
    google: "",
  },

  category: "Home Technology and Outdoor Living",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${websiteUrl}/#business`,
  name: "Smart Living Group",
  alternateName: "The Smart Living Group",
  url: websiteUrl,
  logo: `${websiteUrl}/logo.png`,
  image: `${websiteUrl}/og-image.jpg`,

  description:
    "Smart Living Group designs and installs outdoor audio, landscape lighting, outdoor televisions, motorized shades and smart technology systems throughout Dallas–Fort Worth, Texas.",

  telephone: "+1-817-510-3103",
  email: "smartlivingroup@gmail.com",

  areaServed: [
    {
      "@type": "City",
      name: "Dallas",
    },
    {
      "@type": "City",
      name: "Fort Worth",
    },
    {
      "@type": "AdministrativeArea",
      name: "Dallas–Fort Worth Metroplex",
    },
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },

  serviceType: [
    "Outdoor Audio Installation",
    "Landscape Lighting Installation",
    "Outdoor Television Installation",
    "Motorized Shade Installation",
    "Smart Home Automation",
    "Outdoor Entertainment Systems",
    "Commercial Technology Installation",
  ],

  sameAs: ["https://www.instagram.com/the_smart_living_group"],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-817-510-3103",
    contactType: "customer service",
    areaServed: "US-TX",
    availableLanguage: ["English", "Spanish"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${websiteUrl}/#website`,
  name: "Smart Living Group",
  url: websiteUrl,
  publisher: {
    "@id": `${websiteUrl}/#business`,
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas–Fort Worth" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
