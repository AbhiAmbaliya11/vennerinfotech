"use client";

import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import Image from "next/image";

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "Go", "Ruby on Rails"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Enterprise Tech Stack</h2>
          <p className={styles.subtitle}>Built with modern, battle-tested technologies for maximum scalability.</p>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.category}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{tech.category}</h3>
              <div className={styles.itemsList}>
                {tech.items.map((item) => (
                  <span key={item} className={styles.itemTag}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
