import HeroSection from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import { AnimatedTestimonials } from "@/components/main/Testimonials";
import Showcase from "@/components/main/Showcase";
import AboutUs from "@/components/main/AboutUs";
import Prices from "@/components/main/Prices";
import ContactUs from "@/components/main/ContactUs";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <hr className="border-t w-full" /> 
      <Showcase/>
      <hr className="border-t w-full" /> 
      <AboutUs/>
      <hr className="border-t w-full" /> 
      <Prices/>
      {/* <AnimatedTestimonials /> */}
    </div>
  );
}
