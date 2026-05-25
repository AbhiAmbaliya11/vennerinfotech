import { getPortfolioItemById } from "@/lib/portfolioData";
import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import PortfolioForm from "@/components/admin/PortfolioForm";
import Link from "next/link";

export default async function EditPortfolioPage({ params }) {
  const { id } = await params;
  const item = await getPortfolioItemById(id);
  if (!item) notFound();

  const headerActions = (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
      style={{ padding: "7px 13px", border: "1px solid #2a2a2a", borderRadius: 8, fontSize: 12, color: "#888", textDecoration: "none" }}>
      View Live ↗
    </a>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <AdminHeader title="Edit Project" actions={headerActions} />
      <PortfolioForm initialData={item} editId={id} />
    </div>
  );
}
