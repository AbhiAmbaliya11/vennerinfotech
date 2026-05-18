"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { MousePointer2, Layout } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.background}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.tagline}>
            <Layout size={16} /> Web Design & Development
          </div>
          <h1 className={styles.title}>
            Digital <span className={styles.gradient}>Experiences</span><br/>
            That Stand Out
          </h1>
          <p className={styles.description}>
            We build lightning-fast, highly-converting web experiences that elevate 
            your brand. Combining stunning design with cutting-edge technology.
          </p>
          <div className={styles.ctaWrapper}>
            <button className={styles.primaryBtn}>
              View Portfolio
            </button>
            <span className={styles.cursorIcon}>
              <MousePointer2 size={24} />
            </span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.browserWindow}>
            <div className={styles.browserHeader}>
              <div className={styles.browserDots}>
                <span className={styles.dotR} />
                <span className={styles.dotY} />
                <span className={styles.dotG} />
              </div>
              <div className={styles.browserUrl}>www.vennerinfotech.com</div>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.webSkeletonHero} />
              <div className={styles.webSkeletonCards}>
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
              </div>
              
              <motion.div 
                className={styles.floatingWidget}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className={styles.scoreBar}>
                  <span>Performance</span>
                  <span className={styles.score}>100</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
