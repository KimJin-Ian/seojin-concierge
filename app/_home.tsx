"use client";

import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";
import PartnerBoard from "./components/PartnerBoard";
import DynamicSections from "./components/DynamicSections";
import SiteFooter from "./components/SiteFooter";
import EditMode from "./components/EditMode";
import { useLang } from "./components/LangContext";

/**
 * 더웰니스앤 첫 화면 — 2026-10-13 개편 (대표님 수정사항)
 *
 *   히어로(카톡 + WhatsApp) → 세 가지 사업(한 줄에 셋)
 *   → 왜 더웰니스앤인가 — 안전망 · 기존 의료관광과의 차이 · 숫자 · 끊기지 않는 케어(전 여정) · 전체 협업 방향
 *   → 시술 카테고리(한 줄에 다섯, 인기 키워드 탭 합침) → 어떤 고민이 해결됐나
 *   → 협업 업체 소개(분야 탭 · 한 줄에 넷 · 칸마다 더보기)
 *   → 고민 · 예산 · 기간별 맞춤 케어 01~07
 *   → 상담
 *
 * 스크롤을 줄이는 게 목표다 — 가로 한 줄씩 늘어놓던 칸을 바둑판으로 바꿨다.
 * 첫 화면에서 줄인 원래 칸(AI 통역 상세 · 예산별 선택 · 전체 비교표 · 진행 과정 · 회사 소개)은
 * 지우지 않고 /[lang]/more 로 옮겼다 (components/MoreSections.tsx).
 *
 * 메뉴(admin 에서 관리)가 /#about · /#diff · /#trust · /#process · /#keywords 로 걸려 있어
 * 그 id 를 새 자리에 그대로 달았다 — 메뉴가 깨지지 않게.
 */

const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";
const EMAIL = "dreamwithessmarketing@gmail.com";

/** 번호 붙은 소제목 — 맞춤 케어 01~07 */
function Step({ n, title, sub, id, children }: { n: number; title: string; sub?: string; id?: string; children: React.ReactNode }) {
  return (
    <div className="h2-step" id={id}>
      <div className="h2-step-head">
        <span className="h2-step-n">{String(n).padStart(2, "0")}</span>
        <h3>{title}</h3>
        {sub ? <span className="h2-step-sub">{sub}</span> : null}
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* 비주얼 에디터 모드 (?edit=1 시에만 활성화) */}
      <EditMode />

      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <SiteHeader />

      <main id="main-content">
      {/* HERO */}
      <section className="hero" data-edit-key="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-tag">{t("hero.tag")}</span>
            <h1>
              {t("hero.title1")}<br />
              <strong>{t("hero.title2")}</strong>{t("hero.title3")}
            </h1>
            <p className="hero-sub">{t("hero.sub")}</p>
            <div className="hero-buttons">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                 data-track="cta_click" data-category="contact" data-label="hero_kakao">
                {t("hero.cta")}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
                 data-track="cta_click" data-category="contact" data-label="hero_whatsapp">
                {t("hero.whatsapp")}
              </a>
              <a href="#packages" className="btn btn-ghost">{t("hero.cta2")}</a>
            </div>
            <div className="hero-trust">
              <span>{t("hero.trust.1")}</span>
              <span>{t("hero.trust.2")}</span>
              <span>{t("hero.trust.3")}</span>
              <span>{t("hero.trust.4")}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <div className="card-icon">✦</div>
              <div className="card-label">{t("hero.card1.label")}</div>
              <div className="card-title">{t("hero.card1.title")}</div>
              <div className="card-text">{t("hero.card1.text")}</div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="card-icon">♡</div>
              <div className="card-label">{t("hero.card2.label")}</div>
              <div className="card-title">{t("hero.card2.title")}</div>
              <div className="card-text">{t("hero.card2.text")}</div>
            </div>
            <div className="hero-card hero-card-3">
              <div className="card-icon">⌘</div>
              <div className="card-label">{t("hero.card3.label")}</div>
              <div className="card-title">{t("hero.card3.title")}</div>
              <div className="card-text">{t("hero.card3.text")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 그룹 사업 소개 — 세 회사. 한 줄에 셋 (휴대폰에서도) */}
      <section id="group" className="sec-group h2-tight">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("group.tag")}</span>
            <h2 className="section-title">{t("group.title1")} <strong>{t("group.title2")}</strong></h2>
          </div>
          <div className="group-grid h2-group3">
            {([
              ["wellness", "https://www.thewellnessn.com", "🏥"],
              ["publish", "https://www.bookpublishingwithess.com", "📚"],
              ["culture", "https://www.theculturen.com", "🎭"],
            ] as const).map(([key, href, ico]) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="group-card"
                 data-track="cta_click" data-category="group" data-label={`group_${key}`}>
                <span className="group-ico" aria-hidden="true">{ico}</span>
                <span className="group-name">{t(`group.${key}.name`)}</span>
                <span className="group-desc">{t(`group.${key}.desc`)}</span>
                <span className="group-link">{t("group.visit")} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 왜 더웰니스앤인가 — 안전 · 차이 · 숫자 · 끊기지 않는 케어 · 협업 방향 ═══ */}
      <section className="h2-why" id="diff" data-edit-key="diff">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("diff.tag")}</span>
            <h2 className="section-title">{t("diff.title")}</h2>
            <p className="section-sub"><b>{t("about.title1")}</b> {t("about.title2")} {t("about.p1")}</p>
          </div>

          {/* 숫자 — 30+ 병원 · 할인 · 방콕 대비 · 다국어 통역 */}
          <div className="h2-stats" id="about">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h2-stat">
                <div className="h2-stat-num">{t(`about.stat${n}.num`)}</div>
                <div className="h2-stat-lbl">{t(`about.stat${n}.lbl`)}</div>
              </div>
            ))}
          </div>

          {/* 안전이 가장 중요합니다 — 법률팀 · 해외 MOU · 셀럽 검증 · 정품·샷수 */}
          <div className="h2-block" id="trust" data-edit-key="trust">
            <h3 className="h2-block-title">{t("trust.title")}</h3>
            <p className="h2-block-sub">{t("trust.sub")}</p>
            <div className="h2-grid4">
              {[["⚖️", 1], ["🤝", 2], ["⭐", 3], ["🔬", 4]].map(([ico, n]) => (
                <div key={n} className="h2-card">
                  <div className="h2-card-ico">{ico}</div>
                  <h4>{t(`trust.c${n}.title`)}</h4>
                  <p>{t(`trust.c${n}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 기존 의료관광과 무엇이 다른가 — 위 안전망과 겹치는 줄은 뺀 세 줄 + 방콕 */}
          <div className="h2-block">
            <h3 className="h2-block-title">{t("why.compare")}</h3>
            <div className="h2-vs">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h2-vs-row">
                  <div className="h2-vs-bad"><span aria-hidden="true">×</span>{t(`diff.b${n}`)}</div>
                  <div className="h2-vs-arrow" aria-hidden="true">→</div>
                  <div className="h2-vs-good"><span aria-hidden="true">✓</span>{t(`diff.g${n}`)}</div>
                </div>
              ))}
            </div>
            <div className="h2-reason">
              <b>{t("diff.reason.title")}</b> {t("diff.reason.text")}
            </div>
          </div>

          {/* 시술 전부터 귀국 후까지 — 전 여정 6단계에 케어 파트너를 붙였다 (예전 '진행 과정' + '끊기지 않는 케어') */}
          <div className="h2-block" id="process" data-edit-key="proc">
            <h3 className="h2-block-title" id="care">{t("care.title1")} <strong>{t("care.title2")}</strong></h3>
            <p className="h2-block-sub">{t("why.journey.sub")}</p>
            <ol className="h2-journey">
              {[1, 2, 3, 4, 5, 6].map((n) => {
                const care = n === 4 ? "s1" : n === 5 ? "s2" : n === 6 ? "s3" : null;
                return (
                  <li key={n} className="h2-journey-step">
                    <span className="h2-journey-n">{String(n).padStart(2, "0")}</span>
                    <h4>{t(`proc.s${n}.title`)}</h4>
                    <p>{t(`proc.s${n}.desc`)}</p>
                    {care ? <div className="h2-journey-by"><b>{t(`care.${care}.title`)}</b> · {t(`care.${care}.by`)}</div> : null}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* 전체 협업 방향 */}
          <div className="h2-block">
            <h3 className="h2-block-title">{t("biz.flow.title")}</h3>
            <ol className="h2-flow">
              {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((s, i) => (
                <li key={s}><span>{i + 1}</span>{t(`biz.flow.${s}`)}</li>
              ))}
            </ol>
            <p className="h2-block-sub" style={{ marginTop: 12 }}>{t("biz.flow.desc")}</p>
          </div>

          <p className="h2-more-link"><a href={`/${lang}/more`}>{t("more.link")}</a></p>
        </div>
      </section>

      {/* ═══ 시술 카테고리 — 한 줄에 다섯 · 인기 키워드 탭 합침 ═══ */}
      <section className="treatments h2-tight" id="treatments" data-edit-key="treat">
        <div className="container">
          <div className="section-head" id="keywords">
            <span className="section-tag">{t("treat.tag")}</span>
            <h2 className="section-title"><strong>{t("treat.title")}</strong></h2>
            <p className="section-sub">{t("treat.sub")}</p>
          </div>
          <Treatments />
        </div>
      </section>

      {/* 어떤 고민이 어떻게 해결되었나 — 시술 목록 바로 아래 */}
      <section className="voices h2-tight" id="voices" data-edit-key="voices">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("voices.tag")}</span>
            <h2 className="section-title">{t("voices.title1")} <strong>{t("voices.title2")}</strong></h2>
          </div>
          <div className="voices-grid h2-voices">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="voice-card">
                <div className="voice-tag">{t(`voices.v${n}.tag`)}</div>
                <h4>{t(`voices.v${n}.title`)}</h4>
                <p>{t(`voices.v${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 협업 업체 소개 — 분야 탭 · 한 줄에 넷 · 더보기 ═══ */}
      <section className="partners h2-tight" id="partners" data-edit-key="partners">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("partners.tag")}</span>
            <h2 className="section-title"><strong>{t("partners.title1")}</strong>{t("partners.title2")}</h2>
            <p className="section-sub">{t("partners.sub")}</p>
          </div>
          <PartnerBoard />
        </div>
      </section>

      {/* ═══ 고민 · 예산 · 기간별 맞춤 케어 01~07 ═══ */}
      <section className="h2-plan" id="concern" data-edit-key="concern">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("plan.tag")}</span>
            <h2 className="section-title">{t("plan.title1")} <strong>{t("plan.title2")}</strong></h2>
            <p className="section-sub">{t("plan.sub")}</p>
          </div>

          {/* 01 고민 — 3 × 2 바둑판. 목적별 추가 패키지(예방형 ~ 웰니스)도 여기 합쳤다 */}
          <Step n={1} title={t("plan.n1")} sub={t("concern.sub")}>
            <div className="h2-concern">
              {["a", "b", "c", "d", "e"].map((k, i) => (
                <a key={k} href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="h2-concern-card"
                   data-track="cta_click" data-category="concern" data-label={`concern_${k}`}>
                  <span className="h2-concern-n">{i + 1}</span>
                  <h4>{t(`concern.${k}.q`)}</h4>
                  <div className="h2-concern-price">{t(`concern.${k}.price`)}</div>
                  <div className="h2-chips">
                    {t(`concern.${k}.items`).split(" · ").map((s) => <span key={s}>{s.trim()}</span>)}
                  </div>
                  <p className="h2-concern-for">{t(`concern.${k}.for`)}</p>
                </a>
              ))}
              <div className="h2-concern-card h2-budget-card">
                <h4>{t("plan.budget")}</h4>
                <ul className="h2-budget">
                  {["b1", "b2", "b3", "b4", "b5"].map((k) => (
                    <li key={k}><b>{t(`budget.${k}.range`)}</b><span>{t(`budget.${k}.name`)}</span></li>
                  ))}
                </ul>
                <p className="h2-concern-for">{t("concern.note")}</p>
              </div>
            </div>
            <h4 className="h2-sub-title">{t("plan.n1extra")}</h4>
            <div className="h2-extra">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h2-extra-card">
                  <span className="h2-concern-n">{n + 5}</span>
                  <div className="h2-extra-tag">{t(`pkg.e${n}.tag`)}</div>
                  <h5>{t(`pkg.e${n}.title`)}</h5>
                  <p>{t(`pkg.e${n}.desc`)}</p>
                </div>
              ))}
            </div>
            <p className="price-disclaimer">{t("price.disclaimer")}</p>
          </Step>

          {/* 02 며칠 — 세 칸 한 줄 */}
          <Step n={2} title={t("plan.n2")} sub={t("stay.sub")} id="stay">
            <div className="h2-grid3">
              {["s1", "s2", "s3"].map((k) => (
                <div key={k} className="h2-card h2-stay">
                  <div className="h2-stay-dur">{t(`stay.${k}.dur`)}</div>
                  <h4>{t(`stay.${k}.name`)}</h4>
                  <ul>{t(`stay.${k}.plan`).split(" · ").map((s) => <li key={s}>{s.trim()}</li>)}</ul>
                  <p className="h2-concern-for">{t(`stay.${k}.for`)}</p>
                </div>
              ))}
            </div>
          </Step>

          {/* 03 시그니처 패키지 */}
          <Step n={3} title={t("plan.n3")} sub={t("pkg.sub")} id="packages">
            {/* 패키지 카드는 어두운 바탕용으로 만들어져 있다 — 어두운 판 위에 올린다 */}
            <div className="packages h2-pkg-wrap" data-edit-key="pkg">
            <div className="pkg-grid">
              {[1, 2, 3].map((n) => (
                <div key={n} className="pkg-card">
                  <span className="pkg-badge">{t(`pkg.s${n}.tag`)}</span>
                  <h3>{t(`pkg.s${n}.title`)}</h3>
                  <p>{t(`pkg.s${n}.sub`)}</p>
                  <ul className="pkg-list">
                    {[1, 2, 3, 4, 5].map((l) => <li key={l}>{t(`pkg.s${n}.l${l}`)}</li>)}
                  </ul>
                  <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="pkg-cta">{t(`pkg.s${n}.cta`)}</a>
                </div>
              ))}
            </div>
            </div>
          </Step>

          {/* 04 여행 · 문화 — K-pop Tour 프로그램을 바둑판으로 */}
          <Step n={4} title={t("plan.n4")} sub={t("kpop.p1")} id="kpop">
            <div className="h2-kpop">
              {[["🏋️", "pr1"], ["🎤", "pr2"], ["👑", "pr3"], ["📸", "pr4"], ["🍸", "pr5"], ["💆", "pr6"], ["🧴", "pr7"], ["🫧", "pr8"]].map(([ico, p]) => (
                <div key={p} className="h2-kpop-tile">
                  <span className="h2-kpop-ico" aria-hidden="true">{ico}</span>
                  <b>{t(`kpop.${p}.l`)}</b>
                  <span>{t(`kpop.${p}.d`)}</span>
                </div>
              ))}
            </div>
            <ul className="h2-kpop-points">
              {[1, 2, 3, 4].map((n) => <li key={n}>{t(`kpop.pt${n}`)}</li>)}
            </ul>
          </Step>

          {/* 05 매년 관리 — 멤버십 */}
          <Step n={5} title={t("plan.n5")} sub={t("plan.n5sub")} id="membership">
            <div className="h2-grid3 h2-mem">
              {([["silver", 4], ["gold", 6], ["platinum", 6]] as const).map(([tier, lines]) => (
                <div key={tier} className={`h2-card h2-mem-card${tier === "gold" ? " is-featured" : ""}`}>
                  <div className="h2-mem-tier">{t(`mem.${tier}.tier`)}</div>
                  <div className="h2-mem-price">{t(`mem.${tier}.price`)}</div>
                  <ul>{Array.from({ length: lines }, (_, i) => <li key={i}>{t(`mem.${tier}.l${i + 1}`)}</li>)}</ul>
                </div>
              ))}
            </div>
          </Step>

          {/* 06 해외 CEO · 의사 방문 — 01 02 03 한 줄 */}
          <Step n={6} title={t("plan.n6")} sub={t("plan.n6sub")} id="executive">
            <div className="h2-exec-banner">
              <div className="h2-exec-name">{t("exec.title1")} — {t("exec.title2")}</div>
              <p>{t("exec.banner")}</p>
              <div className="h2-chips">
                {[1, 2, 3, 4].map((n) => <span key={n}>{t(`exec.t${n}`)}</span>)}
              </div>
            </div>
            <div className="h2-grid3">
              {([[1, 4], [2, 3], [3, 4]] as const).map(([c, lines]) => (
                <div key={c} className="h2-card">
                  <div className="h2-exec-num">0{c}</div>
                  <h4>{t(`exec.c${c}.title`)}</h4>
                  <ul>{Array.from({ length: lines }, (_, i) => <li key={i}>{t(`exec.c${c}.l${i + 1}`)}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="h2-exec-price">
              <div><span className="h2-exec-eyebrow">Program Fee</span>
                <b>KRW 5,000,000</b> <small>{t("exec.price.from")} · {t("exec.price.unit")}</small></div>
              <div className="h2-chips">{[1, 2, 3, 4, 5].map((n) => <span key={n}>{t(`exec.inc${n}`)}</span>)}</div>
              <p className="h2-concern-for">{t("exec.price.note")}</p>
            </div>
          </Step>

          {/* 07 추가 옵션 (하이엔드) */}
          <Step n={7} title={t("plan.n7")} sub={t("exec.opt.title")}>
            <div className="h2-opts">
              {[1, 2, 3, 4, 5].map((n) => <div key={n} className="h2-opt">{t(`exec.opt${n}`)}</div>)}
            </div>
          </Step>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cta-section" id="contact" data-edit-key="contact">
        <div className="container">
          <h2>
            {t("contact.title1")}<br />
            <strong>{t("contact.title2")}</strong>{t("contact.title3")}
          </h2>
          <p>{t("contact.sub")}</p>
          <div className="cta-buttons">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="channel-btn"
              data-track="cta_click" data-category="contact" data-label="contact_kakao">
              💬 KakaoTalk<br /><small>위드에스마케팅</small>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="channel-btn"
              data-track="cta_click" data-category="contact" data-label="contact_whatsapp">
              📱 WhatsApp<br /><small>Korea MEDICAL Tour 채널</small>
            </a>
            <a href={`mailto:${EMAIL}`} className="channel-btn"
              data-track="cta_click" data-category="contact" data-label="contact_email">
              ✉ Email<br /><small>{EMAIL}</small>
            </a>
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            {t("contact.note")}
          </p>
        </div>
      </section>

      {/* 동적 섹션 (admin /site/sections에서 추가) */}
      <DynamicSections />
      </main>

      {/* FOOTER (DB 우선 + 폴백) */}
      <SiteFooter />

      {/* 플로팅 문의 버튼 — 카카오톡 · WhatsApp */}
      <div className="float-contact" aria-label={t("float.aria")}>
        <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="float-btn float-kakao"
          data-track="cta_click" data-category="contact" data-label="float_kakao">
          <span className="float-ico" aria-hidden="true">💬</span>
          <span className="float-label">{t("float.kakao")}</span>
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="float-btn float-whatsapp"
          data-track="cta_click" data-category="contact" data-label="float_whatsapp">
          <span className="float-ico" aria-hidden="true">📱</span>
          <span className="float-label">{t("float.whatsapp")}</span>
        </a>
        <a href="https://www.bookpublishingwithess.com" target="_blank" rel="noopener noreferrer"
          className="float-btn float-publish"
          data-track="cta_click" data-category="contact" data-label="float_publish">
          <span className="float-ico" aria-hidden="true">📚</span>
          <span className="float-label">{t("float.publish")}</span>
        </a>
      </div>
    </>
  );
}
