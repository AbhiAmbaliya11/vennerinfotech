'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import styles from './AboutCTA.module.css';

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>Get In Touch</span>
          <h2 className={styles.title}>
            Ready to Build Something <span className={styles.highlight}>Great?</span>
          </h2>
          <p className={styles.subtitle}>
            Tell us about your project and let our team of experts craft the perfect solution for your business.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryBtn}>
              Start a Project
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+918980317457" className={styles.secondaryBtn}>
              <Phone size={18} />
              +91 89803 17457
            </a>
          </div>

          <div className={styles.contactInfo}>
            <a href="mailto:hello@vennerinfotech.com" className={styles.contactLink}>
              <Mail size={16} />
              hello@vennerinfotech.com
            </a>
            <span className={styles.dot} />
            <span className={styles.contactText}>Surat, Gujarat, India — 395004</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
