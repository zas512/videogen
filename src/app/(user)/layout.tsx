"use client";

import React, { useState } from "react";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import SidebarD from "@/components/dashboard/SidebarD";
import Dashboard from "@/app/(user)/dashboard/page";
import CreateNew from "@/app/(user)/create-new/page";
import Settings from "@/app/(user)/settings/page";
import Upgrade from "@/app/(user)/upgrade/page";

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); 

  const renderContent = () => {
    switch (activeMenu) {
      case "create-new":
        return <CreateNew />;
      case "settings":
        return <Settings />;
      case "upgrade":
        return <Upgrade />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <NavbarDashboard />
      <div className="flex flex-1">
        <SidebarD setActiveMenu={setActiveMenu} activeMenu={activeMenu} />

        <div className="flex-1 p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Layout;
