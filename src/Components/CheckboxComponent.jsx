import React, { useState } from "react";

const CheckboxComponent = ({ id, label, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <div className="inline-flex items-center">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              className={`peer h-[21.5px] w-[21.5px] cursor-pointer transition-all appearance-none rounded-lg shadow hover:shadow-md border border-[#E2E8F0] ${
                isChecked
                  ? "checked:bg-[linear-gradient(90deg,#1A55A5_0%,#003F94_100%)] checked:border-[#B4BFCD]"
                  : "bg-[#F1F2F4]"
              }`}
              id={id}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
        <label htmlFor={id} className="ms-3">
          <div
            className={`border  rounded-[10px] px-3 py-1 ${
              isChecked ? "bg-transparent border-[#7C7C7C]" : "bg-[#F1F2F4] border-[#E2E8F0]"
            }`}
          >
            <span
              className={`font-montserrat text-sm font-medium leading-[17.07px] text-left ${
                isChecked ? "text-black" : "text-[#B4BFCD] "
              }`}
            >
              {label}
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CheckboxComponent;
