"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HeroMap from "/public/heroMapImage.webp";
import Srinagar from "/public/Srinagar.webp";
import GoriGanga from "/public/goriGanga.webp";
import SectionCard from "@/components/ui/SectionCard";
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp";
import Notify_Banner from "/public/notify-early-banner.jpg";
import PahadiWomen from "/public/bhotiaWoman.webp";
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			{/* Header Section */}
			<header className={styles.headerContainer}>
				<div className={styles.headerImageContainer}>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className={styles.headerLeftImageContainer}
					>
						<Image
							src={PahadiWomen}
							alt={"Image of Pahadi Women"}
							height={500}
							priority
							placeholder="blur"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className={styles.headerCenterImageContainer}
					>
						<Image
							src={HeroMap}
							alt={"Image of Pahadi Women"}
							height={350}
							priority
							placeholder="blur"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className={styles.headerRightImageContainer}
					>
						<Image
							src={PahadiWomen}
							alt={"Image of Pahadi Women"}
							height={500}
							priority
							placeholder="blur"
						/>
					</motion.div>
				</div>

				<motion.div
					className={styles.headerTextContainer}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>
						We love <span className={styles.greenText}>Uttarakhand</span> and
						the people
					</h1>
					<h1>
						who <span className={styles.soilText}>preserve</span> it.
					</h1>
					<p>EXPERIENCE THE SOUL OF UTTARAKHAND</p>
					<Link className={styles.headerbuttonLink} href={"/explore"}>
						Start Your Journey
					</Link>
				</motion.div>
			</header>

			{/* Why Built Section */}
			<section className={styles["home-story-container"]}>
				<motion.div
					className={styles["why-built-it-container"]}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.div
						initial={{ scale: 0.9 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.8 }}
						className={styles["built-image-container"]}
					>
						<Image
							src={Srinagar}
							alt="TREKKING"
							width={300}
							height={211}
							priority
							placeholder="blur"
						/>
						<p className={styles["journey-image-description"]}>
							A Painting of a Rope bridge across Alaknanda River, Srinagar, in
							the times of Garhwal Kingdom, 1784-94. Photo Src: British Library
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className={styles["built-text-container"]}
					>
						<p className={styles["why-built-it-title"]}>WHY WE BUILD IT</p>
						<p className={styles["built-description-container"]}>
							A concerning trend is emerging in Uttarakhand, where the younger
							generation is gradually forgetting their cultural heritage and
							traditional rituals. This decline in cultural knowledge is evident
							across generations, with each successive generation possessing
							less knowledge than the previous one. For instance, the amount of
							cultural knowledge possessed by grandparents is significantly more
							than that of their children, and the cultural knowledge of
							today&apos;s youth is likely to be even less than that of their
							parents. If this trend continues, there is a risk that the
							cultural heritage of Uttarakhand may eventually disappear from
							society. This loss would not only erase the region&apos;s rich
							cultural identity but also deprive future generations of their
							cultural roots and traditions.
						</p>
					</motion.div>
				</motion.div>

				{/* Journey Section */}
				<div className={styles["journey-container"]}>
					<motion.p
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						Explore, Learn and Discover the Beauty of Uttarakhand's Culture
					</motion.p>

					<div>
						<motion.div
							className={styles["journey-left-container"]}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						>
							<h3>EXPLORE UTTARAKHAND</h3>
							<p className={styles["built-description-container"]}>
								To address this problem, we have come up with a solution to
								digitize this cultural knowledge. Since today&apos;s generation
								is more comfortable with technology, we aim to provide a
								platform where they can learn about their cultural heritage
								using their devices, from anywhere in the world. By doing so, we
								hope to make cultural knowledge more accessible and engaging for
								the younger generation, and thus help preserve the rich cultural
								heritage of Uttarakhand.
							</p>
							<Link href="/explore">Start Your Journey</Link>
						</motion.div>

						<motion.div
							className={styles["journey-right-container"]}
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						>
							<Image
								src={GoriGanga}
								alt="TREKKING"
								width={350}
								height={256}
								loading="eager"
								priority
								placeholder="blur"
							/>
							<p className={styles["journey-image-description"]}>
								Water-colour painting of the River Gori in Uttar Pradesh by
								James Manson (1791-1862), c.1826.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Upcoming Festival Card */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeInOut" }}
			>
				<SectionCard
					cardTitle={"UPCOMING FESTIVAL"}
					title={"Egaas Bagwal"}
					subTitle={"12 NOVEMBER · UTTARAKHAND"}
					description={
						'Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called "Bhailo", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills.'
					}
					image={GheeSankranti}
					readMoreLink={""}
					location={""}
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeInOut" }}
			>
				<SectionCard
					cardTitle="UPCOMING FAIR"
					title="Nanda Devi Mahotsav"
					subTitle="8 SEPTEMBER - 19 SEPTEMBER · NAINITAL"
					description="The Nanda Devi Mahotsav is a grand celebration dedicated to Goddess Nanda Devi, the revered deity of the Kumaon region. This vibrant festival, which takes place annually in Nainital, is deeply ingrained in the cultural fabric of Uttarakhand. It is believed to have started centuries ago to honor Nanda Devi, who is considered the protector of the region. The festival is marked by colorful processions, traditional dance performances, and rituals that attract devotees and tourists alike. The highlight of the event is the ‘Nanda Jaat Yatra,’ where a grand procession of devotees carries a palanquin of the goddess through the scenic landscapes of Uttarakhand, symbolizing her journey to her maternal home."
					image={Nanda_Sunanda}
					readMoreLink=""
					location="https://www.google.com/maps/place/Maa+Nanda+Devi+Temple,+Almora"
				/>
			</motion.div>

			{/* Notify Banner */}
			<motion.section
				className={styles.notifyBannerContainer}
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<div className={styles.colorBlend}></div>
				<div className={styles.notifyBannerImageContainer}>
					<Image
						src={Notify_Banner}
						alt="notify-early-banner-image"
						width={1440}
						height={460}
						placeholder="blur"
					/>
				</div>
				<div className={styles.notifyBannerTextContainer}>
					<h1 className={styles.notifyBannerHeading}>
						GET <span className={styles.greenText}>NOTIFIED</span> EARLY
					</h1>
					<p className={styles.notifyBannerMessage}>
						Get Upcoming Uttarakhand{" "}
						<span className={styles.greenText}>Festival</span> &{" "}
						<span className={styles.soilText}>Fair</span> Alerts!
					</p>
					<div className={styles.notifyBannerButtonContainer}>
						<p className={styles.notifyBannerButtonText}>Sign up Today!</p>
					</div>
				</div>
			</motion.section>

			{/* FAQ Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<Faq />
			</motion.div>
		</>
	);
}
