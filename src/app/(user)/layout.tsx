import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import SidebarD from "@/components/dashboard/SidebarD";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarDashboard />
      <div className="flex flex-1">
        <SidebarD />
        <div className="bg-background-secondary/50 flex-1 p-10">{children}</div>
      </div>
    </>
  );
};

export default Layout;
