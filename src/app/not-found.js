import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | Venner Infotech",
};

export default function NotFound() {
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
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{
          fontSize: 96,
          fontWeight: 900,
          lineHeight: 1,
          background: "linear-gradient(135deg,#f97316,#ea580c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 8,
        }}>
          404
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#e0e0e0", margin: "0 0 12px" }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, margin: "0 0 36px" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{
            background: "linear-gradient(135deg,#f97316,#ea580c)",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
          }}>
            Go Home
          </Link>
          <Link href="/contact" style={{
            border: "1px solid #2a2a2a",
            color: "#aaa",
            padding: "12px 28px",
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}>
            Contact Us
          </Link>
        </div>
        <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center" }}>
          {[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Blog", href: "/blog" },
            { label: "Services", href: "/#services" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
