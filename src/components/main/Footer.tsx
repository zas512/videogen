import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mt-20 flex flex-row flex-wrap items-center justify-between gap-8 px-4 pb-10 sm:px-10 lg:mt-10 lg:px-[4.5rem]">
      <div className="flex flex-wrap gap-[3rem] sm:gap-16 md:gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Support</h1>
          <p className="opacity-[90%]">Contact Us</p>
          <p className="opacity-[90%]">Help & Center</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Company</h1>
          <p className="opacity-[90%]">Terms of Service</p>
          <p className="opacity-[90%]">Privacy Policy</p>
          <p className="opacity-[90%]">About Us</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="roboto-bold text-xl font-semibold">Contact Us</h1>
          <div className="">
            {/* Phone number, email, and location */}
            <div className="mb-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span className="roboto-medium opacity-[90%]">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span className="roboto-medium opacity-[90%]">example@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <p className="roboto-medium opacity-[90%]">123 Street, City, Country</p>
              </div>
            </div>
            {/* Social media icons */}
            <div className="flex space-x-4 text-3xl">
              <FaLinkedin className="text-blue-600 hover:text-blue-800" />
              <FaFacebook className="text-blue-500 hover:text-blue-700" />
              <FaTwitter className="text-blue-400 hover:text-blue-600" />
              <FaInstagram className="text-pink-600 hover:text-pink-800" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-xl font-semibold">
          Receive updates from our weekly <br />
          newsletter.
        </p>
        <p className="opacity-[90%]">
          Be the first to get notified about new slickmagic.ai features &<br />
          updates.
        </p>
        <div className="flex flex-col gap-x-5 gap-y-4 sm:flex-row">
          <input
            className="roboto-light border-border w-full rounded-xl border px-4 py-2 outline-0 dark:border-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <button className="gradient-bg whitespace-nowrap rounded-xl px-4 py-3 text-white">Notify Me</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
