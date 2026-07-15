import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Living Group | Luxury Outdoor Audio, Lighting & Shades in Dallas–Fort Worth",
  description: "Premium outdoor audio, landscape lighting, outdoor TVs and motorized shades for luxury homes across Dallas–Fort Worth.",
  keywords: ["Outdoor Audio Dallas", "Landscape Lighting Dallas", "Outdoor TVs Dallas", "Motorized Shades Dallas", "Luxury Outdoor Living DFW"],
  openGraph: {
    title: "Smart Living Group",
    description: "Luxury outdoor living technology, perfectly designed.",
    images: ["/projects/project-01.webp"],
    type: "website"
  }
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
