"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <span>Top Software Company in Surat</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.title}
          >
            Best Custom <br />
            <span className={styles.gradientText}>Software Development</span> <br />
            Company in Surat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.description}
          >
            Looking for custom software development company in surat? We build scalable, secure, and custom software tailored to your business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.ctaGroup}
          >
            <Link href="/contact" className={styles.primaryButton}>
              Start a Project
              <ArrowRight size={20} />
            </Link>
            <Link href="#services" className={styles.secondaryButton}>
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={styles.visualContainer}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/services/software_dev_team.png" 
              alt="Professional software engineering team" 
              width={600} 
              height={400} 
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
