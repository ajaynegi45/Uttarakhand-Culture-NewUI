import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/ui/Card";
import TrekkingHeroImage from "/public/heroImage.png";
import { trekDetails } from './location-detail';

export default function Trekking() {
    console.log('hello')
    console.log(trekDetails.length)
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

                <section className={styles["search-section"]}>
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
                </section>
            </header>

            <div className={styles["card-container"]}>
                <Card
                    title={"ROOPKUND TREK"}
                    subTitle={"HIGH RISK · 4536m · CHAMOLI"}
                    trekDetails={trekDetails[0]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"VALLEY OF FLOWERS TREK"}
                    subTitle={"MODERATE · 3658m · CHAMOLI"}
                    trekDetails={trekDetails[1]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"HAR KI DUN TREK"}
                    subTitle={"MODERATE · 3566m · UTTARKASHI"}
                    trekDetails={trekDetails[2]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"KEDARKANTHA TREK"}
                    subTitle={"EASY TO MODERATE · 3810m · UTTARKASHI"}
                    trekDetails={trekDetails[3]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"NANDA DEVI BASE CAMP TREK"}
                    subTitle={"MODERATE TO DIFFICULT · 4000m · CHAMOLI"}
                    trekDetails={trekDetails[4]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"PINDARI GLACIER TREK"}
                    subTitle={"MODERATE · 3660m · BAGESHWAR"}
                    trekDetails={trekDetails[5]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"BALI PASS TREK"}
                    subTitle={"DEMANDING · 4,950m · UTTARKASHI"}
                    trekDetails={trekDetails[6]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"KUMAON HIMALAYAS TREK"}
                    subTitle={"MODERATE · 4,200m · KUMAON"}
                    trekDetails={trekDetails[7]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"TUNGNATH CHOPTA TREK"}
                    subTitle={"EASY · 3,680m · CHAMOLI"}
                    trekDetails={trekDetails[8]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"RUPIN PASS TREK"}
                    subTitle={"DEMANDING · 4,650m · HIMACHAL PRADESH"}
                    trekDetails={trekDetails[9]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />

                <Card
                    title={"CHOPTA TO TUNGNATH AND BACK"}
                    subTitle={"EASY · 3,680m · CHAMOLI"}
                    trekDetails={trekDetails[10]} // Adjust the key according to your dictionary
                    readMoreLink="#"
                />
            </div>
        </>
    );
}
