import { getAllPublishedBlogs, getAllBlogsAdmin, toDb } from "@/lib/blogData";
import { getSupabase } from "@/lib/supabase";
import { verifyAdminToken } from "@/lib/adminAuth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get("admin") === "1";

    if (admin) {
      const cookieStore = await cookies();
      const token = cookieStore.get("admin_token")?.value;
      if (!(await verifyAdminToken(token))) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
      }
      const posts = await getAllBlogsAdmin();
      return Response.json({ posts });
    }

    const posts = await getAllPublishedBlogs();
    return Response.json({ posts });
  } catch (err) {
    console.error("[Blog GET]", err);
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!(await verifyAdminToken(token))) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const row = toDb(body);

    if (!row.slug || !row.title || !row.content || !row.excerpt || !row.category) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await getSupabase().from("blogs").insert(row).select().single();
    if (error) {
      if (error.code === "23505") {
        return Response.json({ error: "A post with this slug already exists" }, { status: 409 });
      }
      throw error;
    }

    revalidatePath("/blog");
    return Response.json({ post: data }, { status: 201 });
  } catch (err) {
    console.error("[Blog POST]", err);
    return Response.json({ error: "Failed to create post" }, { status: 500 });
  }
}
