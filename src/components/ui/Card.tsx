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

/**
 * Renders a card component with title, subtitle, description, and links.
 * @example
 * Card({ title: 'Sample Title', subTitle: 'Sample Subtitle', description: 'Sample description', readMoreLink: 'https://example.com' })
 * <Card> JSX element with structured information including title, subtitle, and interactive links.
 * @param {object} props - Properties used to render the card.
 * @param {string} props.title - The title text displayed on the card.
 * @param {string} props.subTitle - The subtitle text displayed below the title.
 * @param {string} props.description - The description text providing more details in the card.
 * @param {string} [props.readMoreLink] - The URL for the "VIEW LOCATION" link, defaults to '#' if not provided.
 * @returns {JSX.Element} A structured card component containing a title, subtitle, description, and two functional links.
 * @description
 *   - The "READ MORE" link is currently a placeholder pointing to "#".
 *   - Styles are applied via the `styles` object accessing CSS module classes.
 *   - The `Image` component uses a placeholder for blurred loading effect.
 */
export default function Card(props: CardProps) {
    return (
        <section className={styles["card"]}>
            <div className={styles[""]}>
                <h2 className={styles["title"]}>{props.title}</h2>
                <p className={styles["subTitle"]}>{props.subTitle}</p>
                <p className={styles["description"]}>{props.description}</p>
                <div className={styles["link-container"]}>
                    <div className={styles["link-container1"]}><Link href={"#"}>READ MORE</Link></div>
                    <div className={styles["link-container2"]}><Link
                        href={props.readMoreLink ? props.readMoreLink : '#'}>VIEW LOCATION</Link></div>
                </div>
            </div>
            <div className={styles["image-container"]}>
                <Image src={Roopkund} alt={""} width={300} height={200} placeholder={"blur"}/>
            </div>
        </section>
    );
}