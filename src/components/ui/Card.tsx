"use client"; // Marking this as a client component

import React, { useState } from "react"; // Import useState for managing state
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import Roopkund from "/public/roopkund.jpg";

type TrekDetails = {
  introduction: string;
  overview: string;
  route: string[];
  attractions: string[];
};

type CardProps = {
  title: string;
  subTitle: string;
  trekDetails: TrekDetails;
  readMoreLink?: string;
};

export default function Card(props: CardProps) {
  const { title, subTitle, trekDetails, readMoreLink } = props; // Destructure props
  const [isExpanded, setIsExpanded] = useState(false); // State to track the expanded content



  return (
    <section className={styles["card"]}>
            <div className={styles[""]} >
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["subTitle"]}>{subTitle}</p>
        <div className={styles["description"]}>
            <p className="paragraph">{trekDetails.introduction}</p>
            <p className="paragraph">{trekDetails.overview}</p>
         

          {/* Conditional rendering of the extra content */}
          {isExpanded && (
            <div className={styles["readmore-div"]}>
                <h2 className={styles['heading']}>&#9670; Route</h2>
              <p>
                <ul className={styles['heading-list']}>
                  {trekDetails.route.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                  ))}
                </ul>
              </p>

                <h2 className={styles['heading']}>&#9670; Nearby Attractions</h2>
              <p>
                <ul className={styles['heading-list']}>
                  {trekDetails.attractions.map((item, index) => (
                    <li key={index} className="list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          )}
        </div>

        <div className={styles["link-container"]}>
          {/* Conditionally hide the 'READ MORE' link when expanded */}
          {!isExpanded && (
            <div className={styles["link-container1"]}>
              <button onClick={()=>{setIsExpanded(!isExpanded)}}>READ MORE</button>
            </div>
          )}
          {isExpanded && (
            <div className={styles["link-container1"]}>
              <button onClick={()=>{setIsExpanded(!isExpanded)}}>READ LESS</button>
            </div>
          )}
          <div className={styles["link-container2"]}>
            <Link href={readMoreLink ? readMoreLink : "#"}>VIEW LOCATION</Link>
          </div>
        </div>
      </div>

      <div className={styles["image-container"]}>
        <Image src={Roopkund} alt={title} width={300} height={200} placeholder={"blur"} />
      </div>
    </section>
  );
}
