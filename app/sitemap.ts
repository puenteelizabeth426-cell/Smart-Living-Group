import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smartliving-texas.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...[
      "/outdoor-lighting-dallas",
      "/outdoor-audio-dallas",
      "/outdoor-tv-installation-dallas",
      "/motorized-shades-dallas",
    ].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/commercial-trade`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
