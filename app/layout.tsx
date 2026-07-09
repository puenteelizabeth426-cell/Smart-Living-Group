import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Living Group | Outdoor Audio, Landscape Lighting, Outdoor TVs & Motorized Shades",
  description: "Premium outdoor audio, landscape lighting, outdoor TVs, and motorized shades for luxury outdoor living spaces in Dallas–Fort Worth.",
  keywords: ["Outdoor Audio Dallas", "Landscape Lighting Dallas", "Outdoor TVs Dallas", "Motorized Shades Dallas", "Smart Living Group"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
