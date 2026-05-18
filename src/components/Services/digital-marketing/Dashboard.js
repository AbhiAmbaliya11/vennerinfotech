"use client";

import { motion } from "framer-motion";
import styles from "./Dashboard.module.css";
import { Megaphone, Search, Mail, LineChart } from "lucide-react";

const channels = [
  { icon: Search, title: "SEO Optimization", stat: "+145%", color: "#10b981" },
  { icon: Megaphone, title: "Paid Advertising", stat: "3.2x ROAS", color: "#3b82f6" },
  { icon: Mail, title: "Email Marketing", stat: "24% Open", color: "#f59e0b" },
  { icon: LineChart, title: "Conversion Rate", stat: "+4.5%", color: "#8b5cf6" },
];

export default function Dashboard() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Omnichannel Marketing</h2>
          <p className={styles.subtitle}>Unified strategies across all digital touchpoints.</p>
        </motion.div>

        <div className={styles.grid}>
          {channels.map((channel, index) => (
            <motion.div 
              key={channel.title}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconBox} style={{ backgroundColor: `${channel.color}20`, color: channel.color }}>
                <channel.icon size={28} />
              </div>
              <h3 className={styles.cardTitle}>{channel.title}</h3>
              <div className={styles.statBox}>
                <span style={{ color: channel.color }}>{channel.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
