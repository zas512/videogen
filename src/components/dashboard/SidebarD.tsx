"use client";

import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

interface SidebarDProps {
  setActiveMenu: (menu: string) => void;
  activeMenu: string;
}

const SidebarD: React.FC<SidebarDProps> = ({ setActiveMenu, activeMenu }) => {
  return (
    <Sidebar className="h-full p-6 my-14">
      <Menu>
        <MenuItem
          onClick={() => setActiveMenu("dashboard")}
          style={{
            color: activeMenu === "dashboard" ? "#00BCD4" : "inherit",
            fontWeight: activeMenu === "dashboard" ? "bold" : "normal",
            fontSize: activeMenu === "dashboard" ? "1.125rem" : "1rem",
          }}
        >
          Dashboard
        </MenuItem>

        <MenuItem
          onClick={() => setActiveMenu("create-new")}
          style={{
            color: activeMenu === "create-new" ? "#00BCD4" : "inherit",
            fontWeight: activeMenu === "create-new" ? "bold" : "normal",
            fontSize: activeMenu === "create-new" ? "1.125rem" : "1rem",
          }}
        >
          Create Video
        </MenuItem>

        <MenuItem
          onClick={() => setActiveMenu("upgrade")}
          style={{
            color: activeMenu === "upgrade" ? "#00BCD4" : "inherit",
            fontWeight: activeMenu === "upgrade" ? "bold" : "normal",
            fontSize: activeMenu === "upgrade" ? "1.125rem" : "1rem",
          }}
        >
          Upgrade
        </MenuItem>

        <MenuItem
          onClick={() => setActiveMenu("settings")}
          style={{
            color: activeMenu === "settings" ? "#00BCD4" : "inherit",
            fontWeight: activeMenu === "settings" ? "bold" : "normal",
            fontSize: activeMenu === "settings" ? "1.125rem" : "1rem",
          }}
        >
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarD;
