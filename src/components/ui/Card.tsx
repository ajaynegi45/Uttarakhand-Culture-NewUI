import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import Roopkund from "/public/roopkund.jpg"


type CardProps = {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    readMoreLink?: string
}

export default function Card(props: CardProps) {
    return(
        <section className={styles["card"]}>
            <div className={styles[""]} >
                <h2 className={styles["title"]}>{props.title}</h2>
                <p className={styles["subTitle"]}>{props.subTitle}</p>
                <p className={styles["description"]}>{props.description}</p>
                <div className={styles["link-container"]}>
                    <div className={styles["link-container1"]} ><Link href={"#"}>READ MORE</Link></div>
                    <div className={styles["link-container2"]}><Link href={props.readMoreLink ? props.readMoreLink : '#'}>VIEW LOCATION</Link></div>
                </div>
            </div>
            <div className={styles["image-container"]} >
                <Image src={Roopkund} alt={""} width={300} height={200} placeholder={"blur"} />
            </div>
        </section>
    );
}