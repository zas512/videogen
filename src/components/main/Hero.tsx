"use client";
import Image from "next/image";
import { BsStars, BsFillPlayCircleFill } from "react-icons/bs";
import img2 from "@/assets/2.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-2 text-center mb-6">
      <h1 className="mb-2 font-mono text-6xl w-[60%] font-black">
        <span className="gradient-text">Transform </span>
        Your Ideas into Stunning <span className="gradient-text">Videos</span>
      </h1>
      <p className="mb-4 text-lg">
      Bring your ideas to life with AI-powered video creation.Create captivating visuals effortlessly.
      </p>
      <button className="mb-4 flex text-xs items-center rounded-xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] px-5 py-4 text-xl text-white">
        <BsStars className="mr-2 size-4 " /> Try SlickMagic
      </button>
      <div
        className="rounded-4xl relative w-[50%] border border-[#ff00ff]/30 p-6 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
      >
        <Image
          src={img2}
          alt="Hero"
          layout="responsive"
          width={16}
          height={9}
          style={{ objectFit: "contain" }}
          className="rounded-2xl"
        />
        <BsFillPlayCircleFill className="absolute inset-0 m-auto text-gray-200 text-7xl" />
      </div>
      <div className="absolute -top-32 left-0 -z-10 h-[10%] w-full bg-[#9d00ff] opacity-10 dark:opacity-15 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
