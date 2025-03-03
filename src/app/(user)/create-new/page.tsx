import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Image from "next/image";
import dummyImg1 from "@/assets/DummyImg1.jpg";

function Page() {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [selectedFont, setSelectedFont] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("");
  const [selectedPlaySpeed, setSelectedPlaySpeed] = useState("");
  const [selectedSubtitlePosition, setSelectedSubtitlesPosition] = useState("");
  const [selectedSettings, setSelectedSettings] = useState("");

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

  const voices = ["Charlie", "George", "Callum", "Liam", "Will"];
  const aspectRatios = ["Portait", "Landscape"];
  const playspeed = ["Fast", "Normal", "Slow"];
  const subtitlePosition = ["Top", "Bottom"];
  const settings = ["Default", "Manual"];

  return (
    <>
      <div className="p-2">
        <p className="gradient-text font-mono text-5xl font-bold">Create Video</p>
        <p className="font-mono text-lg font-bold">
          Bring your ideas to life with AI-powered video generation. Start creating stunning videos in just a few
          clicks!
        </p>
        <div className="flex justify-between">
          <div className="w-1/2">
            <div className="mt-6">
              <p className="gradient-text text-2xl font-bold">Video Topic</p>
              <p className="font-mono text-sm">Write down the topic for your video which you want to generate</p>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Video Topic"
                  className="border-black-200 h-12 w-full max-w-[580px] rounded-lg border px-2"
                />
              </div>

              <p className="gradient-text mt-4 text-2xl font-bold">Choose video vibe</p>
              <p className="font-mono text-sm">Choose the vibe that you want to create for the video</p>
              <div className="mt-2 flex w-full max-w-[600px] flex-wrap gap-2">
                {vibeStyles.map((style, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVibe(style)}
                    className={`flex h-10 items-center justify-center rounded-xl border-2 border-[#000099] px-4 font-mono transition-all duration-200 ${
                      selectedVibe === style ? "bg-[#000099] text-white" : "bg-transparent text-[#000099]"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              <p className="gradient-text mt-8 text-2xl font-bold">Choose Fontstyle</p>
              <p className="font-mono text-sm">Choose the font that you want to use in this video</p>
              <div className="mt-2 flex w-full max-w-[600px] flex-wrap gap-2">
                {fontStyles.map((font, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFont(font.className)}
                    className={`flex h-10 items-center justify-center rounded-xl border-2 border-[#000099] px-4 transition-all duration-200 ${font.className} ${selectedFont === font.className ? "bg-[#000099] text-white" : "bg-transparent text-[#000099]"}`}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
              <div>
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="mt-4 rounded-md border bg-gray-200 px-4 py-2"
                >
                  Select Font Color
                </button>

                {showColorPicker && (
                  <div className="absolute mt-2">
                    <ChromePicker color={selectedColor} onChangeComplete={(color) => setSelectedColor(color.hex)} />
                  </div>
                )}

                <p className="gradient-text mt-8 text-2xl font-bold">Voice Over</p>
                <p className="font-mono text-sm">Add a voice to your video and take it to next level</p>
                <div className="mt-2">
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="border-black-200 h-12 w-full max-w-[300px] rounded-lg border px-2"
                  >
                    <option value="">Select a Voice</option>
                    {voices.map((voice, index) => (
                      <option key={index} value={voice}>
                        {voice}
                      </option>
                    ))}
                  </select>

                  <p className="gradient-text mt-8 text-2xl font-bold">Aspect Ratio</p>
                  <p className="font-mono text-sm">Choose the aspect ratio for your video</p>
                  <div className="mt-2">
                    <select
                      value={selectedAspectRatio}
                      onChange={(e) => setSelectedAspectRatio(e.target.value)}
                      className="border-black-200 h-12 w-full max-w-[300px] rounded-lg border px-2"
                    >
                      <option value="">Select Aspect Ratio</option>
                      {aspectRatios.map((ratios, index) => (
                        <option key={index} value={ratios}>
                          {ratios}
                        </option>
                      ))}
                    </select>

                    <p className="gradient-text mt-8 text-2xl font-bold">Play Speed</p>
                    <p className="font-mono text-sm">Choose play speed for your video</p>
                    <div className="mt-2">
                      <select
                        value={selectedPlaySpeed}
                        onChange={(e) => setSelectedPlaySpeed(e.target.value)}
                        className="border-black-200 h-12 w-full max-w-[300px] rounded-lg border px-2"
                      >
                        <option value="">Select Play Speed</option>
                        {playspeed.map((speed, index) => (
                          <option key={index} value={speed}>
                            {speed}
                          </option>
                        ))}
                      </select>

                      <p className="gradient-text mt-8 text-2xl font-bold">Subtitles Position</p>
                      <p className="font-mono text-sm">Choose where should your subtitles align</p>
                      <div className="mt-2">
                        <select
                          value={selectedSubtitlePosition}
                          onChange={(e) => setSelectedSubtitlesPosition(e.target.value)}
                          className="border-black-200 h-12 w-full max-w-[300px] rounded-lg border px-2"
                        >
                          <option value="">Select Subtitles Position</option>
                          {subtitlePosition.map((position, index) => (
                            <option key={index} value={position}>
                              {position}
                            </option>
                          ))}
                        </select>

                        <p className="gradient-text mt-8 text-2xl font-bold">Settings</p>
                        <p className="font-mono text-sm">Choose settings for your video</p>
                        <div className="mt-2">
                          <select
                            value={selectedSettings}
                            onChange={(e) => setSelectedSettings(e.target.value)}
                            className="border-black-200 h-12 w-full max-w-[300px] rounded-lg border px-2"
                          >
                            <option value="">Select Subtitles Position</option>
                            {settings.map((settings, index) => (
                              <option key={index} value={settings}>
                                {settings}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-1/2 flex-col px-10">
            <div className="flex h-[550px] w-[350px] items-center justify-center overflow-hidden rounded-lg bg-gray-200">
              <Image alt="img" src={dummyImg1} className="h-full w-full object-cover" />
            </div>
            <button className="w-88 mt-6 h-12 rounded-lg bg-[#000099] px-8 font-mono text-white">Generate Video</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
