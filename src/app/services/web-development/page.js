import Header from "@/components/Header/Header";
import Hero from "@/components/Services/web-development/Hero";
import Showcase from "@/components/Services/web-development/Showcase";
import Footer from "@/components/Footer/Footer"; // Assuming Footer exists
import styles from "./page.module.css";

export const metadata = {
  title: "Modern Web Development Services | Venner Infotech",
  description: "High-performance, creative, and scalable web experiences built for modern brands.",
};

export default function WebDevelopmentPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Showcase />
      {/* Additional web dev sections can go here */}
      <Footer />
    </main>
  );
}
