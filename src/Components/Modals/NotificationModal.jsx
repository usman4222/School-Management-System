import React from "react";
import noti from "../../assets/svg/noti.svg";

const NotificationModal = ({ show, onClose,  }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-1/3 p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 transition"
            onClick={onClose}
          >
            &#x2715; 
          </button>
        </div>
        <h3 className="text-[#77808D] font-montserrat text-[18px] font-semibold leading-[22px] text-center">
          NOTIFICATIONS
        </h3>
        <div className="flex flex-col gap-[18px] mt-[18px]">
          <div>
            <div className="flex items-center gap-[12px]">
              <img src={noti} alt="img" />
              <span className="text-[var(--Gray-02,#40444D)] font-montserrat text-[16px] font-medium leading-[22px]">
                Edit your information in a swipe
              </span>
            </div>
            <div>
              <p className="text-[var(--Gray-01,#4D515A)] font-montserrat text-[14px] font-normal leading-[22px] mt-[12px]">
                With just a swipe of your finger you can delete an email or flag
                one for follow-up. All it takes is a multi-touch trackpad or
                magic mouse.
              </p>
              <span className="mt-[12px] text-[#96A4B9] font-montserrat text-[14px] font-medium leading-[22px]">
                Jan 13, 2022
              </span>
            </div>
            <div className="h-[1px] bg-[#E2E8F0] w-full mt-[18px]"></div>
          </div>
          <div>
            <div className="flex items-center gap-[12px]">
              <img src={noti} alt="img" />
              <span className="text-[var(--Gray-02,#40444D)] font-montserrat text-[16px] font-medium leading-[22px]">
                Customize swipe left and right
              </span>
            </div>
            <div>
              <p className="text-[var(--Gray-01,#4D515A)] font-montserrat text-[14px] font-normal leading-[22px] mt-[12px]">
                All it takes is a multi-touch trackpad or magic mouse.
              </p>
              <span className="mt-[12px] text-[#96A4B9] font-montserrat text-[14px] font-medium leading-[22px]">
                Sep 13, 2022
              </span>
            </div>
            <div className="h-[1px] bg-[#E2E8F0] w-full mt-[18px]"></div>
          </div>
          <div>
            <div className="flex items-center gap-[12px]">
              <img src={noti} alt="img" />
              <span className="text-[var(--Gray-02,#40444D)] font-montserrat text-[16px] font-medium leading-[22px]">
                Say goodbye ro paper receipts!
              </span>
            </div>
            <div>
              <p className="text-[var(--Gray-01,#4D515A)] font-montserrat text-[14px] font-normal leading-[22px] mt-[12px]">
                Discover how industry professionals leverage Microsoft 365 to
                communicate, collaborate, and improve productivity across the
                team and organization.
              </p>
              <span className="mt-[12px] text-[#96A4B9] font-montserrat text-[14px] font-medium leading-[22px]">
                Jan 13, 2022
              </span>
            </div>
            <div className="h-[1px] bg-[#E2E8F0] w-full mt-[18px]"></div>
          </div>
        </div>
        <ul className="space-y-4"></ul>
      </div>
    </div>
  );
};

export default NotificationModal;
