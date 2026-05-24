import SiteHeader from "./components/SiteHeader";
import Treatments from "./components/Treatments";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-tag">K-Beauty × Medical × Wellness</span>
            <h1>
              강남의 의료 기술과<br />
              웰니스·회복 경험을<br />
              <strong>한 번에 설계합니다.</strong>
            </h1>
            <p className="hero-sub">
              단순 병원 소개가 아닙니다.<br />
              고객의 고민과 예산, 일정, 회복까지 고려해<br />
              가장 적합한 의료관광 경험을 설계하는 컨시어지 플랫폼입니다.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">무료 컨시어지 상담</a>
              <a href="#packages" className="btn btn-ghost">패키지 둘러보기</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <div className="card-icon">✦</div>
              <div className="card-label">K-Beauty</div>
              <div className="card-title">맞춤 리프팅 설계</div>
              <div className="card-text">울쎄라·써마지·HIFU·리쥬란 등 피부 상태별 시술 비교 추천</div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="card-icon">♡</div>
              <div className="card-label">Wellness</div>
              <div className="card-title">회복까지 동선 설계</div>
              <div className="card-text">호텔·스파·헤드스파·관광 일정을 회복 동선에 맞춰 큐레이션합니다.</div>
            </div>
            <div className="hero-card hero-card-3">
              <div className="card-icon">⌘</div>
              <div className="card-label">AI Translate</div>
              <div className="card-title">실시간 통역 지원</div>
              <div className="card-text">상담부터 시술 후 사후관리까지 언어 장벽 없이.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-text">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              병원을 연결하는 것이 아니라,<br />
              <strong>경험을 설계합니다.</strong>
            </h2>
            <p>
              의료관광의 기준은 가격이 아니라 신뢰입니다.<br />
              병원 리스트보다 중요한 건 고객에게 맞는 맞춤 설계입니다.
            </p>
            <p>
              건강검진, 피부관리, 안티에이징, 치과, 탈모, 웰니스, 회복관리, K-뷰티, 관광까지 —
              시술 한 건이 아니라 한 사람의 여정을 디자인합니다.
            </p>
            <ul className="about-points">
              <li><span className="check">✓</span>광고가 아닌, 비교·검증 기반 병원 추천</li>
              <li><span className="check">✓</span>정품·샷수·집도의 직접 확인</li>
              <li><span className="check">✓</span>회복 동선까지 포함한 일정 설계</li>
              <li><span className="check">✓</span>다국어 AI 통역 + 전담 컨시어지</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="about-stats">
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">맞춤 컨시어지 상담</div>
              </div>
              <div className="stat">
                <div className="stat-num">24/7</div>
                <div className="stat-label">다국어 통역 지원</div>
              </div>
              <div className="stat">
                <div className="stat-num">30+</div>
                <div className="stat-label">강남 프리미엄 병원</div>
              </div>
              <div className="stat">
                <div className="stat-num">All-in-One</div>
                <div className="stat-label">시술 · 회복 · 관광</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="treatments" id="treatments">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Treatments</span>
            <h2 className="section-title">
              <strong>K-Beauty</strong>부터 <strong>웰니스</strong>까지
            </h2>
            <p className="section-sub">
              강남 프리미엄 의료 기술을 카테고리별로 큐레이션했습니다. 고객 상태에 따라
              시술·기기·집도의를 비교 추천합니다.
            </p>
          </div>
          <Treatments />
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages" id="packages">
        <div className="container">
          <div className="section-head">
            <span className="section-tag" style={{ color: "var(--gold)" }}>Signature Packages</span>
            <h2 className="section-title">시그니처 <strong>패키지</strong></h2>
            <p className="section-sub">목적에 따라 설계된 올인원 패키지. 시술 · 회복 · 관광까지 한 번의 일정으로.</p>
          </div>
          <div className="pkg-grid">
            <div className="pkg-card">
              <span className="pkg-badge">Best Seller</span>
              <h3>K-Beauty Glow</h3>
              <p>피부광 + 리프팅 입문자를 위한 베이직 코스</p>
              <ul className="pkg-list">
                <li>리쥬란 + 스킨부스터</li>
                <li>HIFU 1회 (얼굴 전체)</li>
                <li>4성급 호텔 2박</li>
                <li>전담 통역 + 픽업</li>
                <li>사후관리 1회 포함</li>
              </ul>
              <a href="#contact" className="pkg-cta">상담 신청 →</a>
            </div>

            <div className="pkg-card">
              <span className="pkg-badge">Premium</span>
              <h3>Anti-Aging Suite</h3>
              <p>안티에이징 검진 + 종합 리프팅 프로그램</p>
              <ul className="pkg-list">
                <li>안티에이징 정밀 검사</li>
                <li>울쎄라 + 써마지 콤보</li>
                <li>줄기세포 케어 1회</li>
                <li>5성급 호텔 3박</li>
                <li>프라이빗 통역 + 운전</li>
              </ul>
              <a href="#contact" className="pkg-cta">상담 신청 →</a>
            </div>

            <div className="pkg-card">
              <span className="pkg-badge">Wellness</span>
              <h3>Healing Tour</h3>
              <p>건강검진 + 웰니스 회복 + 한국 관광 코스</p>
              <ul className="pkg-list">
                <li>프리미엄 종합검진</li>
                <li>한방 · 체질 분석</li>
                <li>스파 + 헤드스파</li>
                <li>K-Food 미식 투어</li>
                <li>한옥 1박 체험</li>
              </ul>
              <a href="#contact" className="pkg-cta">상담 신청 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why" id="why">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Why Us</span>
            <h2 className="section-title">왜 <strong>SEOJIN CONCIERGE</strong>인가</h2>
            <p className="section-sub">광고 기반 의료관광이 아니라, 신뢰와 검증 기반의 컨시어지 서비스를 만듭니다.</p>
          </div>

          <div className="compare">
            <div className="compare-col compare-bad">
              <h4>기존 의료관광의 문제</h4>
              <h3>병원이 정한 경험</h3>
              <ul className="compare-list">
                <li><span className="icon-x">×</span>광고비 기반 병원 추천</li>
                <li><span className="icon-x">×</span>가격만 강조하는 영업</li>
                <li><span className="icon-x">×</span>정품·샷수 정보 부재</li>
                <li><span className="icon-x">×</span>시술 후 사후관리 부재</li>
                <li><span className="icon-x">×</span>언어 장벽으로 인한 오해</li>
                <li><span className="icon-x">×</span>회복 일정 고려 없음</li>
              </ul>
            </div>
            <div className="compare-col compare-good">
              <h4>SEOJIN의 방향</h4>
              <h3>고객 중심 컨시어지</h3>
              <ul className="compare-list">
                <li><span className="icon-v">✓</span>비교·검증 기반 맞춤 추천</li>
                <li><span className="icon-v">✓</span>신뢰 기반 투명한 가격</li>
                <li><span className="icon-v">✓</span>정품·샷수·집도의 확인</li>
                <li><span className="icon-v">✓</span>회복까지 포함한 사후관리</li>
                <li><span className="icon-v">✓</span>AI 통역 + 전담 컨시어지</li>
                <li><span className="icon-v">✓</span>웰니스 결합 회복 동선</li>
              </ul>
            </div>
          </div>

          <div className="flow">
            <div className="flow-step"><div className="flow-num">1</div><h5>상담</h5><p>고민·예산·일정 분석</p></div>
            <div className="flow-step"><div className="flow-num">2</div><h5>설계</h5><p>병원·시술·웰니스 큐레이션</p></div>
            <div className="flow-step"><div className="flow-num">3</div><h5>예약·통역</h5><p>전 과정 다국어 지원</p></div>
            <div className="flow-step"><div className="flow-num">4</div><h5>시술·회복</h5><p>호텔·스파 회복 동선</p></div>
            <div className="flow-step"><div className="flow-num">5</div><h5>사후관리</h5><p>귀국 후에도 케어 연결</p></div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">의료관광 <strong>전 여정</strong>을 함께합니다</h2>
            <p className="section-sub">상담부터 회복, 귀국 후 사후관리까지 — 한 명의 컨시어지가 처음부터 끝까지 동행합니다.</p>
          </div>
          <div className="process-grid">
            <div className="proc-item">
              <div className="proc-num">01</div>
              <div>
                <h4>1:1 컨시어지 상담</h4>
                <p>피부 상태, 건강 상태, 예산, 일정, 회복 기간, 원하는 이미지까지 — 카톡·왓츠앱·라인으로 부담 없이 시작합니다.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">02</div>
              <div>
                <h4>맞춤 일정 설계</h4>
                <p>3~4개 병원·시술·웰니스 옵션을 비교해 제공하고, 고객 선택에 따라 시술과 회복 동선을 한 일정으로 묶어 드립니다.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">03</div>
              <div>
                <h4>도착 · 통역 · 동행</h4>
                <p>공항 픽업부터 호텔 체크인, 병원 동행 통역, 시술 후 회복 케어까지 전담 컨시어지가 함께 움직입니다.</p>
              </div>
            </div>
            <div className="proc-item">
              <div className="proc-num">04</div>
              <div>
                <h4>회복 · 관광 · 사후관리</h4>
                <p>회복 동선에 맞춘 호텔·스파·관광을 즐기고, 귀국 후에도 사후관리·재방문 일정까지 연결해 드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="cta-section" id="contact">
        <div className="container">
          <h2>
            당신에게 맞는<br />
            <strong>의료·뷰티 경험</strong>을 설계합니다.
          </h2>
          <p>카톡·왓츠앱·라인 어느 채널이든 편하게 보내주세요. 24시간 이내 컨시어지가 답변 드립니다.</p>
          <div className="cta-buttons">
            <a href="#" className="channel-btn">💬 KakaoTalk</a>
            <a href="#" className="channel-btn">📱 WhatsApp</a>
            <a href="#" className="channel-btn">💚 LINE</a>
            <a href="#" className="channel-btn">📷 Instagram</a>
            <a href="mailto:contact@seojin-concierge.com" className="channel-btn">✉ Email</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="foot-logo">SEOJIN <span>·</span> CONCIERGE</div>
              <p className="foot-desc">
                K-Beauty × Medical × Wellness — 강남의 의료 기술과 웰니스·회복 경험을 한 명의 컨시어지가 설계합니다.
              </p>
            </div>
            <div className="foot-col">
              <h5>Service</h5>
              <ul>
                <li><a href="#treatments">K-Beauty</a></li>
                <li><a href="#treatments">Medical Check-up</a></li>
                <li><a href="#treatments">Wellness</a></li>
                <li><a href="#packages">Packages</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#why">Why Us</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li>Seoul · Gangnam, Korea</li>
                <li>contact@seojin-concierge.com</li>
                <li>KakaoTalk · WhatsApp · LINE</li>
                <li>24/7 Concierge Support</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 SEOJIN Concierge. All rights reserved.</div>
            <div>Privacy · Terms · Cookies</div>
          </div>
        </div>
      </footer>
    </>
  );
}
