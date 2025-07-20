"use client"; // Marking this as a client component

import React, {useState} from "react"; // Import useState for managing state
import styles from "./TrekCard.module.css";
import MapModal from '../../components/ui/MapModal';

export type TrekDetails = {
    title: string;
    introduction: string;
    address: string;
    coordinates: number[];
    overview: string;
    route: string[];
    attractions: string[];
    culturalInsights: string[];
    physicalChallenges: string[];
    recommendedGear: string[];
    bestTimeToVisit: string;
    image: string; // Change this to an array of strings
};

type CardProps = {
    title: string;
    subTitle: string;
    trekDetails: TrekDetails;
    readMoreLink?: string;
};

/**
 * Renders a TrekCard component that displays information about a trek.
 * @example
 * <TrekCard title="Mount Everest" subTitle="The highest mountain" trekDetails={trekDetails} readMoreLink="link"/>
 * @param {CardProps} props - An object containing details such as title, subTitle, trekDetails, and readMoreLink.
 * @returns {JSX.Element} A rendered TrekCard component showcasing detailed trek information.
 * @description
 *   - Utilizes state to manage the expansion of additional trek details.
 *   - Includes conditional rendering for 'READ MORE' and 'READ LESS' functionality.
 *   - Integrates a modal managed by 'isMapOpen' to display the trek location on a map.
 */
export default function TrekCard(props: CardProps) {
    const {title, subTitle, trekDetails, readMoreLink} = props; // Destructure props
    const [isExpanded, setIsExpanded] = useState(false); // State to track the expanded content
    const [isMapOpen, setIsMapOpen] = useState(false);

    const handleOpenMap = () => setIsMapOpen(true);
    const handleCloseMap = () => setIsMapOpen(false);


    return (
        <section className={styles["card"]}>
            <div className={styles["left-card"]}>
                <h2 className={styles["title"]}>{title}</h2>
                <p className={styles["subTitle"]}>{subTitle}</p>
                <div className={styles["description"]}>
                    <p className={styles["description"]}>{trekDetails.introduction}</p>


                    {/* Conditional rendering of the extra content */}
                    {isExpanded && (
                        <div className={styles["readmore-div"]}>
                            <h2 className={styles['heading']}>&#9670; Overview</h2>
                            <p className={styles["description"]}>{trekDetails.overview}</p>
                            <h2 className={styles['heading']}>&#9670; Route</h2>
                            <p>
                                <ul className={styles['heading-list']}>
                                    {trekDetails.route.map((item, index) => (
                                        <li key={index} className={styles['list-item']}>{item}</li>
                                    ))}
                                </ul>
                            </p>

                            <h2 className={styles['heading']}>&#9670; Nearby Attractions</h2>
                            <p>
                                <ul className={styles['heading-list']}>
                                    {trekDetails.attractions.map((item, index) => (
                                        <li key={index} className={styles['list-item']}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <h2 className={styles['heading']}>&#9670; Physical Challenges</h2>
                            <p>
                                <ul className={styles['heading-list']}>
                                    {trekDetails.physicalChallenges.map((item, index) => (
                                        <li key={index} className={styles['list-item']}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <h2 className={styles['heading']}>&#9670; Recommended Gear</h2>
                            <p>
                                <ul className={styles['heading-list']}>
                                    {trekDetails.recommendedGear.map((item, index) => (
                                        <li key={index} className={styles['list-item']}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <h2 className={styles['heading']}>&#9670; Cultural Insights</h2>
                            <p>
                                <ul className={styles['heading-list']}>
                                    {trekDetails.culturalInsights.map((item, index) => (
                                        <li key={index} className={styles['list-item']}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <h2 className={styles['heading']}>&#9670; Best Time To Visit</h2>
                            <p className={styles["description"]}>{trekDetails.bestTimeToVisit}</p>

                        </div>
                    )}
                </div>

                <div className={styles["link-container"]}>
                    {/* Conditionally hide the 'READ MORE' link when expanded */}
                    {!isExpanded && (
                        <div className={styles["link-container1"]}>
                            <button onClick={() => {
                                setIsExpanded(!isExpanded)
                            }}>READ MORE
                            </button>
                        </div>
                    )}
                    {isExpanded && (
                        <div className={styles["link-container1"]}>
                            <button onClick={() => {
                                setIsExpanded(!isExpanded)
                            }}>READ LESS
                            </button>
                        </div>
                    )}
                    <div className={styles["link-container2"]}>
                        <button onClick={handleOpenMap}>VIEW LOCATION</button>
                    </div>
                </div>
            </div>

            <div className={styles["image-container"]}>
                <img src={trekDetails.image} alt={title} width={300} height={200}/>
            </div>


            <MapModal isOpen={isMapOpen} onClose={handleCloseMap} center={trekDetails.coordinates}
                      markerLocation={trekDetails.coordinates} zoom={10} info={trekDetails} subTitle={subTitle}/>


        </section>
    );
}
