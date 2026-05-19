"use client";
import { motion } from "framer-motion";
import { LayoutTemplate, MonitorSmartphone, ShoppingCart, Building, Database, Link } from "lucide-react";
import styles from "./WebServices.module.css";

const services = [
  {
    title: "Custom Web Development",
    description: "Build secure, scalable websites tailored to your unique business needs using modern technologies.",
    icon: <LayoutTemplate strokeWidth={1.5} />,
  },
  {
    title: "Responsive Web Design",
    description: "Ensure your website adapts perfectly across all devices and screen sizes for optimal user experience.",
    icon: <MonitorSmartphone strokeWidth={1.5} />,
  },
  {
    title: "E-commerce Development",
    description: "Deliver scalable, high-performance eCommerce platforms to maximize your online store’s potential.",
    icon: <ShoppingCart strokeWidth={1.5} />,
  },
  {
    title: "Enterprise Development",
    description: "Provide secure, scalable solutions that streamline operations and strengthen your online presence.",
    icon: <Building strokeWidth={1.5} />,
  },
  {
    title: "Content Management Systems",
    description: "Manage content effortlessly with customized CMS solutions built on popular platforms.",
    icon: <Database strokeWidth={1.5} />,
  },
  {
    title: "API Integration",
    description: "Connect systems for seamless data exchange, improved workflows, and enhanced functionality.",
    icon: <Link strokeWidth={1.5} />,
  }
];

export default function WebServices() {
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
            Comprehensive <span className={styles.highlight}>Web Development</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            We create visually appealing, responsive, and secure websites that drive engagement and business growth.
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
