import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/content";

const SITE_URL = "https://thewellnessn.com";
const LANGS = ["ko", "en", "zh", "ja", "th", "vi", "id"] as const;

// 모든 언어에 대한 hreflang alternates 객체 생성 (실제 번역이 존재하는 페이지에만 사용)
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

  // 홈페이지 — 7개 언어 모두 실제 번역 있음 (i18n.ts dict)
  const homeEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: lang === "ko" ? 1.0 : 0.85,
    alternates: { languages: buildAlternates("") },
  }));

  // 블로그 목록 — 7개 언어 (UI 텍스트는 번역, 글 자체는 ko)
  const blogListEntries: MetadataRoute.Sitemap = LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}/blog`,
    lastModified: now,
    changeFrequency: "daily",
    priority: lang === "ko" ? 0.9 : 0.75,
    alternates: { languages: buildAlternates("/blog") },
  }));

  // 블로그 포스트 — ko에만 실제 콘텐츠 존재. /ko/blog/slug 만 sitemap에 포함.
  // 다른 언어 URL (/en/blog/slug 등)은 canonical이 /ko로 되어있어 중복 방지.
  try {
    const posts = await getPublishedPosts("ko", 1000);
    const postEntries: MetadataRoute.Sitemap = (posts as any[]).map((p) => ({
      url: `${SITE_URL}/ko/blog/${p.slug}`,
      lastModified: p.published_at ? new Date(p.published_at) : now,
      changeFrequency: "weekly",
      priority: 0.7,
      // hreflang 생략 — 다른 언어 번역이 실제로는 없으므로
    }));
    return [...homeEntries, ...blogListEntries, ...postEntries];
  } catch {
    return [...homeEntries, ...blogListEntries];
  }
}
