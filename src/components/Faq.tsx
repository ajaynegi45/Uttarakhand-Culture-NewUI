import React, { useState } from "react";
import Image from "next/image";
import styles from "../components/ui/Faq.module.css";
import Chat from "/public/chat.svg";

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "So, you're a startup?",
      answer: "Yes, we are a startup focused on solving problems.",
      open: false,
    },
    {
      question: "Is Genie right for me?",
      answer: "If you're looking for a solution to simplify your operations, Genie is perfect for you!",
      open: false,
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by visiting our website and following the easy steps outlined there.",
      open: false,
    },
    {
      question: "What's the onboarding like? Do you charge for implementation?",
      answer: "Our onboarding is smooth and free of charge! We'll help you get started right away.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number): void => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  return (
    <section className={styles.faqContainer}>
      <div className={styles.faqContainerTitle}>
        <h1> We&apos;re here to answer all <br /> your questions.</h1>
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
        <Image src={Chat} alt={"FAQ Icon"} width={65} height={65} />
      </div>
      <h3 className={styles.faqTitle}>Still have questions?</h3>
      <button className={styles.contactButton}>Contact us</button>
    </section>
  );
};

export default Faq;
