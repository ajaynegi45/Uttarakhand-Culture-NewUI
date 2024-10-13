import Image from "next/image";
import styles from './page.module.css';

const cardData = [
  {
    title: "AIPAN ART",
    subTitle: "INTRICATE DESIGNS · KUMAON REGION",
    description:
      "Aipan is a traditional folk art form originating from the Kumaon region of Uttarakhand. These intricate designs are created on floors and walls during festivals, religious ceremonies, and special occasions. The patterns, made with rice paste, are believed to bring prosperity and happiness to households. The vibrant red background and white motifs symbolize purity and devotion.",
    image:
      "/aipan_art.webp",
  },
  {
    title: "WOOD CARVING",
    subTitle: "TRADITIONAL CRAFT · GARHWAL REGION",
    description:
      "The art of wood carving in Uttarakhand is a centuries-old tradition, particularly prominent in the Garhwal region. Artisans skillfully carve intricate designs on doors, windows, and temples, showcasing the region's cultural heritage. These wooden artifacts are known for their precision and beauty, making them popular both for home décor and religious use.",
    image:
      "/wood_craving.jpg",
  },
  {
    title: "RINGAL CRAFT",
    subTitle: "BAMBOO WEAVING · KUMAON & GARHWAL",
    description:
      "Ringal craft is a form of bamboo weaving unique to the hills of Uttarakhand. Artisans create everyday utility items like baskets, mats, and furniture using the ringal bamboo plant. The craft not only supports the local economy but also promotes eco-friendly practices. The woven items are durable, functional, and environmentally sustainable.",
    image:
      "/bamboo_craft.jpg",
  },
  {
    title: "WOOLEN HANDICRAFTS",
    subTitle: "HANDWOVEN · HIMALAYAN REGIONS",
    description:
      "Uttarakhand's woolen handicrafts are famous for their warmth and fine quality. From shawls and scarves to woolen carpets and blankets, these products are handwoven by local women in the Himalayan regions. The use of traditional looms and natural dyes adds to the authenticity of these crafts, making them highly valued in both local and international markets.",
    image:
      "/woolen_handicraft.jpg",
  },
  {
    title: "COPPERWARE",
    subTitle: "TRADITIONAL METALWORK · KUMAON",
    description:
      "Copperware from Uttarakhand, particularly from the Kumaon region, is known for its craftsmanship and utility. Artisans create beautiful copper pots, utensils, and decorative items that are both functional and artistic. The copperware is believed to have health benefits and is widely used in households and religious ceremonies across the state.",
    image:
      "/copper_wire.jpg",
  },
];

export default function Component() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerFlex}>
            <div className={styles.headerText}>
              <h1 className={styles.title}>Handicrafts</h1>
              <p className={styles.subtitle}>
                DISCOVER THE ARTISTRY OF UTTARAKHAND
              </p>
            </div>
            <div>
              <Image
                src="/traditinal_craft.jpg"
                alt="HANDICRAFTS"
                width={368}
                height={400}
                className={styles.headerImage}
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Craft Story</h2>
        <div className={styles.sectionFlex}>
          <div>
            <Image
              src="/handi-artisian-2.png"
              alt="Craftsman at work"
              width={500}
              height={300}
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.sectionText}>
            <p className={styles.sectionParagraph}>
              For generations, the artisans of Uttarakhand have been creating
              beautiful handicrafts that reflect the rich cultural heritage of
              the region. Our mission is to preserve these traditional crafts
              and bring them to a global audience.
            </p>
            <p className={styles.sectionParagraph}>
              Each piece in our collection is handcrafted with care, using
              techniques passed down through generations. From intricate wood
              carvings to vibrant textiles, our products showcase the skill and
              creativity of Uttarakhand's artisans.
            </p>
            <button className={styles.button}>Learn More</button>
          </div>
        </div>
      </section>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={200}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardSubtitle}>{card.subTitle}</p>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
