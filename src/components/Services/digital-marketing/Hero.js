"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { TrendingUp, BarChart3, Users, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgElements}>
        <div className={styles.bgLine} style={{ top: '20%' }} />
        <div className={styles.bgLine} style={{ top: '40%' }} />
        <div className={styles.bgLine} style={{ top: '60%' }} />
        <div className={styles.bgLine} style={{ top: '80%' }} />
      </div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.badge}
          >
            <TrendingUp size={16} /> Data-Driven Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.title}
          >
            Scale Your <span className={styles.highlight}>Revenue</span><br />
            With Precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.description}
          >
            Leverage advanced analytics, targeted campaigns, and SEO 
            strategies to dominate your market. Stop guessing and start growing.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.primaryBtn}
          >
            Get Your Free Audit
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.visualContent}
        >
          <div className={styles.dashboard}>
            <div className={styles.dashHeader}>
              <div className={styles.dashTitle}>Campaign Performance</div>
              <div className={styles.dateRange}>Last 30 Days</div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricIcon}><Users size={20} color="#10b981" /></div>
                <div className={styles.metricValue}>124.5K</div>
                <div className={styles.metricLabel}>Total Traffic <span className={styles.positive}>+12%</span></div>
              </div>
              <div className={styles.metricCard}>
                <div className={styles.metricIcon}><Target size={20} color="#6366f1" /></div>
                <div className={styles.metricValue}>8.2%</div>
                <div className={styles.metricLabel}>Conv. Rate <span className={styles.positive}>+1.4%</span></div>
              </div>
            </div>

            <div className={styles.chartWrapper}>
              <div className={styles.chartBar} style={{ height: '40%' }}></div>
              <div className={styles.chartBar} style={{ height: '60%' }}></div>
              <div className={styles.chartBar} style={{ height: '45%' }}></div>
              <div className={styles.chartBar} style={{ height: '80%' }}></div>
              <div className={styles.chartBar} style={{ height: '65%' }}></div>
              <div className={styles.chartBar} style={{ height: '90%' }}></div>
              <div className={styles.chartBar} style={{ height: '100%' }}></div>
            </div>

            <motion.div 
              className={styles.floatingCard}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <div className={styles.floatIcon}><BarChart3 size={24} color="#f59e0b" /></div>
              <div className={styles.floatText}>
                <strong>ROAS Target Hit</strong>
                <span>Campaign optimized</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
