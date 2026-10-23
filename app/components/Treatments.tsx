"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";

type Treatment = { icon: string; titleKey: string; descKey: string; fallbackTitle: string };
type TabKey = "popular" | "beauty" | "medical" | "wellness";

// 시술명(title)은 영어/원어 그대로 표시하기 위해 fallback 사용.
// 상세 설명(desc)만 i18n.
const DATA: Record<TabKey, Treatment[]> = {
  // 인기 키워드 — 예전에는 따로 있던 "가장 많이 찾는 키워드" 칸을 시술 목록에 합쳤다 (2026-10-13 대표님 요청)
  popular: [
    { icon: "✧", titleKey: "kw.c1.title", descKey: "kw.c1.desc", fallbackTitle: "줄기세포" },
    { icon: "✧", titleKey: "kw.c2.title", descKey: "kw.c2.desc", fallbackTitle: "피코토닝" },
    { icon: "✧", titleKey: "kw.c3.title", descKey: "kw.c3.desc", fallbackTitle: "팔자주름" },
    { icon: "✧", titleKey: "kw.c4.title", descKey: "kw.c4.desc", fallbackTitle: "탈모" },
    { icon: "✧", titleKey: "kw.c5.title", descKey: "kw.c5.desc", fallbackTitle: "쥬베룩" },
    { icon: "✧", titleKey: "kw.c6.title", descKey: "kw.c6.desc", fallbackTitle: "티타늄·레이저" },
    { icon: "✧", titleKey: "kw.c7.title", descKey: "kw.c7.desc", fallbackTitle: "안티에이징·종합검진" },
    { icon: "✧", titleKey: "kw.c8.title", descKey: "kw.c8.desc", fallbackTitle: "리프팅·HIFU·울쎄라" },
  ],
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
  { key: "popular", labelKey: "treat.tab.popular" },
  { key: "medical", labelKey: "treat.tab.medical" },
  { key: "wellness", labelKey: "treat.tab.wellness" },
];

const TILE_ICON: Record<TabKey, string> = { beauty: "✦", popular: "🔥", medical: "✚", wellness: "❀" };

/**
 * 시술 예시 — 큰 네모 넷 · 더보기 (2026-10-23 대표님)
 * 탭은 사람들이 안 눌렀다. 분야를 큰 칸으로 늘어놓고, 칸마다 시술 이름 몇 개를 미리 보여준 뒤
 * "더보기" 를 누르면 그 분야의 자세한 시술이 칸 아래로 펼쳐진다. 문서에는 전부 그대로 둔다(검색엔진용).
 */
export default function Treatments() {
  const { t } = useLang();
  const [open, setOpen] = useState<TabKey | null>(null);

  // 메뉴의 "키워드"(/#keywords)로 들어오면 인기 키워드를 연다 — 예전 키워드 칸이 여기로 합쳐졌다
  useEffect(() => {
    const sync = () => { if (window.location.hash === "#keywords") setOpen("popular"); };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const name = (item: Treatment) => (item.titleKey ? t(item.titleKey) : item.fallbackTitle);

  return (
    <>
      <div className="tt-grid">
        {TABS.map(({ key, labelKey }) => (
          <div key={key} className={`tt-tile${open === key ? " is-open" : ""}`}>
            <div className="tt-ico" aria-hidden="true">{TILE_ICON[key]}</div>
            <h3 className="tt-name">{t(labelKey)}</h3>
            <p className="tt-desc">{t(`h3.tile.${key}`)}</p>
            <ul className="tt-preview">
              {DATA[key].slice(0, 4).map((item, i) => <li key={i}>{name(item)}</li>)}
            </ul>
            <button type="button" className="tt-more" aria-expanded={open === key}
                    onClick={() => setOpen(open === key ? null : key)}>
              {open === key ? t("ptn.less") : t("ptn.more")} <span aria-hidden="true">{open === key ? "−" : "+"}</span>
            </button>
          </div>
        ))}
      </div>

      {TABS.map(({ key, labelKey }) => (
        <div key={key} className={`tt-panel${open === key ? " active" : ""}`} hidden={open !== key}>
          <h4 className="tt-panel-title">{TILE_ICON[key]} {t(labelKey)}</h4>
          <div className="treat-grid">
            {DATA[key].map((item, i) => (
              <div key={i} className="treat-card">
                <div className="treat-icon">{item.icon}</div>
                <h4>{name(item)}</h4>
                <p>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
