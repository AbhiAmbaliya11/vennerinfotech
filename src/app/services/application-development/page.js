import Hero from "@/components/Services/application-development/Hero";
import AppServices from "@/components/Services/application-development/AppServices";
import TechExpertise from "@/components/Services/application-development/TechExpertise";
import ProcessFlow from "@/components/Services/application-development/ProcessFlow";
import CoreValues from "@/components/Services/application-development/CoreValues";
import styles from "./page.module.css";

export const metadata = {
  title: "Mobile App Development Services | Venner Infotech",
  description: "Native and cross-platform mobile application development with immersive UI/UX design.",
};

export default function ApplicationDevelopmentPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <AppServices />
      <TechExpertise />
      <ProcessFlow />
      <CoreValues />
    </main>
  );
}
