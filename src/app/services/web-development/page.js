
import Hero from "@/components/Services/web-development/Hero";
import Showcase from "@/components/Services/web-development/Showcase";
import WebServices from "@/components/Services/web-development/WebServices";
import TechExpertise from "@/components/Services/web-development/TechExpertise";
import CoreValues from "@/components/Services/web-development/CoreValues";

import styles from "./page.module.css";

export const metadata = {
  title: "Modern Web Development Services | Venner Infotech",
  description: "High-performance, creative, and scalable web experiences built for modern brands.",
};

export default function WebDevelopmentPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Showcase />
      <WebServices />
      <TechExpertise />
      <CoreValues />
    </main>
  );
}
