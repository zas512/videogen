import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-10 px-6 py-20 text-sm md:flex-row">
      <section className="flex gap-14 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold sm:text-lg lg:text-xl">Contact Us</p>
          <div className="space-y-2 opacity-80">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <p>example@example.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <p>123 Street, City, Country</p>
            </div>
            <div className="mt-4 flex space-x-4 text-lg md:text-xl">
              <FaLinkedin className="cursor-pointer" />
              <FaFacebook className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-base font-semibold sm:text-lg lg:text-xl">Support</h1>
          <div className="space-y-2 opacity-80">
            <p>Help & Center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 text-center sm:text-left">
        <p className="text-base font-semibold sm:text-lg lg:text-xl">Receive updates from our weekly newsletter.</p>
        <div className="flex gap-4 md:gap-8">
          <input
            className="border-border w-full rounded-lg border px-4 py-2 outline-none focus:outline-none focus:ring-2 dark:border-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <button className="gradient-bg whitespace-nowrap rounded-lg px-4 py-3 text-white">Notify Me</button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
