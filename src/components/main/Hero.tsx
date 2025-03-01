"use client";
import Image from "next/image";
import { BsStars, BsFillPlayCircleFill } from "react-icons/bs";
import img2 from "@/assets/2.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 text-center">
      <h1 className="mb-8 font-mono text-8xl font-bold">
        <span className="gradient-text">Transform </span>
        Your Ideas into Stunning <span className="gradient-text">Videos</span>
      </h1>
      <p className="mb-10 w-[50%] text-2xl">
        Unleash the power of AI to create professional-quality videos in minutes. Whether you're a marketer, educator,
        or content creator, our platform makes video production effortless and efficient.
      </p>
      <button className="mb-20 flex items-center rounded-xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] px-6 py-4 text-xl text-white">
        <BsStars className="mr-2 size-6" /> Try SlickMagic
      </button>
      <div
        className="rounded-4xl relative w-[70%] border border-[#ff00ff]/30 p-6 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
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
