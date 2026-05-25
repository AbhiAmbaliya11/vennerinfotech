"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./PortfolioForm.module.css";

const CATEGORIES = ["Shopify", "WordPress", "Laravel", "Digital Marketing"];

const EMPTY = {
  title: "",
  category: "Shopify",
  url: "",
  tag: "",
  image: "",
  featured: false,
  sortOrder: 0,
  status: "published",
};

export default function PortfolioForm({ initialData, editId }) {
  const router = useRouter();
  const isEdit = Boolean(editId);
  const [form, setForm] = useState(initialData ? { ...initialData, sortOrder: initialData.sortOrder ?? 0 } : EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef(null);

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
      if (!res.ok) setUploadError(data.error || "Upload failed");
      else set("image", data.url);
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
      const payload = { ...form, status };
      const url = isEdit ? `/api/portfolio/${editId}` : "/api/portfolio";
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
        setSuccess(isEdit ? "Project updated!" : "Project created!");
        setTimeout(() => router.push("/admin/portfolio"), 700);
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
        {/* Left column */}
        <div className={styles.mainCol}>

          {/* Cover Image */}
          <div className={styles.field}>
            <label className={styles.label}>Project Screenshot / Cover Image</label>
            {form.image && (
              <div className={styles.imgPreviewWrap}>
                <img src={form.image} alt="Cover" className={styles.imgPreview} />
                <button type="button" className={styles.imgRemoveBtn} onClick={() => { set("image", ""); setUploadError(""); }}>
                  ✕ Remove
                </button>
              </div>
            )}
            {!form.image && (
              <div
                className={`${styles.uploadZone} ${uploading ? styles.uploadZoneLoading : ""}`}
                onClick={() => !uploading && fileInputRef.current?.click()}
              >
                {uploading ? (
                  <span className={styles.uploadingText}>Uploading…</span>
                ) : (
                  <>
                    <span className={styles.uploadIcon}>🖼️</span>
                    <span className={styles.uploadText}>Click to upload screenshot</span>
                    <span className={styles.uploadHint}>JPEG, PNG, WebP · max 5 MB</span>
                  </>
                )}
              </div>
            )}
            {form.image && (
              <button type="button" className={styles.replaceBtn} disabled={uploading}
                onClick={() => !uploading && fileInputRef.current?.click()}>
                {uploading ? "Uploading…" : "Replace image"}
              </button>
            )}
            <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
              onChange={handleImageUpload} style={{ display: "none" }} />
            {uploadError && <span className={styles.uploadErr}>{uploadError}</span>}
            <input className={styles.input} style={{ marginTop: 8 }} value={form.image}
              onChange={(e) => set("image", e.target.value)} placeholder="Or paste image URL…" />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Project Title *</label>
              <input className={styles.input} value={form.title}
                onChange={(e) => set("title", e.target.value)} placeholder="e.g. Vira Care" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Industry Tag *</label>
              <input className={styles.input} value={form.tag}
                onChange={(e) => set("tag", e.target.value)} placeholder="e.g. Health & Wellness" />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Live Site URL *</label>
            <input className={styles.input} type="url" value={form.url}
              onChange={(e) => set("url", e.target.value)} placeholder="https://example.com" />
          </div>
        </div>

        {/* Right column */}
        <div className={styles.sideCol}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Publish</h3>
            <div className={styles.btnGroup}>
              <button onClick={() => handleSave("draft")} className={styles.draftBtn} disabled={saving}>
                {saving ? "Saving…" : "Save as Draft"}
              </button>
              <button onClick={() => handleSave("published")} className={styles.publishBtn} disabled={saving}>
                {saving ? "Publishing…" : "Publish"}
              </button>
            </div>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Category</h3>
            <select className={styles.select} value={form.category} onChange={(e) => set("category", e.target.value)}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Settings</h3>
            <div className={styles.field}>
              <label className={styles.label}>Sort Order</label>
              <input className={styles.input} type="number" min="0" value={form.sortOrder}
                onChange={(e) => set("sortOrder", Number(e.target.value))} placeholder="0" />
              <span className={styles.hint}>Lower numbers appear first</span>
            </div>
            <div className={styles.checkRow} style={{ marginTop: 14 }}>
              <input id="featured" type="checkbox" checked={form.featured}
                onChange={(e) => set("featured", e.target.checked)} className={styles.checkbox} />
              <label htmlFor="featured" className={styles.checkLabel}>Featured (wider card)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
