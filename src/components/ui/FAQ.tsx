"use client"; // Mark this component as a client component

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import Image from 'next/image';
import contactImage from '/public/question.png'; 
import plusIcon from '/public/add.png'; // Update the path to your icon
import minusIcon from '/public/minus.png'; // Update the path to your icon

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
  
    {
      question: "What cultural festivals can I experience in Uttarakhand?",
      answer: "Uttarakhand hosts vibrant festivals like Egaas Bagwal and Nanda Devi Mahotsav, each celebrating unique traditions and local heritage."
    },
    {
      question: "How can I learn more about Uttarakhand's traditions?",
      answer: "You can explore our website for articles, resources, and events that highlight the rich cultural traditions of Uttarakhand."
    },
    {
      question: "Can I participate in cultural events?",
      answer: "Yes! We encourage participation in our cultural events. Check our events page for more details on upcoming activities."
    },
    {
      question: "What is the significance of Egaas Bagwal?",
      answer: "Egaas Bagwal is celebrated 11 days after Diwali, symbolizing the return of Lord Rama. It includes traditional dances and culinary delights."
    },
    {
      question: "How do I stay updated on upcoming events?",
      answer: "You can sign up for our newsletter to receive updates on festivals, fairs, and other cultural events directly to your inbox."
    }
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles["faq-container"]}>
      <h2 className={styles["faq-heading"]}>We're here to answer all your questions</h2>
      <div className={styles["faq-list"]}>
        {faqs.map((faq, index) => (
          <div key={index} className={`${styles["faq-item"]} ${activeIndex === index ? styles.active : ''}`}>
            <div 
              className={styles["faq-question"]} 
              onClick={() => toggleAnswer(index)} 
              aria-expanded={activeIndex === index}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleAnswer(index)}
            >
              {faq.question}
              <Image 
                src={activeIndex === index ? minusIcon : plusIcon} 
                alt={activeIndex === index ? "Collapse" : "Expand"} 
                width={20} 
                height={20} 
                className={styles["toggle-icon"]}
              />
            </div>
            {activeIndex === index && (
              <div className={styles["faq-answer"]}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Medium Size Image */}
      <div className={styles["contact-section"]}>
        <Image 
          src={contactImage} 
          alt="Contact Us" 
          width={600} 
          height={400} 
          className={styles["contact-image"]}
        />
        <h3 className={styles["contact-text"]} >Still have questions?</h3>
        <button className={styles["contact-button"]}>Contact Us</button>
      </div>
    </div>
  );
};

export default FAQ;
