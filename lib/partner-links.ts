/**
 * 파트너 로고 → 그 회사 홈페이지
 *
 * 로고만 걸어두면 "저 병원이 뭐 하는 곳인지" 를 확인할 길이 없다.
 * 의료관광은 **처음 보는 나라의 처음 보는 병원**에 몸을 맡기는 일이라,
 * 로고에서 그 병원 홈페이지로 바로 건너갈 수 있어야 신뢰가 생긴다.
 *
 * ── 열쇠를 파일 이름으로 잡은 이유 ─────────────────────────────
 * 같은 로고가 두 군데에 나온다 — 히어로 아래 띠(strip)와 아래쪽 로고 격자.
 * 이름(name)으로 잡으면 두 곳의 표기가 조금만 달라져도 한쪽만 링크가 걸린다.
 * 파일 이름은 둘이 똑같이 쓰는 값이라 어긋날 일이 없다.
 *
 * ── 없는 곳은 비워둔다 ────────────────────────────────────────
 * **억지로 채우지 않는다.** 여기 없는 곳은 로고가 그냥 그림으로 남는다.
 * 이름이 비슷한 남의 회사로 보내는 것이 링크가 없는 것보다 훨씬 나쁘다.
 * 실제로 이런 것들을 확인하고 **뺐다**:
 *
 *   바론한의원   baronclinic.co.kr 이 있는데 **부산 강서구**다.
 *                우리 파트너는 수도권인데 동명이원일 가능성이 크다
 *   모네브       monev.co.kr 은 비건 화장품인데 우리 소개는 Medical Healing Spa 다
 *   바이탈닥     이름이 같은 해외 원격의료 회사만 나온다 (칠레·유럽)
 *   오픈피아     opunpia.com 이 응답하지 않는다 (접속 불가)
 *
 * 전부 2026-09-12 에 실제로 열어보고 200 을 확인한 주소다.
 * 문 닫는 병원이 있으니 반년에 한 번쯤 다시 확인하는 게 좋다.
 */

/** 로고 파일 이름 → 홈페이지. 리다이렉트 뒤 최종 주소로 적는다 */
export const PARTNER_URL: Record<string, string> = {
  // ── 병원 ──
  "pixelab.jpg": "https://www.pixelab.co.kr/",
  "primi-clinic.jpg": "https://primiclinic.com/",
  "banpo-standar.jpg": "https://www.banpostandar.co.kr/",
  "dove-clinic.png": "https://www.doveclinic.co.kr/",
  "saebom-women.png": "https://saebomclinic.kr/",
  "seoul-haengsin.png": "https://www.seoulhsdc.kr/",
  "teokdumi.jpg": "https://www.tuktome.co.kr/",
  "yangyundol.jpg": "http://www.2yd.co.kr/",
  "mirab-clinic.jpg": "http://melabclinic.com/",
  "medi-one.png": "https://www.medionemedicalcenter.com/",
  "relive-dentistry.png": "https://www.relivedent.com/",
  "sinsang-ps.svg": "https://www.shinsangps.com/",
  "pieobom-cheongdam.png": "https://cd.pieobom.com/",

  // ── K뷰티 · 이너뷰티 ──
  "haeol.jpg": "https://haeol.kr/",
  "vividson.jpg": "https://vividson.co.kr/",
  "judang-secret.png": "https://jubi.co.kr/",

  // ── 공연 · 문화 · 호텔 ──
  "glue-hotel.jpg": "https://www.gluehotel.com/",
  "blue-marine-hotel.png": "https://www.bymarinehotel.com/",
  // 자기 홈페이지가 없고 이 링크 모음이 공식 창구다
  "musical-spotlight.jpg": "https://litt.ly/spotlight_musicalpub",

  // ── 기술 협력 ──
  "maloha-logo.png": "https://maloha.ai/landing",
  "undermilli-logo.png": "https://undermilli.com/ko",
  "lifemedi.svg": "https://bukseoul.com/",

  // ── MOU 파트너 (2026-09-12 추가) ──
  // 데이뷰의원은 지점마다 홈페이지가 따로 있다 (daybeauclinic01·07·08·12…).
  // 지점 하나로 보내면 나머지 아홉 곳이 없는 것처럼 보이니 본원으로 보낸다.
  "daybeau.png": "https://daybeauclinic.co.kr/main",
  "hle-medical.png": "https://hle-medical.co.jp/",
  // 인플러즈 — 한국 회사지만 일본 현지 인플루언서를 잇는 플랫폼이라 일본 창구로 들어간다.
  // brand-kr 이 광고주(브랜드)용 창구다. 인플루언서용(jp) 주소로 보내면 엉뚱한 곳에 닿는다
  "inflers.svg": "https://brand-kr.inflers.com/",
  // 일우 트레이딩 — 도쿄 기반 한일 비즈니스 브릿지. 자체 도메인 없이
  // workers.dev 주소가 공식 창구다 (2026-09-23 확인, 200)
  "ilwoo-trading.svg": "https://ilwootrading.weld57225.workers.dev/",
};

/**
 * 로고가 없어 이름만 있는 제휴사 — i18n 열쇠로 잡는다.
 * (biz.eduwill.name 의 "eduwill" 부분)
 */
export const BIZ_URL: Record<string, string> = {
  eduwill: "https://www.eduwill.net/",
  soldoc: "https://soldoc.co.kr/",
  metadx: "https://www.metadxlab.com/",
  // medibible · atoz · aim — 같은 이름의 회사를 못 찾았다. 비워둔다
};

/** 링크가 있으면 주소를, 없으면 undefined */
export const urlOf = (logoFile: string | null | undefined): string | undefined =>
  logoFile ? PARTNER_URL[logoFile.replace(/^\/logos\//, "")] : undefined;
