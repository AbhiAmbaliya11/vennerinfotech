import Header from "@/components/Header/Header";
import Hero from "@/components/Services/software-development/Hero";
import Workflow from "@/components/Services/software-development/Workflow";
import TechStack from "@/components/Services/software-development/TechStack";
import Architecture from "@/components/Services/software-development/Architecture";
import Footer from "@/components/Footer/Footer"; // Assuming Footer exists
import styles from "./page.module.css";

export const metadata = {
  title: "Enterprise Software Development Services | Venner Infotech",
  description: "Custom enterprise software engineering solutions designed for scale, security, and high performance.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Workflow />
      <Architecture />
      <TechStack />
      <Footer />
    </main>
  );
}
