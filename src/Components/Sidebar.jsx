import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import menu from "../assets/svg/menu.svg";
import graph from "../assets/svg/graph.svg"; // Ensure these are SVGs
import admin from "../assets/svg/admin.svg"; // Ensure these are SVGs
import admission from "../assets/svg/admission.svg"; // Ensure these are SVGs

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: graph },
  { id: "admin", label: "Admin", icon: admin },
  { id: "admission", label: "Admission", icon: admission },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeNav, setActiveNav] = useState("dashboard");

  const handleNavClick = (id) => {
    setActiveNav(id); 
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-[100vh] border border-r-[#E2E8F0] bg-[#ffffff] pr-3 transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center pt-[21px] pl-[18.67px] mb-8">
        {isOpen && (
          <div>
            <img src={logo} alt="logo" className="h-[64px]" />
          </div>
        )}
        <button onClick={toggleSidebar}>
          <img src={menu} alt="menu" className="w-[24px]" />
        </button>
      </div>
      <div className="pl-[14px]">
        {navItems.map(({ id, label, icon }) => (
          <nav
            key={id}
            className={`pl-[14px] py-[14px] gap-4 rounded-[9px] flex cursor-pointer ${
              activeNav === id
                ? "bg-gradient-to-r from-[#1A55A5] to-[#003F94]"
                : "bg-white"
            }`}
            onClick={() => handleNavClick(id)} 
          >
            <div>
              <img
                src={icon}
                alt={label}
                className={`w-[24px] h-[24px] ${
                  activeNav === id ? "fill-white" : "fill-[#3B424A]"
                }`}
                style={{
                  filter: activeNav === id ? "none" : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)"
                }} 
              />
            </div>
            {isOpen && (
              <div>
                <span
                  className={`font-montserrat text-[14px] font-medium leading-[22px] text-left ${
                    activeNav === id ? "text-white" : "text-black"
                  }`} // Text color changes based on active link
                >
                  {label}
                </span>
              </div>
            )}
          </nav>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
