import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Living Group | Luxury Outdoor Audio, Landscape Lighting, Outdoor TVs & Motorized Shades",
  description:
    "Smart Living Group designs premium outdoor audio, landscape lighting, outdoor TVs, and motorized shades for luxury outdoor living spaces in Dallas–Fort Worth.",
  keywords: [
    "Smart Living Group",
    "outdoor audio Dallas",
    "landscape lighting Dallas",
    "outdoor TV installation Dallas",
    "motorized shades Dallas",
    "luxury outdoor living DFW",
    "outdoor entertainment Dallas"
  ],
  openGraph: {
    title: "Smart Living Group",
    description:
      "Luxury outdoor audio, landscape lighting, outdoor TVs, and motorized shades for exceptional outdoor spaces.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
