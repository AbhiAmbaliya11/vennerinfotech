"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

const contactData = [
  {
    id: "email",
    title: "Email Us",
    value: "hello@vennerinfotech.com",
    icon: Mail,
    href: "mailto:hello@vennerinfotech.com",
    color: "#3b82f6" // Blue
  },
  {
    id: "phone",
    title: "Call Us",
    value: "+91 89803 17457",
    icon: Phone,
    href: "tel:+918980317457",
    color: "#f97316" // Orange
  },
  {
    id: "address",
    title: "Visit Us",
    value: "Surat, Gujarat, India-395004",
    icon: MapPin,
    href: "https://maps.google.com/?q=Surat,Gujarat,India",
    color: "#10b981" // Green
  }
];

// Custom Elegant Dashed Arrow SVG
const DashedArrow = () => (
  <svg 
    className={styles.arrowSvg} 
    width="200" 
    height="100" 
    viewBox="0 0 200 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path 
      d="M10 10 C 60 90, 140 10, 190 70" 
      stroke="var(--primary)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeDasharray="6 6"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.5 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path 
      d="M190 70 L 180 55 M 190 70 L 175 75" 
      stroke="var(--primary)" 
      strokeWidth="2" 
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 1.4 }}
    />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Left Side: Title & Graphic */}
        <div className={styles.leftContent}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Work <span className={styles.highlight}>With Us</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We would love to hear more about your project and how we can help your business grow.
          </motion.p>
          
          <div className={styles.arrowContainer}>
            <DashedArrow />
          </div>
        </div>

        {/* Right Side: Contact Cards */}
        <div className={styles.rightContent}>
          {contactData.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.a 
                key={item.id}
                href={item.href}
                target={item.id === 'address' ? "_blank" : "_self"}
                rel={item.id === 'address' ? "noopener noreferrer" : ""}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div 
                  className={styles.iconBox}
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                
                <div className={styles.cardText}>
                  <p className={styles.cardLabel}>{item.title}</p>
                  <p className={styles.cardValue}>{item.value}</p>
                </div>

                <div className={styles.hoverGlow} style={{ background: item.color }}></div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
