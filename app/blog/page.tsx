import { redirect } from "next/navigation";

// 구버전 /blog → /ko/blog (301 리다이렉트는 middleware에서 처리)
// 빌드 타임 prerender 시 fallback
export default function BlogRedirectPage() {
  redirect("/ko/blog");
}
