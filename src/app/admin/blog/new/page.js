import Link from "next/link";
import BlogForm from "@/components/admin/BlogForm";
import styles from "../AdminBlog.module.css";

export default function NewBlogPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.logoText}>VENNER</span>
          <span className={styles.slash}>/</span>
          <Link href="/admin/blog" style={{ color: "#aaa", fontSize: 14, textDecoration: "none" }}>Blog Admin</Link>
          <span className={styles.slash}>/</span>
          <span className={styles.section}>New Post</span>
        </div>
      </header>
      <BlogForm />
    </div>
  );
}
