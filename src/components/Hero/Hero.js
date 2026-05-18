"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

export default function Hero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      {/* Animated Background Blobs */}
      <div className={styles.bgBlobs}>
        <motion.div 
          className={styles.blob1} 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className={styles.blob2} 
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className={styles.container}>
        {/* Left Content Area */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <Sparkles size={16} className={styles.badgeIcon} />
            <span>Innovating the Future</span>
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Empowering Your Business with <br />
            <span className={styles.highlight}>Cutting-Edge IT Solutions</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            We deliver state-of-the-art software, robust infrastructure, and digital transformation strategies to elevate your brand globally.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={itemVariants}>
            <button className={styles.primaryBtn}>
              Start a Project
              <ArrowRight size={18} />
            </button>
            <a href="/about" className={styles.secondaryBtn}>
              About Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Area */}
        <motion.div 
          className={styles.graphic}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        >
          {/* Central floating card */}
          <motion.div 
            className={styles.mainCard}
            animate={{ 
              y: [0, -15, 0],
              rotateX: mousePosition.y * 0.5,
              rotateY: mousePosition.x * 0.5
            }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotateX: { type: "spring" }, rotateY: { type: "spring" } }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>
            <div className={styles.cardBody}>
               <div className={styles.codeLine} style={{ width: '80%' }}></div>
               <div className={styles.codeLine} style={{ width: '60%' }}></div>
               <div className={styles.codeLine} style={{ width: '90%', background: 'var(--primary)', opacity: 0.8 }}></div>
               <div className={styles.codeLine} style={{ width: '40%' }}></div>
               <div className={styles.chart}>
                  <div className={styles.bar} style={{ height: '40%' }}></div>
                  <div className={styles.bar} style={{ height: '70%' }}></div>
                  <div className={styles.bar} style={{ height: '50%' }}></div>
                  <div className={styles.bar} style={{ height: '90%', background: 'var(--primary)' }}></div>
               </div>
            </div>
          </motion.div>

          {/* Floating Element 1 */}
          <motion.div 
            className={styles.floatElement1}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Code2 size={24} color="var(--primary)" />
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            className={styles.floatElement2}
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Cpu size={28} color="#0f172a" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
