import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/content";

const SITE_URL = "https://thewellnessn.com";
const LANGS = ["ko", "en", "zh", "ja", "th", "vi", "id"] as const;

// 모든 언어에 대한 hreflang alternates 객체 생성
function buildAlternates(path: string): Record<string, string> {
  const alts: Record<string, string> = {};
  for (const l of LANGS) {
    alts[l] = `${SITE_URL}/${l}${path}`;
  }
  alts["x-default"] = `${SITE_URL}/ko${path}`;
  return alts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 홈페이지 — 7개 언어
  const homeEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang === "ko" ? 1.0 : 0.85,
    alternates: { languages: buildAlternates("") },
  }));

  // 블로그 목록 — 7개 언어
  const blogListEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}/blog`,
    lastModified: now,
    changeFrequency: "daily",
    priority: lang === "ko" ? 0.9 : 0.75,
    alternates: { languages: buildAlternates("/blog") },
  }));

  // 블로그 포스트 (ko 기준 조회 후 모든 언어 URL 생성)
  try {
    const posts = await getPublishedPosts("ko", 200);
    const postEntries: MetadataRoute.Sitemap = [];

    for (const p of posts as any[]) {
      const postPath = `/blog/${p.slug}`;
      const lastMod = p.published_at ? new Date(p.published_at) : now;

      // 한국어 포스트 (메인) — priority 높게
      postEntries.push({
        url: `${SITE_URL}/ko${postPath}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: { languages: buildAlternates(postPath) },
      });

      // 기타 언어 포스트 URL (내용은 ko 폴백이지만 URL은 각 언어로)
      for (const lang of LANGS.filter((l) => l !== "ko")) {
        postEntries.push({
          url: `${SITE_URL}/${lang}${postPath}`,
          lastModified: lastMod,
          changeFrequency: "weekly",
          priority: 0.5,
          alternates: { languages: buildAlternates(postPath) },
        });
      }
    }

    return [...homeEntries, ...blogListEntries, ...postEntries];
  } catch {
    return [...homeEntries, ...blogListEntries];
  }
}
