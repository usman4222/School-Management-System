import React from "react";
import { FaPlus } from "react-icons/fa6";

const Button = ({ text, btnImg, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center pl-[8px] pr-[12px] py-[10px] gap-[4px] rounded-[9px] custom-gradient"
      >
        <span className="text-white">{btnImg}</span>
        <span className="text-white font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
