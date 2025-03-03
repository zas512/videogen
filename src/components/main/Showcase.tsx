"use client";
import Image from "next/image";
import React, { useState } from "react";
import dummyImage1 from "@/assets/DummyImg1.jpg";
import dummyImage2 from "@/assets/DummyImg2.jpg";
import dummyImage3 from "@/assets/DummyImg3.jpg";

function Showcase() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const images = [dummyImage1, dummyImage2, dummyImage3, dummyImage2, dummyImage1, dummyImage3, dummyImage2];

  const handleMouseEnter = (direction: string) => {
    if (direction === "left" && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === "right" && scrollIndex < images.length - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-4 text-center">
      <h6 className="mb-4 w-[60%] font-mono text-6xl font-bold">
        See how others Turned <span className="gradient-text">Ideas</span> Into{" "}
        <span className="gradient-text">Videos</span>
      </h6>
      <p className="mb-10 text-lg">
        Explore a collection of videos created by people just like you. Get inspired by unique storytelling and creative
        visuals made using our AI.
      </p>
      <div className="relative flex w-[90%] overflow-x-hidden overflow-y-hidden scrollbar-hide snap-x snap-mandatory items-center justify-center">
        <div
          className="absolute left-0 h-full w-10 bg-gradient-to-r from-white to-transparent opacity-50 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("left")}
        ></div>
        {images.slice(scrollIndex, scrollIndex + 5).map((image, index) => (
          <div
            key={index}
            className={`flex h-[400px] w-[200px] items-center justify-center overflow-hidden rounded-lg bg-gray-200 mx-2 transition-transform duration-300 snap-center ${
              index === 2 ? "scale-110" : "scale-90 blur-[50%]"
            }`}
          >
            <Image alt="img" src={image} className="h-full w-full object-cover" />
          </div>
        ))}
        <div
          className="absolute right-0 h-full w-10 bg-gradient-to-l from-white to-transparent opacity-50 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("right")}
        ></div>
      </div>
      <div className="absolute -top-32 left-0 -z-10 h-[10%] w-full bg-[#9d00ff] opacity-10 blur-3xl dark:opacity-15"></div>
    </section>
  );
}

export default Showcase;
