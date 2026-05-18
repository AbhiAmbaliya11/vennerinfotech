"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import styles from "./IndustriesHero.module.css";

export default function IndustriesHero() {
  return (
    <section className={styles.heroSection}>
      <div 
        className={styles.heroBackground}
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')` }}
      >
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Empowering Every Sector
          </motion.div>
          
          <h1 className={styles.title}>
            Transforming Industries <br/>
            Through <span className={styles.gradientText}>Technology</span>
          </h1>
          
          <p className={styles.subtitle}>
            We deliver custom technology solutions tailored to diverse industries, 
            helping businesses innovate, automate operations, and achieve scalable growth.
          </p>

          <motion.a 
            href="#industries-grid"
            className={styles.scrollBtn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: 5 }}
          >
            Explore Sectors
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
