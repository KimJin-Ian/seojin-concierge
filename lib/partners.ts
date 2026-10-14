/**
 * 협력사 — 한 목록 (2026-10-13 개편)
 *
 * 예전에는 협력사가 다섯 군데 흩어져 있었다 — 로고 격자(병원 · 한의원 · K뷰티 · 문화 · 요식),
 * 기업 · 기술 파트너, MOU 협약 기관(웰니스라운지), MOU 파트너 네트워크(모네브 · 바이탈닥 …),
 * 해외 협업(미국 · 방콕), AI 통역(말로하 · 언더밀리). 대표님 요청으로 **한 곳**에 모았다.
 *
 *   병원은 진료 분야로 나눈다 — 성형외과·피부과 / 산부인과·여성 / 정형외과 / 치과 / 한의원 / 검진·요양·약국
 *   웰니스 · 스파: 웰니스라운지 · 모네브
 *   협력 기업 · 기술: 바이탈닥 · 말로하 · 언더밀리 · 누리라운지 · 에듀윌 …
 *   해외 협력사: 미국 K-Spa · 방콕 Vincent Clinic · HLE메디컬 · 인플러즈 · 일우 트레이딩
 *
 * 모든 칸이 같은 모양이다 — 로고(없으면 글자) · 이름 → "더보기" 를 누르면 설명과 홈페이지.
 * 설명이 따로 없는 곳은 **분야별 정해진 문장**(ptn.tpl.*)을 쓴다. 병원 특징을 지어내지 않는다.
 * 홈페이지는 partner-links.ts 에서 실제로 열어 확인한 주소만 건다.
 */
import { BIZ_URL, urlOf } from "./partner-links";

export type PartnerCat = "clinic" | "spa" | "biz" | "beauty" | "culture" | "dining" | "global";
export type ClinicSub = "plastic" | "women" | "ortho" | "dental" | "hanbang" | "care";

export interface Partner {
  id: string;
  /** 이름 — 고유명사라 번역하지 않는다. 번역이 있는 곳은 nameKey */
  name: string;
  nameKey?: string;
  cat: PartnerCat;
  sub?: ClinicSub;
  /** /logos/ 안의 파일 */
  logo?: string;
  /** 로고가 없을 때 글자 로고 */
  logoText?: string;
  url?: string;
  /** 분야 표시 (영문 꼬리표 등) — i18n 키 */
  tagKey?: string;
  /** 자세한 설명 — i18n 키 여러 개를 문단으로 */
  descKeys?: string[];
  /** 협력사가 직접 보내준 소개 문단 (한국어 그대로) — descKeys 보다 먼저 */
  desc?: string[];
  /** 다른 곳과 다른 점 · 특징 */
  points?: string[];
  /** 대표 시술 · 메뉴 등 한 줄 */
  signature?: string;
  /** 제품 · 메뉴와 가격 — 공식 홈페이지에서 확인한 값만. 날짜는 PRICE_CHECKED */
  products?: { name: string; price: string; note?: string }[];
  /** 더웰니스앤 손님 혜택 */
  benefit?: string;
  /** 카드 위 꼬리표 (예: 더컬쳐앤 인터뷰) */
  badge?: string;
  /** 자세히 볼 때 함께 싣는 그림 (/logos/) */
  image?: string;
}

/** 제품 가격을 공식 홈페이지에서 확인한 날 */
export const PRICE_CHECKED = "2026-10-14";

const P = (p: Partner): Partner => ({ ...p, url: p.url ?? urlOf(p.logo) });

export const PARTNERS: Partner[] = [
  // ── 병원 · 성형외과 · 피부과 ──
  P({ id: "pixelab", name: "강남 픽셀랩 성형외과·피부과", cat: "clinic", sub: "plastic", logo: "pixelab.jpg" }),
  P({ id: "sinsang", name: "신사 신상성형외과", cat: "clinic", sub: "plastic", logo: "sinsang-ps.svg", tagKey: "net.p6.cat", descKeys: ["net.p6.role", "net.p6.give"] }),
  P({ id: "pieobom", name: "피어봄 피부과 (청담)", cat: "clinic", sub: "plastic", logo: "pieobom-cheongdam.png" }),
  P({ id: "dove", name: "압구정 도브의원", cat: "clinic", sub: "plastic", logo: "dove-clinic.png" }),
  P({ id: "primi", name: "성수 프리미클리닉", cat: "clinic", sub: "plastic", logo: "primi-clinic.jpg" }),
  P({ id: "mirab", name: "미랩클리닉", cat: "clinic", sub: "plastic", logo: "mirab-clinic.jpg" }),
  P({ id: "daybeau", name: "데이뷰의원", cat: "clinic", sub: "plastic", logo: "daybeau.png", tagKey: "net.p7.cat", descKeys: ["net.p7.role", "net.p7.give"] }),
  // 2026-10-14 추가 — 협력사가 보내준 소개 그대로 (대표님 전달)
  P({
    id: "jayeon", name: "자연예쁨의원", cat: "clinic", sub: "plastic", logo: "jayeon-yeppeum.jpg",
    points: [
      "피부 상태와 고민에 맞춘 1:1 맞춤형 시술 디자인",
      "과잉 시술과 불필요한 업셀링 없이 필요한 시술만 제안",
      "정품 · 정량 원칙 — 원장님이 직접 진행하는 꼼꼼한 시술",
    ],
    signature: "울쎄라 · 세르프 · 올타이트 · 레비나스 등 리프팅과 스킨부스터를 피부 상태에 맞춰 조합하는 맞춤형 안티에이징 프로그램",
    benefit: "더웰니스앤 소개 고객 — 원장님이 직접 만든 PDRN 미스트 증정 · 리프팅 시술 시 샷수 추가 업그레이드 · 마크뷰 피부진단 무료",
  }),
  P({
    id: "alldetail", name: "올디테일의원", cat: "clinic", sub: "plastic", logo: "alldetail.jpg",
    desc: ["Design & Comfort — 디테일한 디자인과 마취로 편안한 아름다움을 선사합니다.", "가격은 개원 후 안내드립니다."],
    signature: "팔자지우개",
  }),
  P({ id: "wooa", name: "우아성형외과", cat: "clinic", sub: "plastic", logoText: "우아성형외과" }),
  P({
    id: "newk", name: "뉴케이의원 강남점", cat: "clinic", sub: "plastic", logoText: "NEW K",
    url: "https://www.daangn.com/kr/local-profile/1syynkaqif22/",
    points: [
      "내 집처럼 편안한 공간",
      "공장식이 아닌 1:1 예약 — 환자 한 분에 맞춘 진료",
      "시술 고객과 의료진의 친밀함은 강남 최고를 자부합니다",
    ],
  }),
  // ── 산부인과 · 여성 ──
  P({ id: "saebom", name: "잠실 새봄여성의원", cat: "clinic", sub: "women", logo: "saebom-women.png" }),
  // ── 정형외과 ──
  P({ id: "standar", name: "반포 스탠다 정형외과", cat: "clinic", sub: "ortho", logo: "banpo-standar.jpg" }),
  // ── 치과 ──
  P({ id: "haengsin", name: "일산 서울행신치과", cat: "clinic", sub: "dental", logo: "seoul-haengsin.png" }),
  P({ id: "teokdumi", name: "목동 턱투미 구강내과치과", cat: "clinic", sub: "dental", logo: "teokdumi.jpg" }),
  P({ id: "yangyundol", name: "양윤돌치과의원 (구강악안면외과)", cat: "clinic", sub: "dental", logo: "yangyundol.jpg" }),
  P({
    id: "goodface", name: "교대 좋은얼굴 삼풍치과", cat: "clinic", sub: "dental", logo: "goodface-sampung.jpg",
    url: "https://www.goodfacedental.co.kr/", badge: "더컬쳐앤 인터뷰",
    points: [
      "치아 · 턱 · 얼굴에 걸친 7가지 분야의 교정 (7교정)",
      "문제의 원인과 결과를 함께 파악합니다",
      "30여 년 연구 · 진료 중심의 교정치과",
    ],
    image: "goodface-poster.jpg",
  }),
  P({ id: "relive", name: "마곡 리라이브치과", cat: "clinic", sub: "dental", logo: "relive-dentistry.png" }),
  P({ id: "nyu", name: "뉴욕NYU치과", cat: "clinic", sub: "dental", logo: "nyu-dental.jpg" }),
  // ── 한의원 ── (상왕십리 경희한의원은 대표님 요청으로 뺐다, 2026-10-13)
  P({ id: "dapung", name: "서대문구 다품한의원", cat: "clinic", sub: "hanbang", logo: "dapung-han.jpg" }),
  P({ id: "hoebokjae", name: "성수 회복재한의원", cat: "clinic", sub: "hanbang", logo: "hoebokjae-han.png" }),
  P({ id: "baron", name: "바론한의원", cat: "clinic", sub: "hanbang", logo: "baron-han.jpg" }),
  P({ id: "kyunghee", name: "북가좌 경희한의원 본점", cat: "clinic", sub: "hanbang", logo: "bukgajwa-kyunghee.png" }),
  P({ id: "together", name: "동탄 함께걷는한의원", cat: "clinic", sub: "hanbang", logo: "together-clinic.png" }),
  // ── 검진 · 요양 · 약국 ──
  P({ id: "medione", name: "메디원", cat: "clinic", sub: "care", logo: "medi-one.png" }),
  P({ id: "lifemedi", name: "라이프메디 · 북서울요양병원", nameKey: "net.p3.name", cat: "clinic", sub: "care", logo: "lifemedi.svg", tagKey: "net.p3.cat", descKeys: ["net.p3.role", "net.p3.give"] }),
  P({ id: "jinny", name: "지니약국", nameKey: "net.p4.name", cat: "clinic", sub: "care", logo: "jinny-pharmacy.png", tagKey: "net.p4.cat", descKeys: ["net.p4.role", "net.p4.give"] }),

  // ── 웰니스 · 스파 ──
  P({ id: "lounge", name: "웰니스라운지", nameKey: "mou.name", cat: "spa", logo: "wellness-lounge-logo.jpg", tagKey: "mou.eyebrow", descKeys: ["mou.namesub", "mou.d1", "mou.d2", "mou.quote"] }),
  P({ id: "monev", name: "모네브 MONEV", nameKey: "net.p1.name", cat: "spa", logoText: "MONEV", tagKey: "net.p1.cat", descKeys: ["net.p1.role", "net.p1.give"] }),
  P({ id: "soundbody", name: "사운드바디 (방배 웰니스)", cat: "spa", logo: "soundbody.jpg" }),

  // ── 협력 기업 · 기술 ──
  P({ id: "vitaldoc", name: "바이탈닥 VitalDoc", nameKey: "net.p2.name", cat: "biz", logoText: "VitalDoc", tagKey: "net.p2.cat", descKeys: ["net.p2.role", "net.p2.give"] }),
  P({ id: "maloha", name: "말로하 Maloha", cat: "biz", logo: "maloha-logo.png", tagKey: "ai.tagline1", descKeys: ["ai.sub", "ai.tagline2", "ai.b2d", "ai.b4d"] }),
  P({ id: "undermilli", name: "언더밀리 Undermilli", cat: "biz", logo: "undermilli-logo.png", tagKey: "ai.ptag", descKeys: ["ai.pdesc"] }),
  P({ id: "nuri", name: "누리라운지", nameKey: "net.p5.name", cat: "biz", logoText: "Nuri Lounge", tagKey: "net.p5.cat", descKeys: ["net.p5.role", "net.p5.give"] }),
  P({
    id: "curzbridge", name: "커즈브릿지 CURZBRIDGE", cat: "biz", logo: "curzbridge.png",
    badge: "AI 헬스케어 키오스크 · 광고",
    desc: [
      "AI 헬스케어 측정 솔루션 '위케어(WeeCare)'를 자체 개발 · 공급합니다. 피부 · 체성분 · 스트레스(맥파) · 두피를 한 기기에서 측정하고 AI 리포트로 제공해, 시술 전 상태와 회복 과정을 눈에 보이는 데이터로 남깁니다.",
      "솔루션 개발 · 기기 공급 · 광고 운영을 한 회사가 모두 합니다. 광고대행이 본업이라 협업 병원의 온라인 홍보와 외국인 환자 유치 마케팅까지 한 창구에서 지원합니다.",
    ],
    points: [
      "위케어 747 AI 헬스케어 키오스크 (피부 · 체성분 · 맥파 · 두피 측정 + AI 리포트)",
      "병원 · 클리닉 온라인 광고대행 (검색 · SNS · 퍼포먼스)",
      "설치 기기 화면을 활용한 사이니지 광고",
      "정부 베리어프리 지원사업 연계 키오스크 설치",
      "측정 데이터 연동 고객 앱 (WeeCare App)",
    ],
    signature: "추천 — 상담을 '느낌' 이 아니라 객관적 수치로 설명하고 싶은 피부과 · 모발/탈모 클리닉 · 웰니스 센터",
    products: [
      { name: "키오스크 공급 (B2B)", price: "사양별 550~700만원대" },
      { name: "베리어프리 지원사업 활용", price: "정부지원금 80%", note: "설치처 자부담 대폭 축소" },
      { name: "사이니지 광고", price: "슬롯당 월 2만원대" },
      { name: "광고대행", price: "월 집행예산 기준 협의" },
    ],
  }),
  P({
    id: "peopet", name: "페오펫 Peopet", cat: "biz", logo: "peopet.png", url: "https://peopet.co.kr/",
    badge: "반려동물",
    desc: ["반려동물 생애주기 올인원 플랫폼 — 반려동물 등록부터 보험 · 쇼핑까지 한 앱에서 이어집니다."],
  }),
  P({ id: "eduwill", name: "에듀윌", nameKey: "biz.eduwill.name", cat: "biz", logoText: "EDUWILL", url: BIZ_URL.eduwill, descKeys: ["biz.eduwill.desc"] }),
  P({ id: "metadx", name: "메타디엑스 (MetaDx)", nameKey: "biz.metadx.name", cat: "biz", logoText: "MetaDx", url: BIZ_URL.metadx, descKeys: ["biz.metadx.desc"] }),
  P({ id: "medibible", name: "메디바이블 (MediBible)", nameKey: "biz.medibible.name", cat: "biz", logoText: "MediBible", descKeys: ["biz.medibible.desc"] }),
  P({ id: "soldoc", name: "솔닥 (Soldoc)", nameKey: "biz.soldoc.name", cat: "biz", logoText: "Soldoc", url: BIZ_URL.soldoc, descKeys: ["biz.soldoc.desc"] }),
  P({ id: "atoz", name: "AtoZ", nameKey: "biz.atoz.name", cat: "biz", logoText: "AtoZ", descKeys: ["biz.atoz.desc"] }),
  P({ id: "aim", name: "AIM", nameKey: "biz.aim.name", cat: "biz", logoText: "AIM", descKeys: ["biz.aim.desc"] }),

  // ── K뷰티 · 이너뷰티 ──
  // 2026-10-14 추가 — 제품 · 가격은 각 공식 홈페이지에서 그날 확인한 값 (PRICE_CHECKED)
  P({
    id: "timedewy", name: "타임듀이 TIMEDEWY", cat: "beauty", logo: "timedewy.png", url: "https://timedewy.com/",
    badge: "쫀쫀 물광 스킨케어",
    desc: ["디자인에 힘을 빼고 제품만으로 승부하는 스킨케어. 공식 홈페이지 · 네이버 스마트스토어 · 쿠팡에서 판매합니다."],
    points: [
      "쫀쫀세럼 · 쫀쫀크림 — 7종 콜라겐 & 7종 펩타이드가 주성분",
      "미백 · 주름개선 기능성 인증 (아데노신 · 나이아신아마이드) · 저자극 테스트 완료",
      "피부 장벽을 돕는 세라마이드 — 촉촉하지만 빨리 흡수되지 않는 제형, 은은한 아로마 향",
      "과하지 않은 물광 — 선물세트로 추천 (쇼핑백 · 스티커 동봉 가능)",
    ],
    products: [
      { name: "쫀쫀크림", price: "59,800원", note: "공식몰 할인가 38,000원" },
      { name: "쫀쫀세럼", price: "56,900원", note: "공식몰 할인가 38,000원" },
      { name: "쫀쫀 세럼 크림 세트", price: "116,700원", note: "공식몰 할인가 59,800원" },
    ],
  }),
  P({
    id: "blup", name: "블럽 BLUP", cat: "beauty", logo: "blup.png", url: "https://www.blup.kr/",
    desc: [
      "무신사 뷰티 월간 랭킹 2위 (2026년 7월, 여성) · 리뷰 2,100건 이상, 평점 4.8점대.",
      "일본 수출에 이어 대만 진출을 준비 중인 K-뷰티 브랜드입니다.",
    ],
    points: [
      "틴트 7색 — 116 몽마르뜨(발레코어 핑크) · 726 지우펀(로지 피그) · 052 서울(누디 베이지) · 215 삿포로(그레이프 시럽) · 407 하바나(모카 브라운) · 619 산타모니카(브라이트 체리) · 873 로마(물복숭아)",
      "치크 4색 — 078 끌림(누드 베이지) · 116 수줍음(딸기우유 핑크) · 120 설렘(코랄) · 529 과몰입(청량 레드)",
    ],
    products: [
      { name: "오버 듀 글로이 틴트 (7colors)", price: "18,000원", note: "끈적이지 않는 투명한 시럽광 · 저분자 히알루론산 · 공식몰 할인가 13,500원" },
      { name: "멜팅 샤이 치크 (4colors)", price: "21,000원", note: "촉촉하게 녹아 보송하게 픽스되는 블러리 치크 · 공식몰 할인가 13,500원" },
      { name: "립앤치크 기획세트 (공식몰 한정)", price: "39,000원", note: "공식몰 할인가 21,600원" },
    ],
  }),
  P({
    id: "loerne", name: "로에르네 Loèrne", cat: "beauty", logo: "loerne.png", url: "https://www.loerne.com/",
    badge: "피부 시간을 되돌리다",
    desc: ["피부과 시술 성분을 홈케어로 옮기는 안티에이징 스킨케어 브랜드입니다."],
    points: [
      "2025 서울뷰티위크 공식 대표 브랜드 선정 (참가 300여 기업)",
      "걸그룹 I.O.I 리더 임나영 공식 광고 모델",
      "전국 약국 50곳 · 청담 피부과 입점 · TEDxSNU 프리미엄 스폰서",
    ],
    products: [
      { name: "포어 리프팅 캡슐 앰플 ('소개팅 앰플')", price: "74,500원", note: "공식몰 할인가 49,900원" },
      { name: "퍼밍 리프팅 캡슐 크림 (탄력 · 주름)", price: "74,500원" },
      { name: "퓨어 톤업 선크림", price: "59,500원", note: "공식몰 할인가 39,900원" },
      { name: "바쿠치올 크림", price: "61,700원" },
    ],
  }),
  P({
    id: "bacillozyme", name: "바실로자임 Bacillozyme", cat: "beauty", logo: "bacillozyme.jpg", url: "https://www.bacillozyme.com/",
    badge: "웰니스 · 프로틴",
    desc: ["미생물의 가능성을 일상의 건강으로 — 웰니스 브랜드입니다."],
    products: [
      { name: "헬시핏 크러셔", price: "43,000원", note: "정가 64,000원" },
      { name: "밸런스핏 크러셔", price: "43,000원", note: "정가 64,000원" },
      { name: "프로틴 크러셔", price: "43,000원", note: "정가 64,000원" },
    ],
  }),
  P({ id: "laceltics", name: "라셀틱스", cat: "beauty", logo: "laceltics.jpg" }),
  P({ id: "yunine", name: "윤이네식초", cat: "beauty", logo: "yunine-vinegar.jpg", desc: ["과일 식초 — 바나나 · 파인애플 · 자몽 · 키위 · 오렌지."] }),
  P({ id: "haeol", name: "해올 (Haeol)", cat: "beauty", logo: "haeol.jpg" }),
  P({ id: "hijack", name: "HIJACK", cat: "beauty", logo: "hijack.png" }),
  P({ id: "mooha", name: "무하 (Mooha)", cat: "beauty", logo: "mooha.png" }),
  P({ id: "vividson", name: "비비슨 (Vividson)", cat: "beauty", logo: "vividson.jpg" }),
  P({ id: "brilliant", name: "브릴리언트", cat: "beauty", logo: "brilliant.png" }),
  P({ id: "someday", name: "썸데이", cat: "beauty", logo: "someday.png" }),
  P({ id: "judang", name: "주당의 비결 (숙취해소제)", cat: "beauty", logo: "judang-secret.png" }),
  P({ id: "opunfia", name: "오픈피아", cat: "beauty", logo: "opunfia.png" }),
  P({ id: "clereon", name: "클레로엔 유산균필", cat: "beauty", logoText: "Clereon" }),
  P({ id: "r828", name: "R828", cat: "beauty", logoText: "R828" }),
  P({ id: "h2mask", name: "수소로 (수소 마스크팩)", cat: "beauty", logoText: "수소로" }),
  P({ id: "oncocos", name: "암 전문 화장품", cat: "beauty", logoText: "Onco Care" }),

  // ── 공연 · 문화 · 호텔 ──
  P({ id: "sunnyten", name: "뮤지컬 써니텐", cat: "culture", logo: "musical-sunnyten.jpg" }),
  P({ id: "spotlight", name: "뮤지컬펍 스폿라이트", cat: "culture", logo: "musical-spotlight.jpg" }),
  P({ id: "glue", name: "글로호텔", cat: "culture", logo: "glue-hotel.jpg" }),
  P({ id: "bluemarine", name: "월미도 블루마린호텔", cat: "culture", logo: "blue-marine-hotel.png" }),
  P({ id: "muhan", name: "대학로 무한 아트센터", cat: "culture", logoText: "MUHAN ART" }),
  P({ id: "kpoptour", name: "K-pop Tour 운영사 (MOU 진행 중)", nameKey: "overseas.kpop", cat: "culture", logoText: "K-pop Tour", descKeys: ["overseas.kpop.desc"] }),
  P({
    id: "syl", name: "SYL (Share Your Language)", cat: "culture", logo: "syl.png", url: "https://sylkr.com/",
    badge: "한국인 · 외국인 커뮤니티",
    desc: [
      "한국에 왔을 때, 그리고 한국인이 외국인 친구를 만들고 싶을 때 가입하는 커뮤니티입니다.",
      "대전 최대 외국인 커뮤니티 — 대전을 기반으로 세종 · 청주 · 논산 · 서울 지점까지 넓히고 있습니다.",
    ],
  }),

  // ── 요식업 ──
  P({
    id: "jangsajang", name: "덮밥장사장", cat: "dining", logo: "jangsajang.jpg", url: "https://jangsajang.co.kr/",
    badge: "K-Deopbap · 프랜차이즈",
    desc: [
      "한국의 장맛을 담은 K-덮밥. 한국의 간장과 고추장 소스를 활용한 덮밥을 한 그릇으로 즐길 수 있습니다.",
      "처음 한국 음식을 접하는 여행객에게는 간장 베이스를, 매콤한 맛을 찾는 분께는 고추장 베이스를 추천합니다. 혼자서도 편하게 들르기 좋은 식사 장소입니다.",
    ],
    points: [
      "자체 소스로 낸 간장 · 고추장 풍미 — 고기와 밥을 한 그릇에",
      "무슬림을 위한 메뉴도 준비되어 있습니다",
      "시술 전후 방문이라면 식사 제한 · 매운 음식 가능 여부를 먼저 알려주세요",
    ],
    signature: "추천 메뉴 — 장사장 부타동 · 매콤 야끼도리동 · 장사장 야끼규동",
    products: [{ name: "덮밥 한 그릇", price: "1만 원 안팎 ~ 1만 원대 중반" }],
  }),
  P({
    id: "chacha", name: "와인주막차차 여의도점", cat: "dining", logoText: "Wine Jumak Chacha",
    desc: ["와인과 한식 안주를 함께 즐기는 와인 주점 — 2013년 홍대에서 시작한 프랜차이즈의 여의도점입니다."],
  }),
  P({ id: "mooqure", name: "무큐르 곱창밴드", cat: "dining", logo: "mooqure.png" }),
  P({ id: "winesolo", name: "와인솔로", cat: "dining", logo: "wine-solo.png" }),
  P({ id: "winepocha", name: "와인포차", cat: "dining", logo: "wine-pocha.png" }),
  P({ id: "sindosegi", name: "여의도 신도세기 고기집", cat: "dining", logo: "sindosegi.png" }),
  P({ id: "moodseoul", name: "무드서울 레스토랑 (반포한강)", cat: "dining", logoText: "MOOD SEOUL" }),
  P({ id: "gaya", name: "가야한우 갈비살 (서강대 직영)", cat: "dining", logoText: "GAYA 한우" }),

  // ── 해외 협력사 ──
  P({ id: "usspa", name: "미국 K-Spa 브랜드", nameKey: "overseas.us", cat: "global", logoText: "🇺🇸 K-Spa", descKeys: ["overseas.us.desc"] }),
  P({ id: "vincent", name: "Vincent Clinic (방콕)", nameKey: "overseas.th", cat: "global", logoText: "🇹🇭 Vincent", descKeys: ["overseas.th.desc"] }),
  P({ id: "hle", name: "HLE메디컬", nameKey: "net.p8.name", cat: "global", logo: "hle-medical.png", tagKey: "net.p8.cat", descKeys: ["net.p8.role", "net.p8.give"] }),
  P({ id: "inflers", name: "인플러즈 Inflers", nameKey: "net.p9.name", cat: "global", logo: "inflers.svg", tagKey: "net.p9.cat", descKeys: ["net.p9.role", "net.p9.give"] }),
  P({ id: "ilwoo", name: "일우 트레이딩 ILWOO TRADING", nameKey: "net.p10.name", cat: "global", logo: "ilwoo-trading.svg", tagKey: "net.p10.cat", descKeys: ["net.p10.role", "net.p10.give"] }),
];

/** 탭 순서 */
export const PARTNER_CATS: PartnerCat[] = ["clinic", "spa", "biz", "global", "beauty", "culture", "dining"];
/** 병원 안 분야 순서 */
export const CLINIC_SUBS: ClinicSub[] = ["plastic", "women", "ortho", "dental", "hanbang", "care"];
