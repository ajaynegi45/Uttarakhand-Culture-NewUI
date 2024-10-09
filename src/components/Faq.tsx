import React, {useState} from "react";
import Image from "next/image";
import styles from "../components/ui/Faq.module.css";
import Chat from "/public/chat.svg";

const Faq: React.FC = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Why we build Uttarakhand Culture?",
            answer: "A concerning trend is emerging in Uttarakhand, where the younger generation is gradually forgetting their cultural heritage and traditional rituals. This decline in cultural knowledge is evident across generations, with each successive generation possessing less knowledge than the previous one. For instance, the amount of cultural knowledge possessed by grandparents is significantly more than that of their children, and the cultural knowledge of today's youth is likely to be even less than that of their parents. If this trend continues, there is a risk that the cultural heritage of Uttarakhand may eventually disappear from the society. This loss would not only erase the region's rich cultural identity but also deprive future generations of their cultural roots and traditions.",
            open: false,
        },
        {
            question: "Why we build Uttarakhand Culture?",
            answer: "A concerning trend is emerging in Uttarakhand, where the younger generation is gradually forgetting their cultural heritage and traditional rituals. This decline in cultural knowledge is evident across generations, with each successive generation possessing less knowledge than the previous one. For instance, the amount of cultural knowledge possessed by grandparents is significantly more than that of their children, and the cultural knowledge of today's youth is likely to be even less than that of their parents. If this trend continues, there is a risk that the cultural heritage of Uttarakhand may eventually disappear from the society. This loss would not only erase the region's rich cultural identity but also deprive future generations of their cultural roots and traditions.",
            open: false,
        }, {
            question: "Why we build Uttarakhand Culture?",
            answer: "A concerning trend is emerging in Uttarakhand, where the younger generation is gradually forgetting their cultural heritage and traditional rituals. This decline in cultural knowledge is evident across generations, with each successive generation possessing less knowledge than the previous one. For instance, the amount of cultural knowledge possessed by grandparents is significantly more than that of their children, and the cultural knowledge of today's youth is likely to be even less than that of their parents. If this trend continues, there is a risk that the cultural heritage of Uttarakhand may eventually disappear from the society. This loss would not only erase the region's rich cultural identity but also deprive future generations of their cultural roots and traditions.",
            open: false,
        }, {
            question: "Why we build Uttarakhand Culture?",
            answer: "A concerning trend is emerging in Uttarakhand, where the younger generation is gradually forgetting their cultural heritage and traditional rituals. This decline in cultural knowledge is evident across generations, with each successive generation possessing less knowledge than the previous one. For instance, the amount of cultural knowledge possessed by grandparents is significantly more than that of their children, and the cultural knowledge of today's youth is likely to be even less than that of their parents. If this trend continues, there is a risk that the cultural heritage of Uttarakhand may eventually disappear from the society. This loss would not only erase the region's rich cultural identity but also deprive future generations of their cultural roots and traditions.",
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
