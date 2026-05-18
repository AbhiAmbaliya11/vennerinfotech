"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, ShoppingCart, 
  Terminal, Code2, Database, FileCode2, LayoutTemplate, Flame,
  Palette, PenTool, Image as ImageIcon, Brush, Video 
} from "lucide-react";
import styles from "./TechStack.module.css";

// Two rows of technologies
const row1 = [
  { name: "Shopify", icon: ShoppingBag, color: "#95bf47" },
  { name: "Laravel", icon: Code2, color: "#ff2d20" },
  { name: "Figma", icon: Palette, color: "#f24e1e" },
  { name: "Magento", icon: ShoppingCart, color: "#ee672f" },
  { name: "CapCut", icon: Video, color: "#000000" },
  { name: "Canva", icon: Brush, color: "#00c4cc" },
  { name: "Next.js", icon: Terminal, color: "#000000" },
];

const row2 = [
  { name: "WordPress", icon: LayoutTemplate, color: "#21759b" },
  { name: "CodeIgniter", icon: Flame, color: "#ee4323" },
  { name: "PHP", icon: FileCode2, color: "#777bb4" },
  { name: "Illustrator", icon: PenTool, color: "#ff9a00" },
  { name: "CorelDraw", icon: ImageIcon, color: "#377d33" },
  { name: "Photoshop", icon: Palette, color: "#31a8ff" },
];

// Reusable Marquee Track Component
const MarqueeTrack = ({ items, reverse = false }) => {
  // We duplicate the items array so the CSS infinite scroll has content to loop smoothly
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeWrapper}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}>
        {duplicatedItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div key={`${tech.name}-${index}`} className={styles.pillCard}>
              <div 
                className={styles.iconCircle} 
                style={{ background: `${tech.color}15`, color: tech.color }}
              >
                <Icon size={20} strokeWidth={2.5} />
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
