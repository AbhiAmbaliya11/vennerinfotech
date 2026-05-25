import { getBlogBySlugAdmin } from "@/lib/blogData";
import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import BlogForm from "@/components/admin/BlogForm";
import Link from "next/link";

export default async function EditBlogPage({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlugAdmin(slug);
  if (!post) notFound();

  const editActions = (
    <Link href={`/blog/${slug}`} target="_blank"
      style={{ padding: "7px 13px", border: "1px solid #2a2a2a", borderRadius: 8, fontSize: 12, color: "#888", textDecoration: "none" }}>
      View Live ↗
    </Link>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <AdminHeader title="Edit Post" actions={editActions} />
      <BlogForm initialData={post} editSlug={slug} />
    </div>
  );
}
