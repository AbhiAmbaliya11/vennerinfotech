import { getAllPublishedBlogs } from "@/lib/blogData";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogListing.module.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Venner Infotech — IT Insights & Digital Strategies",
  description: "Expert articles on Shopify development, WordPress, Laravel, digital marketing, and SEO from the Venner Infotech team.",
  keywords: ["IT blog", "Shopify tips", "WordPress guide", "Laravel development", "digital marketing India"],
  alternates: {
    canonical: "https://vennerinfotech.com/blog",
  },
  openGraph: {
    title: "Blog | Venner Infotech",
    description: "Expert articles on Shopify, WordPress, Laravel & digital marketing.",
    url: "https://vennerinfotech.com/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const blogPosts = await getAllPublishedBlogs();
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroGradient} />
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Knowledge Hub</span>
          <h1 className={styles.heroTitle}>
            Insights &amp; <span className={styles.heroHighlight}>Strategies</span>
          </h1>
          <p className={styles.heroSub}>
            Expert articles on Shopify, WordPress, Laravel, SEO &amp; digital marketing
            from the Venner Infotech team.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><strong>{blogPosts.length}+</strong><span>Articles</span></div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}><strong>4</strong><span>Categories</span></div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}><strong>Free</strong><span>Always</span></div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className={styles.content}>
        <div className={styles.container}>

          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div
                className={styles.featuredImg}
                style={!featured.image ? { background: `linear-gradient(135deg,${featured.categoryColor}20,${featured.categoryColor}40)` } : undefined}
              >
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                ) : (
                  <span className={styles.featuredImgIcon}>📝</span>
                )}
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
                  <span>{featured.date}</span>
                  <span className={styles.metaDot}>·</span>
                  <Clock size={13} />
                  <span>{featured.readTime}</span>
                </div>
                <span className={styles.readMore}>Read Article <ArrowRight size={15} /></span>
              </div>
            </Link>
          )}

          {/* Section heading */}
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>All Articles</h2>
            <div className={styles.sectionLine} />
          </div>

          {rest.length === 0 && blogPosts.length === 0 ? (
            <p style={{ color: "#666", textAlign: "center", padding: "40px 0" }}>
              No articles published yet. Check back soon!
            </p>
          ) : (
            <div className={styles.grid}>
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                  <div
                    className={styles.cardImg}
                    style={!post.image ? { background: `linear-gradient(135deg,${post.categoryColor}15,${post.categoryColor}30)` } : undefined}
                  >
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    ) : (
                      <span className={styles.cardImgIcon}>📄</span>
                    )}
                    <span
                      className={styles.catPill}
                      style={{ color: post.categoryColor, background: `${post.categoryColor}15`, borderColor: `${post.categoryColor}30`, position: "relative", zIndex: 2 }}
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
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
