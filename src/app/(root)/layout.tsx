import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-26rem)]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
