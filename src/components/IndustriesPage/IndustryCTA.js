"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./IndustryCTA.module.css";

export default function IndustryCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2>Don't See Your Industry Listed?</h2>
            <p>
              We build custom technological solutions and targeted marketing strategies 
              for every vertical. Let's discuss how we can transform your specific business.
            </p>
          </div>
          
          <div className={styles.action}>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Our Experts
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
