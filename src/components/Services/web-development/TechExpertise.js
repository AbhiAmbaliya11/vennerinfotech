"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./TechExpertise.module.css";

const benefits = [
  "Secure, Fast, and Responsive",
  "Performance & Usability Focused",
  "Growth-Driven Solutions",
  "Custom Built for Your Business"
];

export default function TechExpertise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.imageWrapper}
          >
            <Image 
              src="/images/services/web-dev-realistic.png" 
              alt="Professional Web Development Interface" 
              fill
              className={styles.image}
            />
            <div className={styles.imageOverlay}></div>
          </motion.div>
        </div>
        
        <div className={styles.contentCol}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Custom Web <span className={styles.highlight}>Development</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.description}
          >
            At Venner Infotech, we specialize in custom website development tailored to your business needs. Using modern frameworks like <strong>React.js</strong> and <strong>Angular</strong>, we build secure, fast, and responsive websites. As a leading web development company in Surat, we focus on performance, usability, and growth-driven solutions.
          </motion.p>

          <div className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className={styles.benefitItem}
              >
                <CheckCircle2 className={styles.checkIcon} />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
