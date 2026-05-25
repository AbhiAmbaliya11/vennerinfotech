import { toDb } from "@/lib/blogData";
import { getSupabase } from "@/lib/supabase";
import { verifyAdminToken } from "@/lib/adminAuth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function checkAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  return verifyAdminToken(token);
}

export async function PUT(request, { params }) {
  try {
    if (!(await checkAdmin())) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;
    const body = await request.json();
    const row = toDb(body);

    const { data, error } = await getSupabase()
      .from("blogs")
      .update(row)
      .eq("slug", slug)
      .select()
      .single();

    if (error) throw error;
    if (!data) return Response.json({ error: "Post not found" }, { status: 404 });

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    if (body.slug && body.slug !== slug) revalidatePath(`/blog/${body.slug}`);

    return Response.json({ post: data });
  } catch (err) {
    console.error("[Blog PUT]", err);
    return Response.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    if (!(await checkAdmin())) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;
    const { error } = await getSupabase().from("blogs").delete().eq("slug", slug);
    if (error) throw error;

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Blog DELETE]", err);
    return Response.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
