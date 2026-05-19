import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio | Venner Infotech",
  description: "Explore Venner Infotech's portfolio — 50+ projects across Shopify, WordPress, Laravel, and Digital Marketing delivered with precision and creativity.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}
