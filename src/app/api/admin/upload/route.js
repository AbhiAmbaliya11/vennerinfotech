import { verifyAdminToken } from "@/lib/adminAuth";
import { getSupabase } from "@/lib/supabase";
import { cookies } from "next/headers";

const BUCKET = "blog-images";
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!(await verifyAdminToken(token))) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    if (!ALLOWED.includes(file.type)) {
      return Response.json({ error: "Only JPEG, PNG, WebP, GIF, and AVIF images are allowed" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return Response.json({ error: "File must be smaller than 5 MB" }, { status: 400 });
    }

    const ext = file.name.split(".").pop().toLowerCase().replace(/[^a-z0-9]/g, "");
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const supabase = getSupabase();
    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(filename, buffer, { contentType: file.type, upsert: false });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(filename);

    return Response.json({ url: publicUrl });
  } catch (err) {
    console.error("[Upload]", err);
    return Response.json({ error: "Upload failed: " + err.message }, { status: 500 });
  }
}
