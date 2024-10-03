import Link from "next/link";
import styles from "./navbar.module.css";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <>
      <div className={styles["navbar-container"]}>
        <nav className={styles["navbar"]}>
          <Link href="/" className={styles["heading"]}>
            <h3 className={styles["title"]}>UTTARAKHAND CULTURE</h3>
          </Link>
          {session ? (
            <Link href="/auth/logout" className={styles.link}>
              LOGOUT
            </Link>
          ) : (
            <Link href="/auth" className={styles.link}>
              LOGIN
            </Link>
          )}
        </nav>
      </div>
      <div className={styles["fade-navbar-effect"]}></div>
      <div className={styles["empty-navbar"]}></div>
    </>
  );
}
