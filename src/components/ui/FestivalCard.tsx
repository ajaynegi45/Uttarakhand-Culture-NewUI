import styles from "./FestivalCard.module.css"
import Link from "next/link";
import Image from "next/image";
import GheeSankranti from "/public/Ghee_Sankranti.jpeg"
import Bagwal from "/public/bagwal.jpg"
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp"

export default function FestivalCard() {
    return (
        <>
            {/* Festival Card */}
            <section className={styles["festival-card"]}>
                <p>UPCOMING FESTIVAL</p>

                <div>
                    <div className={styles[""]}>
                        <h2 className={styles["title"]}>Ghee Sankranti</h2>
                        <p className={styles["subTitle"]}>MID-AUGUST · UTTARAKHAND</p>
                        <p className={styles["description"]}>Ghee Sankranti is a festival that portrays the gratitude of
                            the locals who earn a living via the occupation of farming by marking the onset of the
                            harvesting season. It is also known as the &apos;Olgia&apos; festival and is celebrated on
                            the first day of August (Bhado), a time wherein the crops are thriving, and the milk-laden
                            cattle are ready to be milked. In terms of how the celebration has gradually evolved from
                            over the years, the ancient tradition saw nephews and sons-in-laws give presents to their
                            maternal uncles and fathers-in-laws respectively. However, today&apos;s context is
                            summarised by the fact that agriculturists and artisans give presents to their landowners.
                            Common presents that are exchanged include axes, ghee, datkhocha (metallic toothpick) and
                            firewood. An important ritual of this festival includes that of eating ghee and chapatis
                            stuffed with urad dal!</p>
                        <div className={styles["link-container"]}>
                            <div className={styles["link-container1"]}><Link href={"#"}>READ MORE</Link></div>
                        </div>
                    </div>

                    <div className={styles["image-container"]}>
                        <Image src={GheeSankranti} alt={""} width={300} height={200} placeholder={"blur"}/>
                    </div>
                </div>
            </section>

            {/* Fair Card */}
            <section className={styles["fair-card"]}>
                <p>UPCOMING FAIR</p>

                <div>
                    <div className={styles[""]}>
                        <h2 className={styles["title"]}>Nanda Devi Mahotsav</h2>

                        <p className={styles["subTitle"]}>8 SEPTEMBER - 19 SEPTEMBER · NAINITAL</p>

                        <p className={styles["description"]}>
                            The Nanda Devi Mahotsav is a grand celebration dedicated to Goddess Nanda Devi, the revered deity of the Kumaon region. This vibrant festival, which takes place annually in Nainital, is deeply ingrained in the cultural fabric of Uttarakhand. It is believed to have started centuries ago to honor Nanda Devi, who is considered the protector of the region. The festival is marked by colorful processions, traditional dance performances, and rituals that attract devotees and tourists alike. The highlight of the event is the ‘Nanda Jaat Yatra,’ where a grand procession of devotees carries a palanquin of the goddess through the scenic landscapes of Uttarakhand, symbolizing her journey to her maternal home.                        </p>
                        <div className={styles["link-container"]}>
                            <div className={styles["link-container1"]}><Link href={"#"}>READ MORE</Link></div>
                            <div className={styles["link-container2"]}><Link href={"https://www.google.com/maps/place/Devidhura,+Uttarakhand+263128/@29.3431585,79.4357138,15.41z/data=!4m6!3m5!1s0x39a09f6b22f4a44d:0x7f02252e2ae6a3ed!8m2!3d29.3473853!4d79.4460938!16s%2Fg%2F12hyszj84?entry=ttu"} target="_blank" rel="noopener noreferrer" >VIEW LOCATION</Link></div>

                        </div>
                    </div>

                    <div className={styles["image-container"]}>
                    <Image src={Nanda_Sunanda} alt={""} width={300} height={200} placeholder={"blur"}/>
                    </div>
                </div>
            </section>
        </>
    );
}
