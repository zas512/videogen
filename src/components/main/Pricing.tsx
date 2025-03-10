"use client";
import { useState } from "react";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { PiShootingStarFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const pricingPlans = [
  {
    id: "free",
    name: "Starter Plan",
    description: "Best for Trying",
    price: "$0/month",
    featured: false,
    features: [
      "2 Free Videos Per Month",
      "Access to Basic Video Templates",
      "Standard Resolution Output",
      "Community Support"
    ],
    buttonText: "Try for free"
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "For Growing Creators",
    price: "$19/month",
    featured: true,
    features: [
      "200 Video Credits per Month",
      "Premium Video Templates",
      "High-Resolution Output",
      "Priority Email Support"
    ],
    buttonText: "Get now"
  },
  {
    id: "business",
    name: "Business Plan",
    description: "Best for Businesses",
    price: "$49/month",
    featured: false,
    features: [
      "500 Video Credits per Month",
      "Customizable Templates",
      "Full HD Resolution Output",
      "Dedicated Support Manager"
    ],
    buttonText: "Get now"
  }
];

export default function Prices() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % pricingPlans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length);
  };

  return (
    <section id="pricing" className="relative px-6 sm:px-4 md:mt-20">
      {/* Background */}
      <div className="gradient-bg absolute left-1/2 top-28 -z-10 h-[80%] w-full md:w-[80rem] -translate-x-1/2 md:rounded-full opacity-10 blur-3xl dark:opacity-20"></div>
      {/* Heading */}
      <div className="mb-10 flex flex-col items-center justify-center space-y-4 text-center">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          <span className="gradient-text">Flexible Options</span> That Match Your Budget
        </p>
        <p className="w-[90%] text-base sm:w-[70%] md:text-lg xl:text-xl 2xl:text-2xl">
          Choose a plan that fits your creative journey.
        </p>
      </div>
      {/* Mobile Carousel */}
      <div className="relative flex w-full overflow-hidden lg:hidden">
        <motion.div
          className="flex w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {pricingPlans.map((tier) => (
            <div
              key={tier.id}
              className="bg-background/30 pricing-card-border min-w-full flex-shrink-0 space-y-6 rounded-2xl p-6 backdrop-blur-3xl"
            >
              <div className="flex justify-between">
                {/* Name */}
                <div className="flex items-center gap-4">
                  {tier.id === "free" && <FaThumbsUp className="size-4 sm:size-5" />}
                  {tier.id === "pro" && <PiShootingStarFill className="size-5 sm:size-7" />}
                  {tier.id === "business" && <BiSolidMedal className="size-6 sm:size-8" />}
                  <p className="font-mono text-lg font-semibold sm:text-2xl">{tier.name}</p>
                </div>
                {tier.featured && (
                  <div
                    className={
                      "gradient-bg sm:text-md absolute right-7 top-7 rounded-full px-3 py-1 text-sm text-white sm:px-4 sm:py-2"
                    }
                  >
                    Most popular
                  </div>
                )}
              </div>
              {/* Price */}
              <p className="font-mono text-4xl sm:text-6xl">{tier.price}</p>
              <div className="text-base sm:text-xl">{tier.description}</div>
              <div className="flex w-full cursor-pointer justify-center">
                <button className="bg-background/50 w-full rounded-full py-2 text-base font-semibold">
                  {tier.buttonText}
                </button>
              </div>
              {/* Features */}
              <ul className={"mb-8 flex flex-col gap-3 sm:gap-4"}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-2 sm:gap-x-3">
                    <FaArrowRight className={"text-muted-foreground h-5 w-5 sm:h-6 sm:w-6"} />
                    <span className={"text-sm sm:text-base"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        {/* Carousel Buttons */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
          <button onClick={prevSlide} className="bg-background-secondary rounded-full p-2 shadow-lg">
            <TiChevronLeft className="size-5" />
          </button>
          <button onClick={nextSlide} className="bg-background-secondary rounded-full p-2 shadow-lg">
            <TiChevronRight className="size-5" />
          </button>
        </div>
      </div>
      {/* Desktop Grid */}
      <div className="hidden w-full justify-center gap-12 lg:flex">
        {pricingPlans.map((tier) => (
          <div
            key={tier.id}
            className={`bg-background/40 hover:bg-hover/40 ${
              tier.featured ? "pricing-card-border-2" : "pricing-card-border"
            } min-w-96 space-y-6 rounded-2xl p-6 backdrop-blur-3xl`}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-2xl font-semibold">{tier.name}</p>
              {tier.featured && (
                <div className="gradient-bg rounded-full px-3 py-1 text-sm text-white">Most popular</div>
              )}
            </div>
            <p className="text-5xl font-semibold">{tier.price}</p>
            <p className="text-xl">{tier.description}</p>
            <button className="bg-background/50 border-border w-full cursor-pointer rounded-full border py-4 text-xl font-semibold">
              {tier.buttonText}
            </button>
            <ul className="flex flex-col gap-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-3">
                  <FaArrowRight className="text-muted-foreground size-4" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
