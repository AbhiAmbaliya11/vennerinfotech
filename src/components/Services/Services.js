"use client";

import { motion } from "framer-motion";
import { Code, Megaphone, PenTool, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const servicesData = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    description: "Crafting high-performance, scalable web applications that deliver exceptional user experiences and drive business growth.",
    subServices: [
      "Custom Web Applications",
      "High-Converting E-commerce Platforms",
      "CMS Development & Migration",
      "Progressive Web Apps (PWAs)"
    ],
    color: "var(--primary)" // Orange
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies designed to amplify your brand reach, dominate search rankings, and maximize ROI.",
    subServices: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Management",
      "Content Marketing & Strategy"
    ],
    color: "#ec4899" // Pink
  },
  {
    id: "branding",
    icon: PenTool,
    title: "Brand Identity",
    description: "Building memorable, authoritative brand identities that resonate deeply with your target audience and establish market dominance.",
    subServices: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Comprehensive Brand Guidelines",
      "Corporate Material Design"
    ],
    color: "#3b82f6" // Blue
  }
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive IT <span className={styles.highlight}>Services</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We provide end-to-end technology and creative solutions designed to scale your business in the modern digital landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  borderColor: "rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={28} color={service.color} />
                </div>
                
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>
                
                <p className={styles.cardDescription}>
                  {service.description}
                </p>

                {/* Always visible content */}
                <div className={styles.expandedContent}>
                  <ul className={styles.subServicesList}>
                    {service.subServices.map((sub, i) => (
                      <li key={i}>
                        <ArrowRight size={14} className={styles.listIcon} style={{ color: service.color }} />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className={styles.learnMoreBtn} 
                    style={{ color: service.color }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Learn More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
