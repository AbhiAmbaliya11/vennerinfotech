"use client";

import { motion } from "framer-motion";
import { ShoppingCart, HeartPulse, ShieldCheck, Factory, GraduationCap, Home } from "lucide-react";
import styles from "./Industries.module.css";

const industriesData = [
  {
    id: 1,
    stat: "150%",
    statSubtitle: "increase in conversion rates",
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "AI-powered product recommendations",
  },
  {
    id: 2,
    stat: "100%",
    statSubtitle: "faster diagnosis support",
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Patient data analysis & insights",
  },
  {
    id: 3,
    stat: "99%",
    statSubtitle: "fraud detection accuracy",
    icon: ShieldCheck,
    title: "Finance",
    desc: "Fraud detection & risk assessment",
  },
  {
    id: 4,
    stat: "30%",
    statSubtitle: "reduction in downtime",
    icon: Factory,
    title: "Manufacturing",
    desc: "Predictive maintenance systems",
  },
  {
    id: 5,
    stat: "60%",
    statSubtitle: "improvement in student outcomes",
    icon: GraduationCap,
    title: "Education",
    desc: "Personalized learning paths",
  },
  {
    id: 6,
    stat: "40%",
    statSubtitle: "faster deal closures",
    icon: Home,
    title: "Real Estate",
    desc: "Property valuation & market analysis",
  }
];

// Delicate Spirograph/Line pattern matching the screenshot
const DelicateGraphic = () => (
  <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cornerGraphic}>
    <path d="M-20 0 C 40 10, 80 40, 100 100" stroke="var(--primary)" strokeWidth="0.5" opacity="0.3" fill="none" />
    <path d="M-10 -10 C 50 15, 90 50, 110 110" stroke="var(--primary)" strokeWidth="0.5" opacity="0.4" fill="none" />
    <path d="M0 -20 C 60 20, 100 60, 120 120" stroke="var(--primary)" strokeWidth="0.5" opacity="0.5" fill="none" />
    <path d="M10 -30 C 70 25, 110 70, 130 130" stroke="var(--primary)" strokeWidth="0.5" opacity="0.6" fill="none" />
    <path d="M20 -40 C 80 30, 120 80, 140 140" stroke="var(--primary)" strokeWidth="0.5" opacity="0.7" fill="none" />
    <path d="M30 -50 C 90 35, 130 90, 150 150" stroke="var(--primary)" strokeWidth="0.5" opacity="0.8" fill="none" />
    <path d="M40 -60 C 100 40, 140 100, 160 160" stroke="var(--primary)" strokeWidth="0.5" opacity="0.9" fill="none" />
  </svg>
);

export default function Industries() {
  return (
    <section className={styles.industriesSection}>
      {/* Background Mesh Grid overlay */}
      <div className={styles.bgGrid}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Proven Across <span className={styles.highlight}>Industries</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our IT solutions have delivered measurable results across diverse industries and use cases.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {industriesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Decorative Delicate Lines Overlay */}
                <DelicateGraphic />

                {/* Top Section: Statistics */}
                <div className={styles.topSection}>
                  <div className={styles.statContainer}>
                    <motion.span 
                      className={styles.statNumber}
                      variants={{
                        hover: { scale: 1.1, originX: 1 }
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.stat}
                    </motion.span>
                    <p className={styles.statSubtitle}>{item.statSubtitle}</p>
                  </div>
                </div>

                {/* Bottom Section: Industry details */}
                <div className={styles.bottomSection}>
                  <div className={styles.titleRow}>
                    <div className={styles.iconWrapper}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
