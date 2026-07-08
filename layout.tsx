import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Living Group | Luxury Outdoor Audio, Lighting & Smart Home Technology",
  description: "Premium outdoor audio, landscape lighting, outdoor TVs, motorized shades, smart home automation, networking, and commercial technology solutions in Dallas-Fort Worth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
