import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HeroMapImage from "/public/heroMapImage.webp"
import Srinagar from "/public/Srinagar.webp"
import GoriGanga from "/public/goriGanga.webp"
export default function Home() {
    return (
        <>
             <section className={styles["hero-container"]}>
                 <div className={styles["text-container"]}>
                     <h1>Uttarakhand Culture</h1>
                     <p>Progress with the present, but respect your roots</p>
                 </div>
                 <div className={styles["img-container"]}>
                     <Image src={HeroMapImage} alt="TREKKING" width="538" height={"500"} loading={"eager"}  priority={true}/>
                 </div>
             </section>

            <section className={styles["home-story-container"]}>


                <div className={styles["why-built-it-container"]}>
                    <div className={styles["built-image-container"]}>
                        <Image src={Srinagar} alt="TREKKING" width="300" height={"211"} loading={"eager"}
                                priority={true}/>
                        <p className={styles["journey-image-description"]}>A Painting of a Rope bridge across Alaknanda River,
                            Srinagar, in the times of Garhwal Kingdom, 1784-94. Photo Src: British Library</p>
                    </div>
                    <div className={styles["built-text-container"]}>
                        <p className={styles["why-built-it-title"]}>WHY WE BUILD IT</p>
                        <p className={styles["built-description-container"]}>A concerning trend is emerging in Uttarakhand, where the younger generation is gradually
                            forgetting their cultural heritage and traditional rituals. This decline in cultural
                            knowledge is evident across generations, with each successive generation possessing less
                            knowledge than the previous one. For instance, the amount of cultural knowledge possessed by
                            grandparents is significantly more than that of their children, and the cultural knowledge
                            of today&apos;s youth is likely to be even less than that of their parents. If this trend
                            continues, there is a risk that the cultural heritage of Uttarakhand may eventually
                            disappear from the society. This loss would not only erase the region&apos;s rich cultural
                            identity but also deprive future generations of their cultural roots and traditions.</p>
                    </div>
                </div>

                <div className={styles["journey-container"]}>
                    <p>Explore, Learn and Discover the Beauty of Uttarakhand&apos;s Culture</p>

                    <div>

                        <div className={styles["journey-left-container"]}>
                            <div><h3>EXPLORE UTTARAKAHND</h3></div>
                            <div><p className={styles["built-description-container"]}>To address this problem, we have come up with a solution to digitize this cultural
                                knowledge. Since today&apos;s generation is more comfortable with technology, we aim to
                                provide a platform where they can learn about their cultural heritage using their
                                devices, from anywhere in the world. By doing so, we hope to make cultural knowledge
                                more accessible and engaging for the younger generation, and thus help preserve the rich
                                cultural heritage of Uttarakhand.</p></div>
                            <Link href={"/explore"}>Start Your Journey</Link>
                        </div>

                        <div className={styles["journey-right-container"]}>
                            <Image src={GoriGanga} alt="TREKKING" width="350" height={"256"} loading={"eager"}
                                   priority={true}/>
                            <p className={styles["journey-image-description"]}>Water-colour painting of the River Gori in Uttar Pradesh by James Manson (1791-1862), c.1826. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
