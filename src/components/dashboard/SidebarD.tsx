"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import { FaTachometerAlt, FaPlusCircle, FaRocket, FaCog } from "react-icons/fa";

const SidebarD = () => {
  const pathname = usePathname();

  return (
    <div className="bg-background border-border flex min-h-screen w-72 flex-col gap-2 border-r p-6 shadow-[10px_0_10px_-10px_rgba(0,0,0,0.3)]">
      <SidebarItem icon={<FaTachometerAlt />} text="Dashboard" href="/dashboard" active={pathname === "/dashboard"} />
      <SidebarItem icon={<FaPlusCircle />} text="Create" href="/create" active={pathname === "/create"} />
      <SidebarItem icon={<FaRocket />} text="Upgrade" href="/upgrade" active={pathname === "/upgrade"} />
      <SidebarItem icon={<FaCog />} text="Settings" href="/settings" active={pathname === "/settings"} />
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({
  icon,
  text,
  href,
  active
}: {
  icon: JSX.Element;
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
