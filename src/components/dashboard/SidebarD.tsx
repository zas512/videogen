"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTachometerAlt, FaPlusCircle, FaRocket, FaCog, FaBars, FaTimes } from "react-icons/fa";

const SidebarD = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed left-4 top-4 z-50 rounded-md bg-gray-800 p-2 text-white md:hidden"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`bg-background/50 border-border fixed inset-y-0 left-0 z-40 w-72 transform border-r p-6 shadow-lg backdrop-blur-3xl transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:min-h-screen md:w-72 md:flex-col md:gap-2`}
      >
        <SidebarItem icon={<FaTachometerAlt />} text="Dashboard" href="/dashboard" active={pathname === "/dashboard"} />
        <SidebarItem icon={<FaPlusCircle />} text="Create" href="/create" active={pathname === "/create"} />
        <SidebarItem icon={<FaRocket />} text="Upgrade" href="/upgrade" active={pathname === "/upgrade"} />
        <SidebarItem icon={<FaCog />} text="Settings" href="/settings" active={pathname === "/settings"} />
      </div>
    </>
  );
};

// Sidebar Item Component
const SidebarItem = ({
  icon,
  text,
  href,
  active
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link href={href} className="group">
      <div
        className={`flex cursor-pointer items-center gap-3 rounded-xl px-5 py-3 text-xl transition-all duration-300 ${
          active
            ? "gradient-bg text-white shadow-lg"
            : "hover:bg-background-secondary text-gray-700 hover:text-gray-800 hover:shadow-md dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default SidebarD;
