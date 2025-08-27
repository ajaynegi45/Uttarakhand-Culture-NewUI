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
import {getUpcomingFair} from "@/utils/fair";
import MakarSankranti from "/public/MakarSankranti.jpg";
import UttarayaniMela from "/public/UttarayaniMela.jpg"
import Law from "/public/LandLaw.jpg";
import ContributeBanner from "@/components/ui/ContributeBanner";
import FeaturedStory from "@/components/ui/FeaturedStory";

export default function Home() {
    const festival = getUpcomingFestival();
    const fair = getUpcomingFair();

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
                    <div className={styles.headerButtonContainer}>
                        <Link className={styles.headerbuttonLink} href="/explore">Explore Culture</Link>
                        <Link className={`${styles.headerbuttonLink} ${styles.secondaryButton}`} href="https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI">Contribute Now</Link>
                    </div>
                </div>
            </header>


            {/* Uttarakhand Proverbs */}
            <Proverbs/>



            <section className={styles.lawSection}>
                <div className={styles.lawSectionContainer}>
                    {/* Left Column */}
                    <div className={styles.lawImageContainer}>
                        <Image
                            src={Law}
                            alt="Uttarakhand Land and Indigenous Rights"
                            width={500}
                            height={300}
                            // placeholder="blur"
                        />
                    </div>

                    {/* Right Column */}
                    <div className={styles.lawContentContainer}>
                        <h2>Securing Our Land, Honoring Our Roots</h2>
                        <p>
                            With rapid urbanization, the identity of Uttarakhand faces challenges. The land
                            of the mountains is not just a resource but a legacy. Protecting indigenous rights
                            and ensuring responsible land policies are crucial steps to preserving our culture
                            and heritage.
                        </p>
                        <ul>
                            <li><strong>भू-कानून:</strong> A critical step towards sustainable development.</li>
                            <li><strong>मूल निवास:</strong> Securing rights for indigenous communities.</li>
                            <li>Empowering local voices to shape a sustainable future.</li>
                        </ul>

                        {/*<Link href="/under-construction"> */}
                        {/*    <button className={styles.readMoreButton}>*/}
                        {/*        Learn How You Can Help*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </section>

            <SectionCard
                cardTitle={"UPCOMING FESTIVAL"}
                title={festival.title}
                subTitle={festival.subTitle.date + " · " + festival.subTitle.location}
                description={festival.description}
                image={festival.image}
                readMoreLink={""}
                location={""}
            />

            {/* UPCOMING FAIR */}

            <SectionCard
                cardTitle={"UPCOMING FAIR"}
                title={fair.title}
                subTitle={fair.subTitle.date + " · " + fair.subTitle.location}
                description={fair.description}
                image={fair.image}
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



            <FeaturedStory/>

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

            <ContributeBanner/>

            {/* FAQ */}
            <Faq/>
            {/* FAQ */}


        </>
    );
}