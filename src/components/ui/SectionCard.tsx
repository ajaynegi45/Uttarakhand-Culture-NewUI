import React from "react";
import styles from "@/components/ui/sectionCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

type SectionCardProps = {
  cardTitle: string;
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
  readMoreLink: string;
  location?: string;
};

const SectionCard = (props: SectionCardProps) => {
  return (
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
            <div className={styles.linkContainer1}>
              <Link href={props.readMoreLink ? props.readMoreLink : "#"}>
                READ MORE
              </Link>
            </div>
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
          <Image
            src={props.image}
            alt={""}
            width={500}
            height={300}
            placeholder={"blur"}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
