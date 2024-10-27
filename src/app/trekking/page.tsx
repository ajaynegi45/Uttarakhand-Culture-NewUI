"use client"; // Marking this as a client component
import styles from "./page.module.css";
import Image from "next/image";
import TrekCard from "@/components/ui/TrekCard";
import TrekkingHeroImage from "/public/heroImage.png";
import { trekDetails } from './location-detail';
import { useState } from "react";

export default function Trekking() {
    const [difficultyLevel, setDifficultyLevel] = useState("");
    const [district, setDistrict] = useState("");
    const [altitude, setAltitude] = useState("");

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, filterType: string) => {
        const value = e.target.value;
        if (filterType === "difficulty") setDifficultyLevel(value);
        else if (filterType === "district") setDistrict(value);
        else if (filterType === "altitude") setAltitude(value);
    };

    // Extract unique districts from trekDetails
    const districts = Array.from(new Set(trekDetails.map(trek => trek.district)));

    const filterTreks = trekDetails.filter(trek => {
        const matchesDifficulty = difficultyLevel === "" || trek.difficultyLevel.toLowerCase() === difficultyLevel.toLowerCase();
        const matchesDistrict = district === "" || trek.district.toLowerCase() === district.toLowerCase();
        
        let matchesAltitude = true; // Default to true (not filtering)
        if (altitude) {
            // Define altitude ranges for filtering
            if (altitude === "Low") {
                matchesAltitude = trek.altitude < 3500; // Altitude below 3500m
            } else if (altitude === "Moderate") {
                matchesAltitude = trek.altitude >= 3500 && trek.altitude <= 4000; // Altitude between 3500m and 4000m
            } else if (altitude === "High") {
                matchesAltitude = trek.altitude > 4000; // Altitude above 4000m
            }
        }

        return matchesDifficulty && matchesDistrict && matchesAltitude;
    });

    return (
        <>
            <header className={styles["page-header"]}>
                <section className={styles["hero-section"]}>
                    <div className={styles["text-container"]}>
                        <h1>Trekking</h1>
                        <p>EXPLORE HIDDEN PLACES IN UTTARAKHAND</p>
                    </div>
                    <div className={styles["img-container"]}>
                        <Image src={TrekkingHeroImage} alt="TREKKING" width="368" height="400" loading={"eager"} priority={true} />
                    </div>
                </section>
            </header>

            <section className={styles["search-section"]}>
                    <div className={styles["search-container"]}>
                        <div className={styles["item"]}>
                            <label htmlFor="difficulty-level" />
                            <select id="difficulty-level"
                            onChange={(e) => handleFilterChange(e, "difficulty")}
                        >
                            <option value="">Select Difficulty</option>
                            <option value="EASY">EASY</option>
                            <option value="EASY TO MODERATE">EASY TO MODERATE</option>
                            <option value="MODERATE">MODERATE</option>
                            <option value="MODERATE TO DIFFICULT">MODERATE TO DIFFICULT</option>
                            <option value="DEMANDING">DEMANDING</option>
                            <option value="HIGH RISK">HIGH RISK</option>
                        </select>
                    </div>

                    <div className={styles["item"]}>
                            <label htmlFor="district" />
                            <select id="district"
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
                            <select id="altitude"
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
                        <TrekCard
                            key={index}
                            title={trek.title}
                            subTitle={`${trek.difficultyLevel} · ${trek.altitude}m · ${trek.district}`}
                            trekDetails={trek}
                            readMoreLink="#"
                        />
                    ))
                ) : (
                    <div className={styles["not-available"]}>
                        <p>No treks available based on your filters. Please adjust your selections.</p>
                    </div>
                )}
            </div>
        </>
    );
}
