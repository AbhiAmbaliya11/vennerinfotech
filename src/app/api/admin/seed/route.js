import { verifyAdminToken } from "@/lib/adminAuth";
import { getSupabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { blogPosts } from "@/data/blogPosts";
import { revalidatePath } from "next/cache";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!(await verifyAdminToken(token))) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rows = blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      category_color: p.categoryColor,
      author_name: p.author.name,
      author_role: p.author.role,
      date: p.date,
      read_time: p.readTime,
      image: p.image || "",
      featured: p.featured,
      tags: p.tags,
      content: p.content.trim(),
      status: "published",
    }));

    const { data, error } = await getSupabase()
      .from("blogs")
      .upsert(rows, { onConflict: "slug" })
      .select("slug");

    if (error) throw error;

    revalidatePath("/blog");
    return Response.json({ seeded: data?.length ?? 0 });
  } catch (err) {
    console.error("[Seed]", err);
    return Response.json({ error: "Seed failed: " + err.message }, { status: 500 });
  }
}
