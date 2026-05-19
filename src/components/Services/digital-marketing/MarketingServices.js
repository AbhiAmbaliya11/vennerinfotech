"use client";
import { motion } from "framer-motion";
import { Search, Share2, TrendingUp, Users, Presentation, Star } from "lucide-react";
import styles from "./MarketingServices.module.css";

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Improve website ranking on search engines to boost organic traffic and visibility.",
    icon: <Search strokeWidth={1.5} />,
  },
  {
    title: "SMO (Social Media Optimization)",
    description: "Strengthen brand presence and engagement across social media platforms.",
    icon: <Share2 strokeWidth={1.5} />,
  },
  {
    title: "SMM (Social Media Marketing)",
    description: "Promote products, engage users, and build brand awareness on social channels.",
    icon: <TrendingUp strokeWidth={1.5} />,
  },
  {
    title: "Conversion Rate Optimization",
    description: "Enhance website design to attract visitors and improve conversion rates.",
    icon: <Users strokeWidth={1.5} />,
  },
  {
    title: "Influencer Marketing",
    description: "Partner with industry influencers to expand reach and boost brand credibility.",
    icon: <Star strokeWidth={1.5} />,
  },
  {
    title: "Branding",
    description: "Define a unique identity to help your business stand out in the market.",
    icon: <Presentation strokeWidth={1.5} />,
  }
];

export default function MarketingServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Digital <span className={styles.highlight}>Marketing</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            We offer expert marketing strategies to maximize your online visibility and drive lasting success.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
