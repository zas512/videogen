"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is Slickmagic AI Video Generation?",
    answer:
      "Slickmagic AI Video Generation is an advanced AI-powered tool that enables users to create high-quality videos effortlessly. It automates video editing, enhances visuals, and generates professional content in minutes.",
  },
  {
    question: "How can I get support?",
    answer: "You can contact our support team 24/7 via live chat or email for any assistance.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial so you can experience our features before purchasing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and other online payment methods.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[60%] border border-gray-600 bg-gray-800 text-gray-300 rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 bg-transparent text-white text-lg"
      >
        <span>{question}</span>
        {isOpen ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-gray-500" />}
      </button>

      {isOpen && (
        <div className="p-4 bg-gray-900 text-gray-300 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQs() {
  return (
    <section className="relative flex flex-col py-6 text-left">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <h6 className="mb-4 w-[50%] font-mono text-5xl font-bold">
          We’ve got you Covered <span className="gradient-text">24/7 Support</span>
        </h6>
        <p className="mb-6 text-lg w-[60%]">
          No matter the time or place, our support team is always ready to assist you. Get expert help whenever you need it, ensuring a smooth and hassle-free experience.
        </p>
      </div>

      {/* FAQ List - Positioned to the Left */}
      <div className="w-[70%] flex flex-col items-start gap-4 mx-20">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQs;
