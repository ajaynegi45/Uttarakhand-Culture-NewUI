import styles from "./page.module.css"
import Link from "next/link";
import Card from "@/components/ui/Card";
import Trekking from "@/app/trekking/page";

export default function Explore() {
    return (
        <>
            <section>

                <div className={styles["text-container"]}>
                    <p>We’re currently building this page…</p>

                    <p>In the meantime, check out the pages we’ve already completed
                        below:</p>
                </div>

                <div className={styles["links-container"]}>
                    <div className={styles["div"]}>
                    <Link href={"/trekking"}>Trekking </Link>
                </div>
                <div className={styles["div"]}>
                    <Link href={"/language"}> Language</Link>
                </div>
                </div>
            </section>
        </>
    );
}
