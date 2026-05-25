import { getSupabase } from "./supabase";

function fromDb(row) {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    url: row.url,
    image: row.image || "",
    tag: row.tag,
    featured: row.featured,
    sortOrder: row.sort_order,
    status: row.status,
    createdAt: row.created_at,
  };
}

export function toPortfolioDb(item) {
  return {
    title: item.title,
    category: item.category,
    url: item.url,
    image: item.image || "",
    tag: item.tag,
    featured: item.featured ?? false,
    sort_order: item.sortOrder ?? 0,
    status: item.status || "published",
  };
}

export async function getAllPublishedPortfolio() {
  const { data, error } = await getSupabase()
    .from("portfolio")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data || []).map(fromDb);
}

export async function getAllPortfolioAdmin() {
  const { data, error } = await getSupabase()
    .from("portfolio")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data || []).map(fromDb);
}

export async function getPortfolioItemById(id) {
  const { data, error } = await getSupabase()
    .from("portfolio")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return fromDb(data);
}
