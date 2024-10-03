import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/ui/Card";
import TrekkingHeroImage from "/public/heroImage.png";

export default function Trekking() {
  return (
    <>
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
                <option value="Moderate">2500m - 3500m </option>
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
          description={
            "If you’re trekking in India, the Roopkund trek is a must-do! It’s got everything going for it. Deep virgin forests, gurgling brooks, breath-taking campsites, miles of undulating meadows, snow and ice and the taste of a great adventure as you climb from 8,000 ft to 16,000 ft in six days.\n" +
            "Roopkund, perhaps the most popular trek in India, is almost picture-perfect. The Roopkund trail climbs out of splendid dark forests suddenly bursting into Ali and Bedni Bugyal, arguably India’s most beautiful high altitude meadows. Out of the meadows, the trail quickly gets into terrific alpine stretches.\n" +
            "Climbing on snow to the Roopkund lake is a heart-pounding thrill. The beautiful Mt Trishul looms over the setting getting closer as you climb higher when at a ridge above Roopkund, only air separates the trekker from them and Trishul."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"VALLEY OF FLOWERS TREK"}
          subTitle={"MODERATE · 3658m · CHAMOLI"}
          description={
            "The Valley of Flowers is a UNESCO World Heritage Site renowned for its stunning array of alpine flowers and meadows. The trek takes you through lush greenery, over gurgling streams, and past snow-capped peaks. The vibrant meadows, filled with a variety of flora, come alive during the monsoon season, creating a breathtaking landscape. The trek also includes views of the majestic Nanda Devi and other Himalayan peaks."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"HAR KI DUN TREK"}
          subTitle={"MODERATE · 3566m · UTTARKASHI"}
          description={
            "Har Ki Dun is a charming valley nestled in the western Garhwal Himalayas. The trek is known for its untouched beauty and scenic views of the Swargarohini and Bandarpoonch peaks. As you hike through pine forests, terraced fields, and quaint villages, you’ll experience the rich cultural heritage of the region. The serene beauty of the Har Ki Dun valley, with its abundant flora and fauna, offers a perfect blend of adventure and tranquility."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"KEDARKANTHA TREK"}
          subTitle={"EASY TO MODERATE · 3810m · UTTARKASHI"}
          description={
            "The Kedarkantha Trek is popular for its snow-covered landscapes and panoramic views. The trail passes through dense oak and pine forests, and the summit offers spectacular views of the surrounding peaks, including the Yamunotri and Gangotri ranges. The trek is ideal for beginners and provides an excellent introduction to high-altitude trekking. The stunning sunrise views from the summit are a highlight of this trek."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"NANDA DEVI BASE CAMP TREK"}
          subTitle={"MODERATE TO DIFFICULT · 4000m · CHAMOLI"}
          description={
            "The Nanda Devi Base Camp Trek is a remote and challenging trek that takes you close to the majestic Nanda Devi, India's second-highest peak. The trek offers a diverse range of landscapes, from dense forests and alpine meadows to rocky ridges and glaciers. The base camp provides spectacular views of Nanda Devi and its surrounding peaks. This trek is best suited for experienced trekkers due to its rugged terrain and high altitude."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"PINDARI GLACIER TREK"}
          subTitle={"MODERATE · 3660m · BAGESHWAR"}
          description={
            "The Pindari Glacier Trek takes you to the base of one of the most famous glaciers in the Kumaon Himalayas. The trek features beautiful alpine meadows, dense forests, and stunning views of the Nanda Devi and Panchachuli peaks. The glacier itself is a captivating sight, and the trek offers a chance to witness the pristine natural beauty of the region. The trek is known for its serene environment and picturesque landscapes."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"BALI PASS TREK"}
          subTitle={"DEMANDING · 4,950m · UTTARKASHI"}
          description={
            "The Bali Pass Trek is a challenging adventure that crosses a high-altitude pass offering stunning views of the Garhwal Himalayas. The trek traverses through picturesque villages, lush forests, and alpine meadows before reaching the Bali Pass at 4,950 meters. The panoramic views from the pass are spectacular, with sights of peaks like Kedar Dome and the Swargarohini range. This trek is best suited for experienced trekkers due to its demanding nature and high altitude."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"KUMAON HIMALAYAS TREK"}
          subTitle={"MODERATE · 4,200m · KUMAON"}
          description={
            "The Kumaon Himalayas Trek offers a diverse range of landscapes, from lush green valleys to rugged alpine terrain. The trek includes visits to picturesque villages, serene lakes, and high-altitude meadows. Highlights include views of the majestic Nanda Devi and Panchachuli peaks. This trek is known for its beautiful scenery, tranquil environment, and the opportunity to experience the unique culture of the Kumaon region."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"TUNGNATH CHOPTA TREK"}
          subTitle={"EASY · 3,680m · CHAMOLI"}
          description={
            "The Tungnath Chopta Trek is a relatively easy trek that takes you to the highest Shiva temple in the world, Tungnath. The trek starts from the small town of Chopta and winds through lush green meadows and dense forests. The temple, located at an altitude of 3,680 meters, offers breathtaking views of the surrounding Himalayan peaks, including Chaukhamba and Trishul. This trek is ideal for those seeking a short yet rewarding adventure."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"RUPIN PASS TREK"}
          subTitle={"DEMANDING · 4,650m · HIMACHAL PRADESH"}
          description={
            "The Rupin Pass Trek is an exhilarating adventure that takes you from the lush green meadows of Uttarakhand to the rugged terrains of Himachal Pradesh. The trek involves crossing the Rupin Pass at an altitude of 4,650 meters, offering stunning views of the Dhauladhar and Kinnaur ranges. The trail includes diverse landscapes, from dense forests and gushing streams to snow-covered slopes and high-altitude meadows. This trek is suited for experienced trekkers looking for a challenging experience."
          }
          image={"/roopkund.jpg"}
        />

        <Card
          title={"CHOPTA TO TUNGNATH AND BACK"}
          subTitle={"EASY · 3,680m · CHAMOLI"}
          description={
            "This short trek from Chopta to Tungnath and back is a popular choice for those looking for a quick yet rewarding adventure. The trail passes through verdant meadows and forests, leading up to the Tungnath Temple. At an altitude of 3,680 meters, the temple offers panoramic views of the Himalayan peaks, including Trishul and Chaukhamba. The trek is perfect for beginners and those with limited time."
          }
          image={"/roopkund.jpg"}
        />
      </div>
    </>
  );
}
