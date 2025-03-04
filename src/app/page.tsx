import HeroSection from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Showcase from "@/components/main/Showcase";
// import { AnimatedTestimonials } from "@/components/main/Testimonials";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Showcase />
      {/* <AnimatedTestimonials /> */}
    </div>
  );
}
