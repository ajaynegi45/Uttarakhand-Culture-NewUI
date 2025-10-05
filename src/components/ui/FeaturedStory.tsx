import Image from 'next/image';
import styles from './FeaturedStory.module.css';

export default function FeaturedStory() {
    return (
        <section id="stories" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <span className={styles.label}>STORY SPOTLIGHT</span>
                    <h2 className={styles.title}>The Legend of Nanda Devi</h2>
                    <p className={styles.description}>
                        Explore the tale of the patron goddess of the Uttarakhand Himalayas, a story of devotion, power, and the profound connection between the people and their sacred peaks. The Nanda Devi Raj Jat, one of the most challenging pilgrimages, honors her journey.
                    </p>
                    <a href="/explore" className={styles.link}>Read the full legend →</a>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Mt._Nanda_Devi.jpg"
                        alt="Nanda Devi Peak"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
