"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");

  // Email validation handler
  const handleNotifyClick = () => {
    if (email === "") {
      toast.error("Please enter an email address.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
    } else {
      toast.success("You've been subscribed to notifications!");
      setEmail(""); // Clear input field after submission
    }
  };

  return (
    <div className="flex flex-row gap-8 justify-between items-center px-4 sm:px-10 lg:px-[4.5rem] lg:mt-10 pb-10 flex-wrap mt-2">
      <div className="flex gap-[3rem] sm:gap-16 md:gap-20 flex-wrap">
        <div className="flex flex-col gap-4">
          <h1 className="roboto-bold font-semibold text-xl">Support</h1>
          <p className="roboto-medium   opacity-[90%]">
            Contact Us
          </p>
          <p className="roboto-medium   opacity-[90%]">
            Help & Center
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="roboto-bold font-semibold text-xl">Company</h1>
          <p className="roboto-medium   opacity-[90%]">
            Terms of Service
          </p>
          <p className="roboto-medium   opacity-[90%]">
            Privacy Policy
          </p>
          <p className="roboto-medium   opacity-[90%]">About Us</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="roboto-bold font-semibold text-xl">Contact Us</h1>
          <div className="">
            {/* Phone number, email, and location */}
            <div className="mb-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-600" />
                <span className="roboto-medium   opacity-[90%]">
                  +123 456 7890
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-600" />
                <span className="roboto-medium   opacity-[90%]">
                  example@example.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-600" />
                <p className="roboto-medium   opacity-[90%]">
                  123 Street, City, Country
                </p>
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
        <p className="roboto-bold font-semibold text-xl">
          Receive updates from our weekly <br />
          newsletter.
        </p>
        <p className="roboto-medium   opacity-[90%]">
          Be the first to get notified about new slickmagic.ai features &<br />
          updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded w-full py-2 px-4 text-gray-700 outline-0 focus:bg-white roboto-light"
            type="email"
            placeholder="Enter your email"
          />
          <button
            onClick={handleNotifyClick}
            className="bg-gradient-to-r bg-[#000099] py-2 px-3 border border-gray-400 shadow roboto-regular rounded-lg text-white flex gap-x-2 hover:from-[#3fa7b2] hover:to-[#23353e] hover:border-gray-500 hover:shadow-lg hover:text-gray-200 transition-all duration-300 text-center mx-auto"
          >
            Notify <span>Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
