import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-0" : "ml-0"
        }`}
      >
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <main >{children}</main>
      </div>
    </div>
  );
};

export default Layout;
