"use client";
import styles from "./TempleCard.module.css"
import Link from 'next/link';
import { useEffect } from 'react';
import Image from "next/image";

type CardProps = {
    img: string;
    imgDescription: string;
    heading: string;
    description: string;
    link: string;
};

/**
 * Renders a card component with an image, heading, and description.
 * @example
 * Card({
 *   img: 'path/to/image.jpg',
 *   imgDescription: 'Image description',
 *   heading: 'Card Heading',
 *   description: 'This is a card description',
 *   link: '/link-to-more-info'
 * })
 * Returns a JSX element that displays a card with an image and text.
 * @param {string} img - The source URL of the image to display on the card.
 * @param {string} imgDescription - The alt text for the image, used for accessibility.
 * @param {string} heading - The text for the heading of the card.
 * @param {string} description - The main descriptive text of the card.
 * @param {string} link - The URL that the card's button will navigate to for more information.
 * @returns {JSX.Element} A JSX element representing the card UI component.
 * @description
 * - Adds a CSS animation class to the card container unless Safari is detected.
 * - The card style is defined in CSS and expects specific class names for styling.
 * - The code for handling the 'Read more' button is commented out and not present in the current functionality.
 */
export default function Card({ img, imgDescription, heading, description, link }: CardProps) {

    // useEffect(() => {
    //     function isSafari() {
    //         return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    //     }
    //
    //     if (isSafari()) {
    //         const carouselWrapper = document.getElementById('card-container');
    //         if (carouselWrapper) {
    //             carouselWrapper.classList.remove('card-container-animation');
    //         }
    //     }
    // }, []);

    return (
        <div className={styles["card-container"]}>

            <div className={styles["card-image-container"]}>
                <Image src={img} alt={imgDescription} className={styles["card-image"]} width={100} height={100}/>
            </div>

            <div className={styles["card-description-container"]}>
                <h4 className={styles["card-description-heading"]}>{heading}</h4>
                <p className={styles["card-description"]}>{description}</p>

                {/*<div>*/}

                {/*<Link href={link}>*/}
                {/*    <button className={styles["card-description-button"]}>Read more</button>*/}
                {/*</Link>*/}
                {/*</div>*/}
            </div>

        </div>
    );
}
