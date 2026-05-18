'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './AboutIntro.module.css';

const highlights = [
  'Custom software solutions since 2015',
  'Mobile app, web & enterprise development',
  'Digital marketing that drives real results',
  'Scalable tech tailored to your business',
];

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Text */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>Our Story</span>
          <h2 className={styles.title}>
            Welcome to <span className={styles.highlight}>Venner Infotech</span>
          </h2>
          <p className={styles.body}>
            Venner Infotech is a leading technology solutions provider and custom software development company helping businesses of all sizes achieve their goals. Since 2015, we have delivered innovative software solutions and cutting-edge technologies tailored to diverse client needs.
          </p>
          <p className={styles.body}>
            Our expert team leverages the latest in software development, mobile app development, e-commerce, enterprise software, and digital marketing to drive growth, boost efficiency, and enhance customer experiences.
          </p>

          <ul className={styles.list}>
            {highlights.map((item) => (
              <li key={item} className={styles.listItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Visual image */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="/images/about/about_team_1779099787291.png" 
              alt="Venner Infotech Team" 
              className={styles.image}
            />
            <div className={styles.imageOverlay}></div>
          </div>

          {/* CEO Quote card */}
          <motion.div
            className={styles.quoteCard}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className={styles.quoteText}>
              &ldquo;Our goal is to be the trusted partner for businesses aiming to unlock their full potential.&rdquo;
            </div>
            <div className={styles.quoteAuthor}>
              <div className={styles.quoteAvatar}>RV</div>
              <div>
                <div className={styles.quoteAuthorName}>Mr. Rohit Variya</div>
                <div className={styles.quoteAuthorTitle}>CEO, Venner Infotech</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
