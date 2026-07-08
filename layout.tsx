import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Living Group | Luxury Outdoor Audio, Lighting & Smart Home Technology",
  description:
    "Smart Living Group designs and installs premium outdoor audio, landscape lighting, outdoor TVs, motorized shades, smart home automation, networking, and commercial technology solutions in Dallas–Fort Worth.",
  keywords: [
    "Smart Living Group",
    "outdoor audio Dallas",
    "landscape lighting DFW",
    "outdoor TV installation",
    "motorized shades Dallas",
    "smart home automation Dallas",
    "home networking DFW",
    "luxury home technology"
  ],
  openGraph: {
    title: "Smart Living Group",
    description:
      "Luxury outdoor living, smart home automation, audio, lighting, shades, networking, and commercial technology.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
