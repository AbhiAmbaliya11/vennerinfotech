import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Specializations from "@/components/Specializations/Specializations";
import TechStack from "@/components/TechStack/TechStack";
import Process from "@/components/Process/Process";
import Stats from "@/components/Stats/Stats";
import Industries from "@/components/Industries/Industries";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Animated Hero Section */}
        <Hero />

        {/* Interactive Services Section */}
        <Services />

        {/* Infinite Marquee Tech Stack Section */}
        <TechStack />

        {/* Scroll-Triggered Work Process Section */}
        <Process />

        {/* Animated Stats Section */}
        <Stats />

        {/* Proven Across Industries Section */}
        <Industries />

        {/* Why Choose Us Section - Structural Pattern Base */}
        <WhyChooseUs />

        {/* Specialized Technologies Section */}
        <Specializations />

        {/* Client Testimonials Carousel */}
        <Testimonials />

        {/* Contact Information Section */}
        <Contact />

        {/* Interactive Accordion FAQs */}
        <FAQ />
      </main>
    </div>
  );
}
