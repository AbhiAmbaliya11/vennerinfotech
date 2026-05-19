"use client";
import { motion } from "framer-motion";
import { Smartphone, Globe, Settings, ShoppingBag, Building2, Wrench } from "lucide-react";
import styles from "./AppServices.module.css";

const services = [
  {
    title: "Web Applications",
    description: "Create powerful, user-focused apps that run smoothly across browsers, boosting functionality and UX.",
    icon: <Globe strokeWidth={1.5} />,
  },
  {
    title: "Custom Application",
    description: "Deliver tailored software solutions to meet unique business needs and optimize operational efficiency.",
    icon: <Smartphone strokeWidth={1.5} />,
  },
  {
    title: "Ecommerce Application",
    description: "Streamline online buying and selling with smooth shopping experiences and efficient transaction management.",
    icon: <ShoppingBag strokeWidth={1.5} />,
  },
  {
    title: "Enterprise Application",
    description: "Enhance business processes with customizable software solutions that scale with your operations.",
    icon: <Building2 strokeWidth={1.5} />,
  },
  {
    title: "App Management",
    description: "Oversee software performance, implement updates, and resolve issues effectively for reliability.",
    icon: <Settings strokeWidth={1.5} />,
  },
  {
    title: "Maintenance & Support",
    description: "Offer updates, troubleshooting, and support to keep software systems smooth, reliable, and functional.",
    icon: <Wrench strokeWidth={1.5} />,
  }
];

export default function AppServices() {
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
            Comprehensive <span className={styles.highlight}>App Development</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Enhance your business processes with scalable, secure, and customizable software tailored to your organization's needs.
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
