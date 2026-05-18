"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, ShieldCheck } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const reasonsData = [
  {
    id: 1,
    title: "Expert Engineering Team",
    description: "Our seasoned developers and designers bring years of industry experience to deliver top-tier, enterprise-grade digital solutions.",
    icon: Users,
  },
  {
    id: 2,
    title: "Innovative Architecture",
    description: "We leverage the latest technologies and modern frameworks to build scalable, future-proof applications that keep you ahead of the curve.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Agile & Transparent Workflow",
    description: "We ensure crystal-clear communication, rapid iterations, and on-time delivery meticulously tailored to your business needs.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Dedicated Long-Term Support",
    description: "Our commitment doesn't end at launch. We provide ongoing proactive maintenance, monitoring, and round-the-clock support.",
    icon: ShieldCheck,
  }
];

// SVG Structured Pattern Component (Plus Grid)
const StructuredPattern = () => (
  <svg 
    className={styles.patternBg}
    width="100%" 
    height="100%" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="plusGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 30 25 L 30 35 M 25 30 L 35 30" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#plusGrid)" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection}>
      {/* Structured Background Pattern */}
      <StructuredPattern />
      
      {/* Faint ambient light glow */}
      <div className={styles.ambientGlow}></div>

      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Trusted Partner in <span className={styles.highlight}>Digital Innovation</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {reasonsData.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.id}
                className={styles.glassCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDesc}>{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className={styles.ctaButton}>
            Start Your Project Today
          </button>
        </motion.div>

      </div>
    </section>
  );
}
