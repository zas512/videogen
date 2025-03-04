"use client";
import React from "react";
import Image from "next/image";
import RightIcon from "@/assets/RightIcon.png";

function Prices() {
  return (
    <section className="relative flex flex-col items-center justify-center py-4 text-center">
      <h6 className="mb-4 w-[50%] font-mono text-6xl font-bold">
        <span className="font-mono gradient-text">Flexible Options</span> That
        Match Your Budget
      </h6>
      <p className="mb-6 text-lg">
        Choose a plan that fits your creative journey, from beginner to
        enterprise.
      </p>

      <div className="flex justify-center items-start gap-8">
        {/* Starter Plan */}
        <div className="w-64 h-[60vh] rounded-xl px-6 py-6 border border-[#000099] flex flex-col justify-between items-center">
          <p className="font-black text-2xl font-mono text-center">
            Starter Plan
          </p>
          <p className="font-mono text-lg text-center">Best for Trying</p>

          <div className="mt-4 w-full">
            <ul className="font-mono text-sm text-left">
              <li>2 Free Videos Per Month</li>
              <li>Access to Basic Video Templates</li>
              <li>Standard Resolution Output</li>
              <li>Community Support</li>
            </ul>
          </div>

          <p className="text-center font-mono text-4xl mt-6 font-black">
            $0/month
          </p>
          <button className="w-36 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center gap-x-2 mt-6">
            <p className="text-sm">Try for free</p>
            <Image src={RightIcon} alt="arrow" width={20} height={20} />
          </button>
        </div>

        {/* Pro Plan */}
        <div className="w-64 h-[60vh] rounded-xl px-6 py-6 border border-[#000099] flex flex-col justify-between items-center">
          <p className="font-black text-2xl font-mono text-center">Pro Plan</p>
          <p className="font-mono text-lg text-center">For Growing Creators</p>

          <div className="mt-4 w-full">
            <ul className="font-mono text-sm text-left">
              <li>200 Video Credits per Month</li>
              <li>Premium Video Templates</li>
              <li>High-Resolution Output</li>
              <li>Priority Email Support</li>
            </ul>
          </div>

          <p className="text-center font-mono text-4xl mt-6 font-black">
            $19/month
          </p>
          <button className="w-36 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center gap-x-2 mt-6">
            <p className="text-sm">Get now</p>
          </button>
        </div>

        {/* Business Plan */}
        <div className="w-64 h-[60vh] rounded-xl px-6 py-6 border border-[#000099] flex flex-col justify-between items-center">
          <p className="font-black text-2xl font-mono text-center">
            Business Plan
          </p>
          <p className="font-mono text-lg text-center">Best for Businesses</p>

          <div className="mt-4 w-full">
            <ul className="font-mono text-sm text-left">
              <li>500 Video Credits per Month</li>
              <li>Customizable Templates</li>
              <li>Full HD Resolution Output</li>
              <li>Dedicated Support Manager</li>
            </ul>
          </div>

          <p className="text-center font-mono text-4xl mt-6 font-black">
            $49/month
          </p>
          <button className="w-36 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center gap-x-2 mt-6">
            <p className="text-sm">Get now</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prices;
