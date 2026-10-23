"use client";

import { useLang } from "./LangContext";

/**
 * 떠 있는 문의 버튼 — 모든 화면 (2026-10-23 대표님)
 *   1 카카오톡 · 2 WhatsApp · 3 전화(+82 10-2068-0817)
 * 휴대폰에서는 글자가 숨으니 아이콘만으로 무엇인지 알아보게 — WhatsApp 은 로고 모양, 전화는 수화기.
 * 예전 세 번째(책 출판 문의)는 뺐다 — 그룹 사업 칸에서 바로 간다.
 */
export const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
export const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";
export const PHONE = "+82 10-2068-0817";
export const TEL = "tel:+821020680817";

const KakaoIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.35 4.66 6.76-.2.74-.74 2.7-.85 3.12-.13.52.19.51.4.37.17-.11 2.65-1.8 3.72-2.53.67.1 1.36.15 2.07.15 5.52 0 10-3.58 10-8S17.52 3 12 3z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.34-.5.05-.98.23-3.31-.69-2.8-1.1-4.58-3.97-4.72-4.15-.14-.18-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34l.53.01c.17.01.4-.06.62.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.16-.19.69-.8.88-1.08.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
);

export default function FloatContact() {
  const { t } = useLang();
  return (
    <div className="float-contact f3" aria-label={t("float.aria")}>
      <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="float-btn float-kakao"
         data-track="cta_click" data-category="contact" data-label="float_kakao">
        <span className="float-ico"><KakaoIcon /></span>
        <span className="float-label">{t("h3.float.kakao")}</span>
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="float-btn float-whatsapp"
         data-track="cta_click" data-category="contact" data-label="float_whatsapp">
        <span className="float-ico"><WhatsAppIcon /></span>
        <span className="float-label">{t("h3.float.wa")}</span>
      </a>
      <a href={TEL} className="float-btn float-phone" aria-label={`${t("h3.float.phone")} ${PHONE}`}
         data-track="cta_click" data-category="contact" data-label="float_phone">
        <span className="float-ico"><PhoneIcon /></span>
        <span className="float-label">{t("h3.float.phone")}</span>
      </a>
    </div>
  );
}
