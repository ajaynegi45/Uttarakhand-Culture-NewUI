import React from 'react';
import styles from "@/components/ui/sectionCard.module.css";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

type SectionCardProps = {
    cardTitle: string
    title: string;
    subTitle: string;
    description: string;
    image: StaticImageData;
    readMoreLink?: string
    location?: string
}


/**
* Renders a section card component with optional links and an image.
* @example
* renderSectionCard({
*   cardTitle: "Sample Card Title",
*   title: "Sample Title",
*   subTitle: "Sample Subtitle",
*   description: "Sample description text.",
*   readMoreLink: "http://example.com/read-more",
*   location: "http://example.com/location",
*   image: { src: "/path/to/image.jpg" }
* })
* <SectionCard component rendering with given props>
* @param {object} props - Properties to configure the section card component.
* @param {string} props.cardTitle - The title of the card section.
* @param {string} props.title - Main title displayed on the card.
* @param {string} props.subTitle - Subtitle displayed below the main title.
* @param {string} props.description - Description text for the card content.
* @param {string} [props.readMoreLink='#'] - Optional link for "READ MORE" functionality.
* @param {string} [props.location] - Optional link to view the location, opened in a new tab.
* @param {object} props.image - Image properties for the card.
* @param {string} props.image.src - Source URL of the image to be displayed.
* @returns {JSX.Element} JSX element for the SectionCard component.
* @description
*   - Falls back to '#' if `readMoreLink` is not provided.
*   - Opens `location` link in a new browser tab if provided.
*   - Uses inline styles from an imported `styles` object for class names.
*/
const SectionCard = (props: SectionCardProps) => {
    return (
        <>
        <Link
        href={props.readMoreLink ? props.readMoreLink : '#'}>
        <section className={styles.sectionCardContainer}>


            <div className={styles.sectionCardTitle}>
                <div className={styles.sectionCardTitleLine}></div>
                <p>{props.cardTitle}</p>
            </div>


            <div className={styles.sectionCard}>
                <div className={styles.sectionCardLeftSide}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.subTitle}>{props.subTitle}</p>
                    <p className={styles.description}>{props.description}</p>

                    <div className={styles.linkContainer}>
                        {props.readMoreLink && (
                        <div className={styles.linkContainer1}><Link
                            href={props.readMoreLink ? props.readMoreLink : '#'}>READ MORE</Link></div>
                        )}

                        {props.location && (
                            <div className={styles.linkContainer2}>
                                <Link
                                    href={props.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VIEW LOCATION
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src={props.image.src} alt={""} width={300} height={200} />
                </div>

            </div>

        </section>
        </Link>
    </>
    );
};

export default SectionCard;