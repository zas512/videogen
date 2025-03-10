"use client";
import { useState } from "react";
import Image from "next/image";
import { items } from "@/lib/data";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Link from "next/link";
const Page = () => {
  const [layout, setLayout] = useState("landscape");

  return (
    <div className="p-10">
      {/* Top Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-end gap-4">
        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          className="border-border rounded-lg border px-4 py-2 focus:outline-none"
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
        <button className="gradient-bg rounded-lg px-4 py-2 font-bold text-white shadow-md">
          <Link href="/create">Create Video</Link>
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="relative h-[40vh] w-full overflow-hidden rounded-xl bg-black shadow-lg">
            <Image src={item.src} alt={`media-${item.id}`} fill className="object-cover" />
            <BsFillPlayCircleFill className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
