import { getAllPublishedPortfolio, getAllPortfolioAdmin, toPortfolioDb } from "@/lib/portfolioData";
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
      const items = await getAllPortfolioAdmin();
      return Response.json({ items });
    }

    const items = await getAllPublishedPortfolio();
    return Response.json({ items });
  } catch (err) {
    console.error("[Portfolio GET]", err);
    return Response.json({ error: "Failed to fetch portfolio" }, { status: 500 });
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
    const row = toPortfolioDb(body);

    if (!row.title || !row.category || !row.url || !row.tag) {
      return Response.json({ error: "Title, category, URL, and tag are required" }, { status: 400 });
    }

    const { data, error } = await getSupabase().from("portfolio").insert(row).select().single();
    if (error) throw error;

    revalidatePath("/portfolio");
    return Response.json({ item: data }, { status: 201 });
  } catch (err) {
    console.error("[Portfolio POST]", err);
    return Response.json({ error: "Failed to create item" }, { status: 500 });
  }
}
