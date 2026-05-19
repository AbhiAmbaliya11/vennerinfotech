"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { AppWindow, Settings, Server, Code, Users, LifeBuoy, Wrench } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Build tailored applications to boost customer retention, enhance satisfaction, reduce errors, and drive business growth efficiently.",
    icon: <AppWindow size={32} />
  },
  {
    title: "Software Product Development",
    description: "Create new software solutions or upgrade existing products with improved features, functionality, and enhanced business value.",
    icon: <Settings size={32} />
  },
  {
    title: "Enterprise Software Development",
    description: "Large organizations use enterprise software to manage operations, workflows, processes, and ensure scalability across systems.",
    icon: <Server size={32} />
  },
  {
    title: "Full-Stack Development",
    description: "Develop both front-end interfaces and back-end server/database components for seamless interaction between users and servers.",
    icon: <Code size={32} />
  },
  {
    title: "Software Outsourcing",
    description: "Hire external development teams to access expertise, reduce costs, and focus on core business operations efficiently.",
    icon: <Users size={32} />
  },
  {
    title: "Project Rescue",
    description: "Salvage troubled software projects by identifying issues, optimizing timelines, and steering them toward successful delivery.",
    icon: <LifeBuoy size={32} />
  },
  {
    title: "Maintenance and Support",
    description: "Provide continuous updates, troubleshooting, and technical support to ensure software remains fully functional and efficient.",
    icon: <Wrench size={32} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Transforming Ideas into <br />
            <span className={styles.gradientText}>Custom Software Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            At Venner Infotech, a trusted software company in Surat, we specialize in custom software solutions for mobile and web platforms. Our expert team collaborates closely with you to understand your unique business challenges and goals, delivering software that is functional, scalable, and tailored to your needs.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.glowEffect} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
