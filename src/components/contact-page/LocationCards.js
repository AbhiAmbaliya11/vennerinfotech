"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import styles from "./LocationCards.module.css";

const contactInfo = [
  {
    id: "address",
    title: "Our Headquarters",
    details: ["Surat, Gujarat", "India - 395004"],
    icon: MapPin,
    color: "#3b82f6", // Blue
    link: "https://maps.google.com/?q=Surat,Gujarat,India"
  },
  {
    id: "contact",
    title: "Contact Details",
    details: ["hello@vennerinfotech.com", "+91 89803 17457"],
    icon: Phone,
    color: "#f97316", // Orange
    link: "tel:+918980317457"
  },
  {
    id: "hours",
    title: "Business Hours",
    details: ["Monday - Friday", "9:00 AM - 6:00 PM (IST)"],
    icon: Clock,
    color: "#10b981", // Green
    link: null
  }
];

export default function LocationCards() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.infoText}>
        <h2>Get in Touch</h2>
        <p>Prefer to reach out directly? Use the contact details below to get in touch with our support and sales teams.</p>
      </div>

      <div className={styles.cardsList}>
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          
          return (
            <motion.div
              key={info.id}
              className={styles.cardWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {info.link ? (
                <a href={info.link} target={info.id === 'address' ? "_blank" : "_self"} rel="noopener noreferrer" className={styles.card}>
                  <CardContent info={info} Icon={Icon} />
                  <div className={styles.cardAction}>
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              ) : (
                <div className={styles.card}>
                  <CardContent info={info} Icon={Icon} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function CardContent({ info, Icon }) {
  return (
    <>
      <div className={styles.iconContainer} style={{ backgroundColor: `${info.color}15`, color: info.color }}>
        <Icon size={24} strokeWidth={2} />
      </div>
      <div className={styles.textContent}>
        <h4>{info.title}</h4>
        {info.details.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </>
  );
}
