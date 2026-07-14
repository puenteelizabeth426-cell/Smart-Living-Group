import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartlivinggroup.com"),
  title:
    "Smart Living Group | Luxury Outdoor Audio, Lighting & Shades in Dallas–Fort Worth",
  description:
    "Premium outdoor audio, landscape lighting, outdoor TVs and motorized shades for luxury homes across Dallas–Fort Worth.",
  keywords: [
    "Outdoor Audio Dallas",
    "Landscape Lighting Dallas",
    "Outdoor TVs Dallas",
    "Motorized Shades Dallas",
    "Luxury Outdoor Living DFW",
  ],
  openGraph: {
    title: "Smart Living Group",
    description: "Luxury outdoor living technology, perfectly designed.",
    images: ["/projects/project-01.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080807",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
