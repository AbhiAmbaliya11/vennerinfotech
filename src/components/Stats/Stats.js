"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { FolderCheck, Users, Globe, Award } from "lucide-react";
import styles from "./Stats.module.css";

// Reusable Animated Number Component
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const statsData = [
  {
    id: 1,
    title: "Projects Completed",
    value: 210,
    icon: FolderCheck,
  },
  {
    id: 2,
    title: "Happy Clients",
    value: 1200,
    icon: Users,
  },
  {
    id: 3,
    title: "Websites Developed",
    value: 150,
    icon: Globe,
  },
  {
    id: 4,
    title: "Years of Excellence",
    value: 13,
    icon: Award,
  }
];

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      {/* Background Graphic Overlay */}
      <div className={styles.bgOverlay}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.iconContainer}>
                  <Icon size={48} strokeWidth={1.5} className={styles.icon} />
                </div>
                
                <div className={styles.numberWrapper}>
                  <h3 className={styles.number}>
                    <AnimatedNumber value={stat.value} />
                  </h3>
                  <span className={styles.plusSign}>+</span>
                </div>
                
                <p className={styles.title}>{stat.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
