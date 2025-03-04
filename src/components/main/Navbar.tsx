// components/Navbar.js
import ThemeToggle from "./ThemeToggle";
import { RiArrowRightFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="border-border flex items-center justify-between border-b bg-transparent px-6 py-4 shadow-md xl:p-6">
        <div className="font-mono text-lg font-bold sm:text-2xl">AI VIDEO GEN</div>
        <div className="flex items-center gap-6">
          <button className="border-border hover:bg-hover flex cursor-pointer items-center justify-center rounded-full border px-4 py-3">
            <RiArrowRightFill className="mr-3 size-7 rounded-full bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] p-1 text-white" />
            <p className="font-medium">Get Started</p>
          </button>
          <ThemeToggle />
        </div>
      </nav>
      <div className="border-border fixed left-1/2 top-3 z-10 hidden w-max -translate-x-1/2 space-x-8 rounded-full border px-8 py-4 backdrop-blur-2xl lg:flex xl:top-[1.3rem]">
        <a href="#home">Home</a>
        <a href="#featured">Featured</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </div>
    </>
  );
};

export default Navbar;
