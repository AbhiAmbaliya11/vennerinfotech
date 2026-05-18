'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // SVGs for social icons
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );

  return (
    <footer className={styles.footer}>
      {/* Background patterns */}
      <div className={styles.patternLayer} />
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Brand Column */}
          <motion.div className={styles.brandCol} variants={fadeIn}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Venner Infotech</span>
              <div className={styles.logoDot} />
            </Link>
            <p className={styles.brandDesc}>
              Empowering businesses with cutting-edge digital solutions. We transform complex challenges into elegant, scalable software.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div className={styles.linksCol} variants={fadeIn}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Latest News
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div className={styles.linksCol} variants={fadeIn}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/web-development" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className={styles.linkItem}>
                  <ChevronRight size={14} className={styles.linkArrow} />
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className={styles.contactCol} variants={fadeIn}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <MapPin size={18} />
                </div>
                <a href="https://maps.app.goo.gl/NBtLvDihyyiNQ3DR6" target="_blank" rel="noopener noreferrer">Surat, Gujarat, India — 395004</a>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <Phone size={18} />
                </div>
                <a href="tel:+918980317457">+91 89803 17457</a>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <Mail size={18} />
                </div>
                <a href="mailto:hello@vennerinfotech.com">hello@vennerinfotech.com</a>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        <motion.div 
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className={styles.copyright}>
            &copy; {currentYear} Venner Infotech. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.separator}></span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
