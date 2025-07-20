import Link from "next/link";
import styles from "./ContributeBanner.module.css";

/**
 * Creates a section banner inviting users to contribute to the project.
 * @example
 * ContributeBanner()
 * <section className="contributeSection">...</section>
 * @returns {JSX.Element} A JSX element containing the contribution invitation section.
 * @description
 *   - Utilizes CSS modules for styling with `styles.contributeSection` and `styles.contentContainer`.
 *   - Encourages various types of contributors including coders, designers, writers, and culture enthusiasts.
 *   - Provides a link to the contributors page and instructions on how to join.
 */
export default function ContributeBanner() {
    return (
        <section className={styles.contributeSection}>
            <div className={styles.contentContainer}>
                <h2>Who Contributes to This Project? 🤝 </h2>
                <p>
                    This project is made possible by passionate individuals who care deeply
                    about preserving and celebrating the rich culture, history, and natural
                    beauty of Uttarakhand.
                </p>

                <p>
                    <strong>Want to contribute?</strong> Whether you&apos;re a coder, designer,
                    writer, or culture enthusiast—there’s a place for you here!
                </p>

                <Link href="/about/contributors" className={styles.contributeButton}>Meet Contributors & Learn How to Join →</Link>
            </div>
        </section>
    );
}