"use client";
import { useState, useRef } from "react";
import { voices } from "@/lib/data";
import { BsFillPlayFill, BsTabletLandscapeFill } from "react-icons/bs";
import { FaPortrait } from "react-icons/fa";

function Page() {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedPlaySpeed, setSelectedPlaySpeed] = useState("");
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const vibeStyles = [
    "Realistic",
    "Animated",
    "Cartoonish",
    "Abstract",
    "Vintage",
    "Minimalist",
    "Fantasy",
    "Sci-Fi",
    "Pop Art",
    "Sketch"
  ];

  const fontStyles = [
    { name: "Roboto", className: "font-roboto" },
    { name: "Abril Fatface", className: "font-abril-fatface" },
    { name: "Pacifico", className: "font-pacifico" },
    { name: "Teko", className: "font-teko" },
    { name: "Lora", className: "font-lora" },
    { name: "Bebas Neue", className: "font-bebas-neue" },
    { name: "Indie Flower", className: "font-indie-flower" },
    { name: "Righteous", className: "font-righteous" },
    { name: "Zilla Slab", className: "font-zilla-slab" },
    { name: "Satisfy", className: "font-satisfy" }
  ];

  const aspectRatios = ["Portait", "Landscape"];
  const playspeed = ["Fast", "Normal", "Slow"];
  const subtitlePosition = ["Top", "Bottom"];
  const settings = ["Default", "Manual"];

  const handlePlay = (name: string) => {
    if (playing && audioRefs.current[playing]) {
      audioRefs.current[playing]?.pause();
    }
    if (audioRefs.current[name]) {
      audioRefs.current[name]?.play();
      setPlaying(name);
    }
  };

  return (
    <>
      <p className="gradient-text font-mono text-5xl font-bold">Create Video</p>
      <p className="my-8 text-lg">Estimated video generation time: 10 - 12 minutes</p>
      <section className="max-w-7xl space-y-12">
        {/* Topic */}
        <div className="flex flex-col gap-3">
          <label htmlFor="topic" className="text-2xl font-semibold">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            placeholder="Enter Video Topic"
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </div>
        {/* Vibe */}
        <div className="flex flex-col gap-3">
          <label htmlFor="topic" className="text-2xl font-semibold">
            Choose Video Vibe
          </label>
          <div className="flex w-full flex-wrap gap-4">
            {vibeStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedVibe(style)}
                className={`border-border rounded-xl border px-4 py-3 font-mono transition-all duration-200 ${
                  selectedVibe === style
                    ? "gradient-bg text-white shadow-lg"
                    : "hover:bg-background-secondary bg-transparent hover:shadow-md"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        {/* Font */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Choose Font-Style</p>
          <div className="flex w-full flex-wrap gap-4">
            {fontStyles.map((font) => (
              <button
                key={font.name}
                onClick={() => setSelectedFont(font.className)}
                className={`border-border rounded-xl ${font.className} border px-4 py-3 font-mono transition-all duration-200 ${
                  selectedFont === font.className
                    ? "gradient-bg text-white shadow-lg"
                    : "hover:bg-background-secondary bg-transparent hover:shadow-md"
                }`}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>
        {/* Font Settings */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Font Settings</p>
          <section className="flex gap-4">
            {/* Font Size */}
            <div className="flex w-full flex-col gap-y-1">
              <label htmlFor="font-size" className="font-medium opacity-80">
                Size
              </label>
              <select className="border-border w-full rounded-xl border px-4 py-3">
                <option key={1} value={"Small"}>
                  Small
                </option>
                <option key={2} value={"Medium"}>
                  Medium
                </option>
                <option key={3} value={"Large"}>
                  Large
                </option>
              </select>
            </div>
            {/* Font Color */}
            <div className="flex w-full flex-col gap-y-1">
              <label htmlFor="font-color" className="font-medium opacity-80">
                Font Color
              </label>
              <section className="border-border flex w-full items-center justify-between rounded-xl border px-4 py-2">
                <p>{selectedColor}</p>
                <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
              </section>
            </div>
            {/* Stroke Color */}
            <div className="flex w-full flex-col gap-y-1">
              <label htmlFor="stroke-color" className="font-medium opacity-80">
                Stroke Color
              </label>
              <section className="border-border flex w-full items-center justify-between rounded-xl border px-4 py-2">
                <p>{selectedColor}</p>
                <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
              </section>
            </div>
          </section>
        </div>
        {/* Voice Over */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Voice Over</p>
          <section>
            <p className="font-medium opacity-80">Male Voices</p>
            <div className="mt-1 flex flex-wrap gap-4">
              {voices.male.map((voice) => (
                <div
                  key={voice.name}
                  className="border-border relative rounded-xl border px-4 py-3"
                  onMouseEnter={() => setPlaying(voice.name)}
                  onMouseLeave={() => setPlaying(null)}
                >
                  <audio
                    ref={(el) => {
                      audioRefs.current[voice.name] = el;
                    }}
                    src={voice.audio}
                  >
                    <track kind="captions" srcLang="en" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                  {playing === voice.name && (
                    <button
                      onClick={() => handlePlay(voice.name)}
                      className="gradient-bg absolute inset-0 flex items-center justify-center rounded-xl bg-opacity-50 text-white"
                    >
                      <BsFillPlayFill size={24} />
                    </button>
                  )}
                  {voice.name}
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="font-medium opacity-80">Female Voices</p>
            <div className="mt-1 flex flex-wrap gap-4">
              {voices.female.map((voice) => (
                <div
                  key={voice.name}
                  className="border-border relative rounded-xl border px-4 py-3"
                  onMouseEnter={() => setPlaying(voice.name)}
                  onMouseLeave={() => setPlaying(null)}
                >
                  <audio
                    ref={(el) => {
                      audioRefs.current[voice.name] = el;
                    }}
                    src={voice.audio}
                  >
                    <track kind="captions" srcLang="en" label="English captions" />
                    Your browser does not support the audio element.
                  </audio>
                  {playing === voice.name && (
                    <button
                      onClick={() => handlePlay(voice.name)}
                      className="gradient-bg absolute inset-0 flex items-center justify-center rounded-xl bg-opacity-50 text-white"
                    >
                      <BsFillPlayFill size={24} />
                    </button>
                  )}
                  {voice.name}
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Play Speed */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Play Speed</p>
          <div className="flex gap-4 text-xl">
            {playspeed.map((speed) => (
              <label key={speed} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="playSpeed"
                  value={speed}
                  checked={selectedPlaySpeed === speed}
                  onChange={() => setSelectedPlaySpeed(speed)}
                  className="accent-purple-600"
                />
                {speed}
              </label>
            ))}
          </div>
        </div>
        {/* Aspect Ratio */}
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Aspect Ratio</p>
          <div className="flex gap-4">
            <div className="border-border hover:bg-background-secondary rounded-xl border px-4 py-3 hover:shadow-md">
              <FaPortrait size={24} />
            </div>
            <div className="border-border hover:bg-background-secondary rounded-xl border px-4 py-3 hover:shadow-md">
              <BsTabletLandscapeFill size={24} />
            </div>
          </div>
        </div>
        {/* Transcript */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center justify-between">
            <label htmlFor="transcript" className="text-2xl font-semibold">
              Transcript
            </label>
            <button className="gradient-bg rounded-xl px-4 py-3 text-white">Use AI to Write Transcript</button>
          </span>
          <textarea
            rows={4}
            id="transcript"
            placeholder="Enter Transcript"
            className="border-border w-full rounded-xl border px-4 py-3"
          />
        </div>
        {/* Button */}
        <button className="gradient-bg rounded-xl px-6 py-3 text-3xl text-white">Generate Video</button>
      </section>
    </>
  );
}

export default Page;
