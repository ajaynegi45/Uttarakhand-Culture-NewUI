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
