import React from "react";
import notification from "../assets/svg/notification.svg";
import settings from "../assets/svg/settings.svg";

const Navbar = () => {
  return (
    <header className="bg-[#ffffff] shadow-md py-6 px-24 flex justify-between items-center  z-30">
      <div className="flex items-center">
        <h2 className="font-montserrat text-sm font-medium leading-[22px] text-left text-[#727983]">
          School Management System V 1.0
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-montserrat text-[14px] font-medium leading-[22px] text-left  md:inline">
          Last login: 19:00:00 - 12/02/2024
        </span>
        <div className="flex gap-10">
          <div className="bg-[#F1F5F9]  cursor-pointer rounded-full h-[44px] w-[44px] flex justify-center items-center">
            <img src={notification} alt="notification" />
          </div>
          <div className="bg-[#F1F5F9]  cursor-pointer rounded-full h-[44px] w-[44px] flex justify-center items-center">
            <img src={settings} alt="settings" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
