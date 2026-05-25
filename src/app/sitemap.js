import { getAllPublishedBlogs } from "@/lib/blogData";

const BASE_URL = "https://vennerinfotech.com";

const STATIC_ROUTES = [
  { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE_URL}/portfolio`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9 },
  { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap() {
  let blogEntries = [];
  try {
    const posts = await getAllPublishedBlogs();
    blogEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: post.featured ? 0.85 : 0.7,
    }));
  } catch {
    // Supabase unavailable at build time — skip blog entries
  }

  return [...STATIC_ROUTES, ...blogEntries];
}
