"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./IndustryGrid.module.css";

const industries = [
  {
    id: "technology",
    title: "Technology",
    description: "Strategic digital marketing that drives conversions for tech products and SaaS.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Data-driven strategies to boost online visibility, increase sales, and build loyalty.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    description: "Mouth-watering content and influencer campaigns to attract new customers.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
  },
  {
    id: "education",
    title: "Education",
    description: "Tailored SEO and social media to help institutions attract and enroll students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Compliant marketing solutions focusing on patient engagement and education.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Supporting banks and investment firms in building trust and compliance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Virtual tours and targeted advertising campaigns to generate quality leads.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
  },
  {
    id: "nonprofits",
    title: "Nonprofits",
    description: "Helping NGOs raise awareness and run effective fundraising campaigns.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
  },
  {
    id: "retail",
    title: "Retail Industry",
    description: "Integrated marketing strategies to increase both online and in-store sales.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    description: "Digital campaigns that attract tourists and boost reservations globally.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function IndustryGrid() {
  return (
    <section id="industries-grid" className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Industries We Serve</h2>
          <p>We tailor our digital solutions to meet the unique challenges of your vertical.</p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry) => (
            <motion.div 
              key={industry.id} 
              className={styles.cardWrapper}
              variants={itemVariants}
            >
              <div 
                className={styles.card}
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className={styles.overlay} />
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{industry.title}</h3>
                  <div className={styles.hiddenContent}>
                    <p className={styles.cardDesc}>{industry.description}</p>
                    <div className={styles.exploreBtn}>
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
