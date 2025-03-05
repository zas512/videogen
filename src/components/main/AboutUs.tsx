"use client";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AnimatedTestimonials } from "@/components/main/Testimonials";

function AboutUs() {
  return (
    <section className="relative mt-8 flex w-full justify-center gap-8 p-10 text-center">
      {/* About Section */}
      <div className="w-full">
        <section className="border-border space-y-4 rounded-xl border-2 px-6 py-4">
          <p className="gradient-text text-left font-mono text-3xl font-semibold">About Us</p>
          <div className="space-y-4 text-xl">
            <div className="flex items-center gap-4">
              <IoCheckmarkDoneSharp className="text-green-500" />
              <p>AI-Powered Scriptwriting – Generate engaging scripts in seconds.</p>
            </div>
            <div className="flex items-center gap-4">
              <IoCheckmarkDoneSharp className="text-green-500" />
              <p>Effortless Video Creation – Turn text into high-quality videos instantly.</p>
            </div>
            <div className="flex items-center gap-4">
              <IoCheckmarkDoneSharp className="text-green-500" />
              <p>Customizable Styles – Pick fonts, themes, and lifelike voiceovers.</p>
            </div>
            <div className="flex items-center gap-4">
              <IoCheckmarkDoneSharp className="text-green-500" />
              <p>Stunning Quality – Professional, high-resolution video output.</p>
            </div>
          </div>
        </section>
        <section className="mt-6 space-y-2 px-6 text-left text-xl">
          <p className="mt-2 font-mono">
            SlickMagic AI transforms your ideas into stunning videos—just from text! Write a script, choose fonts,
            themes, and voices, and let AI handle the rest.
          </p>
          <div className="mt-4 space-y-2 text-lg">
            <div>
              <p className="gradient-text text-2xl font-bold">500k+</p>
              <p>Videos created with AI-powered automation</p>
            </div>
            <div>
              <p className="gradient-text text-2xl font-bold">4.9/5</p>
              <p>Average user rating for seamless AI video generation</p>
            </div>
          </div>
        </section>
      </div>
      {/* Testimonials Section */}
      <div className="w-full">
        <AnimatedTestimonials />
      </div>
    </section>
  );
}

export default AboutUs;
