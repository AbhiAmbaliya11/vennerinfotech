"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      {/* Abstract Background Shapes */}
      <div className={styles.bgShapes}>
        <motion.div 
          className={styles.shape1}
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={styles.shape2}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -50, 0],
            rotate: [0, -15, 0] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            👋 We're here to help
          </motion.div>
          
          <h1 className={styles.title}>
            Let's Build Something <br/>
            <span className={styles.gradientText}>Amazing Together</span>
          </h1>
          
          <p className={styles.subtitle}>
            Whether you have a question, a project idea, or just want to say hi, 
            our team is ready to connect and turn your vision into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
