'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      {/* Background pattern */}
      <div className={styles.pattern} />
      <div className={styles.gradientOverlay} />

      {/* Animated orbs */}
      <motion.div
        className={styles.orb1}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.orb2}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className={styles.container}>
        {/* Breadcrumb */}
        <motion.nav
          className={styles.breadcrumb}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className={styles.breadcrumbLink}>
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className={styles.breadcrumbSep} />
          <span className={styles.breadcrumbCurrent}>About Us</span>
        </motion.nav>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Since 2015
          </motion.span>
          <h1 className={styles.title}>
            Who We <span className={styles.highlight}>Are</span>
          </h1>
          <p className={styles.subtitle}>
            A passionate team of innovators, engineers, and strategists — building technology that transforms businesses and shapes the future.
          </p>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: '10+', label: 'Years of Excellence' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Team Experts' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
