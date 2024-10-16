// UttrakhandPage.tsx
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Background from '/public/Banner 1.svg';
import Flora from '/public/flora.png';
import Fauna from '/public/fauna.png';
import Glaciers from '/public/glaciers.png';
import Rivers from '/public/rivers.png';
import Mountains from '/public/mountains.png';
import Link from 'next/link';
import { StaticImageData } from 'next/image';


interface Item {
  title: string;
  description: string;
  image: StaticImageData; // Use appropriate type for image
}

const items: Item[] = [
  {
    title: "FLORA",
    description: "Uttarakhand's diverse topography supports a rich array of flora, categorized into tropical, sub-tropical, temperate, and alpine zones. In the lower elevations, tropical and sub-tropical regions are dominated by Sal, Teak, and Bamboo forests. As altitude increases, temperate zones feature Oak, Rhododendron, and Deodar trees, with Rhododendron being culturally significant. The alpine region, above 3,000 meters, is known for its vibrant Bugyals (meadows) filled with seasonal wildflowers like Brahma Kamal and Blue Poppy. The state is also rich in medicinal plants such as Ashwagandha and Giloy, which are integral to traditional Ayurvedic medicine. Uttarakhand's flora is crucial for the local ecosystem, culture, and economy.",
    image: Flora,
  },
  {
    title: "FAUNA",
    description: "Uttarakhand's diverse topography supports a rich array of flora, categorized into tropical, sub-tropical, temperate, and alpine zones. In the lower elevations, tropical and sub-tropical regions are dominated by Sal, Teak, and Bamboo forests. As altitude increases, temperate zones feature Oak, Rhododendron, and Deodar trees, with Rhododendron being culturally significant. The alpine region, above 3,000 meters, is known for its vibrant Bugyals (meadows) filled with seasonal wildflowers like Brahma Kamal and Blue Poppy. The state is also rich in medicinal plants such as Ashwagandha and Giloy, which are integral to traditional Ayurvedic medicine. Uttarakhand's flora is crucial for the local ecosystem, culture, and economy.",
    image: Fauna,
  },
  {
    title: "GLACIERS",
    description: "Uttarakhand's diverse topography supports a rich array of flora, categorized into tropical, sub-tropical, temperate, and alpine zones. In the lower elevations, tropical and sub-tropical regions are dominated by Sal, Teak, and Bamboo forests. As altitude increases, temperate zones feature Oak, Rhododendron, and Deodar trees, with Rhododendron being culturally significant. The alpine region, above 3,000 meters, is known for its vibrant Bugyals (meadows) filled with seasonal wildflowers like Brahma Kamal and Blue Poppy. The state is also rich in medicinal plants such as Ashwagandha and Giloy, which are integral to traditional Ayurvedic medicine. Uttarakhand's flora is crucial for the local ecosystem, culture, and economy.",
    image: Glaciers,
  },
  {
    title: "RIVERS",
    description: "Uttarakhand's diverse topography supports a rich array of flora, categorized into tropical, sub-tropical, temperate, and alpine zones. In the lower elevations, tropical and sub-tropical regions are dominated by Sal, Teak, and Bamboo forests. As altitude increases, temperate zones feature Oak, Rhododendron, and Deodar trees, with Rhododendron being culturally significant. The alpine region, above 3,000 meters, is known for its vibrant Bugyals (meadows) filled with seasonal wildflowers like Brahma Kamal and Blue Poppy. The state is also rich in medicinal plants such as Ashwagandha and Giloy, which are integral to traditional Ayurvedic medicine. Uttarakhand's flora is crucial for the local ecosystem, culture, and economy.",
    image: Rivers,
  },
  {
    title: "MOUNTAINS",
    description: "Uttarakhand's diverse topography supports a rich array of flora, categorized into tropical, sub-tropical, temperate, and alpine zones. In the lower elevations, tropical and sub-tropical regions are dominated by Sal, Teak, and Bamboo forests. As altitude increases, temperate zones feature Oak, Rhododendron, and Deodar trees, with Rhododendron being culturally significant. The alpine region, above 3,000 meters, is known for its vibrant Bugyals (meadows) filled with seasonal wildflowers like Brahma Kamal and Blue Poppy. The state is also rich in medicinal plants such as Ashwagandha and Giloy, which are integral to traditional Ayurvedic medicine. Uttarakhand's flora is crucial for the local ecosystem, culture, and economy.",
    image: Mountains,
  },
];

const UttrakhandPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={Background}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Uttarakhand</h1>
          <h2 className={styles.heroSubtitle}>WHERE THE HIMALAYAS MEET THE HEART OF INDIA</h2>
          <button className={styles.heroButton}>Experience The Nature</button>
        </div>
      </section>

      <div className={styles.contentContainer}>
        {items.map((item, index) => (
          <section key={index} className={styles.floraSection}>
            <h2 className={styles.floraSectionTitle}>
              <span>UTTARAKHAND {item.title}</span>
            </h2>
            <div className={styles.floraContent}>
              <div className={styles.floraText}>
                <h3 className={styles.floraHeading}>{item.title}</h3>
                <h4 className={styles.floraSubheading}>MID-MARCH • UTTRAKHAND</h4>
                <p className={styles.floraDescription}>{item.description}</p>
                <button className={styles.floraButton}><Link href="#">Read More</Link></button>
              </div>
              <div className={styles.floraImage}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default UttrakhandPage;
