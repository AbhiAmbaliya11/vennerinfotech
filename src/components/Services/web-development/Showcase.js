"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Showcase.module.css";

const projects = [
  { id: 1, color: "#fce7f3", title: "E-Commerce Platform", desc: "High-conversion storefronts." },
  { id: 2, color: "#e0e7ff", title: "SaaS Dashboard", desc: "Data-rich enterprise portals." },
  { id: 3, color: "#dcfce7", title: "Corporate Site", desc: "Brand-focused web experiences." }
];

export default function Showcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const transforms = [y1, y2, y3];

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Tailored Web Solutions</h2>
          <p className={styles.subtitle}>We build specialized websites for every industry need.</p>
        </motion.div>

        <div className={styles.showcaseGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.showcaseCard}
              style={{ y: transforms[index] }}
            >
              <div 
                className={styles.cardImage} 
                style={{ backgroundColor: project.color }}
              />
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
