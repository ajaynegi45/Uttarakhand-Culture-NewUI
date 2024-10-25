import styles from "@/app/language/page.module.css";
import Image from "next/image";
import Uttattire from "/public/Uttattire.webp";
import Card from "@/components/ui/Card";

export default function Language() {
    return (
        <>
            <section className={styles["language-hero-container"]}>
                <div className={styles["language-text-container"]}>
                    <h1>Attire</h1>
                    <p>TRADITIONAL ELEGANCE OF UTTARAKHAND: A FUSION OF CULTURE AND HERITAGE</p>
                </div>
                <div className={styles["language-img-container"]}>
                    <Image src={Uttattire} alt="Uthar food" width="538" height={"500"} loading={"eager"}
                           priority={true}/>
                </div>
            </section>

            <div className={styles["uttarakhand-language-title-container"]}>
                <p>UTTARAKHAND ATTIRE</p>
            </div>


            <section className={styles["uttarakhand-language-container"]}>
                <Card title={"Ghagri-Choli"}
                      subTitle={"The Graceful Traditional Attire for Women"}
                      description={"The Ghagri (long skirt) paired with a Choli (blouse) is a traditional outfit for women in Uttarakhand. This attire often features intricate patterns and embroidery, reflecting local artistry and culture. Women frequently style it with heavy jewelry and draped Pichoras for special occasions."}
                      image={Uttattire}/>

                <Card title={"Pichora"}
                      subTitle={"The Vibrant Bridal Dupatta of Kumaon and Garhwal"}
                      description={"The Pichora is a shawl or dupatta unique to Kumaoni and Garhwali brides. Made using block prints and decorated with gold or silver thread, it is primarily yellow and red. It’s symbolic of blessings, worn during marriages and festivals."}
                      image={Uttattire}/>

                <Card title={"Angarkha"}
                      subTitle={"Traditional Garhwali Coat for Men"}
                      description={"The Angarkha is a traditional long coat worn by men, especially in the Garhwal region. Made of wool, it provides warmth during harsh winters and is worn over a kurta-pajama. Its cut and style offer both practicality and elegance."}
                      image={Uttattire}/>

                <Card title={"Kurta-Dhoti"}
                      subTitle={"Everyday Men’s Attire with a Cultural Touch"}
                      description={"Common among men, this consists of a knee-length kurta paired with a dhoti. Comfortable and breathable, it’s suited for the mountainous terrain. Men may wear a topi (cap) to complete this traditional look, especially for festivals or religious ceremonies."}
                      image={Uttattire}/>

                <Card title={" Rangwali Pichora"}
                      subTitle={"Colorful Shawl with Traditional Designs"}
                      description={"Often worn by women during festive seasons, the Rangwali Pichora is a vibrant, multicolored shawl. Unlike the bridal Pichora, it is adorned with brighter hues and floral patterns, representing the region’s connection to nature and celebration."}
                      image={Uttattire}/>
            </section>
        </>
    );
}
