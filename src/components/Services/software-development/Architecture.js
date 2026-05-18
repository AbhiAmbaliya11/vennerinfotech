"use client";

import { motion } from "framer-motion";
import styles from "./Architecture.module.css";
import { Layers, Server, ShieldCheck, Zap } from "lucide-react";

export default function Architecture() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Microservices & Cloud Native</h2>
            <p className={styles.description}>
              We build scalable architectures using microservices and serverless paradigms. 
              Our enterprise solutions are designed to handle millions of requests, ensuring 
              zero downtime and extreme fault tolerance.
            </p>
            <ul className={styles.featureList}>
              <li><Zap className={styles.icon} /> High Performance & Low Latency</li>
              <li><Layers className={styles.icon} /> Auto-Scaling Infrastructure</li>
              <li><ShieldCheck className={styles.icon} /> Enterprise-Grade Security</li>
              <li><Server className={styles.icon} /> Distributed Data Management</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.diagram}>
            <div className={styles.layer}>
              <div className={styles.node}>API Gateway</div>
            </div>
            <div className={styles.lines} />
            <div className={styles.layer}>
              <div className={styles.node}>Auth Service</div>
              <div className={styles.node}>Core Logic</div>
              <div className={styles.node}>Data Engine</div>
            </div>
            <div className={styles.lines} />
            <div className={styles.layer}>
              <div className={styles.nodeDatabase}>PostgreSQL</div>
              <div className={styles.nodeDatabase}>Redis Cache</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
