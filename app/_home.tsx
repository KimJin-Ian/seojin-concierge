"use client";

import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";
import DynamicSections from "./components/DynamicSections";
import SiteFooter from "./components/SiteFooter";
import EditMode from "./components/EditMode";
import { useLang } from "./components/LangContext";

const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";
const EMAIL = "dreamwithessmarketing@gmail.com";

export default function Home() {
  const { t } = useLang();
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

      {/* 협력 네트워크 스트립 — 초창기 신뢰 (히어로 직후) */}
      <section className="partner-strip" data-edit-key="partnerstrip">
        <div className="container">
          <h3 className="strip-title">{t("strip.title")}</h3>
          <p className="strip-sub">{t("strip.sub")}</p>
          <div className="strip-logos">
            {["pixelab.jpg", "primi-clinic.jpg", "banpo-standar.jpg", "dove-clinic.png", "saebom-women.png", "seoul-haengsin.png", "dapung-han.jpg", "haeol.jpg", "hijack.png", "vividson.jpg"].map((f) => (
              <img key={f} src={`/logos/${f}`} alt="The Wellness N 협력사 로고" loading="lazy" />
            ))}
          </div>
          <a href="#partners" className="strip-more">{t("strip.more")}</a>
        </div>
      </section>

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
              <img
                src="/logos/maloha-logo.png"
                alt="Maloha"
                style={{ height: 58, width: "auto", alignSelf: "flex-start", flex: "0 0 auto" }}
              />
              <p className="tagline"><b>{t("ai.tagline1")}</b><br />{t("ai.tagline2")}</p>
              <div className="ai-chips">
                <span className="chip">{t("ai.chip1")}</span>
                <span className="chip">{t("ai.chip2")}</span>
                <span className="chip">{t("ai.chip3")}</span>
              </div>
            </div>
            <div className="ai-card light">
              <ul className="ai-benefits">
                <li><span className="check">✓</span><div><b>{t("ai.b1t")}</b><div className="d">{t("ai.b1d")}</div></div></li>
                <li><span className="check">✓</span><div><b>{t("ai.b2t")}</b><div className="d">{t("ai.b2d")}</div></div></li>
                <li><span className="check">✓</span><div><b>{t("ai.b3t")}</b><div className="d">{t("ai.b3d")}</div></div></li>
                <li><span className="check">✓</span><div><b>{t("ai.b4t")}</b><div className="d">{t("ai.b4d")}</div></div></li>
              </ul>
            </div>
          </div>
          <div className="partner-attr">
            <div className="meta">
              <span className="attr-tag">{t("ai.ptag")}</span>
              {t("ai.pdesc")}
            </div>
            <span className="um-tile">
              <img src="/logos/undermilli-logo.png" alt="Undermilli Inc." style={{ height: 24, width: "auto" }} />
            </span>
          </div>
        </div>
      </section>

      {/* TRUST / 불안 심리 해소 */}
      <section className="trust" id="trust" data-edit-key="trust">
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

      {/* OVERSEAS MOU */}
      <section className="overseas" data-edit-key="overseas">
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

      {/* PARTNERS — 협력사 (분야별: 병원·한의원·K뷰티·문화·요식) */}
      <section className="partners" id="partners" data-edit-key="partners">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{t("partners.tag")}</span>
            <h2 className="section-title">
              <strong>{t("partners.title1")}</strong>{t("partners.title2")}
            </h2>
            <p className="section-sub">{t("partners.sub")}</p>
          </div>

          {(() => {
            type P = { name: string; img?: string };
            const SECTORS: { key: string; label: string; en: string; items: P[] }[] = [
              {
                key: "clinic", label: "병원", en: "Clinics & Hospitals",
                items: [
                  { name: "강남 픽셀랩 성형외과·피부과", img: "pixelab.jpg" },
                  { name: "성수 프리미클리닉", img: "primi-clinic.jpg" },
                  { name: "반포 스탠다 정형외과", img: "banpo-standar.jpg" },
                  { name: "압구정 도브의원", img: "dove-clinic.png" },
                  { name: "잠실 새봄여성의원", img: "saebom-women.png" },
                  { name: "일산 서울행신치과", img: "seoul-haengsin.png" },
                  { name: "목동 턱투미 구강내과치과", img: "teokdumi.jpg" },
                  { name: "양윤돌치과의원", img: "yangyundol.jpg" },
                  { name: "미랩클리닉", img: "mirab-clinic.jpg" },
                  { name: "메디원", img: "medi-one.png" },
                  { name: "마곡 리라이브치과", img: "relive-dentistry.png" },
                  { name: "신사 신상성형외과", img: "sinsang-ps.svg" },
                  { name: "피어봄 피부과 (청담)" },
                ],
              },
              {
                key: "hanbang", label: "한의원", en: "Oriental Medicine",
                items: [
                  { name: "서대문구 다풍한의원", img: "dapung-han.jpg" },
                  { name: "성수 회복재한의원", img: "hoebokjae-han.png" },
                  { name: "바론한의원", img: "baron-han.jpg" },
                  { name: "북가좌 경희한의원 본점", img: "bukgajwa-kyunghee.png" },
                  { name: "동탄 함께걷는한의원", img: "together-clinic.png" },
                  { name: "상왕십리 경희한의원" },
                ],
              },
              {
                key: "beauty", label: "K뷰티 · 이너뷰티", en: "K-Beauty & Inner Beauty",
                items: [
                  { name: "해올 (Haeol)", img: "haeol.jpg" },
                  { name: "HIJACK", img: "hijack.png" },
                  { name: "무하 (Mooha)", img: "mooha.png" },
                  { name: "비비슨 (Vividson)", img: "vividson.jpg" },
                  { name: "브릴리언트", img: "brilliant.png" },
                  { name: "썸데이", img: "someday.png" },
                  { name: "주당의 비결 (숙취해소제)", img: "judang-secret.png" },
                  { name: "클레로엔 유산균필" },
                  { name: "R828" },
                  { name: "수소 마스크팩" },
                  { name: "암 전문 화장품" },
                  { name: "오픈피아", img: "opunfia.png" },
                ],
              },
              {
                key: "culture", label: "공연 · 문화 · 호텔", en: "Culture & Hospitality",
                items: [
                  { name: "뮤지컬 써니텐", img: "musical-sunnyten.jpg" },
                  { name: "뮤지컬펍 스폿라이트", img: "musical-spotlight.jpg" },
                  { name: "글로호텔", img: "glue-hotel.jpg" },
                  { name: "대학로 무한 아트센터" },
                  { name: "누리라운지" },
                  { name: "월미도 블루마린호텔", img: "blue-marine-hotel.png" },
                ],
              },
              {
                key: "dining", label: "요식업", en: "Dining",
                items: [
                  { name: "무큐르 곱창밴드", img: "mooqure.png" },
                  { name: "와인솔로", img: "wine-solo.png" },
                  { name: "와인포차", img: "wine-pocha.png" },
                  { name: "무드서울 레스토랑 (반포한강)" },
                  { name: "여의도 신도세기 고기집", img: "sindosegi.png" },
                  { name: "가야한우 갈비살 (서강대 직영)" },
                ],
              },
            ];
            return (
              <div className="partner-tabs">
                {SECTORS.map((s) => (
                  <div key={s.key} className="partner-group">
                    <h4>{t(`partners.g.${s.key}`)} <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 400 }}>· {s.items.length}{t("partners.suffix")}</span></h4>
                    <div className="logo-grid">
                      {s.items.map((p) => (
                        <div key={p.name} className={p.img ? "logo-cell" : "logo-cell text-only"} title={p.name}>
                          {p.img ? (
                            <>
                              <img
                                src={`/logos/${p.img}`}
                                alt={`${p.name} 로고 · The Wellness N 협력사`}
                                loading="lazy"
                              />
                              <div className="logo-cell-name">{p.name}</div>
                            </>
                          ) : (
                            <>
                              <span className="plate-tag">Partner</span>
                              <span className="plate-nm">{p.name}</span>
                            </>
                          )}
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

      {/* DIFFERENTIATORS — 왜 우리인가 */}
      <section className="why" id="diff" data-edit-key="diff">
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
      <section className="treatments" id="treatments" data-edit-key="treat">
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

      {/* PACKAGES */}
      <section className="packages" id="packages" data-edit-key="pkg">
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
      <section className="kpop" id="kpop" data-edit-key="kpop">
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
      <section className="membership" id="membership" data-edit-key="mem">
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
      <section className="voices" id="voices" data-edit-key="voices">
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

      {/* PROCESS */}
      <section className="process" id="process" data-edit-key="proc">
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

      {/* ABOUT — 회사 소개 (초창기: 증거 먼저, 스토리는 뒤로) */}
      <section className="about" id="about" data-edit-key="about">
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

      {/* KEYWORD LANDING — SEO 핵심 */}
      <section className="keywords" id="keywords" data-edit-key="kw">
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
    </>
  );
}
