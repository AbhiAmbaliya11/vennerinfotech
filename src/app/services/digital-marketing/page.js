import Header from "@/components/Header/Header";
import Hero from "@/components/Services/digital-marketing/Hero";
import Dashboard from "@/components/Services/digital-marketing/Dashboard";
import Footer from "@/components/Footer/Footer"; // Assuming Footer exists
import styles from "./page.module.css";

export const metadata = {
  title: "Data-Driven Digital Marketing | Venner Infotech",
  description: "Scale your revenue with precision through advanced SEO, paid ads, and analytics-driven marketing.",
};

export default function DigitalMarketingPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Dashboard />
      {/* Additional digital marketing sections can go here */}
      <Footer />
    </main>
  );
}
