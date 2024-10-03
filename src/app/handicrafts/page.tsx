import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/ui/Card";
import handicrafthero from "/public/handicrafthero.jpg";

// Ensure images are in the public folder (e.g., public/aipan.jpg)
export default function handicrafts() {
  return (
    <>
      <header className={styles["page-header"]}>
        <section className={styles["hero-section"]}>
          <div className={styles["text-container"]}>
            <h1>Handicrafts</h1>
            <p>DISCOVER THE ARTISTRY OF UTTARAKHAND</p>
          </div>
          <div className={styles["img-container"]}>
            <Image
              src={handicrafthero}
              alt="HANDICRAFTS"
              width="368"
              height="400"
              loading={"eager"}
              priority={true}
            />
          </div>
        </section>

        <section className={styles["featured-crafts"]}>
          <h2>Featured Crafts</h2>
          <div className={styles["craft-icons"]}>
            <div className={styles["craft-item"]}>
              <Image
                src="/wood.jpg"
                alt="Woodcarving"
                width={64}
                height={64}
              />
              <span>Woodcarving</span>
            </div>
            <div className={styles["craft-item"]}>
              <Image
                src="/tamta.jpg"
                alt="Textile Weaving"
                width={64}
                height={64}
              />
              <span>Copper Wire</span>
            </div>
            <div className={styles["craft-item"]}>
              <Image
                src="/ringal.jpg"
                alt="Metal Crafts"
                width={64}
                height={64}
              />
              <span>Ringal Crafts</span>
            </div>
            <div className={styles["craft-item"]}>
              <Image
                src="/AIPAN.jpg"
                alt="Pottery"
                width={64}
                height={64}
              />
              <span>Aipan</span>
            </div>
          </div>
        </section>
      </header>

      <div className={styles["card-container"]}>
        <Card
          title={"AIPAN ART"}
          subTitle={"INTRICATE DESIGNS · KUMAON REGION"}
          description={
            "Aipan is a traditional folk art form originating from the Kumaon region of Uttarakhand. These intricate designs are created on floors and walls during festivals, religious ceremonies, and special occasions. The patterns, made with rice paste, are believed to bring prosperity and happiness to households. The vibrant red background and white motifs symbolize purity and devotion."
          }
          image={"/AIPAN.jpg"} // Public folder image
        />

        <Card
          title={"WOOD CARVING"}
          subTitle={"TRADITIONAL CRAFT · GARHWAL REGION"}
          description={
            "The art of wood carving in Uttarakhand is a centuries-old tradition, particularly prominent in the Garhwal region. Artisans skillfully carve intricate designs on doors, windows, and temples, showcasing the region’s cultural heritage. These wooden artifacts are known for their precision and beauty, making them popular both for home décor and religious use."
          }
          image={"/wood.jpg"} // Public folder image
        />

        <Card
          title={"RINGAL CRAFT"}
          subTitle={"BAMBOO WEAVING · KUMAON & GARHWAL"}
          description={
            "Ringal craft is a form of bamboo weaving unique to the hills of Uttarakhand. Artisans create everyday utility items like baskets, mats, and furniture using the ringal bamboo plant. The craft not only supports the local economy but also promotes eco-friendly practices. The woven items are durable, functional, and environmentally sustainable."
          }
          image={"/ringal.jpg"} // Public folder image
        />

        <Card
          title={"WOOLEN HANDICRAFTS"}
          subTitle={"HANDWOVEN · HIMALAYAN REGIONS"}
          description={
            "Uttarakhand’s woolen handicrafts are famous for their warmth and fine quality. From shawls and scarves to woolen carpets and blankets, these products are handwoven by local women in the Himalayan regions. The use of traditional looms and natural dyes adds to the authenticity of these crafts, making them highly valued in both local and international markets."
          }
          image={"/woolen.jpg"} // Public folder image
        />

        <Card
          title={"COPPERWARE"}
          subTitle={"TRADITIONAL METALWORK · KUMAON"}
          description={
            "Copperware from Uttarakhand, particularly from the Kumaon region, is known for its craftsmanship and utility. Artisans create beautiful copper pots, utensils, and decorative items that are both functional and artistic. The copperware is believed to have health benefits and is widely used in households and religious ceremonies across the state."
          }
          image={"/tamta.jpg"} // Public folder image
        />
      </div>
    </>
  );
}
