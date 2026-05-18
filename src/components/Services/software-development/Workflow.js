"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./Workflow.module.css";
import { Lightbulb, Code2, TestTube2, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    desc: "We analyze your requirements and architect a scalable solution.",
  },
  {
    icon: Code2,
    title: "Agile Development",
    desc: "Iterative coding with regular feedback loops and transparent progress.",
  },
  {
    icon: TestTube2,
    title: "Rigorous Testing",
    desc: "Automated and manual testing to ensure zero defects.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Seamless CI/CD pipelines for smooth and safe releases.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "24/7 monitoring and proactive performance optimization.",
  },
];

export default function Workflow() {
  const containerRef = useRef(null);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Our Software <span className={styles.highlight}>Engineering Process</span></h2>
          <p className={styles.subtitle}>
            A battle-tested methodology designed to deliver high-quality software on time and within budget.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.iconWrapper}>
                  <step.icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className={styles.timelineDot} />
            </motion.div>
          ))}
          <div className={styles.timelineLine} />
        </div>
      </div>
    </section>
  );
}
