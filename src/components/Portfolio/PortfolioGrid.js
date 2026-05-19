"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import styles from "./PortfolioGrid.module.css";

const categories = ["All", "Shopify", "WordPress", "Laravel", "Digital Marketing"];

const projects = [
  // Shopify
  { title: "Vira Care", category: "Shopify", url: "https://vira-care.co.uk/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Health & Wellness" },
  { title: "Engravables", category: "Shopify", url: "https://engravables.ca/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Custom Gifting" },
  { title: "Cosmo Essentials India", category: "Shopify", url: "https://cosmoessentialsindia.com/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Cosmetics" },
  { title: "Peach Petals", category: "Shopify", url: "https://peachpetals.in/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Fashion" },
  { title: "Wine Online Delivery", category: "Shopify", url: "https://wineonlinedelivery.com/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Beverages" },
  { title: "Iraah", category: "Shopify", url: "https://iraah.co/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Lifestyle" },
  { title: "Tykun", category: "Shopify", url: "https://tykun.co/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Apparel" },
  { title: "Vanue Glams", category: "Shopify", url: "https://vanueglams.com/", image: "/images/portfolio/ecommerce-mockup.png", tag: "Beauty" },

  // WordPress
  { title: "Einnosys", category: "WordPress", url: "https://www.einnosys.com/", image: "/images/portfolio/corporate-mockup.png", tag: "IT Services" },
  { title: "AccuMedic", category: "WordPress", url: "https://accumedic.in", image: "/images/portfolio/corporate-mockup.png", tag: "Healthcare" },
  { title: "The Brand Landmark", category: "WordPress", url: "https://thebrandlandmark.com/", image: "/images/portfolio/corporate-mockup.png", tag: "Branding" },
  { title: "Waffle Castle", category: "WordPress", url: "https://wafflecastle.in/", image: "/images/portfolio/corporate-mockup.png", tag: "Food & Café" },
  { title: "Diara Jewel", category: "WordPress", url: "https://diarajewel.com/", image: "/images/portfolio/corporate-mockup.png", tag: "Jewellery" },
  { title: "React Native Expert", category: "WordPress", url: "https://reactnativeexpert.com/", image: "/images/portfolio/corporate-mockup.png", tag: "Tech Blog" },
  { title: "Diabetes Pharmacy UK", category: "WordPress", url: "https://diabetespharmacy.co.uk/", image: "/images/portfolio/corporate-mockup.png", tag: "Pharmacy" },
  { title: "Aghora Wellness", category: "WordPress", url: "https://aghorawellness.com/", image: "/images/portfolio/corporate-mockup.png", tag: "Wellness" },
  { title: "Padosi Babu", category: "WordPress", url: "https://padosibabu.com/", image: "/images/portfolio/corporate-mockup.png", tag: "Food Delivery" },

  // Laravel
  { title: "Chandra Fashion", category: "Laravel", url: "https://chandrafashion.co.in", image: "/images/portfolio/dashboard-mockup.png", tag: "Fashion Portal" },
  { title: "Mahadev Saree Service", category: "Laravel", url: "https://mahadevsareeservice.com/", image: "/images/portfolio/dashboard-mockup.png", tag: "Saree Retail" },
  { title: "Hari Badai Dairy Farm CRM", category: "Laravel", url: "http://crm.haribadairyfarm.com", image: "/images/portfolio/dashboard-mockup.png", tag: "CRM System" },
  { title: "AccuMedic App", category: "Laravel", url: "https://app.accumedic.in/", image: "/images/portfolio/dashboard-mockup.png", tag: "Healthcare CRM" },
  { title: "FinsphereAI CRM", category: "Laravel", url: "https://app.crm.finsphereai.com/", image: "/images/portfolio/dashboard-mockup.png", tag: "FinTech CRM" },

  // Digital Marketing
  { title: "Food Mohallaa", category: "Digital Marketing", url: "https://www.instagram.com/foodmohallaa/", image: "/images/portfolio/social-mockup.png", tag: "Food Brand" },
  { title: "Peach Petals Official", category: "Digital Marketing", url: "https://www.instagram.com/peachpetalsofficial/", image: "/images/portfolio/social-mockup.png", tag: "Fashion" },
  { title: "Waffle Castle Official", category: "Digital Marketing", url: "https://www.instagram.com/waffle_castle_official/", image: "/images/portfolio/social-mockup.png", tag: "Café" },
  { title: "AccuMedic Care", category: "Digital Marketing", url: "https://www.instagram.com/accumediccare/", image: "/images/portfolio/social-mockup.png", tag: "Healthcare" },
  { title: "BharatSaj", category: "Digital Marketing", url: "https://www.instagram.com/bharatsaj_/", image: "/images/portfolio/social-mockup.png", tag: "Lifestyle" },
  { title: "Engravables CA", category: "Digital Marketing", url: "https://www.instagram.com/engravables.ca/", image: "/images/portfolio/social-mockup.png", tag: "Gifting" },
  { title: "Prabhat NX", category: "Digital Marketing", url: "https://www.instagram.com/prabhatnx_/", image: "/images/portfolio/social-mockup.png", tag: "Brand" },
  { title: "Vortech Energy", category: "Digital Marketing", url: "https://www.instagram.com/vortech.energy/", image: "/images/portfolio/social-mockup.png", tag: "Energy" },
  { title: "Mangaldeep Surat", category: "Digital Marketing", url: "https://www.instagram.com/mangaldeep_surat/", image: "/images/portfolio/social-mockup.png", tag: "Local Business" },
  { title: "Her Valley Foods", category: "Digital Marketing", url: "https://www.instagram.com/hervalleyfoods/", image: "/images/portfolio/social-mockup.png", tag: "Food" },
  { title: "Shiza Surat", category: "Digital Marketing", url: "https://www.instagram.com/shiza.surat/", image: "/images/portfolio/social-mockup.png", tag: "Fashion" },
  { title: "Helly Fashion Surat", category: "Digital Marketing", url: "https://www.instagram.com/helly_fashion_surat/", image: "/images/portfolio/social-mockup.png", tag: "Fashion" },
];

const categoryColors = {
  Shopify: { bg: "#d1fae5", text: "#065f46" },
  WordPress: { bg: "#dbeafe", text: "#1e3a8a" },
  Laravel: { bg: "#ede9fe", text: "#4c1d95" },
  "Digital Marketing": { bg: "#fce7f3", text: "#9d174d" },
};

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className={styles.filterActiveBg}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={styles.filterLabel}>{cat}</span>
            </button>
          ))}
        </div>

        {/* Count */}
        <motion.p
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.count}
        >
          Showing <strong>{filtered.length}</strong> projects
        </motion.p>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const colors = categoryColors[project.category];
              return (
                <motion.a
                  key={project.title + project.category}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Image */}
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.overlay}>
                      <span className={styles.visitBtn}>
                        <ExternalLink size={16} />
                        Visit Site
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span
                        className={styles.categoryTag}
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        {project.category}
                      </span>
                      <span className={styles.industryTag}>{project.tag}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardUrl}>
                      {project.url.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0]}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
