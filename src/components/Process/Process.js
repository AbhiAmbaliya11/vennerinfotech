"use client";

import { motion } from "framer-motion";
import { Search, PenTool, CheckSquare, Rocket } from "lucide-react";
import styles from "./Process.module.css";

const processData = [
  {
    id: 1,
    title: "Requirement Analysis",
    description: "We start by deeply understanding your business goals, target audience, and technical requirements to draft a comprehensive, strategic project roadmap.",
    icon: Search,
    color: "#3b82f6", // Blue
    bgColor: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
  },
  {
    id: 2,
    title: "Design & Development",
    description: "Our UI/UX team crafts intuitive, stunning prototypes, while our engineers build robust, scalable architectures using cutting-edge frameworks.",
    icon: PenTool,
    color: "#f97316", // Orange
    bgColor: "linear-gradient(135deg, #9a3412 0%, #c2410c 100%)",
  },
  {
    id: 3,
    title: "Testing & Quality Assurance",
    description: "Rigorous manual and automated testing ensures your product is completely bug-free, highly performant, and perfectly secure before launch.",
    icon: CheckSquare,
    color: "#10b981", // Green
    bgColor: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
  },
  {
    id: 4,
    title: "Deployment & Support",
    description: "We seamlessly launch your product to the world and provide continuous monitoring, maintenance, and scalable support to ensure long-term success.",
    icon: Rocket,
    color: "#8b5cf6", // Purple
    bgColor: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)",
  }
];

export default function Process() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Proven <span className={styles.highlight}>Process</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A transparent, agile methodology designed to deliver exceptional results on time and within budget.
          </motion.p>
        </div>

        <div className={styles.cardsWrapper}>
          {processData.map((step, index) => {
            const Icon = step.icon;
            
            // Calculate dynamic top offset so they stack visibly (e.g. 100px, 130px, 160px)
            const stickyTop = `calc(120px + ${index * 40}px)`;

            return (
              <div 
                key={step.id} 
                className={styles.cardContainer}
                style={{ top: stickyTop }}
              >
                <div 
                  className={styles.card}
                  style={{ background: step.bgColor }}
                >
                  <div className={styles.cardNumber}>0{step.id}</div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper} style={{ color: step.color }}>
                      <Icon size={32} strokeWidth={2} />
                    </div>
                    <div className={styles.textWrapper}>
                      <h3 className={styles.cardTitle}>{step.title}</h3>
                      <p className={styles.cardDesc}>{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative faint glow inside card */}
                  <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at top right, ${step.color}40, transparent 60%)`}}></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
