export default function PortfolioLoading() {
  return (
    <main style={{ minHeight: "100vh", background: "#050505" }} aria-hidden="true">
      {/* Hero skeleton */}
      <section style={{ padding: "120px 24px 80px", textAlign: "center" }}>
        <div style={{ width: 140, height: 28, background: "#111", borderRadius: 100, margin: "0 auto 20px" }} />
        <div style={{ width: 360, height: 52, background: "#111", borderRadius: 8, margin: "0 auto 16px" }} />
        <div style={{ width: 480, height: 20, background: "#111", borderRadius: 8, margin: "0 auto" }} />
      </section>

      {/* Filter pill skeleton */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center", padding: "0 24px 48px", flexWrap: "wrap" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ width: 100, height: 34, background: "#111", borderRadius: 100 }} />
        ))}
      </div>

      {/* Grid skeleton */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ height: 200, background: "#111" }} />
              <div style={{ padding: 20 }}>
                <div style={{ width: "75%", height: 18, background: "#1a1a1a", borderRadius: 6, marginBottom: 10 }} />
                <div style={{ width: "50%", height: 14, background: "#1a1a1a", borderRadius: 6 }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
