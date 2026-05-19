"use client";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Tag, User, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { renderMarkdown } from "@/lib/renderMarkdown";
import styles from "./BlogPost.module.css";

export default function BlogPostClient({ post, related }) {
  const handleShare = () => {
    if (typeof window === "undefined") return;
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <>
      {/* ── ARTICLE HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />

        <div className={styles.heroContent}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}><Home size={13} /> Home</Link>
            <ChevronRight size={13} className={styles.breadSep} />
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <ChevronRight size={13} className={styles.breadSep} />
            <span className={styles.breadCurrent}>{post.category}</span>
          </nav>

          {/* Category + read time */}
          <div className={styles.metaRow}>
            <span className={styles.catBadge} style={{ color: post.categoryColor, background: `${post.categoryColor}20`, borderColor: `${post.categoryColor}40` }}>
              {post.category}
            </span>
            <span className={styles.metaChip}><Clock size={13} /> {post.readTime}</span>
          </div>

          {/* Title */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {post.title}
          </motion.h1>

          {/* Author + date */}
          <motion.div className={styles.authorRow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className={styles.authorAvatar}>
              <User size={16} />
            </div>
            <div>
              <p className={styles.authorName}>{post.author.name}</p>
              <p className={styles.authorRole}>{post.author.role}</p>
            </div>
            <div className={styles.authorDivider} />
            <Calendar size={14} className={styles.calIcon} />
            <span className={styles.authorDate}>{post.date}</span>
            <button className={styles.shareBtn} onClick={handleShare}>
              <Share2 size={15} /> Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <div className={styles.articleWrap}>
        <div className={styles.articleLayout}>

          {/* Main article */}
          <article className={styles.article}>
            {/* Excerpt lead */}
            <p className={styles.articleLead}>{post.excerpt}</p>

            {/* Markdown content */}
            <div className={styles.articleContent}>
              {renderMarkdown(post.content)}
            </div>

            {/* Tags */}
            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}><Tag size={11} /> {tag}</span>
              ))}
            </div>

            {/* CTA Box */}
            <div className={styles.ctaBox}>
              <div className={styles.ctaBoxInner}>
                <h3 className={styles.ctaBoxTitle}>Need help with your digital presence?</h3>
                <p className={styles.ctaBoxSub}>Venner Infotech has delivered 200+ projects across Shopify, WordPress, Laravel, and digital marketing. Let's talk.</p>
                <Link href="/contact" className={styles.ctaBoxBtn}>
                  Get a Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Back link */}
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Author card */}
            <div className={styles.sideCard}>
              <h4 className={styles.sideCardTitle}>About the Author</h4>
              <div className={styles.sideAuthor}>
                <div className={styles.sideAvatar}><User size={20} /></div>
                <div>
                  <p className={styles.sideAuthorName}>{post.author.name}</p>
                  <p className={styles.sideAuthorRole}>{post.author.role}</p>
                </div>
              </div>
              <p className={styles.sideAuthorBio}>Expert IT professionals at Venner Infotech with hands-on experience building high-performance digital products.</p>
            </div>

            {/* Tags sidebar */}
            <div className={styles.sideCard}>
              <h4 className={styles.sideCardTitle}>Topics</h4>
              <div className={styles.sideTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.sideTag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* CTA sidebar */}
            <div className={styles.sideCtaCard}>
              <div className={styles.sideCtaIcon}>💡</div>
              <h4 className={styles.sideCtaTitle}>Need a Project?</h4>
              <p className={styles.sideCtaSub}>We build Shopify stores, WordPress sites, Laravel apps & run digital marketing campaigns.</p>
              <Link href="/contact" className={styles.sideCtaBtn}>
                Talk to Us <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedTitle}>More in {post.category}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImg} style={{ background: `linear-gradient(135deg,${r.categoryColor}18,${r.categoryColor}32)` }}>
                    <span>📄</span>
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedCat} style={{ color: r.categoryColor }}>{r.category}</span>
                    <h3 className={styles.relatedCardTitle}>{r.title}</h3>
                    <div className={styles.relatedMeta}>
                      <Clock size={12} /> {r.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
