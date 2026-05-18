"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    id: 1,
    question: "What is your typical project timeline?",
    answer: "Timelines vary depending on project complexity. A standard e-commerce or CMS site takes 4-6 weeks, while bespoke enterprise software can take 3-6 months. We provide a detailed roadmap during our initial consultation."
  },
  {
    id: 2,
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. We don't just launch and leave. We offer dedicated maintenance, performance monitoring, and round-the-clock support to ensure your application remains secure and scales smoothly."
  },
  {
    id: 3,
    question: "Which technologies do you specialize in?",
    answer: "We specialize in modern, scalable web architectures including Next.js, Laravel, WordPress, and Shopify. This allows us to select the absolute best tool for your specific business requirements."
  },
  {
    id: 4,
    question: "How do you ensure the quality of your work?",
    answer: "We follow a rigorous Agile methodology that includes strict code reviews, automated testing, and comprehensive manual QA to deliver completely bug-free solutions."
  }
];

// Hexagon / Honeycomb SVG Pattern Background
const HexagonPattern = () => (
  <svg 
    className={styles.patternBg}
    width="100%" 
    height="100%" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="hexGrid" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
        <path d="M30 0l25.98 15v30L30 60 4.02 45V15z" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none"/>
        <path d="M30 103.923l25.98-15v-30L30 43.923l-25.98 15v30z" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexGrid)" />
  </svg>
);

export default function FAQ() {
  // Track which accordion item is open. Null means all are closed.
  const [openId, setOpenId] = useState(1); 

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      {/* Background Pattern */}
      <HexagonPattern />
      <div className={styles.ambientGlow}></div>

      <div className={styles.container}>
        
        {/* Left Side: Title Area */}
        <div className={styles.leftContent}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            F.A.Q
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our development process, timelines, and support.
          </motion.p>
          
          <motion.div 
            className={styles.contactHint}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MessageCircleQuestion size={24} className={styles.hintIcon} />
            <div>
              <p>Have more questions?</p>
              <a href="/contact" className={styles.hintLink}>Contact our team today →</a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Accordion */}
        <div className={styles.rightContent}>
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div 
                key={item.id}
                className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleOpen(item.id)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={`${styles.iconBox} ${isOpen ? styles.iconOpen : ""}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.accordionBodyWrapper}
                    >
                      <div className={styles.accordionBody}>
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
