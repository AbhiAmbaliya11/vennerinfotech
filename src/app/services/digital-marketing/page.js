
import Hero from "@/components/Services/digital-marketing/Hero";
import Dashboard from "@/components/Services/digital-marketing/Dashboard";
import MarketingServices from "@/components/Services/digital-marketing/MarketingServices";
import MarketingExpertise from "@/components/Services/digital-marketing/MarketingExpertise";
import CoreValues from "@/components/Services/digital-marketing/CoreValues";

import styles from "./page.module.css";

export const metadata = {
  title: "Data-Driven Digital Marketing | Venner Infotech",
  description: "Scale your revenue with precision through advanced SEO, paid ads, and analytics-driven marketing.",
};

export default function DigitalMarketingPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Dashboard />
      <MarketingServices />
      <MarketingExpertise />
      <CoreValues />
    </main>
  );
}
