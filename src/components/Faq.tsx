import React, {useState} from "react";
import Image from "next/image";
import styles from "../components/ui/Faq.module.css";
import Chat from "/public/chat.svg";

const Faq: React.FC = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Why was Uttarakhand Culture created?",
            answer: "To address the decline in cultural knowledge among the younger generation in Uttarakhand, ensuring the preservation and appreciation of our rich heritage.",
            open: false,
        },
        {
            question: "What makes Uttarakhand’s culture unique?",
            answer: "Uttarakhand’s culture is a vibrant blend of traditions, languages, and festivals, influenced by its diverse geography, rich history, and spiritual heritage, making it distinct from other regions in India.",
            open: false,
        }, {
            question: "How can I stay updated on cultural events in Uttarakhand?",
            answer: "You can stay updated by visiting our platform regularly, where we post information about upcoming festivals, events, and cultural activities happening in Uttarakhand.",
            open: false,
        }, {
            question: "How does this project benefit future generations?",
            answer: "By digitizing and promoting Uttarakhand’s cultural heritage, we aim to instill pride and knowledge in the younger generation, ensuring they carry forward the rich traditions and stories of their ancestors.",
            open: false,
        },
        {
            question: "How can I contribute to the project?",
            answer: "You can contribute by submitting code, content ideas, or features. Check the Readme.md and Contributing.md files for guidelines.",
            open: false,
        },
        {
            question: "How can I contribute to the project?",
            answer: "You can contribute by submitting code, content ideas, or features. Check the Readme.md and Contributing.md files for guidelines.",
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
