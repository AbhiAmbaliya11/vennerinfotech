import { toPortfolioDb } from "@/lib/portfolioData";
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
    const { id } = await params;
    const body = await request.json();
    const row = toPortfolioDb(body);

    const { data, error } = await getSupabase()
      .from("portfolio")
      .update(row)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    if (!data) return Response.json({ error: "Item not found" }, { status: 404 });

    revalidatePath("/portfolio");
    return Response.json({ item: data });
  } catch (err) {
    console.error("[Portfolio PUT]", err);
    return Response.json({ error: "Failed to update item" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    if (!(await checkAdmin())) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const { error } = await getSupabase().from("portfolio").delete().eq("id", id);
    if (error) throw error;

    revalidatePath("/portfolio");
    return Response.json({ success: true });
  } catch (err) {
    console.error("[Portfolio DELETE]", err);
    return Response.json({ error: "Failed to delete item" }, { status: 500 });
  }
}
