"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";

// Two rows of technologies with original SVG logos
const row1 = [
  { name: "Shopify", logo: "/images/logos/shopify.svg", color: "#95bf47" },
  { name: "Laravel", logo: "/images/logos/laravel.svg", color: "#ff2d20" },
  { name: "Figma", logo: "/images/logos/figma.svg", color: "#f24e1e" },
  { name: "Magento", logo: "/images/logos/magento.svg", color: "#ee672f" },
  { name: "CapCut", logo: "/images/logos/capcut.svg", color: "#000000" },
  { name: "Canva", logo: "/images/logos/canva.svg", color: "#00c4cc" },
  { name: "Next.js", logo: "/images/logos/nextjs.svg", color: "#000000" },
];

const row2 = [
  { name: "WordPress", logo: "/images/logos/wordpress.svg", color: "#21759b" },
  { name: "CodeIgniter", logo: "/images/logos/codeigniter.svg", color: "#ee4323" },
  { name: "PHP", logo: "/images/logos/php.svg", color: "#777bb4" },
  { name: "Illustrator", logo: "/images/logos/illustrator.svg", color: "#ff9a00" },
  { name: "CorelDraw", logo: "/images/logos/coreldraw.svg", color: "#377d33" },
  { name: "Photoshop", logo: "/images/logos/photoshop.svg", color: "#31a8ff" },
];

// Reusable Marquee Track Component
const MarqueeTrack = ({ items, reverse = false }) => {
  // We duplicate the items array so the CSS infinite scroll has content to loop smoothly
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}>
        {duplicatedItems.map((tech, index) => {
          return (
            <div key={`${tech.name}-${index}`} className={styles.pillCard}>
              <div 
                className={styles.iconCircle} 
                style={{ background: `${tech.color}15` }}
              >
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  className={styles.techLogo}
                />
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <section className={styles.techStackSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Technology Stack
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tools & Frameworks We <span className={styles.highlight}>Master</span>
          </motion.h2>
        </div>

        {/* Infinite Scrolling Marquees */}
        <div className={styles.marqueesContainer}>
          {/* Gradient masks for smooth fade out on edges */}
          <div className={styles.gradientLeft}></div>
          <div className={styles.gradientRight}></div>
          
          <MarqueeTrack items={row1} />
          <MarqueeTrack items={row2} reverse={true} />
        </div>

      </div>
    </section>
  );
}
