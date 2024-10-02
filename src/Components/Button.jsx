import React from "react";

const Button = ({ text, btnImg }) => {
  return (
    <div>
      <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient">
        <span>
          <img src={btnImg} alt="print" />
        </span>
        <span className="text-white font-montserrat text-[14px] font-medium leading-[17.07px] text-left">{text}</span>
      </button>
    </div>
  );
};

export default Button;
