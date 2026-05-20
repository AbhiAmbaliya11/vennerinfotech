import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Service | Venner Infotech",
  description: "Read the Terms of Service governing the use of Venner Infotech's website and software development services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "May 20, 2026";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Legal & Rules</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Last updated: {lastUpdated}</p>
        </header>

        <section className={styles.content}>
          <p className={styles.intro}>
            Welcome to Venner Infotech. By accessing our website or using our software design, development, 
            and marketing services, you agree to comply with and be bound by the following Terms of Service. 
            Please review these terms carefully.
          </p>

          <div className={styles.section}>
            <h2>1. Acceptance of Agreement</h2>
            <p>
              You agree to the terms and conditions outlined in this Terms of Service Agreement ("Agreement") 
              with respect to our site and services. This Agreement constitutes the entire and only agreement 
              between us and you, and supersedes all prior or contemporaneous agreements, representations, 
              warranties, and understandings.
            </p>
          </div>

          <div className={styles.section}>
            <h2>2. Scope of Services</h2>
            <p>
              Venner Infotech provides custom software engineering, website development, application design, 
              and digital marketing consultations. Any new features, service expansions, or product releases 
              added to our portfolio shall be subject to this Agreement unless explicitly stated otherwise.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
              and other matters related to our website are protected under applicable copyrights, trademarks, 
              and other proprietary rights. The copying, redistribution, use, or publication by you of any 
              such matters or any part of the site is strictly prohibited without our prior written consent.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Project Deliverables and Payments</h2>
            <p>
              Specific project timelines, milestones, payment schedules, and deliverable specifications 
              will be mutually agreed upon in individual Statement of Work (SOW) documents or service contracts. 
              Client agrees to pay all fees associated with the chosen services in accordance with the billing terms 
              set forth in such contracts.
            </p>
          </div>

          <div className={styles.section}>
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              Our website and the services are provided "as-is," "as available," and all warranties, express 
              or implied, are disclaimed (including but not limited to the disclaimer of any implied warranties 
              of merchantability and fitness for a particular purpose). The information and services may contain 
              bugs, errors, problems, or other limitations.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Venner Infotech or its directors, employees, or partners be liable for any 
              indirect, incidental, special, exemplary, or consequential damages arising out of or in connection 
              with the use or performance of our website or services, even if we have been advised of the 
              possibility of such damages.
            </p>
          </div>

          <div className={styles.section}>
            <h2>7. Governing Law</h2>
            <p>
              This Agreement shall be treated as though it were executed and performed in Surat, Gujarat, India, 
              and shall be governed by and construed in accordance with the laws of the State of Gujarat and the 
              federal laws of India, without regard to conflict of law principles.
            </p>
          </div>

          <div className={styles.section}>
            <h2>8. Contact Information</h2>
            <p>
              If you have any questions or require clarifications regarding these Terms of Service, please contact us:
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
