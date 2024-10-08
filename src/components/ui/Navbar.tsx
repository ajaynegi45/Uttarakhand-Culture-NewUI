"use client"; // Client Component declaration

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode && document.body) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const handleToggle = () => {
        setIsDarkMode(prev => {
            const newDarkMode = !prev;
            localStorage.setItem('darkMode', String(newDarkMode));
            if (newDarkMode && document.body) {
                document.body.classList.add('dark-mode');
            } else if (document.body) {
                document.body.classList.remove('dark-mode');
            }
            return newDarkMode;
        });
    };

    return (
        <>
            <div className={`${styles["navbar-container"]} ${isDarkMode ? 'dark-mode' : ''}`}>
                <nav className={styles["navbar"]}>
                    <Link href="/" className={styles["heading"]}>
                        <h3 className={styles["title"]}>UTTARAKHAND CULTURE</h3>
                    </Link>
                    <div className={styles["right-section"]}>
                        <Link href="/" className={styles.link}>LOGIN</Link>
                        <button className={styles.toggleButton} onClick={handleToggle}>
                            {isDarkMode ? '🌙' : '☀️'}
                        </button>
                    </div>
                </nav>
            </div>
            <div className={styles["fade-navbar-effect"]}></div>
            <div className={styles["empty-navbar"]}></div>
        </>
    );
}
