import HeroSection from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Showcase from "@/components/main/Showcase";
import AboutUs from "@/components/main/AboutUs";
import FAQs from "@/components/main/FAQs";
import ContactUs from "@/components/main/ContactUs";
import Footer from "@/components/main/Footer";
import Pricing from "@/components/main/Pricing";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Showcase />
      <AboutUs />
      <Pricing />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}
