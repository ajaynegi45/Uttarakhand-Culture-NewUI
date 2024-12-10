"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HeroMap from "/public/heroMapImage.webp"
import SectionCard from "@/components/ui/SectionCard";
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp";
import Notify_Banner from "/public/notify-early-banner.jpg"
import PahadiWomen from "/public/bhotiaWoman.webp"
import Faq from "@/components/Faq";
import Proverbs from "@/components/ui/Proverbs";
import {getUpcomingFestival} from "@/utils/festivals";
import MakarSankranti from "/public/MakarSankranti.jpg";
import UttarayaniMela from "/public/UttarayaniMela.jpg"

export default function Home() {
    const festival = getUpcomingFestival();
    return (
        <>
            <header className={styles.headerContainer}>

                {/* Header Images */}
                <div className={styles.headerImageContainer}>
                    <div className={styles.headerLeftImageContainer}>
                        <Image src={PahadiWomen} alt={"Image of Pahadi Women"} loading={"eager"} height={500}
                               priority={true} placeholder={"blur"}/>
                    </div>
                    <div className={styles.headerCenterImageContainer}>
                        <Image src={HeroMap} alt={"Image of Pahadi Women"} loading={"eager"} height={350}
                               priority={true} placeholder={"blur"}/>
                    </div>
                    <div className={styles.headerRightImageContainer}>
                        <Image src={PahadiWomen} alt={"Image of Pahadi Women"} loading={"eager"} height={500}
                               priority={true} placeholder={"blur"}/>
                    </div>
                </div>

                <div className={styles.headerTextContainer}>
                    <h1>We love <span className={styles.greenText}>Uttarakhand</span> and the people</h1>
                    <h1> who <span className={styles.soilText}>preserve</span> it.</h1>
                    <p>EXPERIENCE THE SOUL OF UTTARAKHAND</p>
                    <Link className={styles.headerbuttonLink} href={"/explore"}>Start Your Journey</Link>
                </div>
            </header>


            {/* Uttarakhand Proverbs */}
            <Proverbs/>



            {/*<section className={styles["home-story-container"]}>*/}
            {/*    */}
            {/*    <div className={styles["why-built-it-container"]}>*/}
            {/*        <div className={styles["built-image-container"]}>*/}
            {/*            <Image src={Srinagar} alt="TREKKING" width="300" height={"211"} loading={"eager"}*/}
            {/*                   priority={true} placeholder={"blur"}/>*/}
            {/*            <p className={styles["journey-image-description"]}>A Painting of a Rope bridge across Alaknanda*/}
            {/*                River,*/}
            {/*                Srinagar, in the times of Garhwal Kingdom, 1784-94. Photo Src: British Library</p>*/}
            {/*        </div>*/}
            {/*        <div className={styles["built-text-container"]}>*/}
            {/*            <p className={styles["why-built-it-title"]}>WHY WE BUILD IT</p>*/}
            {/*            <p className={styles["built-description-container"]}>A concerning trend is emerging in*/}
            {/*                Uttarakhand, where the younger generation is gradually*/}
            {/*                forgetting their cultural heritage and traditional rituals. This decline in cultural*/}
            {/*                knowledge is evident across generations, with each successive generation possessing less*/}
            {/*                knowledge than the previous one. For instance, the amount of cultural knowledge possessed by*/}
            {/*                grandparents is significantly more than that of their children, and the cultural knowledge*/}
            {/*                of today&apos;s youth is likely to be even less than that of their parents. If this trend*/}
            {/*                continues, there is a risk that the cultural heritage of Uttarakhand may eventually*/}
            {/*                disappear from the society. This loss would not only erase the region&apos;s rich cultural*/}
            {/*                identity but also deprive future generations of their cultural roots and traditions.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className={styles["journey-container"]}>*/}
            {/*        <p>Explore, Learn and Discover the Beauty of Uttarakhand&apos;s Culture</p>*/}

            {/*        <div>*/}

            {/*            <div className={styles["journey-left-container"]}>*/}
            {/*                <div><h3>EXPLORE UTTARAKHAND</h3></div>*/}
            {/*                <div><p className={styles["built-description-container"]}>To address this problem, we have*/}
            {/*                    come up with a solution to digitize this cultural*/}
            {/*                    knowledge. Since today&apos;s generation is more comfortable with technology, we aim to*/}
            {/*                    provide a platform where they can learn about their cultural heritage using their*/}
            {/*                    devices, from anywhere in the world. By doing so, we hope to make cultural knowledge*/}
            {/*                    more accessible and engaging for the younger generation, and thus help preserve the rich*/}
            {/*                    cultural heritage of Uttarakhand.</p></div>*/}
            {/*                <Link href={"/explore"}>Start Your Journey</Link>*/}
            {/*            </div>*/}

            {/*            <div className={styles["journey-right-container"]}>*/}
            {/*                <Image src={GoriGanga} alt="TREKKING" width="350" height={"256"} loading={"eager"}*/}
            {/*                       priority={true} placeholder={"blur"}/>*/}
            {/*                <p className={styles["journey-image-description"]}>Water-colour painting of the River Gori*/}
            {/*                    in Uttar Pradesh by James Manson (1791-1862), c.1826. </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}


            {/* UPCOMING FESTIVAL */}
            {/*<SectionCard*/}
            {/*    cardTitle={"UPCOMING FESTIVAL"}*/}
            {/*    title={"Egaas Bagwal"}*/}
            {/*    subTitle={"12 NOVEMBER · UTTARAKHAND"}*/}
            {/*    description={"Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called \"Bhailo\", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills."}*/}
            {/*    image={GheeSankranti}*/}
            {/*    readMoreLink={""}*/}
            {/*    location={""}*/}
            {/*/>*/}

            <SectionCard
                cardTitle={"UPCOMING FESTIVAL"}
                title={festival.title}
                subTitle={festival.subTitle.date + " · " + festival.subTitle.location}
                description={festival.description}
                image={MakarSankranti}
                readMoreLink={""}
                location={""}
            />

            {/* UPCOMING FAIR */}
            <SectionCard
                cardTitle={"UPCOMING FAIR"}
                title={"Uttarayani Mela"}
                subTitle={"JANUARY · UTTARAKHAND"}
                description={"The Uttarayani Fair, celebrated on Makara Sankranti in January, is a vibrant cultural festival in Uttarakhand, with the grandest celebrations in Bageshwar. Held at the confluence of the Sarayu, Gomti, and Sunder Bhagirathi rivers, the fair draws thousands of devotees and tourists. Devotees take a holy dip, seeking blessings for a prosperous year, while the air resonates with folk songs like Jhoras, Chancharis, and Bairas. The mela showcases colorful traditional attire, captivating folk performances, and a culinary paradise of sweet and savory delicacies. Celebrations also thrive in Almora, Nainital, and Haridwar."}
                image={UttarayaniMela}
                readMoreLink={""}
                location={""}
            />


            {/*<SectionCard*/}
            {/*    cardTitle={"UPCOMING FAIR"}*/}
            {/*    title={"Uttarayani Mela"}*/}
            {/*    subTitle={"8 SEPTEMBER - 19 SEPTEMBER · NAINITAL"}*/}
            {/*    description={"The Nanda Devi Mahotsav is a grand celebration dedicated to Goddess Nanda Devi, the revered deity of the Kumaon region. This vibrant festival, which takes place annually in Nainital, is deeply ingrained in the cultural fabric of Uttarakhand. It is believed to have started centuries ago to honor Nanda Devi, who is considered the protector of the region. The festival is marked by colorful processions, traditional dance performances, and rituals that attract devotees and tourists alike. The highlight of the event is the ‘Nanda Jaat Yatra,’ where a grand procession of devotees carries a palanquin of the goddess through the scenic landscapes of Uttarakhand, symbolizing her journey to her maternal home."}*/}
            {/*    image={Nanda_Sunanda}*/}
            {/*    readMoreLink={""}*/}
            {/*    location={"https://www.google.com/maps/place/Maa+Nanda+Devi+Temple,+Almora/@29.5998843,79.6584971,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0b76914898c8b:0x887deeed7e5d3c82!8m2!3d29.5998843!4d79.661072!16s%2Fg%2F11fmrk8bnv?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"}*/}
            {/*/>*/}


            <section className={styles.notifyBannerContainer}>
                <div className={styles.colorBlend}></div>
                <div className={styles.notifyBannerImageContainer}>
                    <Image src={Notify_Banner} alt={"notify-early-banner-image"} width={1440} height={460}
                           placeholder={"blur"}/>
                </div>

                <div className={styles.notifyBannerTextContainer}>
                    <h1 className={styles.notifyBannerHeading}>GET <span
                        className={styles.greenText}>NOTIFIED</span> EARLY</h1>
                    <p className={styles.notifyBannerMessage}>Get Upcoming
                        Uttarakhand <span className={styles.greenText}>Festival</span> & <span
                            className={styles.soilText}>Fair</span> Alerts!</p>
                    <div className={styles.notifyBannerButtonContainer}>
                        <p className={styles.notifyBannerButtonText}>Sign up Today!</p>
                    </div>
                </div>

            </section>
            {/*<Festivals />*/}

            {/* FAQ */}
            <Faq/>
            {/* FAQ */}


        </>
    );
}