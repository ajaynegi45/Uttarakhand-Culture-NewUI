import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HeroMap from "/public/heroMapImage.webp";
import Srinagar from "/public/Srinagar.webp";
import GoriGanga from "/public/goriGanga.webp";
import SectionCard from "@/components/ui/SectionCard";
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";
import Bagwal from "/public/bagwal.jpg";
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp";
import Notify_Banner from "/public/notify-early-banner.jpg";
import PahadiWomen from "/public/bhotiaWoman.webp";
import Screen from "@/components/Screen";

export default function Home() {
    return (
        <>
            <header className={styles.headerContainer}>
                {/* Header Images */}
                <div className={styles.headerImageContainer}>
                    <div className={styles.headerLeftImageContainer}>
                        <Image
                            src={PahadiWomen}
                            alt={"Image of Pahadi Women"}
                            loading={"eager"}
                            height={500}
                            priority={true}
                            placeholder={"blur"}
                        />
                    </div>
                    <div className={styles.headerCenterImageContainer}>
                        <Image
                            src={HeroMap}
                            alt={"Image of Uttarakhand Map"}
                            loading={"eager"}
                            height={350}
                            priority={true}
                            placeholder={"blur"}
                        />
                    </div>
                    <div className={styles.headerRightImageContainer}>
                        <Image
                            src={PahadiWomen}
                            alt={"Image of Pahadi Women"}
                            loading={"eager"}
                            height={500}
                            priority={true}
                            placeholder={"blur"}
                        />
                    </div>
                </div>

                <div className={styles.headerTextContainer}>
                    <h1>
                        We love <span className={styles.greenText}>Uttarakhand</span> and the people
                    </h1>
                    <h1> who <span className={styles.soilText}>preserve</span> it.</h1>
                    <p>EXPERIENCE THE SOUL OF UTTARAKHAND</p>
                    <Link className={styles.headerbuttonLink} href={"/explore"}>
                        Start Your Journey
                    </Link>
                </div>
            </header>

            <section className={styles["home-story-container"]}>
                <div className={styles["why-built-it-container"]}>
                    <div className={styles["built-image-container"]}>
                        <Image
                            src={Srinagar}
                            alt="TREKKING"
                            width="300"
                            height={"211"}
                            loading={"eager"}
                            priority={true}
                            placeholder={"blur"}
                        />
                        <p className={styles["journey-image-description"]}>
                            A Painting of a Rope bridge across Alaknanda River, Srinagar, in the times of Garhwal Kingdom, 1784-94. Photo Src: British Library
                        </p>
                    </div>
                    <div className={styles["built-text-container"]}>
                        <p className={styles["why-built-it-title"]}>WHY WE BUILD IT</p>
                        <p className={styles["built-description-container"]}>
                            A concerning trend is emerging in Uttarakhand, where the younger generation is gradually
                            forgetting their cultural heritage and traditional rituals. This decline in cultural
                            knowledge is evident across generations, with each successive generation possessing less
                            knowledge than the previous one...
                        </p>
                    </div>
                </div>

                <div className={styles["journey-container"]}>
                    <p>Explore, Learn and Discover the Beauty of Uttarakhand's Culture</p>
                    <div>
                        <div className={styles["journey-left-container"]}>
                            <h3>EXPLORE UTTARAKAND</h3>
                            <p className={styles["built-description-container"]}>
                                To address this problem, we have come up with a solution to digitize this cultural knowledge...
                            </p>
                            <Link href={"/explore"}>Start Your Journey</Link>
                        </div>
                        <div className={styles["journey-right-container"]}>
                            <Image
                                src={GoriGanga}
                                alt="TREKKING"
                                width="350"
                                height={"256"}
                                loading={"eager"}
                                priority={true}
                                placeholder={"blur"}
                            />
                            <p className={styles["journey-image-description"]}>
                                Water-colour painting of the River Gori in Uttar Pradesh by James Manson (1791-1862), c.1826.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UPCOMING FESTIVAL */}
            <SectionCard
                cardTitle={"UPCOMING FESTIVAL"}
                title={"Egaas Bagwal"}
                subTitle={"12 NOVEMBER · UTTARAKHAND"}
                description={"Egaas Bagwal is a unique festival celebrated 11 days after Diwali..."}
                image={GheeSankranti}
                readMoreLink={""}
                location={""}
            />

            {/* UPCOMING FAIR */}
            <SectionCard
                cardTitle={"UPCOMING FAIR"}
                title={"Nanda Devi Mahotsav"}
                subTitle={"8 SEPTEMBER - 19 SEPTEMBER · NAINITAL"}
                description={"The Nanda Devi Mahotsav is a grand celebration dedicated to Goddess Nanda Devi..."}
                image={Nanda_Sunanda}
                readMoreLink={""}
                location={"https://www.google.com/maps/place/Maa+Nanda+Devi+Temple,+Almora/@29.5998843,79.6584971,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0b76914898c8b:0x887deeed7e5d3c82!8m2!3d29.5998843!4d79.661072!16s%2Fg%2F11fmrk8bnv?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"}
            />

            <section className={styles.notifyBannerContainer}>
                <div className={styles.colorBlend}></div>
                <div className={styles.notifyBannerImageContainer}>
                    <Image
                        src={Notify_Banner}
                        alt={"notify-early-banner-image"}
                        width={1440}
                        height={460}
                        placeholder={"blur"}
                    />
                </div>

                <div className={styles.notifyBannerTextContainer}>
                    <h1 className={styles.notifyBannerHeading}>
                        GET <span className={styles.greenText}>NOTIFIED</span> EARLY
                    </h1>
                    <p className={styles.notifyBannerMessage}>
                        Get Upcoming Uttarakhand <span className={styles.greenText}>Festival</span> & <span className={styles.soilText}>Fair</span> Alerts!
                    </p>
                    <div className={styles.notifyBannerButtonContainer}>
                        <p className={styles.notifyBannerButtonText}>Sign up Today!</p>
                    </div>
                </div>
            </section>
        </>
    );
}
