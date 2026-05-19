"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import styles from "./Hero.module.css";

const techBadges = [
  { label: "Shopify", color: "#96bf48" },
  { label: "Laravel", color: "#f05340" },
  { label: "WordPress", color: "#3b82f6" },
  { label: "Next.js", color: "#0f1115" },
  { label: "React", color: "#61dafb" },
  { label: "PHP", color: "#8892be" },
];

const services = [
  { name: "Shopify Development", pct: 92, color: "#96bf48" },
  { name: "WordPress Sites", pct: 88, color: "#3b82f6" },
  { name: "Laravel Apps", pct: 95, color: "#f05340" },
  { name: "Digital Marketing", pct: 80, color: "#ec4899" },
];

const dashStats = [
  { value: "250+", label: "Projects", color: "#f97316" },
  { value: "350+", label: "Clients", color: "#3b82f6" },
  { value: "4.5★", label: "Rating", color: "#f59e0b" },
  { value: "13+", label: "Yrs Exp.", color: "#10b981" },
];

const months = [35, 52, 41, 68, 74, 58, 82, 90, 76, 88, 95, 100];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Structural background pattern */}
      <div className={styles.bgGrid} />
      <div className={styles.bgDiag} />
      <div className={styles.bgDiagLeft} />
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.bgCornerTR} />
      <div className={styles.bgCornerBL} />
      <div className={styles.bgDots} />
      <div className={styles.bgDotsRight} />

      <div className={styles.container}>

        {/* ── TOP BADGE ── */}
        <motion.div
          className={styles.topBadge}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeDot} />
          Trusted IT Partner Since 2018
        </motion.div>

        {/* ── HEADLINE ── */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We Build <span className={styles.highlight}>Digital</span> Products
          <span className={styles.titleDot}>.</span>
        </motion.h1>

        {/* ── SUBTITLE ── */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
        >
          From blazing-fast Shopify stores to enterprise Laravel platforms — we craft digital solutions
          that grow your business and impress your customers.
        </motion.p>

        {/* ── CTA ROW ── */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          <Link href="/contact" className={styles.primaryBtn}>
            Start a Project <ArrowRight size={17} />
          </Link>
          <a href="tel:+918980317457" className={styles.secondaryBtn}>
            <Phone size={15} /> Call Now
          </a>
        </motion.div>

        {/* ── TRUST ROW ── */}
        <motion.div
          className={styles.trustRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.48 }}
        >
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </div>
          <span className={styles.trustText}>Rated 4.5/5 by 350+ clients</span>
        </motion.div>

        {/* ── BIG DASHBOARD CARD ── */}
        <motion.div
          className={styles.cardWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow */}
          <div className={styles.cardGlow} />

          <motion.div
            className={styles.mainCard}
            animate={{
              y: [0, -8, 0],
              rotateY: mouse.x * 0.25,
              rotateX: -mouse.y * 0.25,
            }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotateY: { type: "spring", stiffness: 40, damping: 20 },
              rotateX: { type: "spring", stiffness: 40, damping: 20 },
            }}
          >
            {/* Chrome bar */}
            <div className={styles.cardTop}>
              <div className={styles.chromeDots}>
                <span style={{ background: "#ff5f57" }} />
                <span style={{ background: "#febc2e" }} />
                <span style={{ background: "#28c840" }} />
              </div>
              <span className={styles.cardUrl}>vennerinfotech.com — Dashboard</span>
              <div className={styles.cardLive}>
                <span className={styles.liveDot} /> Live
              </div>
            </div>

            {/* Stats strip */}
            <div className={styles.statsStrip}>
              {dashStats.map((s) => (
                <div key={s.label} className={styles.statChip}>
                  <span className={styles.statChipVal} style={{ color: s.color }}>{s.value}</span>
                  <span className={styles.statChipLbl}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Two column body */}
            <div className={styles.cardBody}>
              {/* Left: service bars */}
              <div className={styles.cardLeft}>
                <p className={styles.colLabel}>Service Expertise</p>
                {services.map((s, i) => (
                  <div key={s.name} className={styles.serviceRow}>
                    <div className={styles.serviceInfo}>
                      <span className={styles.serviceName}>{s.name}</span>
                      <span className={styles.servicePct} style={{ color: s.color }}>{s.pct}%</span>
                    </div>
                    <div className={styles.serviceBar}>
                      <motion.div
                        className={styles.serviceBarFill}
                        style={{ background: `linear-gradient(90deg,${s.color}99,${s.color})` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${s.pct}%` }}
                        transition={{ duration: 1.3, delay: 1 + i * 0.13, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}

                {/* Tech badges */}
                <div className={styles.techRow}>
                  {techBadges.map((t) => (
                    <span
                      key={t.label}
                      className={styles.techBadge}
                      style={{ color: t.color, background: `${t.color}12`, borderColor: `${t.color}35` }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: bar chart */}
              <div className={styles.cardRight}>
                <p className={styles.colLabel}>Monthly Projects</p>
                <div className={styles.chartArea}>
                  {months.map((h, i) => (
                    <motion.div
                      key={i}
                      className={styles.bar}
                      style={{ background: i === 11 ? "#f97316" : "#e2e8f0" }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#f97316" : "#e2e8f0",
                        transformOrigin: "bottom",
                      }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.06, ease: "easeOut" }}
                    />
                  ))}
                </div>
                <div className={styles.chartMonths}>
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
                    <span key={i} className={styles.chartMonth} style={{ color: i === 11 ? "#f97316" : undefined }}>{m}</span>
                  ))}
                </div>

                {/* Mini notification */}
                <motion.div
                  className={styles.miniNote}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <span className={styles.miniNoteIcon}>🚀</span>
                  <div>
                    <p className={styles.miniNoteTitle}>New Project Live!</p>
                    <p className={styles.miniNoteSub}>Vira Care — Shopify</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
