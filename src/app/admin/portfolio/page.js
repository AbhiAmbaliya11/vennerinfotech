"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import styles from "./AdminPortfolio.module.css";

const categoryColor = {
  Shopify: "#15803d",
  WordPress: "#1d4ed8",
  Laravel: "#c2410c",
  "Digital Marketing": "#9d174d",
};

export default function AdminPortfolioPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [msg, setMsg] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/portfolio?admin=1");
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      setMsg("Failed to load portfolio.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
      if (res.ok) { setItems((p) => p.filter((x) => x.id !== id)); setMsg("Project deleted."); }
      else setMsg("Failed to delete.");
    } catch { setMsg("Network error."); }
    finally { setDeleting(null); }
  }

  async function handleSeed() {
    if (!confirm("Import all 34 existing hardcoded portfolio projects into Supabase?")) return;
    setSeeding(true);
    try {
      const res = await fetch("/api/admin/portfolio/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) { setMsg(`Seeded ${data.seeded} projects.`); load(); }
      else setMsg(data.error || "Seed failed.");
    } catch { setMsg("Network error."); }
    finally { setSeeding(false); }
  }

  const headerActions = (
    <>
      <button onClick={handleSeed} className={styles.seedBtn} disabled={seeding}>
        {seeding ? "Seeding…" : "Seed Existing Projects"}
      </button>
      <Link href="/admin/portfolio/new" className={styles.newBtn}>+ New Project</Link>
    </>
  );

  return (
    <div className={styles.page}>
      <AdminHeader title="Portfolio" actions={headerActions} />
      <main className={styles.main}>
        {msg && (
          <div className={styles.msgBar}>
            {msg}
            <button onClick={() => setMsg("")} className={styles.msgClose}>×</button>
          </div>
        )}

        {loading ? (
          <div className={styles.loading}>Loading projects…</div>
        ) : items.length === 0 ? (
          <div className={styles.empty}>
            <p>No portfolio projects yet.</p>
            <p>Click <strong>Seed Existing Projects</strong> to import your 34 current projects, or <strong>+ New Project</strong> to add one.</p>
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Category</th>
                  <th>Tag</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th>Order</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const color = categoryColor[item.category] || "#888";
                  return (
                    <tr key={item.id}>
                      <td className={styles.titleCell}>
                        <div className={styles.projectRow}>
                          {item.image && (
                            <img src={item.image} alt={item.title} className={styles.thumb} />
                          )}
                          <div>
                            <span className={styles.postTitle}>{item.title}</span>
                            <span className={styles.postSlug}>{item.url}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={styles.catPill} style={{ color, background: `${color}15`, borderColor: `${color}30` }}>
                          {item.category}
                        </span>
                      </td>
                      <td className={styles.tagCell}>{item.tag}</td>
                      <td>
                        <span className={item.status === "published" ? styles.statusPub : styles.statusDraft}>
                          {item.status}
                        </span>
                      </td>
                      <td className={styles.centerCell}>
                        {item.featured ? <span className={styles.star}>★</span> : <span className={styles.dash}>—</span>}
                      </td>
                      <td className={styles.centerCell}>{item.sortOrder}</td>
                      <td>
                        <div className={styles.actions}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>View</a>
                          <Link href={`/admin/portfolio/${item.id}/edit`} className={styles.editBtn}>Edit</Link>
                          <button onClick={() => handleDelete(item.id, item.title)} className={styles.deleteBtn}
                            disabled={deleting === item.id}>
                            {deleting === item.id ? "…" : "Delete"}
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
