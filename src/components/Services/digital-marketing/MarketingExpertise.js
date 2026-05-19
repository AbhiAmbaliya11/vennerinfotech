"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./MarketingExpertise.module.css";

const benefits = [
  "Comprehensive Digital Strategies",
  "Data-Driven Growth & Analytics",
  "Transparent Performance Reporting",
  "Local & Global Market Experience"
];

export default function MarketingExpertise() {
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
              src="/images/services/digital-marketing-realistic.png" 
              alt="Digital Marketing Dashboard" 
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
            Data-Driven <span className={styles.highlight}>Strategies</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.description}
          >
            At Venner Infotech, we are a leading provider of digital marketing services, trusted for our strategic, data-focused approach. Whether you need digital marketing services for small business or large-scale enterprise solutions, our goal is to boost your online visibility and help your business thrive.
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
