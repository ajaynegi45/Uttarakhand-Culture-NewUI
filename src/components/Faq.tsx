import React, {useState} from "react";
import Image from "next/image";
import styles from "../components/ui/Faq.module.css";
import Chat from "/public/chat.svg";
import Link from "next/link";

/**
 * This component displays a list of FAQs for users to interact with.
 * @example
 * toggleFAQ(2)
 * Toggles the 'open' state of the FAQ at index 2.
 * @param {number} index - The index of the FAQ to toggle.
 * @returns {void} No return value, it updates the state of FAQs.
 * @description
 *   - The component maintains the open state of each FAQ for interaction.
 *   - Clicking on an FAQ toggles its expanded state, allowing users to view answers.
 *   - Only one FAQ can be open at a time to ensure focused viewing.
 *   - Uses `useState` to manage FAQ state within the component.
 */
const Faq: React.FC = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is the purpose of the Uttarakhand Culture website?",
            answer: "The purpose of the Uttarakhand Culture website is to digitally document, preserve, and celebrate the rich cultural heritage of Uttarakhand. It aims to provide accessible information about the region’s traditions, history, and natural beauty, ensuring that the cultural legacy is passed down to future generations while making it engaging for the modern audience.",
            open: false,
        },
        {
            question: "Why was the Uttarakhand Culture website built?",
            answer: "The website was built to address the risk of cultural dilution caused by globalization and modernization. It serves as a platform to preserve local traditions, art, and stories, promote tourism, and foster pride among the people of Uttarakhand by showcasing their unique identity and heritage.",
            open: false,
        },
        {
            question: "What is the need for preserving Uttarakhand's culture?",
            answer: "Preserving Uttarakhand's culture is essential to maintain its distinctiveness, promote sustainable tourism, and protect its environmental and spiritual heritage. Traditional practices connected to nature promote a harmonious lifestyle, while cultural preservation helps prevent the loss of historical significance.",
            open: false,
        },
        {
            question: "What does the website offer?",
            answer: "The website offers insights into Uttarakhand's language, history, festivals, cuisine, art, music, traditional attire, tourist destinations, and natural beauty. It is a comprehensive resource for anyone looking to explore the rich culture and spiritual essence of the region.",
            open: false,
        },
        {
            question: "How does this platform benefit the younger generation?",
            answer: "The platform acts as an educational resource, connecting the younger generation with their cultural roots through engaging content. It helps them understand and appreciate their heritage, ensuring that these traditions and stories are not forgotten.",
            open: false,
        },
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
            <Link href={"/contactform"}>
                <button className={styles.contactButton}>Contact us</button>
            </Link>
        </section>
    );
};

export default Faq;
