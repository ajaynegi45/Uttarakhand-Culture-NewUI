import React, {useState} from "react";
import Image from "next/image";
import styles from "../components/ui/Faq.module.css";
import Chat from "/public/chat.svg";

const Faq: React.FC = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is a need to safeguard Uttarakhand Cultural Heritage?",
            answer: "By safeguarding its cultural heritage, Uttarakhand can maintain its distinctiveness, fostering a sense of pride and belonging among its inhabitants. Additionally, preserving local customs, art forms, and folk traditions enhances tourism, attracting tourist eager to experience authentic cultural interactions and vibrant regional offerings. Preserving Uttarakhand's culture contributes to environmental sustainability, as many traditional practices are closely connected to the natural landscape and promote harmonious living with nature. As it reflects the region's unique identity and heritage shaped by its rich history, traditions, and natural environment. With globalization and rapid modernization, there is a risk of cultural dilution.",
            open: false,
        },
        {
            question: "What is the culture of Uttarakhand like?",
            answer: "Uttarakhand known as “Devbhoomi” (Land of the Gods), culture is a unique blend of customs, tradition, and folklore shaped by its mountainous geography and diverse communities. Located in northern India, region is known for its rich spiritual heritageas, it is home to sacred sites like the Char Dham pilgrimage (Badrinath, Kedarnath, Gangotri, and Yamunotri). The culture here is deeply connected to nature, with festivals and traditions reflecting respect for the environment. Uttarakhand is a hub for Hindu spirituality and yoga. The culture of Uttarakhand is deeply rooted in its stunning geography and the traditions of its two primary regions, Garhwal and Kumaon. With the majestic Himalayas as a backdrop, the people of Uttarakhand have a lifestyle that is connected to nature.",
            open: false,
        }, {
            question: "What are some popular traditional dishes of Uttarakhand?",
            answer: "Uttarakhand’s traditional cuisine is flavorful and healthy, emphasizing on local ingredients, including grains, lentils, and seasonal vegetables. Popular traditional dishes include Kafuli, a hearty green curry made from spinach and fenugreek leaves, cooked with minimal spices and served with rice. Another is Bhaang ki Chutney, a tangy, flavorful condiment made with roasted hemp seeds, yogurt, and a blend of spices. Next is, Aloo Ke Gutke—stir-fried potatoes seasoned with red chilies, cumin, and coriander—is a classic comfort food often paired with Puri and served during festivals. Chainsoo, a rich black gram dal dish, often called Dal Fry is unique to Uttarakhand as it’s slow-cooked to bring out a nutty flavor and is often served with steamed rice.",
            open: false,
        }, {
            question: "What are the most popular festivals celebrated in Uttarakhand?",
            answer: "Uttarakhand celebrates a dynamic mix of cultural, regional, and seasonal festivals, each reflecting the ancient traditions and spiritual life of its people. Nanda Devi Raj Jat, an elaborate pilgrimage and celebration held once in every twelve years, in honor of the goddess Nanda Devi, is one of the region's most significant festivals.The grand Kumbh Mela, which takes place at Haridwar every twelve years, attracts millions of pilgrims. Among the most popular is Harela, a festival celebrating the onset of the monsoon and the abundance of nature, especially significant in agricultural communities. It’s a time of planting seeds and celebrating growth and harmony with nature. Makar Sankranti, locally known as Uttarayani, marks the transition of the sun into Capricorn.",
            open: false,
        }, {
            question: "What impact do Uttarakhand’s fairs have on tourism?",
            answer: "The fairs enhance Uttarakhand's significance as a adventure and spritual tourism destination, drawing attention to its green beauty, historical significance, and religious sites. By promoting a sense of community and cultural pride among locals, these fairs contribute to sustainable tourism development, ensuring that the cultural practices and traditions are preserved for future generations while providing an enriching experience for tourists. These fairs supports local economies, benefiting small and big businesses, artisans, and vendors who sell handicrafts, clothing, and traditional foods. This activity encourages the preservation of local art forms, as artisans gain visibility and sales opportunities, feature local performances showcasing traditional music and dance, which enrich the cultural experience for visitors.",
            open: false,
        },
        {
            question: "What are some traditional attire or clothing styles in Uttarakhand?",
            answer: "In Men's traditional clothing, the garments differ slightly between Garhwali and Kumaoni communities, with regional variations in style and embroidery. Woolen garments made from local sheep wool, like the pahari coat and woolen shawls, are common in Uttarakhand, providing warmth and comfort during the winter season. Jewelry, especially in silver, is also an essential part of Uttarakhand’s traditional attire, with unique designs that reflect local beliefs, giving the attire an authentic and cultural richness that celebrates the heritage of the region. In Women's Traditional Clothing, the ghagra, a long skirt, paired with an angarkha, a long blouse, and a woolen shawl or scarf that provides warmth during the colder months. Married women often wear the nath, a large, intricately designed nose ring that symbolizes marital status, especially prominent during weddings and festivals.",
            open: false,
        }, {
            question: "What are some of the most famous carnival celebrated in Uttarakhand?",
            answer: "The carnival reflects Uttarakhand’s unique blend of spirituality, tradition, and community life, drawing locals and tourists alike to experience the region’s diverse cultural heritage.The Magh Mela in Uttarkashi, which takes place in January, is another major event where religious and social gatherings are held by the Ganges River, featuring folk music, dance, and cultural programs. Jauljibi Mela is a prominent fair held near the Nepal border, bringing together people from Kumaon and Nepal for trade, especially in wool, blankets, and regional handicrafts. Gauchar Mela in Chamoli district is a traditional fair promoting agriculture and trade, featuring livestock exhibitions and cultural events. The Devidhura Mela, famous for its traditional stone-pelting ritual known as “Bagwal,” which has now been toned down to ensure safety while retaining its historic significance.",
            open: false,
        }
    ]);

    const toggleFAQ = (index: number): void => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    return {...faq, open: !faq.open};
                } else {
                    return {...faq, open: false};
                }
            })
        );
    };

    return (
        <section className={styles.faqContainer}>
            <div className={styles.faqContainerTitle}>
                <h1> We&apos;re here to answer all <br/> your questions.</h1>
            </div>
            <div className={styles.faqs}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faq} ${faq.open ? styles.open : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.faqQuestion}>{faq.question}</div>
                        <div className={styles.faqAnswer}>{faq.open && faq.answer}</div>
                    </div>
                ))}
            </div>
            <div className={styles.faqIcon}>
                <Image src={Chat} alt={"FAQ Icon"} width={65} height={65}/>
            </div>
            <h3 className={styles.faqTitle}>Still have questions?</h3>
            <button className={styles.contactButton}>Contact us</button>
        </section>
    );
};

export default Faq;
