"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HeroMap from "/public/heroMapImage.webp"
import Srinagar from "/public/Srinagar.webp"
import GoriGanga from "/public/goriGanga.webp"
import SectionCard from "@/components/ui/SectionCard";
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";
import Bagwal from "/public/bagwal.jpg";
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp";
import Notify_Banner from "/public/notify-early-banner.jpg"
import PahadiWomen from "/public/bhotiaWoman.webp"
import Screen from "@/components/Screen";
import Festivals from "@/components/Festivals";
import Faq from "/public/Faq.png"
import { useState } from "react";
import FAQ from "@/components/Faq";
import style from "../components/ui/Faq.module.css"
export default function Home() {

    const [faqs, setFaqs] = useState([
        {
          question: "So, you're a startup?",
          answer: "description",
          open: false, 
        },
        {
          question: "Is Genie right for me?",
          answer: "description",
          open: false,
        },
        {
          question: "How do I sign up?",
          answer: "description",
          open: false,
        },
        {
          question: "What's the onboarding like? Do you charge for implementation?",
          answer: "description",
          open: false,
        }
      ]);
      
      const toggleFAQ = (index: number): void => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              return { ...faq, open: !faq.open }; 
            } else {
              return { ...faq, open: false }; 
            }
          })
        );
      };
      



    return (
        <>
            <header className={styles.headerContainer}>

                {/* Header Images */}
                <div className={styles.headerImageContainer}>
                    <div className={styles.headerLeftImageContainer}>
                        <Image src={PahadiWomen} alt={"Image of Pahadi Women"} loading={"eager"} height={500}
                            priority={true} placeholder={"blur"} />
                    </div>
                    <div className={styles.headerCenterImageContainer}>
                        <Image src={HeroMap} alt={"Image of Pahadi Women"} loading={"eager"} height={350}
                            priority={true} placeholder={"blur"} />
                    </div>
                    <div className={styles.headerRightImageContainer}>
                        <Image src={PahadiWomen} alt={"Image of Pahadi Women"} loading={"eager"} height={500}
                            priority={true} placeholder={"blur"} />
                    </div>
                </div>

                <div className={styles.headerTextContainer}>
                    <h1>We love <span className={styles.greenText}>Uttarakhand</span> and the people</h1>
                    <h1> who <span className={styles.soilText}>preserve</span> it.</h1>
                    <p>EXPERIENCE THE SOUL OF UTTARAKHAND</p>
                    <Link className={styles.headerbuttonLink} href={"/explore"}>Start Your Journey</Link>
                </div>

            </header>

            {/*<Screen/>*/}


            <section className={styles["home-story-container"]}>


                <div className={styles["why-built-it-container"]}>
                    <div className={styles["built-image-container"]}>
                        <Image src={Srinagar} alt="TREKKING" width="300" height={"211"} loading={"eager"}
                            priority={true} placeholder={"blur"} />
                        <p className={styles["journey-image-description"]}>A Painting of a Rope bridge across Alaknanda
                            River,
                            Srinagar, in the times of Garhwal Kingdom, 1784-94. Photo Src: British Library</p>
                    </div>
                    <div className={styles["built-text-container"]}>
                        <p className={styles["why-built-it-title"]}>WHY WE BUILD IT</p>
                        <p className={styles["built-description-container"]}>A concerning trend is emerging in
                            Uttarakhand, where the younger generation is gradually
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
                            <div><p className={styles["built-description-container"]}>To address this problem, we have
                                come up with a solution to digitize this cultural
                                knowledge. Since today&apos;s generation is more comfortable with technology, we aim to
                                provide a platform where they can learn about their cultural heritage using their
                                devices, from anywhere in the world. By doing so, we hope to make cultural knowledge
                                more accessible and engaging for the younger generation, and thus help preserve the rich
                                cultural heritage of Uttarakhand.</p></div>
                            <Link href={"/explore"}>Start Your Journey</Link>
                        </div>

                        <div className={styles["journey-right-container"]}>
                            <Image src={GoriGanga} alt="TREKKING" width="350" height={"256"} loading={"eager"}
                                priority={true} placeholder={"blur"} />
                            <p className={styles["journey-image-description"]}>Water-colour painting of the River Gori
                                in Uttar Pradesh by James Manson (1791-1862), c.1826. </p>
                        </div>
                    </div>
                </div>

            </section>


            {/* UPCOMING FESTIVAL */}
            <SectionCard
                cardTitle={"UPCOMING FESTIVAL"}
                title={"Egaas Bagwal"}
                subTitle={"12 NOVEMBER · UTTARAKHAND"}
                description={"Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called \"Bhailo\", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills."}
                image={GheeSankranti}
                readMoreLink={""}
                location={""}
            />


            {/* UPCOMING FAIR */}
            <SectionCard
                cardTitle={"UPCOMING FAIR"}
                title={"Nanda Devi Mahotsav"}
                subTitle={"8 SEPTEMBER - 19 SEPTEMBER · NAINITAL"}
                description={"The Nanda Devi Mahotsav is a grand celebration dedicated to Goddess Nanda Devi, the revered deity of the Kumaon region. This vibrant festival, which takes place annually in Nainital, is deeply ingrained in the cultural fabric of Uttarakhand. It is believed to have started centuries ago to honor Nanda Devi, who is considered the protector of the region. The festival is marked by colorful processions, traditional dance performances, and rituals that attract devotees and tourists alike. The highlight of the event is the ‘Nanda Jaat Yatra,’ where a grand procession of devotees carries a palanquin of the goddess through the scenic landscapes of Uttarakhand, symbolizing her journey to her maternal home."}
                image={Nanda_Sunanda}
                readMoreLink={""}
                location={"https://www.google.com/maps/place/Maa+Nanda+Devi+Temple,+Almora/@29.5998843,79.6584971,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0b76914898c8b:0x887deeed7e5d3c82!8m2!3d29.5998843!4d79.661072!16s%2Fg%2F11fmrk8bnv?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"}
            />


            <section className={styles.notifyBannerContainer}>
                <div className={styles.colorBlend}></div>
                <div className={styles.notifyBannerImageContainer}>
                    <Image src={Notify_Banner} alt={"notify-early-banner-image"} width={1440} height={460}
                        placeholder={"blur"} />
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

            {/* FAQ */}
            <section className={style.faqcontainer}>
               <div className={style.faqcontainertitle}>
                    <h1 className={style.faqcontainer}>
                    We&apos;re here to answer all <br /> your Questions.
                    </h1>
               </div>
                
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
                <div >
                    <Image src={Faq} alt={"faqicon"} width={65} height={65}
                        className={styles.faqcontainer}  />
                </div>
                <h3 className={style.faqcontainer}>Still have questions?</h3>
                <button className={styles.faqcontainer}>Contact us</button>
            </section>

            {/*<Festivals />*/}


        </>
    );
}