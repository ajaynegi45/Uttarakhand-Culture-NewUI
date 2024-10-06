import React from "react";
interface FAQProps {
  faq: {
    question: string;
    answer: string;
    open: boolean;
  };
  index: number;
  toggleFAQ: (index: number) => void;
}

const FAQ: React.FC<FAQProps> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq ${faq.open ? "open" : ""}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
