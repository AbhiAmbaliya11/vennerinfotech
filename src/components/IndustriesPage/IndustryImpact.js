"use client";

import { motion } from "framer-motion";
import styles from "./IndustryImpact.module.css";

const impacts = [
  {
    number: "150%",
    label: "Average ROI",
    description: "Our targeted strategies consistently double client investments across e-commerce and retail sectors."
  },
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully executed digital transformations for enterprise healthcare and finance clients."
  },
  {
    number: "98%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust, transparency, and continuous technological innovation."
  }
];

export default function IndustryImpact() {
  return (
    <section className={styles.impactSection}>
      <div 
        className={styles.parallaxBg}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')` }}
      >
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Real Impact, Measurable Results</h2>
          <p>We don't just deliver solutions; we drive tangible business growth.</p>
        </motion.div>

        <div className={styles.statsGrid}>
          {impacts.map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDesc}>{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
