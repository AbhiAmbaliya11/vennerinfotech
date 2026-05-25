import { computeToken } from "@/lib/adminAuth";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = await computeToken();
    const cookieStore = await cookies();

    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Admin Login]", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
