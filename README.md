# SEOJIN Concierge — K-Beauty & Medical Tourism

> Next.js 14 (App Router) + TypeScript + Vanilla CSS
> 강남의 의료 기술과 웰니스·회복 경험을 연결하는 컨시어지 플랫폼

## 🚀 빠른 시작

```bash
npm install
npm run dev
# → http://localhost:3000

# 프로덕션 빌드
npm run build
npm run start
```

## 📁 구조

```
seojin-concierge/
├── app/
│   ├── layout.tsx              # 메타데이터 + Pretendard 폰트
│   ├── page.tsx                # 메인 페이지 (8개 섹션)
│   ├── globals.css             # 전체 스타일 (Vanilla CSS)
│   └── components/
│       ├── SiteHeader.tsx      # 헤더 + 모바일 햄버거 (client)
│       └── Treatments.tsx      # 시술 탭 전환 (client)
├── public/
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 디자인

| 토큰 | 값 |
|---|---|
| 배경 | `#fafaf7` |
| 골드 | `#b8956a` / 딥 `#8a6d47` |
| 액센트 | `#2d4a3e` (그린) |
| 로즈 | `#d4a59a` |
| 폰트 | Pretendard + Noto Sans KR |

## 📑 페이지 섹션

1. Hero — K-Beauty × Medical × Wellness
2. About — 병원 연결이 아닌 경험 설계
3. Treatments — 피부/메디컬/웰니스 24개 시술 (탭)
4. Packages — Signature 3종 (Glow / Anti-Aging / Healing)
5. Why Us — 기존 의료관광 vs SEOJIN 비교
6. Process — 4단계 진행 프로세스
7. Contact — 5채널 CTA
8. Footer

## 🚀 Vercel 배포

GitHub 푸시 후 https://vercel.com → Import → Deploy. 약 1~2분.

커스텀 도메인은 Vercel → Settings → Domains 에서 연결.

## 📞 회사 정보

- 위치: Seoul · Gangnam, Korea
- 이메일: contact@seojin-concierge.com
- 채널: KakaoTalk · WhatsApp · LINE · Instagram
- 운영: 24/7 Concierge Support

## 📝 라이선스

내부 사용. © 2026 SEOJIN Concierge.
