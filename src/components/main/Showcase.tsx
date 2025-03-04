"use client";
import Image from "next/image";
import { items } from "@/lib/data";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Showcase = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="mb-8 text-center font-mono text-6xl">
        <p>Discover the Magic</p>
        <p className="text-4xl">Transforming Ideas into Captivating Videos</p>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item relative">
              <Image src={item.src} alt={`Slide ${index}`} fill objectFit="cover" className="rounded-2xl" />
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
          height: 30rem;
          width: 20rem;
          flex-shrink: 0;
        }

        /* Pause animation on hover */
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
