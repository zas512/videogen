import ThemeToggle from "@/components/main/ThemeToggle";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";

function NavbarDashboard() {
  return (
    <nav className="border-border flex items-center justify-between border-b bg-transparent px-6 py-4 shadow-md xl:p-6">
      <Link href="/">
        <p className="font-mono text-lg font-bold sm:text-2xl">AI VIDEO GEN</p>
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <ImCoinDollar className="size-6 text-amber-400" />
          <p className="font-sm font-medium">100</p>
        </div>
        <button className="border-border hover:bg-hover flex cursor-pointer items-center justify-center rounded-full border px-4 py-3">
          <FaUser className="mr-2 size-6 rounded-full bg-gradient-to-r from-[#9d00ff] to-[#ff00ff] p-1 text-white" />
          <p className="font-sm font-medium">Test User</p>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default NavbarDashboard;
