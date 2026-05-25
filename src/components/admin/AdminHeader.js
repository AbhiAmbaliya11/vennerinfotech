"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import styles from "./AdminHeader.module.css";

export default function AdminHeader({ title, actions }) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.logoText}>VENNER</span>
        <span className={styles.slash}>/</span>
        <nav className={styles.nav}>
          <Link href="/admin/blog" className={`${styles.navLink} ${pathname.startsWith("/admin/blog") ? styles.navActive : ""}`}>
            Blog
          </Link>
          <Link href="/admin/portfolio" className={`${styles.navLink} ${pathname.startsWith("/admin/portfolio") ? styles.navActive : ""}`}>
            Portfolio
          </Link>
        </nav>
        {title && (
          <>
            <span className={styles.slash}>/</span>
            <span className={styles.section}>{title}</span>
          </>
        )}
      </div>
      <div className={styles.right}>
        {actions}
        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
      </div>
    </header>
  );
}
