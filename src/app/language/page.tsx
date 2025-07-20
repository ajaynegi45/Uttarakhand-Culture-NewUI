import styles from "@/app/language/page.module.css";
import Image from "next/image";
import LanguageHeroImage from "/public/languageHeroImage.webp";
import InfoItem from "@/components/ui/InfoItem";
import Card from "@/components/ui/Card";

/**
* A functional component that renders the language information section for Uttarakhand, highlighting the importance of mother tongue.
* @example
* Language()
* <Language />
* @returns {JSX.Element} A JSX element comprising multiple sections detailing language significance and language cards for Kumaoni, Garhwali, and Jaunsari.
* @description
*   - Displays various reasons why speaking the mother tongue is important in a set of InfoItems.
*   - Features Card components for each major language providing detailed descriptions and emphasizing cultural heritage.
*   - Utilizes styles from a CSS module to apply styling to different sections.
*/
export default function Language() {
    return (
        <>
            <section className={styles["language-hero-container"]}>
                <div className={styles["language-text-container"]}>
                    <h1>Language</h1>
                    <p>The soul of Uttarakhand resides in its languages Kumaoni, Garhwali, and Jaunsari - let&apos;s
                        keep them breathing</p>
                </div>
                <div className={styles["language-img-container"]}>
                    <Image src={LanguageHeroImage} alt="Language Map" width="538" height={"500"} loading={"eager"}
                           priority={true}/>
                </div>
            </section>

            <section className={styles["language-importance-container"]}>
                <div className={styles["language-importance-title-container"]}>
                    <p>Why speaking in mother tongue is important at home ?</p>
                </div>
                <div className={styles["language-importance-item-container"]}>
                    <InfoItem title={"Cultural Heritage"}
                              description={"Using the mother tongue at home preserves cultural heritage and traditions, connecting children with their roots and giving them a sense of belonging to their community."}/>

                    <InfoItem title={"Emotional Bonding"}
                              description={" Our cultural heritage is often tied to emotions, and speaking mother tongue at home creates emotional bonding among family members. This emotional bonding allows for authentic emotional expression, which is essential for cognitive development."}/>

                    <InfoItem title={"Cognitive Development"}
                              description={"Children who speak their mother tongue develop cognitive skills more effectively. It enhances mental flexibility and improves problem-solving abilities."}/>

                    <InfoItem title={"Linguistic Skills"}
                              description={"Speaking multiple languages, starting with the mother tongue boosts linguistic abilities. It lays a strong foundation for learning additional languages later in lite."}/>

                    <InfoItem title={"Communication Clarity"}
                              description={"The mother tongue enables clearer communication within the family, reducing misunderstandings and fostering a harmonious home environment."}/>

                    <InfoItem title={"Academic Success"}
                              description={"Research suggests that children who are proficient in their mother tongue often perform better academically, as it strengthens the foundation for learning other subjects."}/>

                    <InfoItem title={"Self-Esteem"}
                              description={"Using the mother tongue at home boosts self-esteem and confidence. Children feel valued and secure in their cultural identity, fostering a positive self-image."}/>

                    <InfoItem title={"Heritage Preservation"}
                              description={"Speaking the mother tongue at home is a way to preserve and pass down folklore, proverbs, and historical stories, enriching the family's heritage for future generations."}/>
                </div>
            </section>


            <div className={styles["uttarakhand-language-title-container"]}>
                <p>UTTARAKHAND LANGUAGE</p>
            </div>


            <section className={styles["uttarakhand-language-container"]}>
                <Card title={"KUMAONI LANGUAGE"}
                      subTitle={"Almora, Bageshwar, Champawat, Nainital, Pithoragarh, Udham Singh Nagar"}
                      description={"Kumaoni is a Central Pahari language spoken in the Kumaon region of Uttarakhand. It has several dialects, including Kumaoni proper, Johari, and Danpuriya. Kumaoni is known for its distinctive grammar and vocabulary, which reflect the region's unique cultural heritage. With around 2 million speakers, Kumaoni is an important language in Uttarakhand. It has a rich literary tradition, including poetry, folk tales, and songs. Efforts are being made to develop Kumaoni language education and media to promote its use and preservation."}
                      image={""}
                      readMoreLink={""}/>

                <Card title={"GARHWALI LANGUAGE"}
                      subTitle={"Dehradun, Haridwar, Pauri - Tehri Garhwal, Uttarkashi, Chamoli, Rudraprayag"}
                      description={"Garhwali is a Central Pahari language spoken in the Garhwal region of Uttarakhand. It has various dialects, including Badhani, Lohbya, and Majh-Kumaiya. Garhwali is known for its poetic and musical quality, with a rich tradition of folk songs and stories. It is closely tied to the region's culture and identity. With around 2.5 million speakers, Garhwali is a widely spoken language in Uttarakhand. Efforts are being made to preserve and promote Garhwali through language documentation, education, and cultural programs."}
                      image={""}
                      readMoreLink={""}/>

                <Card title={"JAUNSARI LANGUAGE"} subTitle={"Jaunsar - Bawar region of Dehradun"}
                      description={"Jaunsari is a Central Pahari language spoken in the Jaunsar-Bawar region of Dehradun district, Uttarakhand. It is a small language with around 100,000 speakers. Jaunsari is known for its unique dialects, including Jaunsari proper and Bawari. The language is closely tied to the region's culture and traditions. Jaunsari has a rich oral tradition, with stories, songs, and folk tales passed down through generations. Efforts are being made to document and preserve Jaunsari through language education and cultural programs to ensure its survival for future generations."}
                      image={""}
                      readMoreLink={""}/>
            </section>
        </>
    );
}
