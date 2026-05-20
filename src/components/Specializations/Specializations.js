"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./Specializations.module.css";

const specializationsData = [
  {
    id: "ecommerce",
    title: "High-Converting E-commerce",
    techTags: ["Shopify", "WooCommerce"],
    logos: ["/images/logos/shopify.svg", "/images/logos/wordpress.svg"],
    description: "Build scalable, secure online stores tailored to your brand. We leverage Shopify and WooCommerce to deliver seamless shopping experiences that maximize your conversion rates.",
    features: [
      "Custom Storefront Design",
      "Payment Gateway Integration",
      "Inventory & Order Automation",
      "Performance & SEO Optimization"
    ]
  },
  {
    id: "cms",
    title: "Modern CMS Architecture",
    techTags: ["Next.js", "WordPress"],
    logos: ["/images/logos/nextjs.svg", "/images/logos/wordpress.svg"],
    description: "Take absolute control of your digital content. We architect lightning-fast, heavily optimized content management systems using modern Next.js headless frameworks or customized WordPress setups.",
    features: [
      "Headless CMS Integration",
      "Server-Side Rendering (SSR)",
      "Custom Block Editor Themes",
      "Technical SEO Foundations"
    ]
  },
  {
    id: "software",
    title: "Bespoke Custom Software",
    techTags: ["Laravel", "PHP"],
    logos: ["/images/logos/laravel.svg", "/images/logos/php.svg"],
    description: "Solve complex enterprise challenges with tailor-made software. Our backend engineers utilize Laravel to build robust, secure, and highly scalable custom web applications, APIs, and business portals.",
    features: [
      "API Development & Integration",
      "Secure OAuth Authentication",
      "Automated Database Workflows",
      "Interactive Enterprise Dashboards"
    ]
  }
];

export default function Specializations() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className={styles.specialSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Core <span className={styles.highlight}>Technologies</span>
          </motion.h2>
          <motion.p 
            className={styles.mainSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We master industry-leading platforms to deliver solutions that precisely fit your business needs.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {specializationsData.map((spec) => (
            <motion.div 
              key={spec.id} 
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Card Header (Logos & Tags) */}
              <div className={styles.cardHeader}>
                <div className={styles.logosWrapper}>
                  {spec.logos.map((logoPath, idx) => (
                    <div key={idx} className={styles.logoCircle}>
                      <img 
                        src={logoPath} 
                        alt="tech logo" 
                        className={styles.brandLogo} 
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.techTags}>
                  {spec.techTags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className={styles.title}>{spec.title}</h3>
              <p className={spec.description ? styles.description : ""}>{spec.description}</p>
              
              {/* Features List */}
              <ul className={styles.featureList}>
                {spec.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Card Action Link */}
              <div className={styles.cardAction}>
                <span className={styles.actionText}>Learn More</span>
                <ArrowRight size={16} className={styles.arrowIcon} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
