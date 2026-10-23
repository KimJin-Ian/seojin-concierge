"use client";

import { useState } from "react";
import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";
import PartnerBoard, { ConcernFinder } from "./components/PartnerBoard";
import NewsSection from "./components/NewsSection";
import InstagramSection from "./components/InstagramSection";
import DynamicSections from "./components/DynamicSections";
import SiteFooter from "./components/SiteFooter";
import EditMode from "./components/EditMode";
import { KAKAO_URL, PHONE, TEL, WHATSAPP_URL } from "./components/FloatContact";
import { useLang } from "./components/LangContext";

/**
 * 더웰니스앤 첫 화면 — 2026-10-23 2차 개편 (대표님 수정사항 10/21)
 *
 * 1부  의료관광 소개 → 회사 소개(세 가지 사업) → 왜 더웰니스앤인가(기존 vs 더웰니스앤을 합쳤다)
 *      → 진행 방법 01→06 → 이런 목적이라면? → 시술 예시(큰 네모 · 더보기) → 어떤 고민이 해결됐나(큰 버튼 · 전후 사진)
 *      → 고민으로 병원 찾기(큰 네모) → 협력사 전체(분야별로 펼침 · 바로 가기) → 언론 보도 → 인스타그램
 * 2부  맞춤 케어 01 고민 · 02 며칠 · 03 패키지 & 문화체험 · 04 구독형 · 05 그 외 MOU · 06 추가 옵션
 *      → CEO 캠프 → 상담
 *
 * 새 문구는 i18n-home3.ts 의 새 키다 (예전 키는 admin DB 문구가 덮어써서 바꿔도 안 보였다).
 * 퍼센트 할인 · "방콕보다" 는 대표님 요청으로 모두 뺐다.
 * 메뉴(admin)가 /#about · /#diff · /#trust · /#process · /#keywords · /#packages … 로 걸려 있어 그 id 를 그대로 달았다.
 * 떠 있는 문의 버튼은 [lang]/layout 으로 옮겼다 (모든 화면).
 */

const EMAIL = "dreamwithessmarketing@gmail.com";

/** 번호 붙은 소제목 — 맞춤 케어 01~06 */
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
  const [voice, setVoice] = useState<number | null>(null);
  const [voicesAll, setVoicesAll] = useState(false);
  const voices = voicesAll ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* 비주얼 에디터 모드 (?edit=1 시에만 활성화) */}
      <EditMode />

      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <SiteHeader />

      <main id="main-content">
      {/* ═══ 1. 의료관광 소개 ═══ */}
      <section className="hero h3-hero" data-edit-key="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-tag">{t("h3.hero.tag")}</span>
            <h1>
              {t("h3.hero.t1")}<br />
              <strong>{t("h3.hero.t2")}</strong><br />
              {t("h3.hero.t3")}
            </h1>
            <p className="hero-sub">{t("h3.hero.sub")}</p>
            <ul className="h3-hero-points">
              {[1, 2, 3].map((n) => <li key={n}>{t(`h3.hero.p${n}`)}</li>)}
            </ul>
            <div className="hero-buttons">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                 data-track="cta_click" data-category="contact" data-label="hero_kakao">
                {t("h3.hero.cta")}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"
                 data-track="cta_click" data-category="contact" data-label="hero_whatsapp">
                {t("h3.hero.wa")}
              </a>
              <a href="#process" className="btn btn-ghost">{t("h3.hero.how")}</a>
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

      {/* ═══ 2. 회사 소개 — 세 가지 사업 ═══ */}
      <section id="group" className="sec-group h2-tight h3-company">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("h3.co.tag")}</span>
            <h2 className="section-title">{t("h3.co.t1")} <strong>{t("h3.co.t2")}</strong></h2>
            <p className="section-sub">{t("h3.co.sub")}</p>
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

      {/* ═══ 3. 왜 더웰니스앤인가 — 이유 셋 + 기존 vs 더웰니스앤 ═══ */}
      <section className="h2-why h3-why" id="diff" data-edit-key="diff">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("h3.why.tag")}</span>
            <h2 className="section-title">{t("h3.why.title")}</h2>
            <p className="section-sub">{t("h3.why.sub")}</p>
          </div>

          <div className="h3-reasons" id="about">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h3-reason">
                <div className="h3-reason-num">{t(`h3.why.r${n}.num`)}</div>
                <h3>{t(`h3.why.r${n}.t`)}</h3>
                <p>{t(`h3.why.r${n}.d`)}</p>
              </div>
            ))}
          </div>

          <div className="h2-block" id="trust">
            <h3 className="h2-block-title">{t("h3.vs.title")}</h3>
            <div className="h3-vs" role="table" aria-label={t("h3.vs.title")}>
              <div className="h3-vs-row h3-vs-head" role="row">
                <span role="columnheader" />
                <span role="columnheader" className="h3-vs-old">{t("h3.vs.old")}</span>
                <span role="columnheader" className="h3-vs-new">{t("h3.vs.new")}</span>
              </div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h3-vs-row" role="row">
                  <span role="rowheader" className="h3-vs-k">{t(`h3.vs.r${n}.k`)}</span>
                  <span role="cell" className="h3-vs-old"><i aria-hidden="true">×</i>{t(`h3.vs.r${n}.o`)}</span>
                  <span role="cell" className="h3-vs-new"><i aria-hidden="true">✓</i>{t(`h3.vs.r${n}.n`)}</span>
                </div>
              ))}
            </div>
            <div className="h2-reason">
              <b>{t("h3.vs.why.t")}</b> {t("h3.vs.why.d")}
            </div>
          </div>
          <p className="h2-more-link"><a href={`/${lang}/more`}>{t("more.link")}</a></p>
        </div>
      </section>

      {/* ═══ 4. 진행 방법 — 01 → 06 (예전 '끊기지 않는 케어') ═══ */}
      <section className="h3-proc h2-tight" id="process" data-edit-key="proc">
        <div className="container">
          <div className="section-head" id="care">
            <span className="section-tag">{t("h3.proc.tag")}</span>
            <h2 className="section-title"><strong>{t("h3.proc.title")}</strong></h2>
            <p className="section-sub">{t("h3.proc.sub")}</p>
          </div>
          <ol className="h3-steps">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const care = n === 4 ? "s1" : n === 5 ? "s2" : n === 6 ? "s3" : null;
              return (
                <li key={n} className="h3-step">
                  <span className="h3-step-n">{String(n).padStart(2, "0")}</span>
                  <h3>{t(`h3.proc.s${n}.t`)}</h3>
                  <p>{t(`h3.proc.s${n}.d`)}</p>
                  {care ? <div className="h3-step-by"><b>{t("h3.proc.by")}</b> {t(`care.${care}.by`)}</div> : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ═══ 5. 이런 목적이라면? ═══ */}
      <section className="h3-purpose h2-tight" id="purpose">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("h3.purpose.tag")}</span>
            <h2 className="section-title"><strong>{t("h3.purpose.title")}</strong></h2>
            <p className="section-sub">{t("h3.purpose.sub")}</p>
          </div>
          <div className="h2-extra">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a key={n} href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="h2-extra-card"
                 data-track="cta_click" data-category="purpose" data-label={`purpose_${n}`}>
                <span className="h2-concern-n">{n}</span>
                <div className="h2-extra-tag">{t(`pkg.e${n}.tag`)}</div>
                <h5>{t(`pkg.e${n}.title`)}</h5>
                <p>{t(`pkg.e${n}.desc`)}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. 시술 예시 — 큰 네모 넷 · 더보기 ═══ */}
      <section className="treatments h2-tight" id="treatments" data-edit-key="treat">
        <div className="container">
          <div className="section-head" id="keywords">
            <span className="section-tag">{t("treat.tag")}</span>
            <h2 className="section-title"><strong>{t("h3.treat.title")}</strong></h2>
            <p className="section-sub">{t("h3.treat.sub")}</p>
          </div>
          <Treatments />
        </div>
      </section>

      {/* ═══ 7. 어떤 고민이 어떻게 해결되었나 — 큰 버튼 · 더보기 · 전후 사진 ═══ */}
      <section className="voices h2-tight" id="voices" data-edit-key="voices">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("voices.tag")}</span>
            <h2 className="section-title">{t("voices.title1")} <strong>{t("voices.title2")}</strong></h2>
            <p className="section-sub">{t("h3.voices.sub")}</p>
          </div>
          <div className="h3-vgrid">
            {voices.map((n) => (
              <button key={n} type="button" className={`h3-vtile${voice === n ? " is-open" : ""}`}
                      aria-expanded={voice === n} onClick={() => setVoice(voice === n ? null : n)}>
                <span className="voice-tag">{t(`voices.v${n}.tag`)}</span>
                <span className="h3-vtile-title">{t(`voices.v${n}.title`)}</span>
                {voice === n ? <span className="h3-vtile-desc">{t(`voices.v${n}.desc`)}</span> : <span className="h3-vtile-more">+</span>}
              </button>
            ))}
          </div>
          <div className="h3-vfoot">
            <button type="button" className="btn btn-ghost" onClick={() => setVoicesAll(!voicesAll)}>
              {voicesAll ? t("h3.voices.less") : t("h3.voices.more")}
            </button>
            <a href={`/${lang}/blog#before-after`} className="btn btn-primary"
               data-track="cta_click" data-category="voices" data-label="before_after">{t("h3.voices.ba")}</a>
          </div>
        </div>
      </section>

      {/* ═══ 8. 고민으로 병원 찾기 — 큰 네모 ═══ */}
      <section className="h3-find h2-tight" id="find">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("h3.find.tag")}</span>
            <h2 className="section-title"><strong>{t("h3.find.title")}</strong></h2>
            <p className="section-sub">{t("h3.find.sub")}</p>
          </div>
          <ConcernFinder />
        </div>
      </section>

      {/* ═══ 9. 협력사 — 모든 분야를 펼친다 · 분야로 바로 가기 ═══ */}
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

      {/* ═══ 10. 언론 보도 · 11. 인스타그램 ═══ */}
      <NewsSection />
      <InstagramSection />

      {/* ═══ 2부 — 고민 · 예산 · 기간별 맞춤 케어 01~06 ═══ */}
      <section className="h2-plan" id="concern" data-edit-key="concern">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("plan.tag")}</span>
            <h2 className="section-title">{t("plan.title1")} <strong>{t("plan.title2")}</strong></h2>
            <p className="section-sub">{t("plan.sub")}</p>
          </div>

          {/* 01 고민 — 바둑판 + 예산으로 좁히기 */}
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
            <p className="price-disclaimer">{t("price.disclaimer")}</p>
          </Step>

          {/* 02 며칠 */}
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

          {/* 03 시그니처 패키지 & 문화체험 */}
          <Step n={3} title={t("h3.plan.n3")} sub={t("pkg.sub")} id="packages">
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
            <h4 className="h2-sub-title" id="kpop">{t("plan.n4")}</h4>
            <p className="h2-block-sub">{t("kpop.p1")}</p>
            <div className="h2-kpop">
              {[["🏋️", "pr1"], ["🎤", "pr2"], ["👑", "pr3"], ["📸", "pr4"], ["🍸", "pr5"], ["💆", "pr6"], ["🧴", "pr7"], ["🫧", "pr8"]].map(([ico, p]) => (
                <div key={p} className="h2-kpop-tile">
                  <span className="h2-kpop-ico" aria-hidden="true">{ico}</span>
                  <b>{t(`kpop.${p}.l`)}</b>
                  <span>{t(`kpop.${p}.d`)}</span>
                </div>
              ))}
            </div>
          </Step>

          {/* 04 구독형 — 멤버십 (퍼센트 할인 줄은 h3.mem.*.l2 로 바꿨다) */}
          <Step n={4} title={t("h3.plan.n4")} sub={t("plan.n5sub")} id="membership">
            <div className="h2-grid3 h2-mem">
              {([["silver", 4], ["gold", 6], ["platinum", 6]] as const).map(([tier, lines]) => (
                <div key={tier} className={`h2-card h2-mem-card${tier === "gold" ? " is-featured" : ""}`}>
                  <div className="h2-mem-tier">{t(`mem.${tier}.tier`)}</div>
                  <div className="h2-mem-price">{t(`mem.${tier}.price`)}</div>
                  <ul>{Array.from({ length: lines }, (_, i) => (
                    <li key={i}>{i === 1 ? t(`h3.mem.${tier}.l2`) : t(`mem.${tier}.l${i + 1}`)}</li>
                  ))}</ul>
                </div>
              ))}
            </div>
          </Step>

          {/* 05 그 외 MOU — 해외 의사 · CEO 한국 방문 */}
          <Step n={5} title={t("h3.plan.n5")} sub={t("plan.n6sub")} id="executive">
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

          {/* 06 추가 옵션 (하이엔드) */}
          <Step n={6} title={t("h3.plan.n6")} sub={t("exec.opt.title")}>
            <div className="h2-opts">
              {[1, 2, 3, 4, 5].map((n) => <div key={n} className="h2-opt">{t(`exec.opt${n}`)}</div>)}
            </div>
          </Step>
        </div>
      </section>

      {/* ═══ CEO 캠프 · 비즈니스 매니지먼트 (따로 뺐다) ═══ */}
      <section className="h3-camp" id="ceo-camp">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("h3.camp.tag")}</span>
            <h2 className="section-title">{t("h3.camp.t1")} <strong>{t("h3.camp.t2")}</strong></h2>
            <p className="section-sub">{t("h3.camp.sub")}</p>
          </div>
          <div className="h3-camp-grid">
            {[["🗓", 1], ["🤝", 2], ["🩺", 3], ["🥂", 4]].map(([ico, n]) => (
              <div key={n} className="h3-camp-card">
                <span className="h3-camp-ico" aria-hidden="true">{ico}</span>
                <h3>{t(`h3.camp.c${n}.t`)}</h3>
                <p>{t(`h3.camp.c${n}.d`)}</p>
              </div>
            ))}
          </div>
          <div className="h3-camp-mem">
            <b>{t("h3.camp.mem.t")}</b>
            <p>{t("h3.camp.mem.d")}</p>
          </div>
          <div className="h3-camp-ev">
            <span className="h3-camp-ev-tag">{t("h3.camp.ev.tag")}</span>
            <h3>{t("h3.camp.ev.title")}</h3>
            <p className="h3-camp-ev-when">📅 {t("h3.camp.ev.when")}</p>
            <p className="h3-camp-ev-who">👥 {t("h3.camp.ev.who")}</p>
            <ul>
              {[1, 2, 3].map((n) => <li key={n}>{t(`h3.camp.ev.s${n}`)}</li>)}
            </ul>
            <p className="h3-camp-ev-note">* {t("h3.camp.ev.note")}</p>
          </div>
          <p style={{ textAlign: "center", marginTop: 22 }}>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
               data-track="cta_click" data-category="contact" data-label="ceo_camp">{t("h3.camp.cta")}</a>
          </p>
        </div>
      </section>

      {/* ═══ 상담 ═══ */}
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
              📱 WhatsApp<br /><small>Korea MEDICAL Tour</small>
            </a>
            <a href={TEL} className="channel-btn"
              data-track="cta_click" data-category="contact" data-label="contact_phone">
              📞 {t("h3.contact.phone")}<br /><small>{PHONE}</small>
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
    </>
  );
}
