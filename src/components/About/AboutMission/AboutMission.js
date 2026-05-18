'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Flag } from 'lucide-react';
import styles from './AboutMission.module.css';

const cards = [
  {
    icon: Target,
    label: 'Our Mission',
    color: '#f97316',
    title: 'Deliver With Excellence',
    body: 'We consistently deliver professional, high-quality solutions — maintaining excellence in every aspect of design and development, without compromise.',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    color: '#3b82f6',
    title: 'Lead the Industry',
    body: 'Quality is our top priority. We never compromise, striving to lead the IT development and marketing industry with excellence and forward-thinking innovation.',
  },
  {
    icon: Flag,
    label: 'Our Goal',
    color: '#10b981',
    title: 'Empower Every Client',
    body: 'Our goal is to be the trusted partner for businesses aiming to unlock their full potential — driving growth, efficiency, and lasting innovation.',
  },
];

export default function AboutMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>What Drives Us</span>
          <h2 className={styles.title}>
            Our Mission, Vision <span className={styles.highlight}>&amp; Goal</span>
          </h2>
          <p className={styles.subtitle}>
            Three pillars that shape every decision, every product, and every partnership we build.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={styles.iconWrap}
                  style={{ background: `${card.color}18`, color: card.color }}
                >
                  <Icon size={28} />
                </div>
                <span className={styles.cardLabel} style={{ color: card.color }}>
                  {card.label}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>

                {/* Decorative glow */}
                <div
                  className={styles.glow}
                  style={{ background: card.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
