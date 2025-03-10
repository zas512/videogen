"use client";
import Image from "next/image";
import { items } from "@/lib/data";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Showcase = () => {
  return (
    <div id="featured" className="relative w-full overflow-hidden py-10">
      <span className="absolute -z-10 -left-40 top-[50%] h-[70%] w-96 -translate-y-1/2 rounded-full bg-[#9d00ff]/50 blur-3xl"></span>
      <span className="absolute -z-10 -right-40 top-[50%] h-[70%] w-96 -translate-y-1/2 rounded-full bg-[#ff00ff]/40 blur-3xl"></span>
      <div className="mb-8 space-y-4 text-center">
        <p className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
          Discover the <span className="gradient-text">Magic</span>
        </p>
        <p className="w-full text-base md:text-lg xl:text-xl 2xl:text-2xl">
          Transforming Ideas into Captivating Videos
        </p>
      </div>
      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item relative">
              <Image src={item.src} alt={`Slide ${index}`} fill className="rounded-2xl object-cover" />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                <BsFillPlayCircleFill className="text-4xl text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .marquee-content {
          display: flex;
          gap: 1.5rem;
          animation: marquee-animation 40s linear infinite;
          width: max-content;
        }

        .marquee-item {
          position: relative;
          flex-shrink: 0;
          height: 18rem;
          width: 12rem;
        }

        @media (min-width: 640px) {
          /* sm */
          .marquee-item {
            height: 22rem;
            width: 14rem;
          }
        }

        @media (min-width: 1024px) {
          /* lg */
          .marquee-item {
            height: 30rem;
            width: 20rem;
          }
        }

        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee-animation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Showcase;
