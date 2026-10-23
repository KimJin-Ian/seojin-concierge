"use client";

import { useState } from "react";
import { useLang } from "./LangContext";
import { KAKAO_URL } from "./FloatContact";

/**
 * 시술 전후 사진 — 유형별 버튼 (2026-10-23 대표님)
 *
 * 협력 병원(성수 프리미클리닉)이 만든 전후 비교판을 모니터째 찍은 사진에서, 신상 보호를 위해
 * **시술 부위(턱 · 팔자)만** 잘라 남겼다. 눈은 병원이 이미 모자이크했고, 그 위쪽(눈 · 머리 · 배경)은 잘라냈다.
 * 다듬은 것은 모니터 무늬를 조금 누르고 선명도 · 대비를 살짝 올린 정도 — 결과를 바꾸는 보정은 하지 않았다.
 *
 * 신상성형외과 눈 · 코 · 윤곽 모음판은 넣지 않았다 — 'After' 가 보정 필터를 쓴 셀카라 결과처럼 싣기 어렵다.
 * 병원이 같은 각도 · 조명의 임상 사진을 주면 같은 방식으로 더한다 (public/ba/ · 아래 ITEMS).
 */
type Kind = "chin" | "nasolabial";
const ITEMS: { kind: Kind; clinic: "primi"; n: number; date: string }[] = [
  { kind: "chin", clinic: "primi", n: 1, date: "2026.03.27" },
  { kind: "chin", clinic: "primi", n: 2, date: "2024.03.19" },
  { kind: "chin", clinic: "primi", n: 3, date: "2026.05.25" },
  { kind: "nasolabial", clinic: "primi", n: 1, date: "2025" },
  { kind: "nasolabial", clinic: "primi", n: 2, date: "2025.10.20" },
  { kind: "nasolabial", clinic: "primi", n: 3, date: "2025.01.24" },
];
const KINDS: Kind[] = ["chin", "nasolabial"];

export default function BeforeAfter() {
  const { t } = useLang();
  const [kind, setKind] = useState<Kind | "all">("all");
  const list = ITEMS.filter((x) => kind === "all" || x.kind === kind);
  return (
    <section className="ba" id="before-after" aria-labelledby="ba-title">
      <div className="section-head">
        <span className="section-tag">{t("h3.ba.tag")}</span>
        <h2 className="section-title" id="ba-title"><strong>{t("h3.ba.title")}</strong></h2>
        <p className="section-sub">{t("h3.ba.sub")}</p>
      </div>
      <div className="ba-tabs" role="tablist">
        {(["all", ...KINDS] as const).map((k) => (
          <button key={k} type="button" role="tab" aria-selected={kind === k}
                  className={`pb-tab${kind === k ? " active" : ""}`} onClick={() => setKind(k)}>
            {k === "all" ? t("h3.ba.all") : t(`h3.ba.${k}`)}
            <span className="pb-n">{k === "all" ? ITEMS.length : ITEMS.filter((x) => x.kind === k).length}</span>
          </button>
        ))}
      </div>
      <div className="ba-grid">
        {list.map((x) => {
          const base = `/ba/${x.clinic}-${x.kind}-${x.n}`;
          return (
            <figure key={base} className="ba-card">
              <div className="ba-pair">
                <div className="ba-side">
                  <img src={`${base}-before.jpg`} alt={`${t(`h3.ba.${x.kind}`)} ${t("h3.ba.before")}`} loading="lazy" />
                  <span className="ba-lbl">{t("h3.ba.before")}</span>
                </div>
                <div className="ba-side">
                  <img src={`${base}-after.jpg`} alt={`${t(`h3.ba.${x.kind}`)} ${t("h3.ba.after")}`} loading="lazy" />
                  <span className="ba-lbl is-after">{t("h3.ba.after")}</span>
                </div>
              </div>
              <figcaption><b>{t(`h3.ba.${x.kind}`)}</b> · {t(`h3.ba.clinic.${x.clinic}`)} · {x.date}</figcaption>
            </figure>
          );
        })}
      </div>
      <p className="ba-note">{t("h3.ba.note")}</p>
      <p style={{ textAlign: "center", marginTop: 14 }}>
        <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
           data-track="cta_click" data-category="contact" data-label="ba_kakao">{t("h3.ba.cta")}</a>
      </p>
    </section>
  );
}
