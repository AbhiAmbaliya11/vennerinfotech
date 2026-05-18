import Header from "@/components/Header/Header";
import Hero from "@/components/Services/application-development/Hero";
import ProcessFlow from "@/components/Services/application-development/ProcessFlow";
import Footer from "@/components/Footer/Footer"; // Assuming Footer exists
import styles from "./page.module.css";

export const metadata = {
  title: "Mobile App Development Services | Venner Infotech",
  description: "Native and cross-platform mobile application development with immersive UI/UX design.",
};

export default function ApplicationDevelopmentPage() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <ProcessFlow />
      {/* Additional app dev sections can go here */}
      <Footer />
    </main>
  );
}
