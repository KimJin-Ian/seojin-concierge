"use client";

import { useLang } from "./LangContext";
import { urlOf } from "@/lib/partner-links";

/**
 * 첫 화면에서 줄인 내용 — /[lang]/more 에 그대로 둔다 (2026-10-13 개편)
 *
 * 대표님 요청: "없어지거나 하는 건 다른 페이지에 몰아넣기".
 * 첫 화면은 스크롤을 줄이려고 요약만 남겼고, 원래 칸은 지우지 않고 여기로 옮겼다.
 *   AI 동시통역 (말로하 · 언더밀리)        첫 화면에서는 협력사 카드의 "더보기"
 *   기존 의료관광 vs 더웰니스앤 (전체 7줄)  첫 화면에서는 중복을 뺀 3줄
 *   예산으로 고르세요                       첫 화면에서는 "예산으로 좁히기" 한 줄
 *   진행 과정 6단계 · 회사 소개             첫 화면에서는 "왜 더웰니스앤인가" 안에 합침
 */
const KAKAO_URL = "http://pf.kakao.com/_QkZhd";

export default function MoreSections() {
  const { t } = useLang();
  return (
    <>
      {/* AI 동시통역 — 병원이 필요한 서비스 (협력 기업: 언더밀리/말로하) */}
      <section className="ai-sec" id="ai" data-edit-key="ai">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("ai.tag")}</span>
            <h2 className="section-title">{t("ai.title1")} <strong>{t("ai.title2")}</strong></h2>
            <p className="section-sub">{t("ai.sub")}</p>
          </div>
          <div className="ai-hero">
            <div className="ai-card brand">
              <a href={urlOf("maloha-logo.png")} target="_blank" rel="noopener noreferrer nofollow"
                 title="Maloha 홈페이지 (새 창)"
                 style={{ alignSelf: "flex-start", flex: "0 0 auto", display: "inline-flex" }}>
                <img src="/logos/maloha-logo.png" alt="Maloha" style={{ height: 58, width: "auto" }} />
              </a>
              <p className="tagline"><b>{t("ai.tagline1")}</b><br />{t("ai.tagline2")}</p>
              <div className="ai-chips">
                <span className="chip">{t("ai.chip1")}</span>
                <span className="chip">{t("ai.chip2")}</span>
                <span className="chip">{t("ai.chip3")}</span>
              </div>
            </div>
            <div className="ai-card light">
              <ul className="ai-benefits">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n}><span className="check">✓</span><div><b>{t(`ai.b${n}t`)}</b><div className="d">{t(`ai.b${n}d`)}</div></div></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="partner-attr">
            <div className="meta">
              <span className="attr-tag">{t("ai.ptag")}</span>
              {t("ai.pdesc")}
            </div>
            <a className="um-tile" href={urlOf("undermilli-logo.png")}
               target="_blank" rel="noopener noreferrer nofollow" title="Undermilli 홈페이지 (새 창)">
              <img src="/logos/undermilli-logo.png" alt="Undermilli Inc." style={{ height: 24, width: "auto" }} />
            </a>
          </div>
        </div>
      </section>

      {/* 기존 의료관광 vs 더웰니스앤 — 전체 비교 */}
      <section className="why" id="diff-full" data-edit-key="diff">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("diff.tag")}</span>
            <h2 className="section-title">{t("diff.title")}</h2>
            <p className="section-sub">{t("diff.sub")}</p>
          </div>
          <div className="compare">
            <div className="compare-col compare-bad">
              <h4>{t("diff.bad.title")}</h4>
              <h3>{t("diff.bad.sub")}</h3>
              <ul className="compare-list">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => <li key={n}><span className="icon-x">×</span>{t(`diff.b${n}`)}</li>)}
              </ul>
            </div>
            <div className="compare-col compare-good">
              <h4>{t("diff.good.title")}</h4>
              <h3>{t("diff.good.sub")}</h3>
              <ul className="compare-list">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => <li key={n}><span className="icon-v">✓</span>{n === 2 ? t("h3.more.g2") : t(`diff.g${n}`)}</li>)}
              </ul>
            </div>
          </div>
          <div className="reason-box">
            <h4>{t("h3.vs.why.t")}</h4>
            <p>{t("h3.vs.why.d")}</p>
          </div>
        </div>
      </section>

      {/* 예산별 선택 — 5구간 */}
      <section className="budget" id="budget" data-edit-key="budget">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("budget.tag")}</span>
            <h2 className="section-title">{t("budget.title1")} <strong>{t("budget.title2")}</strong></h2>
            <p className="section-sub">{t("budget.sub")}</p>
          </div>
          <div className="budget-grid">
            {["b1", "b2", "b3", "b4", "b5"].map((k) => (
              <div key={k} className={`budget-card${k === "b5" ? " budget-vip" : ""}`}>
                <div className="budget-range">{t(`budget.${k}.range`)}</div>
                <h3>{t(`budget.${k}.name`)}</h3>
                <ul>{t(`budget.${k}.items`).split(" · ").map((s) => <li key={s}>{s.trim()}</li>)}</ul>
                <p className="budget-for">{t(`budget.${k}.for`)}</p>
              </div>
            ))}
          </div>
          <p className="price-disclaimer">{t("price.disclaimer")}</p>
        </div>
      </section>

      {/* 진행 과정 6단계 */}
      <section className="process" id="process-full" data-edit-key="proc">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("proc.tag")}</span>
            <h2 className="section-title">{t("proc.title1")} <strong>{t("proc.title2")}</strong></h2>
            <p className="section-sub">{t("proc.sub")}</p>
          </div>
          <div className="process-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="proc-item">
                <div className="proc-num">{String(n).padStart(2, "0")}</div>
                <div>
                  <h4>{t(`proc.s${n}.title`)}</h4>
                  <p>{n === 6 ? t("h3.proc.s6.d") : t(`proc.s${n}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="about" id="about-full" data-edit-key="about">
        <div className="container about-grid">
          <div className="about-text">
            <span className="section-tag">{t("about.tag")}</span>
            <h2 className="section-title">
              {t("about.title1")}<br />
              <strong>{t("about.title2")}</strong> {t("about.title3")}
            </h2>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <ul className="about-points">
              {[1, 2, 3, 4, 5, 6].map((n) => <li key={n}><span className="check">✓</span>{t(`about.pt${n}`)}</li>)}
            </ul>
          </div>
          <div className="about-visual">
            <div className="about-stats">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="stat">
                  {/* 10/23 — 퍼센트 할인 · 방콕 비교를 뺀 숫자 (첫 화면 '왜 더웰니스앤인가' 와 같게) */}
                  <div className="stat-num">{n < 4 ? t(`h3.why.r${n}.num`) : t(`about.stat${n}.num`)}</div>
                  <div className="stat-label">{n < 4 ? t(`h3.why.r${n}.t`) : t(`about.stat${n}.lbl`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <h2>{t("contact.title1")}<br /><strong>{t("contact.title2")}</strong>{t("contact.title3")}</h2>
          <p>{t("contact.sub")}</p>
          <div className="cta-buttons">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="channel-btn"
               data-track="cta_click" data-category="contact" data-label="more_kakao">
              💬 KakaoTalk<br /><small>위드에스마케팅</small>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
