"use client";

import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";
import { useLang } from "./components/LangContext";

const KAKAO_URL = "http://pf.kakao.com/_QkZhd";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbD3dlqGU3BBeU7sKN15";
const EMAIL = "dreamwithessmarketing@gmail.com";

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <SiteHeader />

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
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
              <li><span className="check">✓</span>당신의 고민 → 객관적인 병원·시술 매칭</li>
              <li><span className="check">✓</span>광고비 X · 비교·검증 기반 추천</li>
              <li><span className="check">✓</span>정품·샷수·집도의 직접 확인</li>
              <li><span className="check">✓</span>회복 동선까지 포함한 일정 설계</li>
              <li><span className="check">✓</span>다국어 실시간 통역 + 전담 컨시어지</li>
              <li><span className="check">✓</span>의료사고 법률팀 + 해외 MOU 안전망</li>
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
              <h4>기존 의료관광의 문제</h4>
              <h3>병원이 정한 경험</h3>
              <ul className="compare-list">
                <li><span className="icon-x">×</span>광고비 기반 단일 병원 추천</li>
                <li><span className="icon-x">×</span>가격만 강조 · 부작용 위험 무시</li>
                <li><span className="icon-x">×</span>고객의 진짜 고민 파악 안 함</li>
                <li><span className="icon-x">×</span>정품·샷수·집도의 정보 부재</li>
                <li><span className="icon-x">×</span>시술 후 사후관리 부재</li>
                <li><span className="icon-x">×</span>언어 장벽·통역 부실</li>
                <li><span className="icon-x">×</span>의료사고 발생 시 책임 회피</li>
              </ul>
            </div>
            <div className="compare-col compare-good">
              <h4>The Wellness N의 방향</h4>
              <h3>고객 중심 매칭</h3>
              <ul className="compare-list">
                <li><span className="icon-v">✓</span>30+ 병원 풀에서 객관적 비교 매칭</li>
                <li><span className="icon-v">✓</span>부작용·안전 최우선 · 5~10% 할인</li>
                <li><span className="icon-v">✓</span>고민 구체화 컨설팅 (책 출판 컨설팅 노하우)</li>
                <li><span className="icon-v">✓</span>정품·샷수·집도의 사전 확인</li>
                <li><span className="icon-v">✓</span>회복·사후관리·재방문 연결</li>
                <li><span className="icon-v">✓</span>실시간 다국어 통역 + 전담</li>
                <li><span className="icon-v">✓</span>법률팀 + 해외 MOU 보호</li>
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
            <div className="kw-card">
              <h4>줄기세포 (Stem Cell)</h4>
              <p>피부 재생·안티에이징의 최신 기술. 강남 줄기세포 전문 병원과 협업, 정품·집도의 직접 검증.</p>
            </div>
            <div className="kw-card">
              <h4>피코토닝 (Picotoning)</h4>
              <p>잡티·모공·톤업 동시 케어. 피코슈어·피코웨이 등 기기별 차이를 비교해드립니다.</p>
            </div>
            <div className="kw-card">
              <h4>팔자주름 (Nasolabial)</h4>
              <p>필러·실리프팅·울쎄라·써마지 — 원인에 따라 다른 솔루션. 한 병원이 아닌 객관적 매칭.</p>
            </div>
            <div className="kw-card">
              <h4>탈모 (Hair Loss)</h4>
              <p>두피 스캘프 + 헤어 메조테라피 + 줄기세포 모발 재생. 강남 탈모 전문 병원 매칭.</p>
            </div>
            <div className="kw-card">
              <h4>쥬베룩 (Juvelook)</h4>
              <p>콜라겐 부스터로 자연스러운 볼륨·피부 결. 정품·샷수 확인 후 안내.</p>
            </div>
            <div className="kw-card">
              <h4>티타늄·레이저</h4>
              <p>리프팅 기기의 끝판왕. 티타늄·HIFU·울쎄라·써마지 등 기기 차이 비교 분석.</p>
            </div>
            <div className="kw-card">
              <h4>안티에이징·종합검진</h4>
              <p>예방형 검진 → 맞춤 안티에이징 프로그램. 강남 프리미엄 종합검진 센터 + 한방 결합.</p>
            </div>
            <div className="kw-card">
              <h4>리프팅·HIFU·울쎄라</h4>
              <p>비절개 리프팅의 표준. 피부 두께·처짐 정도에 따라 기기 선택이 다릅니다.</p>
            </div>
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
            <div className="pkg-card">
              <span className="pkg-badge">Best Seller</span>
              <h3>K-Beauty Glow</h3>
              <p>피부광·리프팅 입문자를 위한 베이직 코스</p>
              <ul className="pkg-list">
                <li>리쥬란 + 스킨부스터</li>
                <li>HIFU 또는 피코토닝 1회</li>
                <li>4성급 호텔 2박</li>
                <li>전담 통역 + 픽업</li>
                <li>사후관리 1회 포함</li>
              </ul>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="pkg-cta">K-Beauty 상담 →</a>
            </div>

            <div className="pkg-card">
              <span className="pkg-badge">Premium</span>
              <h3>Anti-Aging Suite</h3>
              <p>안티에이징 검진 + 종합 리프팅 + 줄기세포 케어</p>
              <ul className="pkg-list">
                <li>안티에이징 정밀 검사</li>
                <li>울쎄라 + 써마지 콤보</li>
                <li>줄기세포 케어 1회</li>
                <li>5성급 호텔 3박</li>
                <li>프라이빗 통역 + 운전</li>
              </ul>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="pkg-cta">안티에이징 상담 →</a>
            </div>

            <div className="pkg-card">
              <span className="pkg-badge">Wellness</span>
              <h3>Healing Tour</h3>
              <p>건강검진 + 웰니스 회복 + 한국 힐링 관광</p>
              <ul className="pkg-list">
                <li>프리미엄 종합검진</li>
                <li>한방 · 체질 분석 (대전한방병원 연계)</li>
                <li>스파 + 헤드스파 + 발마사지</li>
                <li>대학로 공연 · K-Food 미식 투어</li>
                <li>한옥 1박 체험</li>
              </ul>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="pkg-cta">힐링투어 상담 →</a>
            </div>
          </div>

          {/* 추가 분류 */}
          <h3 className="sub-h3">{t("pkg.extra.title")}</h3>
          <div className="extra-grid">
            <div className="extra-card">
              <div className="extra-tag">예방형</div>
              <h4>건강검진 입문</h4>
              <p>아직은 아프지 않지만 예방 차원. 누구나 부담 없이 시작 가능한 종합 검진.</p>
            </div>
            <div className="extra-card">
              <div className="extra-tag">캐주얼 케어</div>
              <h4>발마사지 · 쁘띠</h4>
              <p>의견 없이 누구나 만족하는 캐주얼 케어. 대학로 공연 관람과 함께(브로드웨이 같은 창작 무대).</p>
            </div>
            <div className="extra-card">
              <div className="extra-tag">외모 개선</div>
              <h4>어디를 고치고 싶은가</h4>
              <p>얼굴 부위별 맞춤 — 팔자주름·눈가·턱선·V라인 등 부위별 객관적 솔루션.</p>
            </div>
            <div className="extra-card">
              <div className="extra-tag">치료 목적</div>
              <h4>실제 치료가 필요한 경우</h4>
              <p>정형외과·한방·내과 — 미국 대비 훨씬 저렴한 한국 치료. 대전한방병원 연계.</p>
            </div>
            <div className="extra-card">
              <div className="extra-tag">트렌드</div>
              <h4>최신 기술 케어</h4>
              <p>줄기세포·쥬베룩·티타늄·피코토닝 — 잘나가는 키워드의 최신 시술.</p>
            </div>
            <div className="extra-card">
              <div className="extra-tag">웰니스</div>
              <h4>스파 · 헤어 · 라운지</h4>
              <p>순수라운지 방배(마사지·힐링 스파 종합) · 헤어 스파 · 명상 등 종합 케어.</p>
            </div>
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
                <li>✦ 유명 뮤직비디오 촬영지 큐레이션 투어</li>
                <li>✦ 라이브 공연 또는 팬미팅 좌석 예매 지원</li>
                <li>✦ 명동·홍대·강남 K-pop 핫스팟</li>
                <li>✦ K-Beauty 시술과 결합 일정 설계</li>
                <li>✦ 다음 주 MOU 체결 예정 (제휴 확대)</li>
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
              <div className="mem-tier">SILVER</div>
              <div className="mem-price">연 99만원~</div>
              <ul>
                <li>분기별 컨시어지 상담</li>
                <li>제휴 병원 5~10% 할인</li>
                <li>정기 검진 알림</li>
                <li>긴급 의료 통역 지원</li>
              </ul>
            </div>
            <div className="mem-card mem-featured">
              <div className="mem-tier">GOLD</div>
              <div className="mem-price">연 299만원~</div>
              <ul>
                <li>월 컨시어지 상담 (무제한)</li>
                <li>제휴 병원 최대 15% 할인</li>
                <li>연 1회 종합 검진 패키지</li>
                <li>VIP 일정 우선 예약</li>
                <li>법률팀 상담 포함</li>
                <li>해외 협업 병원 이용 가능</li>
              </ul>
            </div>
            <div className="mem-card">
              <div className="mem-tier">PLATINUM</div>
              <div className="mem-price">연 999만원~</div>
              <ul>
                <li>전담 컨시어지 1:1 매니저</li>
                <li>제휴 병원 최대 20% 할인</li>
                <li>연 2회 종합 검진 + 안티에이징</li>
                <li>K-pop Tour 1회 포함</li>
                <li>해외 MOU 병원 전체 이용</li>
                <li>의료사고 종합 보장</li>
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
            <div className="voice-card">
              <div className="voice-tag">팔자주름</div>
              <h4>&ldquo;필러보다 실리프팅이 맞았어요.&rdquo;</h4>
              <p>&ldquo;처음엔 필러만 알아봤는데, 컨시어지가 피부 두께랑 처짐 정도 보고 실리프팅이 맞다고 알려줬어요. 결과 훨씬 자연스러워요.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">줄기세포</div>
              <h4>&ldquo;정품인지 확인하고 받았어요.&rdquo;</h4>
              <p>&ldquo;줄기세포가 가격대가 큰데, 정품·집도의 직접 확인해주니 안심하고 받았습니다. 피부결이 완전히 바뀌었어요.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">탈모</div>
              <h4>&ldquo;3개 병원 비교 후 결정했어요.&rdquo;</h4>
              <p>&ldquo;탈모 클리닉이 너무 많아서 못 정했는데, 3곳 객관적 비교 자료 받고 결정. 두피 스캘프 + 줄기세포 조합으로 효과 봤어요.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">안티에이징</div>
              <h4>&ldquo;검진부터 시작했어요.&rdquo;</h4>
              <p>&ldquo;바로 시술 받지 말고 검진 먼저 권유해주셔서 좋았어요. 호르몬·영양 상태 보고 맞춤 프로그램 받으니 효과 더 컸어요.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">치료 (정형외과)</div>
              <h4>&ldquo;미국 대비 1/5 가격.&rdquo;</h4>
              <p>&ldquo;미국에서 받으면 보험 없이 수천만원인데, 한국에서 동급 치료를 훨씬 저렴하게. 통역까지 붙어서 안심.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">힐링투어</div>
              <h4>&ldquo;검진 + 한방 + 관광 한 번에.&rdquo;</h4>
              <p>&ldquo;시술만 받고 가기 아까웠는데, 검진·한방 체질 분석·대학로 공연까지 한 일정에 묶어주셔서 완벽한 휴가가 됐어요.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">K-pop Tour (외국인)</div>
              <h4>&ldquo;뷰티 + 케이팝 투어 동시에.&rdquo;</h4>
              <p>&ldquo;K-Beauty 시술 받으러 왔는데 뮤직비디오 촬영지까지 투어. 친구들한테 자랑할 추억 한가득.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">멤버십</div>
              <h4>&ldquo;매년 끊고 정기 케어 받아요.&rdquo;</h4>
              <p>&ldquo;골드 멤버십으로 분기마다 케어. 가격도 할인되고 일정 짤 필요 없어서 시간 절약 엄청 큽니다.&rdquo;</p>
            </div>
            <div className="voice-card">
              <div className="voice-tag">웰니스 (스파)</div>
              <h4>&ldquo;순수라운지 방배 추천 받았어요.&rdquo;</h4>
              <p>&ldquo;시술 후 회복 동선에 마사지·힐링 스파까지 짜주셔서 완전 다른 차원의 회복. 다음에 또 올 거예요.&rdquo;</p>
            </div>
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
              hanbang: { label: "🌿 한의원 · 한방", items: [] },
              dental: { label: "🦷 치과", items: [] },
              clinic: { label: "🏥 의원 · 클리닉", items: [] },
              beauty: { label: "💆 케어 · 뷰티", items: [] },
            };
            LOGOS.forEach((l) => groups[l.cat].items.push(l));
            return (
              <div className="partner-tabs">
                {Object.entries(groups).map(([cat, g]) => (
                  <div key={cat} className="partner-group">
                    <h4>{g.label} <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 400 }}>· {g.items.length}곳</span></h4>
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
            <p>📌 추가로 강남 프리미엄 피부과·성형외과·안티에이징·줄기세포·탈모·정형외과 및 대전한방병원 등 30+ 병원과 협업 중. 분야별 자세한 매칭은 카톡으로 문의주세요.</p>
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
            <div className="proc-item">
              <div className="proc-num">01</div>
              <div>
                <h4>1:1 카톡 상담 (무료)</h4>
                <p>고민·예산·일정·원하는 결과를 카톡(위드에스마케팅)·WhatsApp·메일로 보내주세요. 책 출판 컨설팅 노하우로 고민을 구체화해드립니다.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">02</div>
              <div>
                <h4>객관적 병원·시술 매칭</h4>
                <p>30+ 협업 병원 중 당신의 고민에 가장 적합한 3~4곳 비교 자료를 제공. 정품·샷수·집도의·후기 모두 검증.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">03</div>
              <div>
                <h4>일정 + 회복 동선 설계</h4>
                <p>시술 + 회복 + 관광 + 호텔 + K-pop Tour까지 한 일정으로 묶어 드립니다. 회복 동선을 고려한 호텔·스파 큐레이션.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">04</div>
              <div>
                <h4>도착 · 통역 · 동행</h4>
                <p>공항 픽업 → 호텔 체크인 → 병원 동행 통역 → 시술 후 회복 케어까지 전담 컨시어지가 24/7 함께합니다.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">05</div>
              <div>
                <h4>회복 · 관광 · K-pop Tour</h4>
                <p>회복 동선에 맞춘 스파·관광·뮤직비디오 촬영지 투어. 대학로 공연·한방 케어·헤어 스파까지 즐기세요.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">06</div>
              <div>
                <h4>귀국 후 사후관리 · 멤버십</h4>
                <p>귀국 후 사후관리 일정 알림, 재방문 시 우대 예약, 멤버십 등록 시 정기 케어 + 5~20% 할인 + 법률팀 상담 포함.</p>
              </div>
            </div>
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
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="channel-btn">
              💬 KakaoTalk<br /><small>위드에스마케팅</small>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="channel-btn">
              📱 WhatsApp<br /><small>Korea MEDICAL Tour 채널</small>
            </a>
            <a href={`mailto:${EMAIL}`} className="channel-btn">
              ✉ Email<br /><small>{EMAIL}</small>
            </a>
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            {t("contact.note")}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="foot-logo">THE <span>·</span> WELLNESS N</div>
              <p className="foot-desc">{t("footer.desc")}</p>
            </div>
            <div className="foot-col">
              <h5>Service</h5>
              <ul>
                <li><a href="#treatments">시술 카테고리</a></li>
                <li><a href="#keywords">인기 키워드</a></li>
                <li><a href="#packages">패키지</a></li>
                <li><a href="#kpop">K-pop Tour</a></li>
                <li><a href="#membership">멤버십</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Trust</h5>
              <ul>
                <li><a href="#trust">안전 보장</a></li>
                <li><a href="#diff">왜 우리인가</a></li>
                <li><a href="#partners">협업 병원</a></li>
                <li><a href="#voices">유형별 리뷰</a></li>
                <li><a href="#process">진행 과정</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li>Seoul · Gangnam, Korea</li>
                <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li>KakaoTalk · 위드에스마케팅</li>
                <li>WhatsApp · Korea MEDICAL Tour</li>
                <li>24/7 Concierge Support</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div>{t("footer.copyright")}</div>
            <div>Privacy · Terms · Cookies</div>
          </div>
        </div>
      </footer>
    </>
  );
}
