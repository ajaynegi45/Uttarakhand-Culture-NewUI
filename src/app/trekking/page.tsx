"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/ui/Card";
import TrekkingHeroImage from "/public/heroImage.png";
import { motion } from "framer-motion";

export default function Trekking() {
	// Animation variants
	const headerVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<>
			<header className={styles["page-header"]}>
				<motion.section
					className={styles["hero-section"]}
					initial="hidden"
					whileInView="visible" // Change from animate to whileInView
					variants={headerVariants}
					transition={{ duration: 0.5 }}
				>
					<div className={styles["text-container"]}>
						<h1>Trekking</h1>
						<p>EXPLORE HIDDEN PLACES IN UTTARAKHAND</p>
					</div>
					<div className={styles["img-container"]}>
						<Image
							src={TrekkingHeroImage}
							alt="TREKKING"
							width="368"
							height="400"
							loading={"eager"}
							priority={true}
						/>
					</div>
				</motion.section>

				<motion.section
					className={styles["search-section"]}
					initial="hidden"
					whileInView="visible" // Change from animate to whileInView
					variants={headerVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className={styles["search-container"]}>
						<div className={styles["item"]}>
							<label htmlFor="difficulty-level" />
							<select id="difficulty-level">
								<option value="">Level</option>
								<option value="Low">Low</option>
								<option value="Moderate">Moderate</option>
								<option value="High">High</option>
							</select>
						</div>

						<div className={styles["item"]}>
							<label htmlFor="district" />
							<select id="district">
								<option value="">District</option>
								<option value="Almora">Almora</option>
								<option value="Bageshwar">Bageshwar</option>
								<option value="Chamoli">Chamoli</option>
								<option value="Champawat">Champawat</option>
								<option value="Dehradun">Dehradun</option>
								<option value="Haridwar">Haridwar</option>
								<option value="Nainital">Nainital</option>
								<option value="Pauri Garhwal">Pauri Garhwal</option>
								<option value="Pithoragarh">Pithoragarh</option>
								<option value="Rudraprayag">Rudraprayag</option>
								<option value="Tehri Garhwal">Tehri Garhwal</option>
								<option value="Udham Singh Nagar">Udham Singh Nagar</option>
								<option value="Uttarkashi">Uttarkashi</option>
							</select>
						</div>

						<div className={styles["item"]}>
							<label htmlFor="altitude" />
							<select id="altitude">
								<option value="">Altitude</option>
								<option value="Low">2500m</option>
								<option value="Moderate">2500m - 3500m</option>
								<option value="High">3500m acclimatization</option>
							</select>
						</div>
					</div>
				</motion.section>
			</header>

			<div className={styles["card-container"]}>
				{/* Animate each Card */}
				{[
					{
						title: "ROOPKUND TREK",
						subTitle: "HIGH RISK · 4536m · CHAMOLI",
						description:
							"If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
							"Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
							"Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul.",
						image: "/roopkund.png",
					},
					{
						title: "VALLEY OF FLOWERS TREK",
						subTitle: "MODERATE · 3658m · CHAMOLI",
						description:
							"The Valley of Flowers is a UNESCO World Heritage Site renowned for its stunning array of alpine flowers and meadows. The trek takes you through lush greenery, over gurgling streams, and past snow-capped peaks. The vibrant meadows, filled with a variety of flora, come alive during the monsoon season, creating a breathtaking landscape. The trek also includes views of the majestic Nanda Devi and other Himalayan peaks.",
						image: "/valley_of_flowers.png",
					},
					{
						title: "HAR KI DUN TREK",
						subTitle: "MODERATE · 3566m · UTTARKASHI",
						description:
							"Har Ki Dun is a charming valley nestled in the western Garhwal Himalayas. The trek is known for its untouched beauty and scenic views of the Swargarohini and Bandarpoonch peaks. As you hike through pine forests, terraced fields, and quaint villages, you’ll experience the rich cultural heritage of the region. The serene beauty of the Har Ki Dun valley, with its abundant flora and fauna, offers a perfect blend of adventure and tranquility.",
						image: "/har_ki_dun.png",
					},
					{
						title: "KEDARKANTHA TREK",
						subTitle: "EASY TO MODERATE · 3810m · UTTARKASHI",
						description:
							"The Kedarkantha Trek is popular for its snow-covered landscapes and panoramic views. The trail passes through dense oak and pine forests, and the summit offers spectacular views of the surrounding peaks, including the Yamunotri and Gangotri ranges. The trek is ideal for beginners and provides an excellent introduction to high-altitude trekking. The stunning sunrise views from the summit are a highlight of this trek.",
						image: "/kedarkantha.png",
					},
					{
						title: "NANDA DEVI BASE CAMP TREK",
						subTitle: "MODERATE TO DIFFICULT · 4000m · CHAMOLI",
						description:
							"The Nanda Devi Base Camp Trek is a remote and challenging trek that takes you close to the majestic Nanda Devi, India's second-highest peak. The trek offers a diverse range of landscapes, from dense forests and alpine meadows to rocky ridges and glaciers. The base camp provides spectacular views of Nanda Devi and its surrounding peaks. This trek is best suited for experienced trekkers due to its rugged terrain and high altitude.",
						image: "/nanda_devi_base_camp.png",
					},
					{
						title: "PINDARI GLACIER TREK",
						subTitle: "MODERATE · 3660m · BAGESHWAR",
						description:
							"The Pindari Glacier Trek takes you to the base of one of the most famous glaciers in the Kumaon Himalayas. The trek features beautiful alpine meadows, dense forests, and stunning views of the Nanda Devi and Panchachuli peaks. The glacier itself is a captivating sight, and the trek offers a chance to witness the pristine natural beauty of the region. The trek is known for its serene environment and picturesque landscapes.",
						image: "/pindari_glacier.png",
					},
					{
						title: "BALI PASS TREK",
						subTitle: "DEMANDING · 4,950m · UTTARKASHI",
						description:
							"The Bali Pass Trek is a challenging adventure that crosses a high-altitude pass offering stunning views of the Garhwal Himalayas. The trek traverses through picturesque villages, lush forests, and alpine meadows before reaching the Bali Pass at 4,950 meters. The panoramic views from the pass are spectacular, with sights of peaks like Kedar Dome and the Swargarohini range. This trek is best suited for experienced trekkers due to its demanding nature and high altitude.",
						image: "/bali_pass.png",
					},
					{
						title: "KUMAON HIMALAYAS TREK",
						subTitle: "MODERATE · 4,200m · KUMAON",
						description:
							"The Kumaon Himalayas offer a plethora of trekking routes that provide breathtaking views of the snow-capped peaks and serene landscapes. The trek takes you through quaint villages, lush forests, and high-altitude meadows, showcasing the region's diverse flora and fauna. Trekking in the Kumaon region is a unique experience, allowing you to immerse yourself in the local culture and enjoy the stunning vistas of the majestic Himalayan peaks. The region is rich in culture and wildlife, making this trek a rewarding experience for nature lovers and adventure seekers alike.",
						image: "/kumaon_himalayas.png",
					},
				].map((card, index) => (
					<motion.div
						key={index}
						initial="hidden"
						whileInView="visible" // Change from animate to whileInView
						variants={cardVariants}
						transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger the delay
					>
						<Card
							title={card.title}
							subTitle={card.subTitle}
							description={card.description}
							image={card.image}
						/>
					</motion.div>
				))}
			</div>
		</>
	);
}
