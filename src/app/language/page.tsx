"use client";
import styles from "@/app/language/page.module.css";
import Image from "next/image";
import LanguageHeroImage from "/public/languageHeroImage.webp";
import InfoItem from "@/components/ui/InfoItem";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function Language() {
	return (
		<>
			{/* Hero Section */}
			<motion.section
				className={styles["language-hero-container"]}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className={styles["language-text-container"]}>
					<h1>Language</h1>
					<p>
						The soul of Uttarakhand resides in its languages Kumaoni, Garhwali,
						and Jaunsari - let&apos;s keep them breathing
					</p>
				</div>
				<motion.div
					className={styles["language-img-container"]}
					whileHover={{ scale: 1.05 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					<Image
						src={LanguageHeroImage}
						alt="Language Map"
						width="538"
						height="500"
						loading="eager"
						priority={true}
					/>
				</motion.div>
			</motion.section>

			{/* Importance of Language Section */}
			<motion.section
				className={styles["language-importance-container"]}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className={styles["language-importance-title-container"]}>
					<p>Why speaking in mother tongue is important at home?</p>
				</div>
				<div className={styles["language-importance-item-container"]}>
					{/* Info Items */}
					<InfoItem
						title="Cultural Heritage"
						description="Using the mother tongue at home preserves cultural heritage and traditions, connecting children with their roots and giving them a sense of belonging to their community."
					/>
					<InfoItem
						title="Emotional Bonding"
						description="Our cultural heritage is often tied to emotions, and speaking mother tongue at home creates emotional bonding among family members. This emotional bonding allows for authentic emotional expression, which is essential for cognitive development."
					/>
					<InfoItem
						title="Cognitive Development"
						description="Children who speak their mother tongue develop cognitive skills more effectively. It enhances mental flexibility and improves problem-solving abilities."
					/>
					<InfoItem
						title="Linguistic Skills"
						description="Speaking multiple languages, starting with the mother tongue boosts linguistic abilities. It lays a strong foundation for learning additional languages later in life."
					/>
					<InfoItem
						title="Communication Clarity"
						description="The mother tongue enables clearer communication within the family, reducing misunderstandings and fostering a harmonious home environment."
					/>
					<InfoItem
						title="Academic Success"
						description="Research suggests that children who are proficient in their mother tongue often perform better academically, as it strengthens the foundation for learning other subjects."
					/>
					<InfoItem
						title="Self-Esteem"
						description="Using the mother tongue at home boosts self-esteem and confidence. Children feel valued and secure in their cultural identity, fostering a positive self-image."
					/>
					<InfoItem
						title="Heritage Preservation"
						description="Speaking the mother tongue at home is a way to preserve and pass down folklore, proverbs, and historical stories, enriching the family's heritage for future generations."
					/>
				</div>
			</motion.section>

			{/* Uttarakhand Language Title */}
			<motion.div
				className={styles["uttarakhand-language-title-container"]}
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<p>UTTARAKHAND LANGUAGE</p>
			</motion.div>

			{/* Language Cards Section */}
			<motion.section
				className={styles["uttarakhand-language-container"]}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				{/* Language Cards with Hover Animation */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					<Card
						title="KUMAONI LANGUAGE"
						subTitle="Almora, Bageshwar, Champawat, Nainital, Pithoragarh, Udham Singh Nagar"
						description="Kumaoni is a Central Pahari language spoken in the Kumaon region of Uttarakhand. It has several dialects, including Kumaoni proper, Johari, and Danpuriya. Kumaoni is known for its distinctive grammar and vocabulary, which reflect the region's unique cultural heritage. With around 2 million speakers, Kumaoni is an important language in Uttarakhand. It has a rich literary tradition, including poetry, folk tales, and songs. Efforts are being made to develop Kumaoni language education and media to promote its use and preservation."
						image=""
						readMoreLink=""
					/>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					<Card
						title="GARHWALI LANGUAGE"
						subTitle="Dehradun, Haridwar, Pauri - Tehri Garhwal, Uttarkashi, Chamoli, Rudraprayag"
						description="Garhwali is a Central Pahari language spoken in the Garhwal region of Uttarakhand. It has various dialects, including Badhani, Lohbya, and Majh-Kumaiya. Garhwali is known for its poetic and musical quality, with a rich tradition of folk songs and stories. It is closely tied to the region's culture and identity. With around 2.5 million speakers, Garhwali is a widely spoken language in Uttarakhand. Efforts are being made to preserve and promote Garhwali through language documentation, education, and cultural programs."
						image=""
						readMoreLink=""
					/>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					<Card
						title="JAUNSARI LANGUAGE"
						subTitle="Jaunsar - Bawar region of Dehradun"
						description="Jaunsari is a Central Pahari language spoken in the Jaunsar-Bawar region of Dehradun district, Uttarakhand. It is a small language with around 100,000 speakers. Jaunsari is known for its unique dialects, including Jaunsari proper and Bawari. The language is closely tied to the region's culture and traditions. Jaunsari has a rich oral tradition, with stories, songs, and folk tales passed down through generations. Efforts are being made to document and preserve Jaunsari through language education and cultural programs to ensure its survival for future generations."
						image=""
						readMoreLink=""
					/>
				</motion.div>
			</motion.section>
		</>
	);
}
