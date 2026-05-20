import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | Venner Infotech",
  description: "Learn about how Venner Infotech collects, uses, and protects your personal data and private information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 20, 2026";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Legal & Privacy</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: {lastUpdated}</p>
        </header>

        <section className={styles.content}>
          <p className={styles.intro}>
            At Venner Infotech, we value your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website, communicate with us, or use our digital services.
          </p>

          <div className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you fill out contact forms, 
              request consultation, or interact with our teams. This may include:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Business Information:</strong> Company name, job title, and project details.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device type, and session interactions via cookies.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is used to deliver quality digital experiences, including:
            </p>
            <ul>
              <li>Responding to your inquiries and providing support.</li>
              <li>Processing project requirements and delivering tailored custom software.</li>
              <li>Improving website performance, user flows, and service offerings.</li>
              <li>Sending periodic newsletters, promotional offers, or industry updates (with opt-out choice).</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              information with trusted third-party service providers (such as cloud hosting or database services) 
              who assist us in operating our website or conducting our business, provided they agree to keep 
              this information confidential.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. 
              All data transmitted through our website is encrypted using Secure Socket Layer (SSL) technology. 
              However, please note that no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Your Rights and Choices</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections 
              to inaccurate information, or ask us to delete your personal data. To exercise these rights, 
              please contact us at the details provided below.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us:
            </p>
            <p className={styles.contactDetails}>
              <strong>Venner Infotech</strong><br />
              Surat, Gujarat, India — 395004<br />
              Email: <a href="mailto:hello@vennerinfotech.com">hello@vennerinfotech.com</a><br />
              Phone: +91 89803 17457
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
