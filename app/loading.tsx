export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="페이지를 불러오는 중"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fafaf7",
        zIndex: 9999,
        fontFamily: "Pretendard, 'Noto Sans KR', sans-serif",
      }}
    >
      <div style={{ fontSize: 13, letterSpacing: "0.25em", color: "#b8956a", marginBottom: 24 }}>
        THE · WELLNESS N
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          border: "2px solid #e8e4dc",
          borderTopColor: "#b8956a",
          borderRadius: "50%",
          animation: "tw-spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes tw-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
