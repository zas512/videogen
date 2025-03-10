"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqs = [
  {
    question: "What is Slickmagic AI Video Generation?",
    answer:
      "Slickmagic AI Video Generation is an advanced AI-powered tool that enables users to create high-quality videos effortlessly. It automates video editing, enhances visuals, and generates professional content in minutes."
  },
  {
    question: "How can I get support?",
    answer: "You can contact our support team 24/7 via live chat or email for any assistance."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial so you can experience our features before purchasing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and other online payment methods."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="mt-20">
      {/* Heading */}
      <div className="mb-14 flex flex-col items-center justify-center space-y-4 text-center">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          We&apos;ve got you Covered <span className="gradient-text">24/7</span>
        </p>
        <p className="w-[90%] text-center text-base sm:w-[70%] md:text-lg xl:text-xl 2xl:text-2xl">
          No matter the time or place, our support team is always ready to assist you.
        </p>
      </div>
      {/* FAQs */}
      <div className="mx-auto w-full max-w-[90vw] text-sm md:text-base lg:max-w-[50vw] xl:text-lg 2xl:text-xl">
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-7">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between border-t px-4 pt-7 text-left">
                    <span className="font-semibold tracking-wide">{faq.question}</span>
                    {open ? <BiMinus className="size-6" /> : <BiPlus className="size-6" />}
                  </DisclosureButton>
                  <DisclosurePanel className="text-foreground-accent px-4 pb-2 pt-4 opacity-80">
                    {faq.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
