import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag, User, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { renderMarkdown } from "@/lib/renderMarkdown";
import styles from "./BlogPost.module.css";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Venner Infotech Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://vennerinfotech.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: post.author.name },
            publisher: { "@type": "Organization", name: "Venner Infotech", url: "https://vennerinfotech.com" },
            datePublished: post.date,
            mainEntityOfPage: `https://vennerinfotech.com/blog/${post.slug}`,
            keywords: post.tags.join(", "),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}><Home size={13} /> Home</Link>
            <ChevronRight size={13} className={styles.breadSep} />
            <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
            <ChevronRight size={13} className={styles.breadSep} />
            <span className={styles.breadCurrent}>{post.category}</span>
          </nav>

          <div className={styles.metaRow}>
            <span className={styles.catBadge} style={{ color: post.categoryColor, background: `${post.categoryColor}20`, borderColor: `${post.categoryColor}40` }}>
              {post.category}
            </span>
            <span className={styles.metaChip}><Clock size={13} /> {post.readTime}</span>
          </div>

          <h1 className={styles.heroTitle}>{post.title}</h1>

          <div className={styles.authorRow}>
            <div className={styles.authorAvatar}><User size={16} /></div>
            <div>
              <p className={styles.authorName}>{post.author.name}</p>
              <p className={styles.authorRole}>{post.author.role}</p>
            </div>
            <div className={styles.authorDivider} />
            <Calendar size={14} className={styles.calIcon} />
            <span className={styles.authorDate}>{post.date}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className={styles.articleWrap}>
        <div className={styles.articleLayout}>
          <article className={styles.article}>
            <p className={styles.articleLead}>{post.excerpt}</p>
            <div className={styles.articleContent}>
              {renderMarkdown(post.content)}
            </div>

            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}><Tag size={11} /> {tag}</span>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h3 className={styles.ctaBoxTitle}>Need help with your digital presence?</h3>
              <p className={styles.ctaBoxSub}>Venner Infotech has delivered 200+ projects across Shopify, WordPress, Laravel, and digital marketing.</p>
              <Link href="/contact" className={styles.ctaBoxBtn}>
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
            </div>

            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to all articles
            </Link>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
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

            <div className={styles.sideCard}>
              <h4 className={styles.sideCardTitle}>Topics</h4>
              <div className={styles.sideTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.sideTag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className={styles.sideCtaCard}>
              <div className={styles.sideCtaIcon}>💡</div>
              <h4 className={styles.sideCtaTitle}>Need a Project?</h4>
              <p className={styles.sideCtaSub}>We build Shopify stores, WordPress sites, Laravel apps &amp; run digital marketing campaigns.</p>
              <Link href="/contact" className={styles.sideCtaBtn}>
                Talk to Us <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED ── */}
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
                    <div className={styles.relatedMeta}><Clock size={12} /> {r.readTime}</div>
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
