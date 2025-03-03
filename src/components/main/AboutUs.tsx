"use client";
import React, { useState } from "react";
import Image from "next/image";
import TickIcon from "@/assets/TickIcon.png";
import CrossIcon from "@/assets/crossIcon.png";
import ReactStars from "react-stars";
import Avatar from "@/assets/avatar.png";

function AboutUs() {
  const [rating, setRating] = useState(0);

  return (
    <section className="relative flex flex-col items-center justify-center py-4 text-center">
      <h6 className="mb-4 w-[60%] font-mono text-6xl font-bold">About Us</h6>
      <p className="mb-10 text-lg">
        We are a passionate team dedicated to transforming ideas into reality. Our mission is to deliver innovative
        solutions that make a difference.
      </p>
      <div className="flex w-[80%] flex-wrap items-start justify-around gap-8">
        <div className="flex w-full md:w-1/2 flex-col">
          <div className="rounded-lg border border-gray-200 px-6 py-4">
            <p className="gradient-text flex items-start justify-start text-2xl font-bold">Our Bot</p>
            <div className="mt-6 flex flex-col items-start justify-start">
              <div className="flex flex-col font-mono text-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image alt="tick icon" src={TickIcon} width={10} height={10} />
                    <p className="text-sm">Prompt Enhancement and Real-Time Translation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="tick icon" src={TickIcon} width={10} height={10} />
                    <p className="text-sm">Logo Creation Made Easy</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="tick icon" src={TickIcon} width={10} height={10} />
                    <p className="text-sm">Easy Video generation with a few easy steps</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="tick icon" src={TickIcon} width={10} height={10} />
                    <p className="text-sm">High-Quality Resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 flex flex-col items-start justify-start px-6">
              <p className="font-mono text-2xl font-bold">
                Loved by <span className="gradient-text font-mono text-2xl font-bold"> Clients </span>
              </p>
              <p className="mt-2 font-mono text-sm">
                Slickmagic is trusted by thousands of customers worldwide and backed by leading companies. Join the
                community that loves creating with us!
              </p>
              <p className="mt-4 font-mono font-bold">350k+ Videos Generated</p>
              <p className="font-mono text-sm">Unleashing creativity through seamless video generation.</p>
              <p className="mt-4 font-mono font-bold">4.6/5 Rating for AI-Generated Images</p>
              <p className="font-mono text-sm">Delivering stunning visuals that our users love.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="rounded-lg border border-gray-200 px-6 py-4">
            <p className="gradient-text flex items-start justify-start text-2xl font-bold">Our Models</p>
            <div className="mt-6 flex flex-col items-start justify-start">
              <div className="flex flex-col font-mono text-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Image alt="cross icon" src={CrossIcon} width={10} height={10} />
                    <p className="text-sm">Basic English-Only Prompts</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="cross icon" src={CrossIcon} width={10} height={10} />
                    <p className="text-sm">Imperfect Text Output</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="cross icon" src={CrossIcon} width={10} height={10} />
                    <p className="text-sm">No Video Generation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image alt="cross icon" src={CrossIcon} width={10} height={10} />
                    <p className="text-sm">Limited Image Resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              color2={"#ffd700"}
              onChange={(newRating) => setRating(newRating)}
            />
            <p className="font-mono text-sm">
              The video generation was fast and the quality was top-notch. I love how easy it is to create stunning visuals. Highly recommended for anyone looking to bring ideas to life!
            </p>
            <p className="font-mono text-sm">Delivering stunning visuals that our users love.</p>
          </div>
          <div className="flex justify-start items-start px-10 py-4">
            <Image src={Avatar} alt='logo' width={60} height={60} />
            <div className="flex flex-col">
              <p className="px-4 font-bold">User Name</p>
              <p className="px-4 text-sm">Profession</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
