import styles from "@/app/language/page.module.css";
import Image from "next/image";
import utharfood from "/public/utharfood.jpg";
import InfoItem from "@/components/ui/InfoItem";
import Card from "@/components/ui/Card";

export default function Language() {
    return (
        <>
            <section className={styles["language-hero-container"]}>
                <div className={styles["language-text-container"]}>
                    <h1>Food</h1>
                    <p>FLAVORS OF THE HILLS: A TASTE OF TRADITIONAL UTTARAKHANDI CUISINE</p>
                </div>
                <div className={styles["language-img-container"]}>
                    <Image src={utharfood} alt="Uthar food" width="538" height={"500"} loading={"eager"}
                           priority={true}/>
                </div>
            </section>

            <div className={styles["uttarakhand-language-title-container"]}>
                <p>UTTARAKHAND FOOD</p>
            </div>


            <section className={styles["uttarakhand-language-container"]}>
                <Card title={"Kafuli"}
                      subTitle={"Nutrient-Rich Spinach Curry"}
                      description={"Made with spinach and fenugreek leaves, Kafuli is a green curry unique to Uttarakhand, slow-cooked with spices and traditionally thickened with rice flour for a healthy, comforting meal."}
                      image={utharfood}/>

                <Card title={"Aloo Ke Gutke"}
                      subTitle={"Spiced Mountain Potatoes"}
                      description={"This simple yet flavorful dish features boiled potatoes tossed in local spices, with a unique flavor twist from mustard oil, often enjoyed as a snack or side dish."}
                      image={utharfood}/>

                <Card title={"Bhatt Ki Churkani"}
                      subTitle={"Black Soybean Curry"}
                      description={"Churkani is a rich and earthy black soybean curry made with aromatic spices. High in protein, it’s especially popular in the winter months for its warmth and nutrients."}
                      image={utharfood}/>

                <Card title={"Chainsoo"}
                      subTitle={"Roasted Black Gram Delight"}
                      description={"Chainsoo is a protein-packed dish made from roasted black gram flour, giving it a rich, nutty flavor. It’s often paired with rice for a fulfilling, nutritious meal."}
                      image={utharfood}/>

                <Card title={"Bal Mithai"}
                      subTitle={"Sweet Milk Fudge"}
                      description={"This iconic sweet is made from condensed milk and coated in tiny sugar balls. Loved for its chewy texture and rich flavor, Bal Mithai is a must-try treat for any visitor."}
                      image={utharfood}/>
            </section>
        </>
    );
}
