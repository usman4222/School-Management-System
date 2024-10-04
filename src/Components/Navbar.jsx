import React, { useState } from "react";
import notification from "../assets/svg/notification.svg";
import settings from "../assets/svg/settings.svg";
import NotificationModal from "./Modals/NotificationModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const notifications = [
    { id: 1, message: 'You have a new message.' },
    { id: 2, message: 'Your profile has been updated.' },
    { id: 3, message: 'Someone liked your post.' },
  ];

  return (
    <header className="bg-[#ffffff] shadow-md p-[6px_24px] flex justify-between items-center  z-30">
      <div className="flex items-center">
        <h2 className="font-montserrat text-sm font-medium leading-[22px] text-left text-[#727983]">
          School Management System V 1.0
        </h2>
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="text-[#727983] font-montserrat text-[14px] font-medium leading-[22px]">
          Last login: 19:00:00 - 12/02/2024
        </span>
        <div className="flex gap-[20px]">
          <div>
            <div
              className="bg-[#F1F5F9] cursor-pointer rounded-full p-[10px] flex justify-center items-center relative"
              onClick={() => setShowModal(true)}
            >
              <img src={notification} alt="notification" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                {notifications.length}
              </span>
            </div>

            <NotificationModal
              show={showModal}
              onClose={() => setShowModal(false)}
              notifications={notifications}
            />
          </div>
          <div className="bg-[#F1F5F9]  cursor-pointer rounded-full p-[10px] flex justify-center items-center">
            <img src={settings} alt="settings" />
          </div>
        </div>
        <div className="w-[1px] h-[52px] rounded-[1px] bg-[#E2E8F0]"></div>
      </div>
    </header>
  );
};

export default Navbar;
