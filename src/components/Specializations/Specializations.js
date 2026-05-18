"use client";

import { motion } from "framer-motion";
import { ShoppingBag, LayoutTemplate, TerminalSquare, CheckCircle2 } from "lucide-react";
import styles from "./Specializations.module.css";

// --- Custom Graphics for the visual halves ---

const EcommerceGraphic = () => (
  <div className={`${styles.graphicContainer} ${styles.graphicEcommerce}`}>
    <motion.div 
      className={styles.floatingCard}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={styles.cardHeader}>
        <ShoppingBag size={20} color="#f97316" />
        <span>Shopify Store</span>
      </div>
      <div className={styles.productGrid}>
        <div className={styles.productImg}></div>
        <div className={styles.productImg}></div>
        <div className={styles.productImg}></div>
        <div className={styles.productImg}></div>
      </div>
      <div className={styles.checkoutBtn}></div>
    </motion.div>
    {/* Decorative background elements */}
    <div className={styles.blob1}></div>
    <div className={styles.blob2}></div>
  </div>
);

const CMSGraphic = () => (
  <div className={`${styles.graphicContainer} ${styles.graphicCMS}`}>
    <motion.div 
      className={styles.browserWindow}
      animate={{ y: [10, -10, 10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={styles.browserTop}>
        <div className={styles.dots}>
          <span style={{background: '#ff5f56'}}></span>
          <span style={{background: '#ffbd2e'}}></span>
          <span style={{background: '#27c93f'}}></span>
        </div>
      </div>
      <div className={styles.browserBody}>
        <div className={styles.sidebar}></div>
        <div className={styles.mainContent}>
          <div className={styles.contentHero}></div>
          <div className={styles.contentLines}>
            <div></div><div></div><div></div>
          </div>
        </div>
      </div>
    </motion.div>
    <div className={styles.blob3}></div>
  </div>
);

const LaravelGraphic = () => (
  <div className={`${styles.graphicContainer} ${styles.graphicLaravel}`}>
    <motion.div 
      className={styles.terminalWindow}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={styles.terminalHeader}>
        <TerminalSquare size={16} color="#ef4444" />
        <span>laravel_server.php</span>
      </div>
      <div className={styles.terminalBody}>
        <p><span className={styles.keyword}>php</span> artisan serve</p>
        <p className={styles.success}>Starting Laravel development server...</p>
        <p><span className={styles.keyword}>INFO</span> Server running on [http://localhost:8000].</p>
        <p className={styles.cursor}>_</p>
      </div>
    </motion.div>
    <div className={styles.blob4}></div>
  </div>
);

// --- Main Data ---

const specializationsData = [
  {
    id: "ecommerce",
    title: "High-Converting E-commerce",
    techTags: ["Shopify", "WordPress (WooCommerce)"],
    description: "Build scalable, secure online stores tailored to your brand. We leverage the robust ecosystems of Shopify and WooCommerce to deliver seamless shopping experiences that maximize your conversion rates.",
    features: ["Custom Storefront Design", "Payment Gateway Integration", "Inventory Management Systems", "Performance Optimization"],
    Graphic: EcommerceGraphic,
    isReversed: false,
  },
  {
    id: "cms",
    title: "Modern CMS Architecture",
    techTags: ["Next.js", "WordPress"],
    description: "Take absolute control of your digital content. We architect lightning-fast, heavily SEO-optimized content management systems using modern Next.js frameworks or customized WordPress setups, ensuring effortless content updates.",
    features: ["Headless CMS Integration", "Server-Side Rendering (SSR)", "Custom Theme Development", "Technical SEO Foundations"],
    Graphic: CMSGraphic,
    isReversed: true, // Puts graphic on the right
  },
  {
    id: "software",
    title: "Bespoke Custom Software",
    techTags: ["Laravel", "PHP"],
    description: "Solve complex enterprise challenges with tailor-made software. Our backend engineers utilize the Laravel framework to build robust, secure, and highly scalable custom web applications, APIs, and internal business portals.",
    features: ["API Development & Integration", "Secure Authentication Systems", "Automated Workflows", "Enterprise Dashboards"],
    Graphic: LaravelGraphic,
    isReversed: false,
  }
];

export default function Specializations() {
  return (
    <section className={styles.specialSection}>
      <div className={styles.container}>
        
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>Core <span className={styles.highlight}>Technologies</span></h2>
          <p className={styles.mainSubtitle}>We master industry-leading platforms to deliver solutions that precisely fit your business needs.</p>
        </div>

        <div className={styles.blocksWrapper}>
          {specializationsData.map((spec, index) => {
            const VisualGraphic = spec.Graphic;

            return (
              <div key={spec.id} className={`${styles.block} ${spec.isReversed ? styles.reversed : ""}`}>
                
                {/* Text Content Half */}
                <motion.div 
                  className={styles.textContent}
                  initial={{ opacity: 0, x: spec.isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.techTags}>
                    {spec.techTags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  
                  <h3 className={styles.title}>{spec.title}</h3>
                  <p className={styles.description}>{spec.description}</p>
                  
                  <ul className={styles.featureList}>
                    {spec.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={styles.ctaBtn}>Learn More</button>
                </motion.div>

                {/* Visual Graphic Half */}
                <motion.div 
                  className={styles.visualContent}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <VisualGraphic />
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
