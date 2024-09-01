import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (<>
            <div className={styles["navbar-container"]}>
                <nav className={styles["navbar"]}>
                    <Link href="/" className={styles["heading"]}>
                        <h3 className={styles["title"]}>UTTARAKHAND CULTURE</h3>
                    </Link>
                    <Link href="/" className={styles.link}>LOGIN</Link>
                </nav>
            </div>
            <div className={styles["fade-navbar-effect"]}></div>
            <div className={styles["empty-navbar"]}>
        </>
    );
}
