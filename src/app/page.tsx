import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/ui/Card";
import HeroMapImage from "/public/heroMapImage.webp"

export default function Home() {
    return (
        <>
             <section className={styles["hero-container"]}>
                 <div className={styles["text-container"]}>
                     <h1>Uttarakhand Culture</h1>
                     <p>Progress with the present, but respect your roots</p>
                 </div>
                 <div className={styles["img-container"]}>
                     <Image src={HeroMapImage} alt="TREKKING" width="538" height={"500"} loading={"eager"}  priority={true}/>
                 </div>
             </section>

            <div className={styles["div"]}>
                <Link href={"/trekking"}>Trekking </Link>
            </div>
            <div className={styles["div"]}>
                <Link href={"/language"}> Language</Link>
            </div>
        </>
    );
}
