import styles from "./page.module.css"
import Image from "next/image"
import Card from "@/components/ui/Card";
import TrekkingHeroImage from "/public/heroImage.png"
import Data from "../../../public/data/trekking-data.json"

export default function Trekking() {
    return (<>
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
                            <option value="" >Level</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className={styles["item"]}>
                        <label htmlFor="district" />
                        <select id="district">
                            <option value="" >District</option>
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
                            <option value="Moderate">2500m - 3500m </option>
                            <option value="High">3500m acclimatization</option>
                        </select>
                    </div>
                </div>
            </section>
        </header>

        <div className={styles["card-container"]}>
            {
                Data.map(data => {
                    return (
                        <Card title={data.title} subTitle={data.subTitle}
                            description={data.description}
                            image={data.image}
                        />
                    )
                })
            }

        </div>
    </>
    );
}
