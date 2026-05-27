import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/content";

const SITE_URL = "https://thewellnessn.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const baseEntries: MetadataRoute.Sitemap = [
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
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    const posts = await getPublishedPosts("ko", 100);
    const postEntries: MetadataRoute.Sitemap = posts.map((p: any) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.published_at ? new Date(p.published_at) : now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
    return [...baseEntries, ...postEntries];
  } catch {
    return baseEntries;
  }
}
