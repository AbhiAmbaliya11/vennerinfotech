import Link from "next/link";
import { getBlogBySlugAdmin } from "@/lib/blogData";
import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import styles from "../../AdminBlog.module.css";

export default async function EditBlogPage({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlugAdmin(slug);
  if (!post) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoText}>VENNER</span>
          <span className={styles.slash}>/</span>
          <Link href="/admin/blog" style={{ color: "#aaa", fontSize: 14, textDecoration: "none" }}>Blog Admin</Link>
          <span className={styles.slash}>/</span>
          <span className={styles.section}>Edit Post</span>
        </div>
        <div className={styles.headerRight}>
          <Link href={`/blog/${slug}`} target="_blank" className={styles.seedBtn} style={{ textDecoration: "none" }}>
            View Live
          </Link>
        </div>
      </header>
      <BlogForm initialData={post} editSlug={slug} />
    </div>
  );
}
