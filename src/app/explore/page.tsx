import styles from "./page.module.css"
import SectionCard from "@/components/ui/SectionCard";
import Image from "next/image";
import Mountain from '/public/mountain.svg';
import Bagwal from "/public/bagwal.jpg";
import Trekking from "/public/trekking.avif";
import Music from "/public/music.avif";
import Tungnath from "/public/temple/Tungnath.avif";

export default function Explore() {
    return (
        <>
            <div className={styles.pageHeader}>
                <h1> Explore Uttarakhand</h1>
                <Image src={Mountain} alt={"Mountain Image"}/>
            </div>


            <SectionCard
                cardTitle={"TREKKING IN UTTARAKHAND"}
                title={"EXPLORE TREKKING"}
                subTitle={"FIND OLD TREKKING ROUTES, SEARCH PLACES TO SUIT YOUR NEEDS"}
                description={"Trekking in Uttarakhand offers an exhilarating experience through some of the most breathtaking landscapes in the Himalayas. Known as the 'Land of the Gods,' Uttarakhand is home to a diverse range of trekking trails that cater to both beginners and seasoned trekkers. From the popular Valley of Flowers, known for its vibrant alpine flora, to the challenging Roopkund trek, famous for its mysterious skeletal lake, the state provides a perfect blend of adventure and natural beauty. Trekkers can explore pristine forests, towering snow-capped peaks, crystal-clear rivers, and ancient temples along the way. The spiritual significance of many trails, such as the Kedarnath and Hemkund Sahib treks, adds a deeper dimension to the journey, attracting not only nature enthusiasts but also pilgrims. Whether it's the awe-inspiring beauty of the Nanda Devi National Park or the serene paths of Chopta, trekking in Uttarakhand offers a chance to connect with nature while discovering the cultural richness of the region's remote villages. With its well-marked trails and stunning vistas at every turn, Uttarakhand remains a paradise for trekkers seeking adventure, tranquility, and a deep connection to the Himalayas."}
                image={Trekking} readMoreLink={"/trekking"}
            />

            <SectionCard
                cardTitle={"THE ABODE OF GODS"}
                title={"EXPLORE SACRED TEMPLES"}
                subTitle={"DIVINE HERITAGE · SPIRITUAL JOURNEYS · MYSTIC MOUNTAINS"}
                description={"Temples in Uttarakhand are not just places of worship—they are timeless sentinels of the Himalayan spirit. Nestled amid dense forests, perched on rugged cliffs, and overlooking serene rivers, these sacred shrines reflect the region’s deep-rooted faith and living traditions. From the Char Dham pilgrimage sites of Badrinath, Kedarnath, Gangotri, and Yamunotri, to ancient hilltop shrines like Kasar Devi and Surkanda Devi, every temple tells a story of devotion and legend. Pilgrims, travelers, and seekers find solace in their tranquil courtyards, while intricate stone carvings and centuries-old rituals preserve the region’s rich spiritual heritage. Here, amidst the whispering pines and snow-clad peaks, the divine and the earthly blend seamlessly."}
                image={Tungnath}
                readMoreLink={"/temple"}
            />

            <SectionCard
                cardTitle={"THE SOUND OF THE HILLS"}
                title={"EXPLORE FOLK MUSIC"}
                subTitle={"SONGS OF DEVOTION · RITUALS · MOUNTAIN LIFE"}
                description={"Folk music in Uttarakhand is the living heartbeat of its people—echoing through its valleys, temples, and terraced fields. Sung in Kumaoni, Garhwali, and Jaunsari, these songs narrate tales of love, longing, bravery, devotion, and everyday village life. Passed down orally over generations, they are performed during seasonal festivals, marriages, harvests, and spiritual rituals. Traditional instruments like the dhol, damau, hudka, and ransingha accompany these melodies, creating powerful rhythms that resonate with the land’s spirit. Whether it's the soulful 'Jagar' invoking local deities, the celebratory beats of 'Chhopati' and 'Jhoda', or the nostalgic ballads sung during transhumance, folk music binds the community and preserves its cultural roots. In every note, Uttarakhand's mountains sing their timeless story."}
                image={Music}
                readMoreLink={"/folk-music"}
            />


            <SectionCard
                cardTitle={"UTTARAKHAND LANGUAGE"}
                title={"EXPLORE LANGUAGE"}
                subTitle={"KUMAONI · GARHWALI · JAUNSARI"}
                description={"Uttarakhand is a state rich in linguistic diversity, with its residents speaking several regional languages and dialects. The most widely spoken languages include Kumaoni, Garhwali, and Jaunsari, which vary based on the region's geography and communities. Each of these languages carries a deep cultural significance, passed down through generations, reflecting the local folklore, traditions, and lifestyle. These languages serve as a vital link to the past, preserving Uttarakhand’s heritage through oral literature, songs, and storytelling. By learning and promoting these languages, we continue to celebrate and preserve the unique identity of this beautiful region."}
                image={Bagwal} readMoreLink={"/language"}
            />
        </>
    );
}
