import type { Metadata } from "next";
import NewsPage from "./NewsPage";
import { VALID_LANGS } from "@/lib/langs";

/**
 * /[lang]/news — 언론 보도 전체 (2026-10-23)
 * 기사는 scripts/news-refresh.mjs 가 매달 네이버 뉴스에서 모은다 (lib/news-data.json).
 */
const SITE_URL = "https://thewellnessn.com";

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = VALID_LANGS.includes(params.lang as any) ? params.lang : "ko";
  return {
    title: lang === "ko" ? "언론 보도 — 더웰니스앤(The Wellness N)" : "Press — The Wellness N",
    description: lang === "ko"
      ? "더웰니스앤 의료관광 · 웰니스 파티 · 해외 MOU · 병원 투어 관련 언론 보도 모음"
      : "Press coverage of The Wellness N — medical tourism, wellness events, overseas MOUs and clinic tours.",
    alternates: { canonical: `${SITE_URL}/${lang}/news` },
  };
}

export default function Page() {
  return <NewsPage />;
}
