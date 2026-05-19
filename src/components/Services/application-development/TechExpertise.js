"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import styles from "./TechExpertise.module.css";

const benefits = [
  "Seamless iOS and Android Experience",
  "High Performance & Robust Functionality",
  "Reduced Development Time",
  "Consistent UI/UX Design"
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
              src="/images/services/app-dev-realistic.png" 
              alt="Professional Mobile App Interface" 
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
            Powered by Modern <span className={styles.highlight}>Technologies</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.description}
          >
            At Venner Infotech, we specialize in cross-platform and multi-platform mobile app development, delivering seamless experiences on iOS and Android. Using modern frameworks like <strong>Flutter</strong> and <strong>React Native</strong>, we reduce development time while ensuring consistent design, high performance, and robust functionality across all devices.
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
