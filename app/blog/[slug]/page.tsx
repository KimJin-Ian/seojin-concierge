import { redirect } from "next/navigation";

// 구버전 /blog/[slug] → /ko/blog/[slug] (301 리다이렉트는 middleware에서 처리)
// 빌드 타임 prerender 시 fallback
interface Props {
  params: { slug: string };
}

export default function BlogSlugRedirectPage({ params }: Props) {
  redirect(`/ko/blog/${params.slug}`);
}
