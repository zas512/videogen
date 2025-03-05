"use client";
import Image from "next/image";
import { BsStars, BsFillPlayCircleFill } from "react-icons/bs";
import img2 from "@/assets/2.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-4 py-10 text-center sm:gap-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          <span className="gradient-text">Transform </span>
          Your Ideas into Stunning <span className="gradient-text">Videos</span>
        </p>
        <p className="w-[80%] text-base sm:w-[70%] md:text-lg xl:text-xl 2xl:text-2xl">
          Unleash the power of AI to create professional-quality videos in minutes.
        </p>
      </div>
      <button className="flex items-center rounded-xl bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] px-3 py-2 text-lg text-white sm:px-4 sm:py-3 sm:text-xl">
        <BsStars className="mr-2 size-5 sm:size-6" /> <Link href="/dashboard">Try SlickMagic</Link>
      </button>
      <div className="rounded-4xl relative w-[70%] border border-[#ff00ff]/30 p-6 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        <Image
          src={img2}
          alt="Hero"
          layout="responsive"
          width={16}
          height={9}
          style={{ objectFit: "contain" }}
          className="rounded-2xl"
        />
        <BsFillPlayCircleFill className="absolute inset-0 m-auto text-7xl text-gray-200" />
      </div>
      <div className="absolute -top-32 left-0 -z-10 h-[10%] w-full bg-[#9d00ff] opacity-10 blur-3xl dark:opacity-15"></div>
    </section>
  );
};

export default HeroSection;
