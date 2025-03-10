import HeroSection from "@/components/main/Hero";
import Showcase from "@/components/main/Showcase";
import AboutUs from "@/components/main/AboutUs";
import FAQs from "@/components/main/FAQs";
import ContactUs from "@/components/main/ContactUs";
import Pricing from "@/components/main/Pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Showcase />
      <AboutUs />
      <Pricing />
      <FAQs />
      <ContactUs />
    </>
  );
}
