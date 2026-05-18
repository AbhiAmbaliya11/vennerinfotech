"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Terminal, Smartphone, Layout, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/images/vn-logo.png";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    subLinks: [
      { name: "Software Dev", href: "/services/software-development", description: "Enterprise-grade software solutions", icon: Terminal, color: "#3b82f6" },
      { name: "App Dev", href: "/services/application-development", description: "Immersive mobile and web apps", icon: Smartphone, color: "#f97316" },
      { name: "Web Dev", href: "/services/web-development", description: "Modern website experiences", icon: Layout, color: "#ec4899" },
      { name: "Digital Marketing", href: "/services/digital-marketing", description: "Data-driven marketing strategies", icon: TrendingUp, color: "#10b981" },
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [expandedMobileNav, setExpandedMobileNav] = useState(null);
  const pathname = usePathname();

  // Determine the active link name based on the current path
  const activeLink = NAV_LINKS.find((link) => {
    const linkPath = link.href.split("#")[0]; // Strip hash (e.g. "/#services" -> "/")
    if (linkPath === "/") return pathname === "/";
    return pathname.startsWith(linkPath);
  })?.name ?? "";

  // Track scroll to apply solid bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.headerWrapper}>
        <motion.header
          className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        >
          {/* Logo */}
          <Link href="/" className={styles.logoContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={logoImage} 
                alt="Venner Infotech Logo" 
                width={150} 
                height={40} 
                style={{ width: "auto", height: "40px" }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className={styles.navItemContainer}
                onMouseEnter={() => setHoveredNav(link.name)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <Link
                  href={link.href}
                  className={styles.navLink}
                >
                  <span className={styles.navLinkText}>{link.name}</span>
                  {link.subLinks && (
                    <ChevronDown 
                      size={14} 
                      className={`${styles.navChevron} ${hoveredNav === link.name ? styles.navChevronRotated : ""}`} 
                    />
                  )}
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.subLinks && (
                  <AnimatePresence>
                    {hoveredNav === link.name && (
                      <motion.div
                        className={styles.megaMenuWrapper}
                        initial={{ opacity: 0, y: 15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className={styles.megaMenu}>
                          {/* Featured Banner Side */}
                          <div className={styles.megaMenuFeatured}>
                            <div className={styles.featuredContent}>
                              <Sparkles size={24} className={styles.featuredIcon} />
                              <h3>Elevate Your Digital Presence</h3>
                              <p>Discover our comprehensive suite of services designed for scale and performance.</p>
                              <Link href="/services" className={styles.featuredLink}>
                                View all services <ArrowRight size={14} />
                              </Link>
                            </div>
                            <div className={styles.featuredBg} />
                          </div>
                          
                          {/* Links Grid */}
                          <div className={styles.megaMenuGrid}>
                            {link.subLinks.map((sub) => {
                              const Icon = sub.icon;
                              return (
                                <Link key={sub.name} href={sub.href} className={styles.megaMenuLink}>
                                  <div className={styles.megaMenuIconWrapper} style={{ backgroundColor: `${sub.color}15`, color: sub.color }}>
                                    <Icon size={20} />
                                  </div>
                                  <div className={styles.megaMenuText}>
                                    <h4>{sub.name}</h4>
                                    <p>{sub.description}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <button className={styles.ctaButton}>
            Get a Quote
            <ArrowRight size={18} />
          </button>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileNavList}>
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className={styles.mobileNavItemWrapper}
                >
                  <div className={styles.mobileNavLinkRow}>
                    <Link
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button 
                        className={styles.mobileExpandBtn}
                        onClick={() => setExpandedMobileNav(expandedMobileNav === link.name ? null : link.name)}
                      >
                        {expandedMobileNav === link.name ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  
                  {link.subLinks && expandedMobileNav === link.name && (
                    <motion.div 
                      className={styles.mobileSubLinks}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {link.subLinks.map(sub => {
                        const Icon = sub.icon;
                        return (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className={styles.mobileSubLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className={styles.mobileSubIconWrapper} style={{ backgroundColor: `${sub.color}15`, color: sub.color }}>
                              <Icon size={18} />
                            </span>
                            {sub.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <motion.button
                className={styles.mobileCta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
