"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

type Treatment = { icon: string; titleKey: string; descKey: string; fallbackTitle: string };
type TabKey = "beauty" | "medical" | "wellness";

// 시술명(title)은 영어/원어 그대로 표시하기 위해 fallback 사용.
// 상세 설명(desc)만 i18n.
const DATA: Record<TabKey, Treatment[]> = {
  beauty: [
    { icon: "◈", titleKey: "", descKey: "treat.b1.d", fallbackTitle: "울쎄라 (Ulthera)" },
    { icon: "◇", titleKey: "", descKey: "treat.b2.d", fallbackTitle: "써마지 (Thermage FLX)" },
    { icon: "▲", titleKey: "", descKey: "treat.b3.d", fallbackTitle: "울트라포머 MPT" },
    { icon: "▽", titleKey: "", descKey: "treat.b4.d", fallbackTitle: "HIFU 리프팅" },
    { icon: "●", titleKey: "", descKey: "treat.b5.d", fallbackTitle: "티타늄 리프팅" },
    { icon: "○", titleKey: "", descKey: "treat.b6.d", fallbackTitle: "리쥬란 (Rejuran)" },
    { icon: "◐", titleKey: "", descKey: "treat.b7.d", fallbackTitle: "쥬베룩 / 스킨부스터" },
    { icon: "◑", titleKey: "", descKey: "treat.b8.d", fallbackTitle: "피코레이저" },
  ],
  medical: [
    { icon: "✚", titleKey: "treat.m1.t", descKey: "treat.m1.d", fallbackTitle: "프리미엄 건강검진" },
    { icon: "⌬", titleKey: "treat.m2.t", descKey: "treat.m2.d", fallbackTitle: "안티에이징 검사" },
    { icon: "⌭", titleKey: "treat.m3.t", descKey: "treat.m3.d", fallbackTitle: "줄기세포 치료" },
    { icon: "⌯", titleKey: "treat.m4.t", descKey: "treat.m4.d", fallbackTitle: "탈모 케어" },
    { icon: "◉", titleKey: "treat.m5.t", descKey: "treat.m5.d", fallbackTitle: "치과 (임플란트·미백)" },
    { icon: "⌖", titleKey: "treat.m6.t", descKey: "treat.m6.d", fallbackTitle: "비만 관리" },
    { icon: "⌗", titleKey: "treat.m7.t", descKey: "treat.m7.d", fallbackTitle: "도수·체형 교정" },
    { icon: "⌘", titleKey: "treat.m8.t", descKey: "treat.m8.d", fallbackTitle: "여성·갱년기 케어" },
  ],
  wellness: [
    { icon: "♨", titleKey: "treat.w1.t", descKey: "treat.w1.d", fallbackTitle: "프리미엄 마사지" },
    { icon: "❀", titleKey: "treat.w2.t", descKey: "treat.w2.d", fallbackTitle: "스파 & 사우나" },
    { icon: "✿", titleKey: "treat.w3.t", descKey: "treat.w3.d", fallbackTitle: "헤드스파" },
    { icon: "❁", titleKey: "treat.w4.t", descKey: "treat.w4.d", fallbackTitle: "회복 호텔 패키지" },
    { icon: "✾", titleKey: "treat.w5.t", descKey: "treat.w5.d", fallbackTitle: "힐링 투어" },
    { icon: "❃", titleKey: "treat.w6.t", descKey: "treat.w6.d", fallbackTitle: "웰니스 검진" },
    { icon: "✸", titleKey: "treat.w7.t", descKey: "treat.w7.d", fallbackTitle: "요가 / 명상" },
    { icon: "✦", titleKey: "treat.w8.t", descKey: "treat.w8.d", fallbackTitle: "K-Food 미식 투어" },
  ],
};

const TABS: { key: TabKey; labelKey: string }[] = [
  { key: "beauty", labelKey: "treat.tab.beauty" },
  { key: "medical", labelKey: "treat.tab.medical" },
  { key: "wellness", labelKey: "treat.tab.wellness" },
];

export default function Treatments() {
  const { t } = useLang();
  const [tab, setTab] = useState<TabKey>("beauty");

  return (
    <>
      <div className="treat-tabs">
        {TABS.map((tabItem) => (
          <button
            key={tabItem.key}
            className={`tab ${tab === tabItem.key ? "active" : ""}`}
            onClick={() => setTab(tabItem.key)}
          >
            {t(tabItem.labelKey)}
          </button>
        ))}
      </div>

      {TABS.map((tabItem) => (
        <div
          key={tabItem.key}
          className={`treat-panel ${tab === tabItem.key ? "active" : ""}`}
        >
          <div className="treat-grid">
            {DATA[tabItem.key].map((item, i) => (
              <div key={i} className="treat-card">
                <div className="treat-icon">{item.icon}</div>
                <h4>{item.titleKey ? t(item.titleKey) : item.fallbackTitle}</h4>
                <p>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
