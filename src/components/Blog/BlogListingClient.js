"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/blogPosts";
import styles from "./BlogListing.module.css";

export default function BlogListingClient({ posts }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = activeCategory === "All" && !searchQuery
    ? filtered.find((p) => p.featured)
    : null;

  const rest = featured ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />

        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Knowledge Hub
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Insights &amp; <span className={styles.heroHighlight}>Strategies</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert articles on Shopify, WordPress, Laravel, SEO &amp; digital marketing
            from the Venner Infotech team.
          </motion.p>

          <motion.div
            className={styles.searchBox}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg className={styles.searchIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.content}>
        <div className={styles.container}>

          {/* Category filters */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {activeCategory === cat && (
                  <span className={styles.filterUnderline} />
                )}
              </button>
            ))}
            <span className={styles.resultCount}>{filtered.length} articles</span>
          </div>

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div
                className={styles.featuredImg}
                style={{ background: `linear-gradient(135deg,${featured.categoryColor}20,${featured.categoryColor}40)` }}
              >
                <span className={styles.featuredImgPlaceholder}>📝</span>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredTopRow}>
                  <span
                    className={styles.catPill}
                    style={{ color: featured.categoryColor, background: `${featured.categoryColor}15`, borderColor: `${featured.categoryColor}30` }}
                  >
                    {featured.category}
                  </span>
                  <span className={styles.featuredLabel}>Featured</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span className={styles.metaAuthor}>{featured.author.name}</span>
                  <span className={styles.metaDot}>·</span>
                  <span className={styles.metaDate}>{featured.date}</span>
                  <span className={styles.metaDot}>·</span>
                  <Clock size={13} />
                  <span>{featured.readTime}</span>
                </div>
                <span className={styles.readMore}>
                  Read Article
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className={styles.grid}>
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className={styles.card}>
                  <div
                    className={styles.cardImg}
                    style={{ background: `linear-gradient(135deg,${post.categoryColor}15,${post.categoryColor}30)` }}
                  >
                    <span className={styles.cardImgIcon}>📄</span>
                    <span
                      className={styles.catPill}
                      style={{ color: post.categoryColor, background: `${post.categoryColor}15`, borderColor: `${post.categoryColor}30` }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                      <span className={styles.metaDot}>·</span>
                      <span>{post.date}</span>
                    </div>
                    <div className={styles.cardTags}>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.tag}>
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to grow your digital presence?</h2>
          <p className={styles.ctaSub}>
            Let&apos;s build something great — Shopify, WordPress, Laravel, or full digital strategy.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get a Free Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
