import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = "https://www.smartliving-texas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "The Smart Living Group | Outdoor Audio & Landscape Lighting DFW",
    template: "%s | The Smart Living Group",
  },

  description:
    "The Smart Living Group designs and installs outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart outdoor living technology across Dallas–Fort Worth.",

  applicationName: "The Smart Living Group",

  authors: [
    {
      name: "The Smart Living Group",
      url: siteUrl,
    },
  ],

  creator: "The Smart Living Group",
  publisher: "The Smart Living Group",

  keywords: [
    "outdoor audio Dallas",
    "outdoor audio Fort Worth",
    "landscape lighting Dallas",
    "landscape lighting Fort Worth",
    "outdoor TV installation Dallas",
    "outdoor TV installation Fort Worth",
    "motorized shades Dallas",
    "motorized outdoor shades DFW",
    "outdoor living Dallas",
    "outdoor living Fort Worth",
    "outdoor technology Dallas",
    "smart outdoor living",
    "residential outdoor audio",
    "commercial outdoor audio",
    "commercial outdoor lighting",
    "outdoor speakers Dallas",
    "outdoor entertainment systems DFW",
    "luxury patio technology",
    "The Smart Living Group",
  ],

  category: "Outdoor Living Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "The Smart Living Group | Luxury Outdoor Technology in Dallas–Fort Worth",
    description:
      "Outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart outdoor living solutions professionally designed and installed across DFW.",
    url: siteUrl,
    siteName: "The Smart Living Group",
    images: [
      {
        url: "/projects/project-01.webp",
        width: 1200,
        height: 630,
        alt: "Luxury outdoor living installation by The Smart Living Group in Dallas-Fort Worth",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Smart Living Group | Outdoor Audio & Landscape Lighting DFW",
    description:
      "Professional outdoor audio, landscape lighting, outdoor TVs and motorized shades across Dallas–Fort Worth.",
    images: ["/projects/project-01.webp"],
  },

  other: {
    "geo.region": "US-TX",
    "geo.placename": "Dallas-Fort Worth, Texas",
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
  colorScheme: "dark light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "The Smart Living Group",
  alternateName: "Smart Living Group",
  url: siteUrl,
  logo: `${siteUrl}/projects/logo.webp`,
  email: "smartlivingroup@gmail.com",
  telephone: "+1-817-510-3103",
  sameAs: ["https://www.instagram.com/the_smart_living_group"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#localbusiness`,
  name: "The Smart Living Group",
  alternateName: "Smart Living Group",
  url: siteUrl,
  logo: `${siteUrl}/projects/logo.webp`,
  image: `${siteUrl}/projects/project-01.webp`,
  description:
    "Outdoor audio, landscape lighting, outdoor television installation, motorized shades and smart outdoor living technology for residential and commercial properties across Dallas-Fort Worth.",
  email: "smartlivingroup@gmail.com",
  telephone: "+1-817-510-3103",

  areaServed: [
    {
      "@type": "City",
      name: "Dallas",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    {
      "@type": "City",
      name: "Fort Worth",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Dallas-Fort Worth Metroplex",
    },
  ],

  sameAs: ["https://www.instagram.com/the_smart_living_group"],

  knowsAbout: [
    "Outdoor Audio",
    "Residential Outdoor Audio",
    "Commercial Outdoor Audio",
    "Landscape Lighting",
    "Commercial Outdoor Lighting",
    "Outdoor TV Installation",
    "Motorized Outdoor Shades",
    "Outdoor Entertainment Systems",
    "Smart Outdoor Living Technology",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Outdoor Living Technology Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outdoor Audio Installation",
          description:
            "Landscape speakers, patio audio, pool audio and multi-zone outdoor sound systems.",
          areaServed: "Dallas-Fort Worth, Texas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscape Lighting Installation",
          description:
            "Architectural, pathway, garden, tree and outdoor entertainment lighting.",
          areaServed: "Dallas-Fort Worth, Texas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outdoor TV Installation",
          description:
            "Outdoor-rated television mounting, concealed wiring and entertainment integration.",
          areaServed: "Dallas-Fort Worth, Texas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorized Outdoor Shades",
          description:
            "Motorized patio shades for sun management, privacy and outdoor comfort.",
          areaServed: "Dallas-Fort Worth, Texas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Outdoor Audio and Lighting",
          description:
            "Outdoor sound and lighting solutions for commercial properties and hospitality spaces.",
          areaServed: "Dallas-Fort Worth, Texas",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-G4QW2773CV" />
      </body>
    </html>
  );
}