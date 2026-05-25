"use client";

export default function GlobalError({ error, reset }) {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "var(--font-geist-sans, sans-serif)",
    }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#e0e0e0", margin: "0 0 12px" }}>
          Something went wrong
        </h1>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: "0 0 32px" }}>
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              background: "linear-gradient(135deg,#f97316,#ea580c)",
              color: "#fff",
              padding: "11px 28px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <a href="/" style={{
            border: "1px solid #2a2a2a",
            color: "#aaa",
            padding: "11px 28px",
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block",
          }}>
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}
