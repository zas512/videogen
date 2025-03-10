"use client";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { AnimatedTestimonials } from "@/components/main/Testimonials";

const AboutUs = () => {
  return (
    <section className="relative mt-8 flex w-full flex-col justify-center gap-8 p-10 text-sm md:text-lg lg:flex-row lg:text-xl">
      {/* About Section */}
      <div className="w-full">
        <section className="border-border space-y-4 rounded-xl border-2 px-6 py-4">
          <p className="gradient-text text-center font-mono text-3xl font-semibold md:text-left md:text-4xl lg:text-5xl">
            About Us
          </p>
          <div className="space-y-4 text-left">
            <p className="mt-2 font-medium">
              SlickMagic AI transforms your ideas into stunning videos—just from text! Write a script, choose fonts,
              themes, and voices, and let AI handle the rest.
            </p>
            <div className="flex gap-4">
              <IoCheckmarkDoneSharp className="text-3xl text-green-500 md:text-2xl" />
              <p>
                <span className="font-semibold">AI-Powered Scriptwriting</span> – Generate engaging scripts in seconds.
              </p>
            </div>
            <div className="flex gap-4">
              <IoCheckmarkDoneSharp className="text-3xl text-green-500 md:text-2xl" />
              <p>
                <span className="font-semibold">Effortless Video Creation</span> – Turn text into high-quality videos
                instantly.
              </p>
            </div>
            <div className="flex gap-4">
              <IoCheckmarkDoneSharp className="text-3xl text-green-500 md:text-2xl" />
              <p>
                <span className="font-semibold">Customizable Styles</span> – Pick fonts, themes, and lifelike
                voiceovers.
              </p>
            </div>
            <div className="flex gap-4">
              <IoCheckmarkDoneSharp className="text-3xl text-green-500 md:text-2xl" />
              <p>
                <span className="font-semibold">Stunning Quality</span> – Professional, high-resolution video output.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-6 flex justify-around gap-10 space-y-2 px-6 text-left md:mt-10 md:justify-start">
          <div>
            <p className="gradient-text text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">500k+</p>
            <p className="text-sm md:text-lg lg:text-xl">Videos created with AI</p>
          </div>
          <div>
            <p className="gradient-text text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">4.9/5</p>
            <p className="text-sm md:text-lg lg:text-xl">Average user rating</p>
          </div>
        </section>
      </div>
      {/* Testimonials Section */}
      <div className="w-full">
        <AnimatedTestimonials />
      </div>
    </section>
  );
};

export default AboutUs;
