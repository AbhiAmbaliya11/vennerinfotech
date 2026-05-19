"use client";

import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";
import Image from "next/image";
import { CheckCircle2, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const features = [
  {
    title: "100% Satisfaction",
    description: "Guaranteed results that meet your needs and exceed expectations.",
    icon: <ThumbsUp className={styles.icon} />
  },
  {
    title: "Quick Response",
    description: "Rapid turnaround with swift support and timely updates.",
    icon: <Clock className={styles.icon} />
  },
  {
    title: "Perfect Solutions",
    description: "Tailored software solutions are designed for optimal performance.",
    icon: <CheckCircle2 className={styles.icon} />
  },
  {
    title: "Reliable Support",
    description: "Consistent, dependable assistance is available whenever needed.",
    icon: <ShieldCheck className={styles.icon} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.imageWrapper}
          >
            <Image 
              src="/images/services/software_dev_abstract.png" 
              alt="Abstract Software Development Visualization" 
              width={600} 
              height={600} 
              className={styles.image}
            />
            <div className={styles.imageOverlay} />
          </motion.div>
        </div>
        <div className={styles.contentCol}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Why Choose Our <span className={styles.highlight}>Services</span></h2>
            <p className={styles.description}>
              As a trusted software company in Surat, we deliver high-quality custom software development services tailored to your business. Our expertise ensures applications are secure, scalable, and optimized for growth.
            </p>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.iconBox}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
