'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logoImage from '@/images/vn-logo.png';
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
      {/* Dynamic Background Blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.patternLayer} />
      <div className={styles.gradientOverlay} />

      <div className={styles.container}>

        {/* Top CTA Banner */}
        {/* <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to start a project?</h2>
              <p className={styles.ctaDesc}>Let's collaborate to build highly scalable, future-proof software solutions tailored for you.</p>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>
              <span>Get in Touch</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </Link>
          </div>
        </motion.div> */}

        {/* Footer Navigation Columns */}
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
              <Image 
                src={logoImage} 
                alt="Venner Infotech Logo" 
                width={150} 
                height={40} 
                style={{ width: 'auto', height: '40px' }}
                priority
              />
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
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.linkItem}>
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.linkItem}>
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.linkItem}>
                  Contact Us
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
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/application-development" className={styles.linkItem}>
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className={styles.linkItem}>
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className={styles.linkItem}>
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className={styles.contactCol} variants={fadeIn}>
            <h3 className={styles.colTitle}>Get In Touch</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <MapPin size={16} />
                </div>
                <a href="https://maps.app.goo.gl/NBtLvDihyyiNQ3DR6" target="_blank" rel="noopener noreferrer" className={styles.contactText}>
                  Surat, Gujarat, India — 395004
                </a>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <Phone size={16} />
                </div>
                <a href="tel:+918980317457" className={styles.contactText}>+91 89803 17457</a>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.contactIconWrap}>
                  <Mail size={16} />
                </div>
                <a href="mailto:hello@vennerinfotech.com" className={styles.contactText}>hello@vennerinfotech.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom copyright bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
