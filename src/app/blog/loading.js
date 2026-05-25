import styles from "./BlogListing.module.css";

export default function BlogLoading() {
  return (
    <>
      <section className={styles.hero} aria-hidden="true">
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <div style={{ width: 120, height: 24, background: "#1a1a1a", borderRadius: 100, margin: "0 auto 16px" }} />
          <div style={{ width: 320, height: 44, background: "#1a1a1a", borderRadius: 8, margin: "0 auto 16px" }} />
          <div style={{ width: 460, height: 20, background: "#1a1a1a", borderRadius: 8, margin: "0 auto" }} />
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          {/* Featured skeleton */}
          <div className={styles.featuredCard} style={{ pointerEvents: "none" }}>
            <div className={styles.featuredImg} style={{ background: "#111" }} />
            <div className={styles.featuredBody}>
              <div style={{ width: 80, height: 20, background: "#1a1a1a", borderRadius: 100, marginBottom: 16 }} />
              <div style={{ width: "90%", height: 28, background: "#1a1a1a", borderRadius: 6, marginBottom: 12 }} />
              <div style={{ width: "100%", height: 16, background: "#1a1a1a", borderRadius: 6, marginBottom: 8 }} />
              <div style={{ width: "70%", height: 16, background: "#1a1a1a", borderRadius: 6 }} />
            </div>
          </div>

          {/* Grid skeleton */}
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.card} style={{ pointerEvents: "none" }}>
                <div className={styles.cardImg} style={{ background: "#111" }} />
                <div className={styles.cardBody}>
                  <div style={{ width: "85%", height: 18, background: "#1a1a1a", borderRadius: 6, marginBottom: 10 }} />
                  <div style={{ width: "100%", height: 14, background: "#1a1a1a", borderRadius: 6, marginBottom: 6 }} />
                  <div style={{ width: "60%", height: 14, background: "#1a1a1a", borderRadius: 6 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
