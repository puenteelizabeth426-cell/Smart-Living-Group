import type { MetadataRoute } from "next";
import { serviceTopics } from "./services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smartliving-texas.com";
  const lastModified = new Date();

  const servicePages: MetadataRoute.Sitemap = serviceTopics.map((topic) => ({
    url: `${baseUrl}/services/${topic.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#catalog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-trade`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
  ];
}
