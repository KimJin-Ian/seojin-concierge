import type { Metadata } from "next";
import MorePage from "./MorePage";
import { VALID_LANGS } from "@/lib/langs";

/**
 * /[lang]/more — 첫 화면에서 줄인 내용 (2026-10-13 개편)
 *
 * [lang]/layout 의 메타데이터는 첫 화면 기준이라 표준 주소가 /{lang} 이다.
 * 그대로 두면 이 페이지가 "첫 화면의 복사본" 이 되므로 자기 주소를 단다.
 */
const SITE_URL = "https://thewellnessn.com";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = VALID_LANGS.includes(params.lang as any) ? params.lang : "ko";
  return {
    title: lang === "ko" ? "더웰니스앤 자세히 보기 — AI 통역 · 예산별 선택 · 진행 과정" : "More about The Wellness N",
    alternates: { canonical: `${SITE_URL}/${lang}/more` },
  };
}

export default function Page() {
  return <MorePage />;
}
