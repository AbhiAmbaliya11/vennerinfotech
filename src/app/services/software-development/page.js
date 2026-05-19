
import Hero from "@/components/Services/software-development/Hero";
import Services from "@/components/Services/software-development/Services";
import Workflow from "@/components/Services/software-development/Workflow";
import WhyChooseUs from "@/components/Services/software-development/WhyChooseUs";
import TechStack from "@/components/Services/software-development/TechStack";

import styles from "./page.module.css";

export const metadata = {
  title: "Enterprise Software Development Services | Venner Infotech",
  description: "Custom enterprise software engineering solutions designed for scale, security, and high performance.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <main className={styles.main}>

      <Hero />
      <Services />
      <Workflow />
      <WhyChooseUs />
      <TechStack />

    </main>
  );
}
