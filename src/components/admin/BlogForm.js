"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlogForm.module.css";

const CATEGORIES = ["E-Commerce", "Development", "WordPress", "Digital Marketing"];
const CATEGORY_COLORS = {
  "E-Commerce": "#96bf48",
  "Development": "#f05340",
  "WordPress": "#3b82f6",
  "Digital Marketing": "#ec4899",
};

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const EMPTY = {
  title: "",
  slug: "",
  excerpt: "",
  category: "E-Commerce",
  categoryColor: "#96bf48",
  authorName: "",
  authorRole: "",
  readTime: "5 min read",
  image: "",
  featured: false,
  tags: "",
  content: "",
  status: "published",
};

export default function BlogForm({ initialData, editSlug }) {
  const router = useRouter();
  const isEdit = Boolean(editSlug);

  const init = initialData
    ? {
        ...initialData,
        authorName: initialData.author?.name || "",
        authorRole: initialData.author?.role || "",
        tags: (initialData.tags || []).join(", "),
      }
    : EMPTY;

  const [form, setForm] = useState(init);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  function set(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "category") next.categoryColor = CATEGORY_COLORS[value] || prev.categoryColor;
      if (field === "title" && !isEdit) next.slug = slugify(value);
      return next;
    });
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.error || "Upload failed");
      } else {
        set("image", data.url);
      }
    } catch {
      setUploadError("Network error during upload");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleSave(status) {
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      const payload = {
        ...form,
        status,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        author: { name: form.authorName, role: form.authorRole },
      };

      const url = isEdit ? `/api/blog/${editSlug}` : "/api/blog";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save.");
      } else {
        setSuccess(isEdit ? "Post updated!" : "Post created!");
        setTimeout(() => router.push("/admin/blog"), 800);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className={styles.wrap}>
      {error && <div className={styles.errorBar}>{error}</div>}
      {success && <div className={styles.successBar}>{success}</div>}

      <div className={styles.grid}>
        {/* Left column — main fields */}
        <div className={styles.mainCol}>
          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <input
              className={styles.input}
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="Blog post title"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Slug (URL) *</label>
            <input
              className={styles.input}
              value={form.slug}
              onChange={(e) => set("slug", slugify(e.target.value))}
              placeholder="my-blog-post-slug"
            />
            <span className={styles.hint}>vennerinfotech.com/blog/{form.slug || "…"}</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Excerpt *</label>
            <textarea
              className={styles.textarea}
              rows={3}
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              placeholder="Short description shown in blog listing…"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Content (Markdown) *</label>
            <textarea
              className={`${styles.textarea} ${styles.content}`}
              rows={24}
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              placeholder={`## Introduction\n\nWrite your post here using Markdown…\n\n## Section Heading\n\n- Bullet point\n- **Bold text**\n- \`inline code\``}
            />
          </div>
        </div>

        {/* Right column — metadata */}
        <div className={styles.sideCol}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Publish</h3>
            <div className={styles.btnGroup}>
              <button
                onClick={() => handleSave("draft")}
                className={styles.draftBtn}
                disabled={saving}
              >
                {saving ? "Saving…" : "Save as Draft"}
              </button>
              <button
                onClick={() => handleSave("published")}
                className={styles.publishBtn}
                disabled={saving}
              >
                {saving ? "Publishing…" : "Publish"}
              </button>
            </div>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Category</h3>
            <select
              className={styles.select}
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Author</h3>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                value={form.authorName}
                onChange={(e) => set("authorName", e.target.value)}
                placeholder="Author name"
              />
            </div>
            <div className={styles.field} style={{ marginTop: 12 }}>
              <label className={styles.label}>Role</label>
              <input
                className={styles.input}
                value={form.authorRole}
                onChange={(e) => set("authorRole", e.target.value)}
                placeholder="e.g. CTO, Venner Infotech"
              />
            </div>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Details</h3>
            <div className={styles.field}>
              <label className={styles.label}>Read Time</label>
              <input
                className={styles.input}
                value={form.readTime}
                onChange={(e) => set("readTime", e.target.value)}
                placeholder="8 min read"
              />
            </div>
            <div className={styles.field} style={{ marginTop: 12 }}>
              <label className={styles.label}>Tags (comma-separated)</label>
              <input
                className={styles.input}
                value={form.tags}
                onChange={(e) => set("tags", e.target.value)}
                placeholder="Shopify, E-Commerce, SEO"
              />
            </div>
            <div className={styles.field} style={{ marginTop: 12 }}>
              <label className={styles.label}>Cover Image</label>

              {/* Preview */}
              {form.image && (
                <div className={styles.imgPreviewWrap}>
                  <img src={form.image} alt="Cover" className={styles.imgPreview} />
                  <button
                    type="button"
                    className={styles.imgRemoveBtn}
                    onClick={() => { set("image", ""); setUploadError(""); }}
                  >
                    ✕ Remove
                  </button>
                </div>
              )}

              {/* Upload zone */}
              {!form.image && (
                <div
                  className={`${styles.uploadZone} ${uploading ? styles.uploadZoneLoading : ""}`}
                  onClick={() => !uploading && fileInputRef.current?.click()}
                >
                  {uploading ? (
                    <span className={styles.uploadingText}>Uploading…</span>
                  ) : (
                    <>
                      <span className={styles.uploadIcon}>📷</span>
                      <span className={styles.uploadText}>Click to upload image</span>
                      <span className={styles.uploadHint}>JPEG, PNG, WebP · max 5 MB</span>
                    </>
                  )}
                </div>
              )}

              {form.image && (
                <button
                  type="button"
                  className={styles.replaceBtn}
                  disabled={uploading}
                  onClick={() => !uploading && fileInputRef.current?.click()}
                >
                  {uploading ? "Uploading…" : "Replace image"}
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />

              {uploadError && <span className={styles.uploadErr}>{uploadError}</span>}

              {/* Fallback manual URL */}
              <input
                className={styles.input}
                style={{ marginTop: 8 }}
                value={form.image}
                onChange={(e) => set("image", e.target.value)}
                placeholder="Or paste image URL…"
              />
            </div>
            <div className={styles.checkRow} style={{ marginTop: 14 }}>
              <input
                id="featured"
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set("featured", e.target.checked)}
                className={styles.checkbox}
              />
              <label htmlFor="featured" className={styles.checkLabel}>Featured post</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
