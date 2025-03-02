"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import dummyImage1 from "@/assets/DummyImg1.jpg";
import dummyImage2 from "@/assets/DummyImg2.jpg";
import dummyImage3 from "@/assets/DummyImg3.jpg";

const media: (string | StaticImageData)[] = [
  dummyImage1,
  dummyImage2,
  dummyImage3,
  dummyImage1,
  "/videos/video2.mp4",  // replace images and these url's with actualy video url's to show videos
  "/videos/video3.mp4",
];

const Page = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];

      if (video?.paused) {
        video?.play();
        setPlayingIndex(index);
      } else {
        video?.pause();
        setPlayingIndex(null);
      }
    }
  };

  return (
    <div className="p-2">
      <p className="text-6xl font-bold gradient-text font-mono">Dashboard</p>
      <p className="font-bold text-lg font-mono w-[35%]">
        Here you’ll find all the videos you’ve generated. Easily access, manage,
        and download your AI-created content anytime. Keep track of your
        creations in one place!
      </p>

      {/* Full-Screen Media Scroller */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {[...media, ...media].map((item, index) => (
            <div
              key={index}
              className="relative m-10 mx-6 w-[14vw] h-[44vh] bg-black rounded-xl overflow-hidden flex-shrink-0"
            >
              {typeof item === "string" && item.endsWith(".mp4") ? (
                <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                
                  src={item}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleVideoClick(index)}
                  muted
                  playsInline
                />
              ) : (
                <Image src={item} alt={`media-${index}`} fill className="object-cover" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Page;
