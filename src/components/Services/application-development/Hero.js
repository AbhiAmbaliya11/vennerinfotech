"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { Smartphone, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gradientBg} />
      
      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.pill}
          >
            <Smartphone size={16} /> Next-Gen Mobile Experiences
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.title}
          >
            Apps That Users <br/> 
            <span className={styles.highlight}>Actually Love.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.description}
          >
            From native iOS and Android apps to cross-platform solutions, 
            we craft beautifully smooth, highly responsive applications 
            that engage and convert.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.btnGroup}
          >
            <button className={styles.btnPrimary}>Build Your App</button>
            <button className={styles.btnSecondary}>
              <Play size={18} fill="currentColor" /> Watch Showreel
            </button>
          </motion.div>
        </div>
        
        <div className={styles.visualContent}>
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className={styles.mockupWrapper}
          >
            <div className={styles.phoneBody}>
              <div className={styles.screen}>
                <div className={styles.appHeader}>
                  <div className={styles.userAvatar} />
                  <div className={styles.headerText}>
                    <div className={styles.skeletonLine} />
                    <div className={styles.skeletonLineShort} />
                  </div>
                </div>
                <div className={styles.appCard} />
                <div className={styles.appGrid}>
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                  <div className={styles.gridItem} />
                </div>
              </div>
            </div>
            
            <motion.div 
              className={styles.floatingElement1}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className={styles.notification}>
                <span className={styles.notifIcon}>✨</span>
                <span>Smooth UI/UX</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.floatingElement2}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className={styles.notification}>
                <span className={styles.notifIcon}>🚀</span>
                <span>60 FPS</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
