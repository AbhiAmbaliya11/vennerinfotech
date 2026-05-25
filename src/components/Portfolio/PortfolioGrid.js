"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./PortfolioGrid.module.css";

const TABS = ["All", "Shopify", "WordPress", "Laravel", "Digital Marketing"];

const categoryStyle = {
  Shopify:            { color: "#15803d", bg: "#dcfce7" },
  WordPress:          { color: "#1d4ed8", bg: "#dbeafe" },
  Laravel:            { color: "#c2410c", bg: "#ffedd5" },
  "Digital Marketing":{ color: "#9d174d", bg: "#fce7f3" },
};

export default function PortfolioGrid({ projects = [] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Tab filter */}
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${active === tab ? styles.tabActive : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
              {active === tab && (
                <motion.span layoutId="tabUnderline" className={styles.tabLine} transition={{ type: "spring", stiffness: 500, damping: 35 }} />
              )}
            </button>
          ))}
          <span className={styles.tabCount}>{filtered.length} projects</span>
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666", padding: "60px 0", fontSize: 15 }}>
            No projects in this category yet.
          </p>
        ) : (
          <motion.div className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => {
                const cs = categoryStyle[p.category] || { color: "#888", bg: "#1a1a1a" };
                const domain = p.url.replace(/https?:\/\/(www\.)?/, "").split("/")[0];
                const isFeatured = p.featured && (active === "All" || filtered.indexOf(p) === 0);

                return (
                  <motion.a
                    key={p.id || p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.card} ${isFeatured ? styles.cardFeatured : ""}`}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                  >
                    <div className={styles.imgWrap}>
                      {p.image ? (
                        <Image src={p.image} alt={p.title} fill className={styles.img}
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                          unoptimized={p.image.startsWith("/")}
                        />
                      ) : (
                        <div className={styles.imgPlaceholder} style={{ background: `linear-gradient(135deg,${cs.color}18,${cs.color}30)` }}>
                          <span style={{ fontSize: 48, opacity: 0.4 }}>🖼️</span>
                        </div>
                      )}
                      <div className={styles.imgGradient} />
                      <div className={styles.hoverOverlay}>
                        <span className={styles.visitPill}>Visit Site <ArrowUpRight size={13} /></span>
                      </div>
                    </div>

                    <div className={styles.infoBar}>
                      <div className={styles.infoLeft}>
                        <span className={styles.catBadge} style={{ color: cs.color, background: cs.bg }}>
                          {p.category}
                        </span>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <p className={styles.cardDomain}>{domain}</p>
                      </div>
                      <div className={styles.arrowBtn} style={{ color: cs.color }}>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
