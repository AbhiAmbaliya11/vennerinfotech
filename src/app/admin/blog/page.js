"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "./AdminBlog.module.css";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [msg, setMsg] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/blog?admin=1");
      if (res.status === 401) { router.replace("/admin/login"); return; }
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      setMsg("Failed to load posts.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(slug, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/blog/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((p) => p.filter((x) => x.slug !== slug));
        setMsg("Post deleted.");
      } else {
        setMsg("Failed to delete post.");
      }
    } catch {
      setMsg("Network error.");
    } finally {
      setDeleting(null);
    }
  }

  async function handleSeed() {
    if (!confirm("This will import all 6 existing hardcoded blog posts into Supabase. Continue?")) return;
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setMsg(`Seeded ${data.seeded} posts successfully.`);
        load();
      } else {
        setMsg(data.error || "Seed failed.");
      }
    } catch {
      setMsg("Network error during seed.");
    } finally {
      setSeeding(false);
    }
  }

  const categoryColors = {
    "E-Commerce": "#96bf48",
    "Development": "#f05340",
    "WordPress": "#3b82f6",
    "Digital Marketing": "#ec4899",
  };

  const blogActions = (
    <>
      <button onClick={handleSeed} className={styles.seedBtn} disabled={seeding}>
        {seeding ? "Seeding…" : "Seed Existing Posts"}
      </button>
      <Link href="/admin/blog/new" className={styles.newBtn}>+ New Post</Link>
    </>
  );

  return (
    <div className={styles.page}>
      <AdminHeader title="Blog" actions={blogActions} />

      <main className={styles.main}>
        {msg && (
          <div className={styles.msgBar}>
            {msg}
            <button onClick={() => setMsg("")} className={styles.msgClose}>×</button>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className={styles.empty}>
            <p>No blog posts yet.</p>
            <p>Click <strong>Seed Existing Posts</strong> to import your current 6 posts, or <strong>+ New Post</strong> to create one.</p>
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => {
                  const color = post.categoryColor || categoryColors[post.category] || "#888";
                  return (
                    <tr key={post.slug}>
                      <td className={styles.titleCell}>
                        <span className={styles.postTitle}>{post.title}</span>
                        <span className={styles.postSlug}>/{post.slug}</span>
                      </td>
                      <td>
                        <span className={styles.catPill} style={{ color, background: `${color}18`, borderColor: `${color}30` }}>
                          {post.category}
                        </span>
                      </td>
                      <td>
                        <span className={post.status === "published" ? styles.statusPub : styles.statusDraft}>
                          {post.status}
                        </span>
                      </td>
                      <td className={styles.centerCell}>
                        {post.featured ? <span className={styles.star}>★</span> : <span className={styles.dash}>—</span>}
                      </td>
                      <td className={styles.dateCell}>{post.date}</td>
                      <td>
                        <div className={styles.actions}>
                          <Link href={`/blog/${post.slug}`} target="_blank" className={styles.viewBtn}>View</Link>
                          <Link href={`/admin/blog/${post.slug}/edit`} className={styles.editBtn}>Edit</Link>
                          <button
                            onClick={() => handleDelete(post.slug, post.title)}
                            className={styles.deleteBtn}
                            disabled={deleting === post.slug}
                          >
                            {deleting === post.slug ? "…" : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
