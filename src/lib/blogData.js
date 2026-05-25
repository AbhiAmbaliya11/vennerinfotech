import { getSupabase } from "./supabase";

function fromDb(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    categoryColor: row.category_color,
    author: { name: row.author_name, role: row.author_role },
    date: row.date,
    readTime: row.read_time,
    image: row.image || "",
    featured: row.featured,
    tags: row.tags || [],
    content: row.content,
    status: row.status,
    createdAt: row.created_at,
  };
}

export function toDb(post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    category_color: post.categoryColor || "#f97316",
    author_name: post.authorName || post.author?.name || "",
    author_role: post.authorRole || post.author?.role || "",
    date: post.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    read_time: post.readTime || "5 min read",
    image: post.image || "",
    featured: post.featured ?? false,
    tags: post.tags || [],
    content: post.content || "",
    status: post.status || "published",
  };
}

export async function getAllPublishedBlogs() {
  const { data, error } = await getSupabase()
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(fromDb);
}

export async function getBlogBySlug(slug) {
  const { data, error } = await getSupabase()
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  if (error) return null;
  return fromDb(data);
}

export async function getRelatedBlogs(category, excludeSlug) {
  const { data, error } = await getSupabase()
    .from("blogs")
    .select("slug, title, category, category_color, read_time, image")
    .eq("status", "published")
    .eq("category", category)
    .neq("slug", excludeSlug)
    .limit(3);
  if (error) return [];
  return (data || []).map((r) => ({
    slug: r.slug,
    title: r.title,
    category: r.category,
    categoryColor: r.category_color,
    readTime: r.read_time,
    image: r.image || "",
  }));
}

export async function getAllBlogsAdmin() {
  const { data, error } = await getSupabase()
    .from("blogs")
    .select("id, slug, title, category, category_color, status, featured, date, created_at")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    category: r.category,
    categoryColor: r.category_color,
    status: r.status,
    featured: r.featured,
    date: r.date,
    createdAt: r.created_at,
  }));
}

export async function getBlogBySlugAdmin(slug) {
  const { data, error } = await getSupabase()
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return fromDb(data);
}
