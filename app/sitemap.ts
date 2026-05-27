import type { MetadataRoute } from "next";

const SITE_URL = "https://thewellnessn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ko: SITE_URL,
          en: SITE_URL,
          zh: SITE_URL,
          ja: SITE_URL,
        },
      },
    },
  ];
}
