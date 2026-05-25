import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioGrid from "@/components/Portfolio/PortfolioGrid";
import { getAllPublishedPortfolio } from "@/lib/portfolioData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Portfolio | Venner Infotech",
  description: "Explore Venner Infotech's portfolio — 50+ projects across Shopify, WordPress, Laravel, and Digital Marketing delivered with precision and creativity.",
  alternates: {
    canonical: "https://vennerinfotech.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Venner Infotech",
    description: "50+ projects across Shopify, WordPress, Laravel, and Digital Marketing.",
    url: "https://vennerinfotech.com/portfolio",
    type: "website",
  },
};

export default async function PortfolioPage() {
  const projects = await getAllPublishedPortfolio();
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid projects={projects} />
    </main>
  );
}
