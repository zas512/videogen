import HeroSection from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import { AnimatedTestimonials } from "@/components/main/Testimonials";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AnimatedTestimonials />
    </div>
  );
}
