"use client";

import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";
import DynamicSections from "./components/DynamicSections";
import SiteFooter from "./components/SiteFooter";
import { useLang } from "./components/LangContext";

const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";
const EMAIL = "dreamwithessmarketing@gmail.com";

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <SiteHeader />

      <main id="main-content">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-tag">{t("hero.tag")}</span>
            <h1>
              {t("hero.title1")}<br />
              <strong>{t("hero.title2")}</strong>{t("hero.title3")}
            </h1>
            <p className="hero-sub">{t("hero.sub")}</p>
            <div className="hero-buttons">
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                data-track="cta_click"
                data-category="contact"
                data-label="hero_kakao"
              >
                {t("hero.cta")}
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

      {/* ABOUT */}
      <section className="about" id="about">
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
              <li><span className="check">✓</span>{t("about.pt1")}</li>
              <li><span className="check">✓</span>{t("about.pt2")}</li>
              <li><span className="check">✓</span>{t("about.pt3")}</li>
              <li><span className="check">✓</span>{t("about.pt4")}</li>
              <li><span className="check">✓</span>{t("about.pt5")}</li>
              <li><span className="check">✓</span>{t("about.pt6")}</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="about-stats">
              <div className="stat">
                <div className="stat-num">{t("about.stat1.num")}</div>
                <div className="stat-label">{t("about.stat1.lbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">{t("about.stat2.num")}</div>
                <div className="stat-label">{t("about.stat2.lbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">{t("about.stat3.num")}</div>
                <div className="stat-label">{t("about.stat3.lbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">{t("about.stat4.num")}</div>
                <div className="stat-label">{t("about.stat4.lbl")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / 불안 심리 해소 */}
      <section className="trust" id="trust">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("trust.tag")}</span>
            <h2 className="section-title">
              <strong>{t("trust.title")}</strong>
            </h2>
            <p className="section-sub">{t("trust.sub")}</p>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">⚖️</div>
              <h4>{t("trust.c1.title")}</h4>
              <p>{t("trust.c1.desc")}</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🤝</div>
              <h4>{t("trust.c2.title")}</h4>
              <p>{t("trust.c2.desc")}</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">⭐</div>
              <h4>{t("trust.c3.title")}</h4>
              <p>{t("trust.c3.desc")}</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🔬</div>
              <h4>{t("trust.c4.title")}</h4>
              <p>{t("trust.c4.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS — 왜 우리인가 */}
      <section className="why" id="diff">
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
                <li><span className="icon-x">×</span>{t("diff.b1")}</li>
                <li><span className="icon-x">×</span>{t("diff.b2")}</li>
                <li><span className="icon-x">×</span>{t("diff.b3")}</li>
                <li><span className="icon-x">×</span>{t("diff.b4")}</li>
                <li><span className="icon-x">×</span>{t("diff.b5")}</li>
                <li><span className="icon-x">×</span>{t("diff.b6")}</li>
                <li><span className="icon-x">×</span>{t("diff.b7")}</li>
              </ul>
            </div>
            <div className="compare-col compare-good">
              <h4>{t("diff.good.title")}</h4>
              <h3>{t("diff.good.sub")}</h3>
              <ul className="compare-list">
                <li><span className="icon-v">✓</span>{t("diff.g1")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g2")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g3")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g4")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g5")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g6")}</li>
                <li><span className="icon-v">✓</span>{t("diff.g7")}</li>
              </ul>
            </div>
          </div>

          <div className="reason-box">
            <h4>{t("diff.reason.title")}</h4>
            <p>{t("diff.reason.text")}</p>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="treatments" id="treatments">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("treat.tag")}</span>
            <h2 className="section-title">
              <strong>{t("treat.title")}</strong>
            </h2>
            <p className="section-sub">{t("treat.sub")}</p>
          </div>
          <Treatments />
        </div>
      </section>

      {/* KEYWORD LANDING — SEO 핵심 */}
      <section className="keywords" id="keywords">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("kw.tag")}</span>
            <h2 className="section-title">
              {t("kw.title1")} <strong>{t("kw.title2")}</strong>
            </h2>
            <p className="section-sub">{t("kw.sub")}</p>
          </div>

          <div className="kw-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="kw-card">
                <h4>{t(`kw.c${n}.title`)}</h4>
                <p>{t(`kw.c${n}.desc`)}</p>
              </div>
            ))}
          </div>

          <div className="kw-cta">
            <p>{t("kw.cta.text")}</p>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t("kw.cta.btn")}
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages" id="packages">
        <div className="container">
          <div className="section-head">
            <span className="section-tag" style={{ color: "var(--gold)" }}>{t("pkg.tag")}</span>
            <h2 className="section-title">{t("pkg.title1")} <strong>{t("pkg.title2")}</strong></h2>
            <p className="section-sub">{t("pkg.sub")}</p>
          </div>

          {/* 메인 3종 */}
          <div className="pkg-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="pkg-card">
                <span className="pkg-badge">{t(`pkg.s${n}.tag`)}</span>
                <h3>{t(`pkg.s${n}.title`)}</h3>
                <p>{t(`pkg.s${n}.sub`)}</p>
                <ul className="pkg-list">
                  <li>{t(`pkg.s${n}.l1`)}</li>
                  <li>{t(`pkg.s${n}.l2`)}</li>
                  <li>{t(`pkg.s${n}.l3`)}</li>
                  <li>{t(`pkg.s${n}.l4`)}</li>
                  <li>{t(`pkg.s${n}.l5`)}</li>
                </ul>
                <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="pkg-cta">
                  {t(`pkg.s${n}.cta`)}
                </a>
              </div>
            ))}
          </div>

          {/* 추가 분류 */}
          <h3 className="sub-h3">{t("pkg.extra.title")}</h3>
          <div className="extra-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="extra-card">
                <div className="extra-tag">{t(`pkg.e${n}.tag`)}</div>
                <h4>{t(`pkg.e${n}.title`)}</h4>
                <p>{t(`pkg.e${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K-POP TOUR */}
      <section className="kpop" id="kpop">
        <div className="container">
          <div className="kpop-grid">
            <div>
              <span className="section-tag" style={{ color: "var(--gold)" }}>{t("kpop.tag")}</span>
              <h2 className="section-title">
                <strong>{t("kpop.title1")}</strong> {t("kpop.title2")}
              </h2>
              <div className="section-rule"></div>
              <p>{t("kpop.p1")}</p>
              <p>{t("kpop.p2")}</p>
              <ul className="kpop-points">
                <li>{t("kpop.pt1")}</li>
                <li>{t("kpop.pt2")}</li>
                <li>{t("kpop.pt3")}</li>
                <li>{t("kpop.pt4")}</li>
                <li>{t("kpop.pt5")}</li>
              </ul>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t("kpop.cta")}
              </a>
            </div>
            <div className="kpop-visual">
              <div className="kpop-emoji">🎤 🎵 ✨</div>
              <div className="kpop-title" style={{ whiteSpace: "pre-line" }}>{t("kpop.visual.title")}</div>
              <div className="kpop-sub">{t("kpop.visual.sub")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membership" id="membership">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("mem.tag")}</span>
            <h2 className="section-title">
              <strong>{t("mem.title")}</strong>
            </h2>
            <p className="section-sub">{t("mem.sub")}</p>
          </div>

          <div className="mem-grid">
            <div className="mem-card">
              <div className="mem-tier">{t("mem.silver.tier")}</div>
              <div className="mem-price">{t("mem.silver.price")}</div>
              <ul>
                <li>{t("mem.silver.l1")}</li>
                <li>{t("mem.silver.l2")}</li>
                <li>{t("mem.silver.l3")}</li>
                <li>{t("mem.silver.l4")}</li>
              </ul>
            </div>
            <div className="mem-card mem-featured">
              <div className="mem-tier">{t("mem.gold.tier")}</div>
              <div className="mem-price">{t("mem.gold.price")}</div>
              <ul>
                <li>{t("mem.gold.l1")}</li>
                <li>{t("mem.gold.l2")}</li>
                <li>{t("mem.gold.l3")}</li>
                <li>{t("mem.gold.l4")}</li>
                <li>{t("mem.gold.l5")}</li>
                <li>{t("mem.gold.l6")}</li>
              </ul>
            </div>
            <div className="mem-card">
              <div className="mem-tier">{t("mem.platinum.tier")}</div>
              <div className="mem-price">{t("mem.platinum.price")}</div>
              <ul>
                <li>{t("mem.platinum.l1")}</li>
                <li>{t("mem.platinum.l2")}</li>
                <li>{t("mem.platinum.l3")}</li>
                <li>{t("mem.platinum.l4")}</li>
                <li>{t("mem.platinum.l5")}</li>
                <li>{t("mem.platinum.l6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REAL VOICES — 유형별 리뷰 */}
      <section className="voices" id="voices">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("voices.tag")}</span>
            <h2 className="section-title">
              {t("voices.title1")} <strong>{t("voices.title2")}</strong>
            </h2>
            <p className="section-sub">{t("voices.sub")}</p>
          </div>

          <div className="voices-grid">
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

      {/* PARTNERS — 협업 병원 */}
      <section className="partners" id="partners">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("partners.tag")}</span>
            <h2 className="section-title">
              <strong>{t("partners.title1")}</strong>{t("partners.title2")}
            </h2>
            <p className="section-sub">{t("partners.sub")}</p>
          </div>

          {(() => {
            const LOGOS = [
              // 🌿 한의원 · 한방
              { img: "baron-han.jpg", name: "바론한의원", cat: "hanbang" },
              { img: "hoebokjae-han.png", name: "회복재한의원", cat: "hanbang" },
              // 🦷 치과
              { img: "seoul-haengsin.png", name: "서울행신치과", cat: "dental" },
              { img: "yangyundol.jpg", name: "양윤돌치과의원", cat: "dental" },
              { img: "teokdumi.jpg", name: "턱투미구강내과치과", cat: "dental" },
              // 🏥 의원 · 클리닉
              { img: "saebom-women.png", name: "새봄여성의원", cat: "clinic" },
              { img: "dove-clinic.png", name: "도브의원", cat: "clinic" },
              { img: "primi-clinic.jpg", name: "프리미클리닉", cat: "clinic" },
              { img: "medi-one.png", name: "메디원", cat: "clinic" },
              // 💆 케어 · 뷰티
              { img: "haeol.jpg", name: "해올 (Haeol)", cat: "beauty" },
              { img: "hijack.png", name: "HIJACK", cat: "beauty" },
              { img: "brilliant.png", name: "브릴리언트", cat: "beauty" },
              { img: "mooha.png", name: "무하 (Mooha)", cat: "beauty" },
              { img: "vividson.jpg", name: "비비슨 (Vividson)", cat: "beauty" },
              { img: "someday.png", name: "썸데이", cat: "beauty" },
            ];
            const groups: Record<string, { label: string; items: typeof LOGOS }> = {
              hanbang: { label: t("partners.g1"), items: [] },
              dental: { label: t("partners.g2"), items: [] },
              clinic: { label: t("partners.g3"), items: [] },
              beauty: { label: t("partners.g4"), items: [] },
            };
            LOGOS.forEach((l) => groups[l.cat].items.push(l));
            return (
              <div className="partner-tabs">
                {Object.entries(groups).map(([cat, g]) => (
                  <div key={cat} className="partner-group">
                    <h4>{g.label} <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 400 }}>· {g.items.length}{t("partners.suffix")}</span></h4>
                    <div className="logo-grid">
                      {g.items.map((l) => (
                        <div key={l.img} className="logo-cell" title={l.name}>
                          <img
                            src={`/logos/${l.img}`}
                            alt={`${l.name} 로고 · The Wellness N 협업 병원`}
                            loading="lazy"
                          />
                          <div className="logo-cell-name">{l.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          <div className="logo-placeholder">
            <p>{t("partners.note")}</p>
          </div>
        </div>
      </section>

      {/* OVERSEAS MOU */}
      <section className="overseas">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("overseas.tag")}</span>
            <h2 className="section-title">{t("overseas.title")}</h2>
            <p className="section-sub">{t("overseas.sub")}</p>
          </div>
          <div className="overseas-grid">
            <div className="overseas-card">
              <div className="overseas-flag">🇺🇸</div>
              <h4>{t("overseas.us")}</h4>
              <p>{t("overseas.us.desc")}</p>
            </div>
            <div className="overseas-card">
              <div className="overseas-flag">🇹🇭</div>
              <h4>{t("overseas.th")}</h4>
              <p>{t("overseas.th.desc")}</p>
            </div>
            <div className="overseas-card">
              <div className="overseas-flag">🇰🇷</div>
              <h4>{t("overseas.kpop")}</h4>
              <p>{t("overseas.kpop.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("proc.tag")}</span>
            <h2 className="section-title">
              {t("proc.title1")} <strong>{t("proc.title2")}</strong>
            </h2>
            <p className="section-sub">{t("proc.sub")}</p>
          </div>
          <div className="process-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="proc-item">
                <div className="proc-num">{String(n).padStart(2, "0")}</div>
                <div>
                  <h4>{t(`proc.s${n}.title`)}</h4>
                  <p>{t(`proc.s${n}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cta-section" id="contact">
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
    </>
  );
}
