import styles from "./page.module.css"
import SectionCard from "@/components/ui/SectionCard";
import Image from "next/image";
import Mountain from '/public/mountain.svg';
import Bagwal from "/public/bagwal.jpg";

export default function Explore() {
    return (
        <>
            <div className={styles.pageHeader}>
                <h1> Explore Uttarakhand </h1>
                <Image src={Mountain} alt={"Mountain Image"}/>
            </div>


            <SectionCard cardTitle={"TREKKING IN UTTARAKHAND"} title={"EXPLORE TREKKING"}
                         subTitle={"FIND OLD TREKKING ROUTES, SEARCH PLACES TO SUIT YOUR NEEDS"}
                         description={"Trekking in Uttarakhand offers an exhilarating experience through some of the most breathtaking landscapes in the Himalayas. Known as the 'Land of the Gods,' Uttarakhand is home to a diverse range of trekking trails that cater to both beginners and seasoned trekkers. From the popular Valley of Flowers, known for its vibrant alpine flora, to the challenging Roopkund trek, famous for its mysterious skeletal lake, the state provides a perfect blend of adventure and natural beauty. Trekkers can explore pristine forests, towering snow-capped peaks, crystal-clear rivers, and ancient temples along the way. The spiritual significance of many trails, such as the Kedarnath and Hemkund Sahib treks, adds a deeper dimension to the journey, attracting not only nature enthusiasts but also pilgrims. Whether it's the awe-inspiring beauty of the Nanda Devi National Park or the serene paths of Chopta, trekking in Uttarakhand offers a chance to connect with nature while discovering the cultural richness of the region's remote villages. With its well-marked trails and stunning vistas at every turn, Uttarakhand remains a paradise for trekkers seeking adventure, tranquility, and a deep connection to the Himalayas."}
                         image={Bagwal} readMoreLink={"/trekking"}/>

            <SectionCard cardTitle={"UTTARAKHAND LANGUAGE"} title={"EXPLORE LANGUAGE"}
                         subTitle={"KUMAONI · GARHWALI · JAUNSARI"}
                         description={"Uttarakhand is a state rich in linguistic diversity, with its residents speaking several regional languages and dialects. The most widely spoken languages include Kumaoni, Garhwali, and Jaunsari, which vary based on the region's geography and communities. Each of these languages carries a deep cultural significance, passed down through generations, reflecting the local folklore, traditions, and lifestyle. These languages serve as a vital link to the past, preserving Uttarakhand’s heritage through oral literature, songs, and storytelling. By learning and promoting these languages, we continue to celebrate and preserve the unique identity of this beautiful region."}
                         image={Bagwal} readMoreLink={"/language"}/>

            <section>

                <div className={styles["text-container"]}>
                    <p>We’re currently building this page…</p>

                    <p>In the meantime, check out the pages we’ve already completed
                        below:</p>
                </div>
            </section>

        </>
    );
}
