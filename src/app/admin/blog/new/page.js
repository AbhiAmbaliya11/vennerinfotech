import AdminHeader from "@/components/admin/AdminHeader";
import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <AdminHeader title="New Post" />
      <BlogForm />
    </div>
  );
}
