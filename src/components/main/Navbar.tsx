"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  RiArrowRightFill,
  RiMenu3Fill,
  RiCloseFill,
  RiHome2Fill,
  RiStarFill,
  RiPriceTag3Fill,
  RiGalleryFill,
  RiArticleFill,
  RiContactsFill
} from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-border flex items-center justify-between border-b bg-transparent px-6 py-4 shadow-md xl:p-6">
        <div className="font-mono text-lg font-bold sm:text-2xl">AI VIDEO GEN</div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <button className="border-border hover:bg-hover hidden cursor-pointer items-center justify-center rounded-full border px-4 py-3 lg:flex">
            <RiArrowRightFill className="mr-2 size-6 rounded-full bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] p-1 text-white" />
            <p className="font-sm font-medium">Get Started</p>
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-hover rounded-md p-2 transition focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <RiMenu3Fill className="size-5 md:size-6" />
          </button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="bg-background/50 border-border absolute right-0 top-0 z-50 h-screen min-h-screen w-3/4 max-w-sm border-l p-6 shadow-lg backdrop-blur-3xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-2 text-gray-700 dark:text-gray-300"
              aria-label="Close menu"
            >
              <RiCloseFill className="size-6" />
            </button>
            <nav className="mt-10 flex flex-col space-y-6 text-lg font-medium">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-purple-600">
                <RiHome2Fill /> Home
              </Link>
              <a
                href="#featured"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <RiStarFill /> Featured
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <RiPriceTag3Fill /> Pricing
              </a>
              <Link
                href="/showcase"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <RiGalleryFill /> Showcase
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <RiArticleFill /> Blog
              </Link>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-purple-600"
              >
                <RiContactsFill /> Contact Us
              </a>
              <Link href="/login" className="flex items-center gap-2 hover:text-purple-600">
                <IoLogIn /> Login/SignUp
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      <div
        className={`border-border fixed left-1/2 top-3 z-20 hidden w-max -translate-x-1/2 space-x-8 rounded-full border px-8 py-4 backdrop-blur-2xl lg:flex xl:top-[1.3rem]`}
      >
        <Link href="/" className="hover:text-purple-500">
          Home
        </Link>
        <a href="#featured" className="hover:text-purple-500">
          Featured
        </a>
        <a href="#pricing" className="hover:text-purple-500">
          Pricing
        </a>
        <Link href="/showcase" className="hover:text-purple-500">
          Showcase
        </Link>
        <Link href="/blogs" className="hover:text-purple-500">
          Blog
        </Link>
        <a href="#contact" className="hover:text-purple-500">
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;
