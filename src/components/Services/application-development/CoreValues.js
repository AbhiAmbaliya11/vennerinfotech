"use client";
import { motion } from "framer-motion";
import { ThumbsUp, Zap, Target, ShieldCheck } from "lucide-react";
import styles from "./CoreValues.module.css";

const values = [
  {
    title: "100% Satisfaction",
    description: "Guaranteed results that meet your needs and exceed expectations.",
    icon: <ThumbsUp strokeWidth={1.5} />,
  },
  {
    title: "Quick Response",
    description: "Rapid turnaround with swift support and timely updates.",
    icon: <Zap strokeWidth={1.5} />,
  },
  {
    title: "Perfect Solutions",
    description: "Tailored software solutions designed for optimal performance.",
    icon: <Target strokeWidth={1.5} />,
  },
  {
    title: "Reliable Support",
    description: "Consistent, dependable assistance is available whenever needed.",
    icon: <ShieldCheck strokeWidth={1.5} />,
  }
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Why Choose <span className={styles.highlight}>Venner Infotech</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            We deliver exceptional results through our commitment to quality, speed, and reliable support.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                {value.icon}
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDesc}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
