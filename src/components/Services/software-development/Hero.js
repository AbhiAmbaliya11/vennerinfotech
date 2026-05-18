"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundEffects}>
        <div className={styles.glowBlob1} />
        <div className={styles.glowBlob2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.badge}
          >
            <Terminal size={16} className={styles.badgeIcon} />
            <span>Enterprise Software Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.title}
          >
            Building Scalable <br />
            <span className={styles.gradientText}>Digital Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.description}
          >
            We engineer high-performance software systems designed for reliability, 
            security, and unprecedented scale. Transform your business operations 
            with custom enterprise solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.ctaGroup}
          >
            <button className={styles.primaryButton}>
              Start a Project
              <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryButton}>
              Explore Capabilities
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={styles.visualContainer}
        >
          <div className={styles.codeMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.mockupTitle}>system_core.ts</div>
            </div>
            <div className={styles.mockupBody}>
              <pre>
                <code>
                  <span className={styles.keyword}>import</span> {"{"} Scale, Secure {"}"} <span className={styles.keyword}>from</span> <span className={styles.string}>'@venner/enterprise'</span>;{"\n"}
                  {"\n"}
                  <span className={styles.keyword}>class</span> <span className={styles.class}>Architecture</span> {"{"}{"\n"}
                  {"  "}<span className={styles.keyword}>private</span> capacity: <span className={styles.type}>number</span> = Infinity;{"\n"}
                  {"\n"}
                  {"  "}@Scale() {"\n"}
                  {"  "}@Secure() {"\n"}
                  {"  "}<span className={styles.keyword}>public async</span> <span className={styles.method}>deploy</span>(system: System) {"{"}{"\n"}
                  {"    "}<span className={styles.keyword}>await</span> system.<span className={styles.method}>initialize</span>();{"\n"}
                  {"    "}<span className={styles.keyword}>return</span> {"{"} status: <span className={styles.string}>'Operational'</span>, uptime: <span className={styles.string}>'99.99%'</span> {"}"};{"\n"}
                  {"  "}{"}"}{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
