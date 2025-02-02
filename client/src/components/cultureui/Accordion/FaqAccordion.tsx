"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./faqaccordion.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
  width?: string;
  questionColor?: string;
  answerColor?: string;
  questionSize?: string;
  answerSize?: string;
  questionWeight?: string;
  answerWeight?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  data,
  width = "max-w-2xl",
  questionColor = "#808080",
  answerColor = "#fff",
  questionSize = "14px",
  answerSize = "14px",
  questionWeight = "600",
  answerWeight = "600",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faqContainer"]} style={{ maxWidth: width }}>
      {data.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={styles["faqItem"]}>
            <button
              onClick={() => toggleFAQ(index)}
              className={styles["faqButton"]}
              style={{
                color: questionColor,
                fontSize: questionSize,
                fontWeight: questionWeight,
              }}
            >
              {faq.question}
              <ChevronDown
                className={styles.faqChevron}
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles["faqContent"]}
            >
              <div
                className={styles["faqText"]}
                style={{
                  color: answerColor,
                  fontSize: answerSize,
                  fontWeight: answerWeight,
                }}
              >
                {faq.answer}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
