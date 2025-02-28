"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`border-border hover:bg-hover flex cursor-pointer items-center justify-center rounded-full border p-2 ${theme === "dark" ? "hover:text-yellow-400" : "hover:text-yellow-900"}`}
      >
        {theme === "dark" ? <FaSun className="size-6" /> : <FaMoon className="size-6" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-border bg-background absolute right-0 top-14 z-10 w-40 rounded-md border shadow-lg p-2"
          >
            <span
              className="hover:bg-hover flex cursor-pointer items-center p-2"
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
            >
              <FaSun className="mr-2" /> Light
            </span>
            <span
              className="hover:bg-hover flex cursor-pointer items-center p-2"
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
            >
              <FaMoon className="mr-2" /> Dark
            </span>
            <span
              className="hover:bg-hover flex cursor-pointer items-center p-2"
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
            >
              <FaDesktop className="mr-2" /> System
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
