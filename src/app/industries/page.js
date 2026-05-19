

import IndustriesHero from "@/components/IndustriesPage/IndustriesHero";
import IndustryGrid from "@/components/IndustriesPage/IndustryGrid";
import IndustryImpact from "@/components/IndustriesPage/IndustryImpact";
import IndustryCTA from "@/components/IndustriesPage/IndustryCTA";
import styles from "./page.module.css";

export const metadata = {
  title: "Industries We Serve | Venner Infotech",
  description: "Discover custom technology solutions tailored for E-commerce, Healthcare, Real Estate, Finance, and more.",
};

export default function IndustriesPage() {
  return (
    <main className={styles.main}>

      <div className={styles.contentWrapper}>
        <IndustriesHero />
        <IndustryGrid />
        <IndustryImpact />
        <IndustryCTA />
      </div>

    </main>
  );
}
