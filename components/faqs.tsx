"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { poppins } from "@/public/fonts/fonts"; // ✅ Import Poppins Font

const faqData = [
  {
    question: "What is PRU Life UK?",
    answer:
      "PRU Life UK is a leading life insurance company in the Philippines, providing financial protection and investment solutions to help individuals and families secure their future.",
  },
  {
    question: "Is PRU Life UK a legitimate company?",
    answer:
      "Yes, PRU Life UK is a subsidiary of Prudential plc, a global financial services leader with over 175 years of experience. It is also regulated by the Insurance Commission of the Philippines.",
  },
  {
    question: "What types of insurance does PRU Life UK offer?",
    answer:
      "PRU Life UK offers various types of insurance: Life Insurance, Health Insurance, and Investment-Linked Insurance",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref for the section to observe

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Intersection Observer to check when the section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} // Attach the Intersection Observer to the section
      className={`${poppins.className} mx-auto py-16 md:px-30`} // ✅ Applied Font
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked <span className="text-black">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">Get answers to common queries about our services.</p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left text-black font-semibold"
            >
              <div className="flex items-center space-x-4">
                {/* Numbering instead of Arrow */}
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full font-bold text-lg">
                  {index + 1}
                </span>
                <span>{faq.question}</span>
              </div>
              {openIndex === index ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Answer (Smooth Collapsible) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-5 border-t border-gray-200 text-gray-600">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
