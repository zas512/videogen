import HeroSection from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Showcase from "@/components/main/Showcase";
import AboutUs from "@/components/main/AboutUs";
import Prices from "@/components/main/Prices";
import FAQs from "@/components/main/FAQs";
import ContactUs from "@/components/main/ContactUs";
import Footer from "@/components/main/Footer";

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
      <hr className="border-t w-full" /> 
      <FAQs/>
      <hr className="border-t w-full" /> 
      <ContactUs/>
      <hr className="border-t w-full" /> 
      <Footer/>
      {/* <AnimatedTestimonials /> */}
    </div>
  );
}
