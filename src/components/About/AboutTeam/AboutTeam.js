"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Globe, MessageSquare } from "lucide-react";
import styles from "./AboutTeam.module.css";

const team = [
  {
    name: "Abhishek Ambaliya",
    role: "Founder & CEO",
    image: "/images/about/team-1.png",
    social: {
      mail: "mailto:hello@vennerinfotech.com",
      globe: "#",
      message: "#"
    }
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    image: "/images/about/team-2.png",
    social: {
      mail: "mailto:hello@vennerinfotech.com",
      globe: "#",
      message: "#"
    }
  },
  {
    name: "Rahul Verma",
    role: "Technical Lead",
    image: "/images/about/team-3.png",
    social: {
      mail: "mailto:hello@vennerinfotech.com",
      globe: "#",
      message: "#"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.eyebrow}
          >
            The Minds Behind Venner
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            Meet Our <span className={styles.highlight}>Expert Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.subtitle}
          >
            Passionate individuals dedicated to delivering exceptional digital solutions and driving innovation for our clients.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.socials}>
                    <a href={member.social.mail} className={styles.socialIcon} aria-label="Email">
                      <Mail size={20} />
                    </a>
                    <a href={member.social.globe} className={styles.socialIcon} aria-label="Website">
                      <Globe size={20} />
                    </a>
                    <a href={member.social.message} className={styles.socialIcon} aria-label="Message">
                      <MessageSquare size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
