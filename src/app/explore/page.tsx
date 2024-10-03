import styles from "./page.module.css";
import SectionCard from "@/components/ui/SectionCard";
import Image from "next/image";
import Mountain from "/public/mountain.svg";
import Aipan from "/public/AIPAN.jpg";
import language from "/public/language.jpg";
import trekking from "/public/trekking.jpg";
import temple from "/public/temple.jpg";

export default function Explore() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1> Explore Uttarakhand</h1>
        <Image src={Mountain} alt={"Mountain Image"} />
      </div>

      <SectionCard
        cardTitle={"TREKKING IN UTTARAKHAND"}
        title={"EXPLORE TREKKING"}
        subTitle={"FIND OLD TREKKING ROUTES, SEARCH PLACES TO SUIT YOUR NEEDS"}
        description={
          "Trekking in Uttarakhand offers an exhilarating experience through some of the most breathtaking landscapes in the Himalayas. Known as the 'Land of the Gods,' Uttarakhand is home to a diverse range of trekking trails that cater to both beginners and seasoned trekkers. From the popular Valley of Flowers, known for its vibrant alpine flora, to the challenging Roopkund trek, famous for its mysterious skeletal lake, the state provides a perfect blend of adventure and natural beauty. Trekkers can explore pristine forests, towering snow-capped peaks, crystal-clear rivers, and ancient temples along the way. The spiritual significance of many trails, such as the Kedarnath and Hemkund Sahib treks, adds a deeper dimension to the journey, attracting not only nature enthusiasts but also pilgrims. Whether it's the awe-inspiring beauty of the Nanda Devi National Park or the serene paths of Chopta, trekking in Uttarakhand offers a chance to connect with nature while discovering the cultural richness of the region's remote villages. With its well-marked trails and stunning vistas at every turn, Uttarakhand remains a paradise for trekkers seeking adventure, tranquility, and a deep connection to the Himalayas."
        }
        image={trekking}
        readMoreLink={"/trekking"}
      />

      <SectionCard
        cardTitle={"UTTARAKHAND LANGUAGE"}
        title={"EXPLORE LANGUAGE"}
        subTitle={"KUMAONI · GARHWALI · JAUNSARI"}
        description={
          "Uttarakhand is a state rich in linguistic diversity, with its residents speaking several regional languages and dialects. The most widely spoken languages include Kumaoni, Garhwali, and Jaunsari, which vary based on the region's geography and communities. Each of these languages carries a deep cultural significance, passed down through generations, reflecting the local folklore, traditions, and lifestyle. These languages serve as a vital link to the past, preserving Uttarakhand’s heritage through oral literature, songs, and storytelling. By learning and promoting these languages, we continue to celebrate and preserve the unique identity of this beautiful region."
        }
        image={language}
        readMoreLink={"/language"}
      />

      <SectionCard
        cardTitle={"UTTARAKHAND HANDICRAFTS"}
        title={"EXPLORE HANDICRAFTS AND ARTISANS"}
        subTitle={"AIPAN · WOOD CARVING · WOOLEN"}
        description={
          "Discover the rich artistic heritage of Uttarakhand, where local artisans create traditional handicrafts like Aipan paintings, intricate wood carvings, and beautifully woven woolen products. Each craft reflects the cultural soul of the region, passed down through generations. From decorative items to practical wearables, these handicrafts make for unique souvenirs and offer a glimpse into the skilled craftsmanship that thrives in the state's villages and towns."
        }
        image={Aipan}
        readMoreLink={"/handicrafts"}
      />

      <SectionCard
        cardTitle={"UTTARAKHAND TEMPLES"}
        title={"EXPLORE THE DEVBHOOMI"}
        subTitle={"KEDARNATH · BADRINATH · GANGOTRI"}
        description={
          "Known as 'Devbhoomi' or the 'Land of the Gods,' Uttarakhand is home to some of the most revered temples in India. Explore ancient sites like Kedarnath, Badrinath, Gangotri, and Yamunotri, each with deep spiritual significance and rich mythology. Pilgrims from across the world visit these sacred places for blessings, peace, and the awe-inspiring natural beauty that surrounds them. Whether you're seeking spiritual fulfillment or cultural insight, the temples of Uttarakhand offer a profound connection to India's spiritual heritage."
        }
        image={temple}
        readMoreLink={"/temples"}
      />

      <section>
        <div className={styles["text-container"]}>
          <p>We’re currently building this page…</p>

          <p>
            In the meantime, check out the pages we’ve already completed below:
          </p>
        </div>
      </section>
    </>
  );
}
