import AdminHeader from "@/components/admin/AdminHeader";
import PortfolioForm from "@/components/admin/PortfolioForm";

export default function NewPortfolioPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <AdminHeader title="New Project" />
      <PortfolioForm />
    </div>
  );
}
