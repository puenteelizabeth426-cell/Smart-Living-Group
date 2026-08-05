import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartliving-texas.com"),

  title: {
    default: "Smart Living Group | Outdoor Audio, Lighting & Smart Home in Dallas–Fort Worth",
    template: "%s | Smart Living Group",
  },

  description:
    "Smart Living Group designs and installs outdoor audio, landscape lighting, outdoor TVs, motorized shades and smart home automation for luxury homes across Dallas–Fort Worth.",

  keywords: [
    "Outdoor Audio Dallas",
    "Landscape Lighting Dallas",
    "Outdoor TV Installation",
    "Motorized Shades Dallas",
    "Smart Home Dallas",
    "Outdoor Speakers",
    "Luxury Outdoor Living DFW",
    "Home Automation",
    "Outdoor Audio Fort Worth",
    "Smart Living Group",
  ],

  alternates: {
    canonical: "/",
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
    title: "Smart Living Group | Luxury Outdoor Living in DFW",
    description:
      "Outdoor audio, landscape lighting, outdoor TVs and motorized shades professionally designed and installed across Dallas–Fort Worth.",
    url: "https://www.smartliving-texas.com",
    siteName: "Smart Living Group",
    images: [
      {
        url: "/projects/project-01.webp",
        width: 1200,
        height: 630,
        alt: "Smart Living Group luxury outdoor living installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Living Group | Luxury Outdoor Living in DFW",
    description:
      "Outdoor audio, landscape lighting, outdoor TVs and motorized shades across Dallas–Fort Worth.",
    images: ["/projects/project-01.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-G4QW2773CV" />
      </body>
    </html>
  );
}
