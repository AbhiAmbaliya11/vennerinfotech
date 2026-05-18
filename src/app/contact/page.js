import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactHero from "@/components/contact-page/ContactHero";
import InteractiveForm from "@/components/contact-page/InteractiveForm";
import LocationCards from "@/components/contact-page/LocationCards";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | Venner Infotech",
  description: "Get in touch with Venner Infotech. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.contentWrapper}>
        <ContactHero />
        
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.cardsColumn}>
              <LocationCards />
            </div>
            <div className={styles.formColumn}>
              <InteractiveForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
