"use client";

import { useState } from "react";

type Treatment = { icon: string; title: string; desc: string };
type TabKey = "beauty" | "medical" | "wellness";

const DATA: Record<TabKey, Treatment[]> = {
  beauty: [
    { icon: "◈", title: "울쎄라 (Ulthera)", desc: "피부 깊은 층 콜라겐 자극, 리프팅의 표준 장비" },
    { icon: "◇", title: "써마지 (Thermage FLX)", desc: "고주파 기반 탄력 개선, 다운타임 최소화" },
    { icon: "▲", title: "울트라포머 MPT", desc: "다단계 리프팅, 부위별 맞춤 설계" },
    { icon: "▽", title: "HIFU 리프팅", desc: "초음파 집속 에너지로 윤곽 정리" },
    { icon: "●", title: "티타늄 리프팅", desc: "최신 고출력 HIFU, 즉각적 리프팅 효과" },
    { icon: "○", title: "리쥬란 (Rejuran)", desc: "연어 PDRN, 피부 재생·결 개선" },
    { icon: "◐", title: "쥬베룩 / 스킨부스터", desc: "볼륨 + 탄력, 피부 속부터 회복" },
    { icon: "◑", title: "피코레이저", desc: "색소·잡티·모공 정밀 케어" },
  ],
  medical: [
    { icon: "✚", title: "프리미엄 건강검진", desc: "VIP 종합검진·정밀 영상검사·종양 마커" },
    { icon: "⌬", title: "안티에이징 검사", desc: "호르몬·텔로미어·노화도 정밀 분석" },
    { icon: "⌭", title: "줄기세포 치료", desc: "면역·재생·항노화 프로그램" },
    { icon: "⌯", title: "탈모 케어", desc: "두피 진단·모발이식·메조테라피" },
    { icon: "◉", title: "치과 (임플란트·미백)", desc: "심미·임플란트·교정 통합 케어" },
    { icon: "⌖", title: "비만 관리", desc: "위고비·삭센다·인바디 맞춤 관리" },
    { icon: "⌗", title: "도수·체형 교정", desc: "척추·골반·자세 교정 프로그램" },
    { icon: "⌘", title: "여성·갱년기 케어", desc: "호르몬·부인과·갱년기 종합 케어" },
  ],
  wellness: [
    { icon: "♨", title: "프리미엄 마사지", desc: "아로마·림프·딥티슈 회복 마사지" },
    { icon: "❀", title: "스파 & 사우나", desc: "강남·청담 럭셔리 스파 큐레이션" },
    { icon: "✿", title: "헤드스파", desc: "두피 진정·스트레스 케어" },
    { icon: "❁", title: "회복 호텔 패키지", desc: "시술 직후 회복 동선 맞춤 호텔" },
    { icon: "✾", title: "힐링 투어", desc: "강남·한옥·궁궐·미식 코스 디자인" },
    { icon: "❃", title: "웰니스 검진", desc: "한방·체질 분석·웰니스 코칭" },
    { icon: "✸", title: "요가 / 명상", desc: "프라이빗 클래스·1:1 코칭" },
    { icon: "✦", title: "K-Food 미식 투어", desc: "오마카세·미슐랭·한정식 큐레이션" },
  ],
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "beauty", label: "피부·리프팅" },
  { key: "medical", label: "건강검진·메디컬" },
  { key: "wellness", label: "웰니스·회복" },
];

export default function Treatments() {
  const [tab, setTab] = useState<TabKey>("beauty");

  return (
    <>
      <div className="treat-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TABS.map((t) => (
        <div
          key={t.key}
          className={`treat-panel ${tab === t.key ? "active" : ""}`}
        >
          <div className="treat-grid">
            {DATA[t.key].map((item, i) => (
              <div key={i} className="treat-card">
                <div className="treat-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
