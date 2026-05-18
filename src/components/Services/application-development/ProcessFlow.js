"use client";

import { motion } from "framer-motion";
import styles from "./ProcessFlow.module.css";
import { Search, PenTool, Smartphone, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "1. Strategy", desc: "User research and market analysis." },
  { icon: PenTool, title: "2. UI/UX Design", desc: "Prototyping and visual design." },
  { icon: Smartphone, title: "3. Development", desc: "Native & Cross-platform coding." },
  { icon: Rocket, title: "4. Launch", desc: "App store deployment & growth." }
];

export default function ProcessFlow() {
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
          <h2 className={styles.title}>How We Build <br/> Winning Apps</h2>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              className={styles.stepCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.iconBox}>
                <step.icon size={28} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
