import AdminShell from "../components/AdminShell";

export default function ContentPage() {
  return (
    <AdminShell>
      <div className="admin-header">
        <h1>콘텐츠 편집</h1>
        <p className="desc">
          사이트의 텍스트, 패키지, 시술 정보를 수정합니다. 저장 시 1~2분 내에 사이트에 반영됩니다.
        </p>
      </div>

      <div className="panel">
        <h2 className="panel-title">
          📌 Hero 섹션
          <span className="meta">첫 화면 텍스트</span>
        </h2>

        <div className="field">
          <label>태그 라인</label>
          <input type="text" placeholder="예: KOREA · MEDICAL · K-BEAUTY CONCIERGE" />
        </div>

        <div className="field">
          <label>메인 헤드라인</label>
          <textarea placeholder="예: 강남 프리미엄 의료기관과 함께하는 / 안티에이징 컨시어지" rows={2} />
        </div>

        <div className="field">
          <label>서브 카피</label>
          <textarea placeholder="예: 줄기세포·피코토닝·리프팅·K-pop 투어 패키지" rows={3} />
        </div>

        <button className="btn btn-primary" disabled>저장 (백엔드 연결 필요)</button>
      </div>

      <div className="panel">
        <h2 className="panel-title">
          💉 시술 카테고리
          <span className="meta">의료/뷰티 시술</span>
        </h2>
        <div className="empty">
          <div className="empty-ico">💉</div>
          <p>시술 카테고리 편집기는 다음 업데이트에서 제공됩니다.</p>
        </div>
      </div>

      <div className="panel">
        <h2 className="panel-title">
          🏥 협업 병원
          <span className="meta">15개 병원</span>
        </h2>
        <div className="empty">
          <div className="empty-ico">🏥</div>
          <p>병원 정보 관리는 다음 업데이트에서 제공됩니다.</p>
        </div>
      </div>

      <div className="panel" style={{ background: "#fef9c3", borderColor: "#fde047" }}>
        <h2 className="panel-title" style={{ color: "#713f12" }}>⚠️ 콘텐츠 편집 기능 안내</h2>
        <p style={{ color: "#713f12", fontSize: 14 }}>
          현재 화면은 <strong>UI 프로토타입</strong>입니다. 실제 저장을 위해서는 다음 작업이 필요합니다:
        </p>
        <ol style={{ color: "#713f12", fontSize: 13, marginTop: 12, paddingLeft: 20 }}>
          <li>Vercel KV 또는 Vercel Postgres 활성화</li>
          <li>콘텐츠를 lib/i18n.ts → DB로 마이그레이션</li>
          <li>실시간 저장 API 연결</li>
        </ol>
        <p style={{ color: "#713f12", fontSize: 13, marginTop: 8 }}>
          → 이 작업을 진행하시려면 별도로 요청해주세요. (1~2일 작업)
        </p>
      </div>
    </AdminShell>
  );
}
