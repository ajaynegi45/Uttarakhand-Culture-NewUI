"use client"; // Marking this as a client component
import styles from "./page.module.css";
import Image from "next/image";
import TrekCard from "@/components/ui/TrekCard";
import TrekkingHeroImage from "/public/heroImage.png";
import { trekDetails } from "./location-detail";
import { useState, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";

export default function Trekking() {
	const [difficultyLevel, setDifficultyLevel] = useState("");
	const [district, setDistrict] = useState("");
	const [altitude, setAltitude] = useState("");

	const handleFilterChange = (
		e: ChangeEvent<HTMLSelectElement>,
		filterType: string
	) => {
		const value = e.target.value;
		if (filterType === "difficulty") setDifficultyLevel(value);
		else if (filterType === "district") setDistrict(value);
		else if (filterType === "altitude") setAltitude(value);
	};

	const districts = Array.from(
		new Set(trekDetails.map((trek) => trek.district))
	);

	const filterTreks = trekDetails.filter((trek) => {
		const matchesDifficulty =
			difficultyLevel === "" ||
			trek.difficultyLevel.toLowerCase() === difficultyLevel.toLowerCase();
		const matchesDistrict =
			district === "" || trek.district.toLowerCase() === district.toLowerCase();

		let matchesAltitude = true;
		if (altitude) {
			if (altitude === "Low") {
				matchesAltitude = trek.altitude < 3500;
			} else if (altitude === "Moderate") {
				matchesAltitude = trek.altitude >= 3500 && trek.altitude <= 4000;
			} else if (altitude === "High") {
				matchesAltitude = trek.altitude > 4000;
			}
		}

		return matchesDifficulty && matchesDistrict && matchesAltitude;
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<header className={styles["page-header"]}>
				<section className={styles["hero-section"]}>
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
				</section>
			</header>

			<section className={styles["search-section"]}>
				<div className={styles["search-container"]}>
					<div className={styles["item"]}>
						<label htmlFor="difficulty-level" />
						<select
							id="difficulty-level"
							onChange={(e) => handleFilterChange(e, "difficulty")}
						>
							<option value="">Select Difficulty</option>
							<option value="EASY">EASY</option>
							<option value="MODERATE">MODERATE</option>
							<option value="DIFFICULT">DIFFICULT</option>
						</select>
					</div>
					<div className={styles["item"]}>
						<label htmlFor="district" />
						<select
							id="district"
							onChange={(e) => handleFilterChange(e, "district")}
						>
							<option value="">Select District</option>
							{districts.map((dist, index) => (
								<option key={index} value={dist}>
									{dist}
								</option>
							))}
						</select>
					</div>
					<div className={styles["item"]}>
						<label htmlFor="altitude" />
						<select
							id="altitude"
							onChange={(e) => handleFilterChange(e, "altitude")}
						>
							<option value="">Select Altitude</option>
							<option value="Low">Low (below 3500m)</option>
							<option value="Moderate">Moderate (3500m - 4000m)</option>
							<option value="High">High (above 4000m)</option>
						</select>
					</div>
				</div>
			</section>

			<div className={styles["card-container"]}>
				{filterTreks.length > 0 ? (
					filterTreks.map((trek, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }} // Start with each card hidden and lower
							whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
							transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered animation
							viewport={{ once: false }} // Allows repeated animations when scrolling back
							className={styles.card} // Adding a class for hover effect
						>
							<TrekCard
								title={trek.title}
								subTitle={`${trek.difficultyLevel} · ${trek.altitude}m · ${trek.district}`}
								trekDetails={trek}
								readMoreLink="#"
							/>
						</motion.div>
					))
				) : (
					<motion.div
						className={styles["not-available"]}
						initial={{ opacity: 0 }} // Start with opacity 0
						animate={{ opacity: 1 }} // Fade in
						transition={{ duration: 0.5 }} // Fade duration
					>
						<p>
							No treks available based on your filters. Please adjust your
							selections.
						</p>
					</motion.div>
				)}
			</div>

			<style jsx>{`
				.card {
					transition: transform 0.2s; // Transition for scaling
				}
				.card:hover {
					transform: scale(1.05); // Scale up on hover
				}
			`}</style>
		</motion.div>
	);
}
