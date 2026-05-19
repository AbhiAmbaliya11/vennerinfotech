"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./PortfolioGrid.module.css";

const TABS = ["All", "Shopify", "WordPress", "Laravel", "Digital Marketing"];

const categoryStyle = {
  Shopify:            { color: "#15803d", bg: "#dcfce7" },
  WordPress:          { color: "#1d4ed8", bg: "#dbeafe" },
  Laravel:            { color: "#c2410c", bg: "#ffedd5" },
  "Digital Marketing":{ color: "#9d174d", bg: "#fce7f3" },
};

const projects = [
  { title: "Vira Care",              category: "Shopify",            url: "https://vira-care.co.uk/",                         image: "/images/portfolio/ecommerce-mockup.png",  tag: "Health & Wellness",  featured: true  },
  { title: "Engravables",            category: "Shopify",            url: "https://engravables.ca/",                          image: "/images/portfolio/ecommerce-mockup.png",  tag: "Custom Gifting"            },
  { title: "Cosmo Essentials India", category: "Shopify",            url: "https://cosmoessentialsindia.com/",                image: "/images/portfolio/ecommerce-mockup.png",  tag: "Cosmetics"                 },
  { title: "Peach Petals",           category: "Shopify",            url: "https://peachpetals.in/",                          image: "/images/portfolio/ecommerce-mockup.png",  tag: "Fashion"                   },
  { title: "Wine Online Delivery",   category: "Shopify",            url: "https://wineonlinedelivery.com/",                  image: "/images/portfolio/ecommerce-mockup.png",  tag: "Beverages"                 },
  { title: "Iraah",                  category: "Shopify",            url: "https://iraah.co/",                                image: "/images/portfolio/ecommerce-mockup.png",  tag: "Lifestyle"                 },
  { title: "Tykun",                  category: "Shopify",            url: "https://tykun.co/",                                image: "/images/portfolio/ecommerce-mockup.png",  tag: "Apparel"                   },
  { title: "Vanue Glams",            category: "Shopify",            url: "https://vanueglams.com/",                          image: "/images/portfolio/ecommerce-mockup.png",  tag: "Beauty"                    },

  { title: "Einnosys",               category: "WordPress",          url: "https://www.einnosys.com/",                        image: "/images/portfolio/corporate-mockup.png",  tag: "IT Services",    featured: true },
  { title: "AccuMedic",              category: "WordPress",          url: "https://accumedic.in",                             image: "/images/portfolio/corporate-mockup.png",  tag: "Healthcare"                },
  { title: "The Brand Landmark",     category: "WordPress",          url: "https://thebrandlandmark.com/",                    image: "/images/portfolio/corporate-mockup.png",  tag: "Branding"                  },
  { title: "Waffle Castle",          category: "WordPress",          url: "https://wafflecastle.in/",                         image: "/images/portfolio/corporate-mockup.png",  tag: "Food & Café"               },
  { title: "Diara Jewel",            category: "WordPress",          url: "https://diarajewel.com/",                          image: "/images/portfolio/corporate-mockup.png",  tag: "Jewellery"                 },
  { title: "React Native Expert",    category: "WordPress",          url: "https://reactnativeexpert.com/",                   image: "/images/portfolio/corporate-mockup.png",  tag: "Tech Blog"                 },
  { title: "Diabetes Pharmacy UK",   category: "WordPress",          url: "https://diabetespharmacy.co.uk/",                  image: "/images/portfolio/corporate-mockup.png",  tag: "Pharmacy"                  },
  { title: "Aghora Wellness",        category: "WordPress",          url: "https://aghorawellness.com/",                      image: "/images/portfolio/corporate-mockup.png",  tag: "Wellness"                  },
  { title: "Padosi Babu",            category: "WordPress",          url: "https://padosibabu.com/",                          image: "/images/portfolio/corporate-mockup.png",  tag: "Food Delivery"             },

  { title: "Chandra Fashion",        category: "Laravel",            url: "https://chandrafashion.co.in",                    image: "/images/portfolio/dashboard-mockup.png",  tag: "Fashion Portal", featured: true },
  { title: "Mahadev Saree Service",  category: "Laravel",            url: "https://mahadevsareeservice.com/",                 image: "/images/portfolio/dashboard-mockup.png",  tag: "Saree Retail"              },
  { title: "Hari Badai Dairy CRM",   category: "Laravel",            url: "http://crm.haribadairyfarm.com",                  image: "/images/portfolio/dashboard-mockup.png",  tag: "CRM System"                },
  { title: "AccuMedic App",          category: "Laravel",            url: "https://app.accumedic.in/",                        image: "/images/portfolio/dashboard-mockup.png",  tag: "Healthcare CRM"            },
  { title: "FinsphereAI CRM",        category: "Laravel",            url: "https://app.crm.finsphereai.com/",                 image: "/images/portfolio/dashboard-mockup.png",  tag: "FinTech CRM"               },

  { title: "Food Mohallaa",          category: "Digital Marketing",  url: "https://www.instagram.com/foodmohallaa/",          image: "/images/portfolio/social-mockup.png",     tag: "Food Brand",     featured: true },
  { title: "Peach Petals Official",  category: "Digital Marketing",  url: "https://www.instagram.com/peachpetalsofficial/",   image: "/images/portfolio/social-mockup.png",     tag: "Fashion"                   },
  { title: "Waffle Castle Official", category: "Digital Marketing",  url: "https://www.instagram.com/waffle_castle_official/",image: "/images/portfolio/social-mockup.png",     tag: "Café"                      },
  { title: "AccuMedic Care",         category: "Digital Marketing",  url: "https://www.instagram.com/accumediccare/",         image: "/images/portfolio/social-mockup.png",     tag: "Healthcare"                },
  { title: "BharatSaj",             category: "Digital Marketing",  url: "https://www.instagram.com/bharatsaj_/",            image: "/images/portfolio/social-mockup.png",     tag: "Lifestyle"                 },
  { title: "Engravables CA",         category: "Digital Marketing",  url: "https://www.instagram.com/engravables.ca/",        image: "/images/portfolio/social-mockup.png",     tag: "Gifting"                   },
  { title: "Prabhat NX",            category: "Digital Marketing",  url: "https://www.instagram.com/prabhatnx_/",            image: "/images/portfolio/social-mockup.png",     tag: "Brand"                     },
  { title: "Vortech Energy",         category: "Digital Marketing",  url: "https://www.instagram.com/vortech.energy/",        image: "/images/portfolio/social-mockup.png",     tag: "Energy"                    },
  { title: "Mangaldeep Surat",       category: "Digital Marketing",  url: "https://www.instagram.com/mangaldeep_surat/",      image: "/images/portfolio/social-mockup.png",     tag: "Local Business"            },
  { title: "Her Valley Foods",       category: "Digital Marketing",  url: "https://www.instagram.com/hervalleyfoods/",        image: "/images/portfolio/social-mockup.png",     tag: "Food"                      },
  { title: "Shiza Surat",            category: "Digital Marketing",  url: "https://www.instagram.com/shiza.surat/",           image: "/images/portfolio/social-mockup.png",     tag: "Fashion"                   },
  { title: "Helly Fashion Surat",    category: "Digital Marketing",  url: "https://www.instagram.com/helly_fashion_surat/",   image: "/images/portfolio/social-mockup.png",     tag: "Fashion"                   },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Tab filter */}
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${active === tab ? styles.tabActive : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
              {active === tab && (
                <motion.span layoutId="tabUnderline" className={styles.tabLine} transition={{ type: "spring", stiffness: 500, damping: 35 }} />
              )}
            </button>
          ))}
          <span className={styles.tabCount}>{filtered.length} projects</span>
        </div>

        {/* Masonry grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const cs = categoryStyle[p.category];
              const domain = p.url.replace(/https?:\/\/(www\.)?/, "").split("/")[0];
              const isFeatured = p.featured && (active === "All" || filtered.indexOf(p) === 0);

              return (
                <motion.a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.card} ${isFeatured ? styles.cardFeatured : ""}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                >
                  {/* Image fills card */}
                  <div className={styles.imgWrap}>
                    <Image src={p.image} alt={p.title} fill className={styles.img}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />

                    {/* Persistent bottom gradient for text legibility */}
                    <div className={styles.imgGradient} />

                    {/* Hover overlay */}
                    <div className={styles.hoverOverlay}>
                      <span className={styles.visitPill}>
                        Visit Site <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Card info bar */}
                  <div className={styles.infoBar}>
                    <div className={styles.infoLeft}>
                      <span className={styles.catBadge} style={{ color: cs.color, background: cs.bg }}>
                        {p.category}
                      </span>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <p className={styles.cardDomain}>{domain}</p>
                    </div>
                    <div className={styles.arrowBtn} style={{ color: cs.color }}>
                      <ArrowUpRight size={18} />
                    </div>
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
