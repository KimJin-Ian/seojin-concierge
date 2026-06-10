import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LangProvider } from "../components/LangContext";
import type { Lang } from "@/lib/i18n";
import { VALID_LANGS } from "@/lib/langs";

const SITE_URL = "https://thewellnessn.com";

/** BCP-47 hreflang tags per language */
const HREFLANG: Record<Lang, string> = {
  ko: "ko-KR",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
  th: "th-TH",
  vi: "vi-VN",
  id: "id-ID",
};

/** Page title per language (홈 기준) */
const TITLE: Record<Lang, string> = {
  ko: "더웰니스앤(The Wellness N) — 한국 의료관광·K-뷰티 컨시어지 | 강남",
  en: "The Wellness N — Korea Medical Tourism & K-Beauty Concierge",
  zh: "The Wellness N — 韩国医疗旅游·K-Beauty礼宾服务",
  ja: "The Wellness N — 韓国医療観光・Kビューティーコンシェルジュ",
  th: "The Wellness N — ท่องเที่ยวเชิงการแพทย์เกาหลี & K-Beauty",
  vi: "The Wellness N — Du lịch y tế Hàn Quốc & Dịch vụ K-Beauty",
  id: "The Wellness N — Wisata Medis Korea & Layanan K-Beauty",
};

/** Meta description per language */
const DESCRIPTION: Record<Lang, string> = {
  ko: "더웰니스앤(The Wellness N) — 강남 프리미엄 병원 협업 · 줄기세포·피코토닝·리프팅·안티에이징·K-pop 투어. 방콕보다 저렴한 K-Beauty. 실시간 통역·맞춤 회복 케어.",
  en: "Gangnam premium clinic network · Stem cell, Pico toning, lifting, anti-aging, K-pop tour packages. More affordable than Bangkok. Real-time interpreter & personalized recovery care.",
  zh: "首尔江南高端诊所合作网络 · 干细胞·皮秒·提升·抗衰老·K-pop旅游套餐。比曼谷更实惠的K-Beauty。实时翻译·个性化恢复护理。",
  ja: "江南プレミアムクリニック提携 · 幹細胞・ピコトーニング・リフトアップ・アンチエイジング・K-popツアー。バンコクより安いK-Beauty。リアルタイム通訳・カスタム回復ケア。",
  th: "เครือข่ายคลินิกพรีเมียมย่านกังนัม · เซลล์ต้นกำเนิด·พิโคโทนนิ่ง·ยกกระชับ·ต้านวัย·K-pop ทัวร์ ราคาถูกกว่าบางกอก การแปลแบบเรียลไทม์",
  vi: "Mạng lưới phòng khám cao cấp Gangnam · Tế bào gốc, Pico toning, nâng mặt, chống lão hóa, K-pop tour. Giá rẻ hơn Bangkok. Phiên dịch thời gian thực.",
  id: "Jaringan klinik premium Gangnam · Sel punca, Pico toning, lifting, anti-penuaan, tur K-pop. Lebih terjangkau dari Bangkok. Penerjemah real-time & perawatan pemulihan.",
};

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as Lang;
  if (!VALID_LANGS.includes(lang)) return {};

  // Build hreflang alternates for all 7 languages + x-default
  const langAlternates: Record<string, string> = {};
  for (const l of VALID_LANGS) {
    langAlternates[HREFLANG[l]] = `${SITE_URL}/${l}`;
  }
  langAlternates["x-default"] = `${SITE_URL}/ko`;

  return {
    title: TITLE[lang],
    description: DESCRIPTION[lang],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: langAlternates,
    },
    openGraph: {
      title: TITLE[lang],
      description: DESCRIPTION[lang],
      url: `${SITE_URL}/${lang}`,
      locale:
        lang === "ko" ? "ko_KR" :
        lang === "en" ? "en_US" :
        lang === "zh" ? "zh_CN" :
        lang === "ja" ? "ja_JP" :
        lang === "th" ? "th_TH" :
        lang === "vi" ? "vi_VN" : "id_ID",
    },
  };
}

export default function LangLayout({ children, params }: Props) {
  const lang = params.lang as Lang;

  // 알 수 없는 언어 코드 → 404
  if (!VALID_LANGS.includes(lang)) notFound();

  return (
    // LangProvider에 URL에서 추출한 언어를 initialLang으로 전달
    // → 서버 렌더 시 올바른 언어로 즉시 초기화 (SEO 최적화)
    <LangProvider initialLang={lang}>
      {children}
    </LangProvider>
  );
}
