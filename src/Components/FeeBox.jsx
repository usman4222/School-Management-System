import React from "react";

const FeeBox = ({ title, total, bgColor  }) => {
  return (
    <div className="py-2">
      <div
        style={{ boxShadow: '0px 1px 3px 0px #0051AF1A',  backgroundColor: bgColor }}
        className="border border-[#E2E8F0] rounded-[10px] pl-5 pr-10 py-4"
      >
        <h6 className="font-montserrat text-[#4E5564] text-[14px] font-semibold leading-[20px] text-left">
          {title}
        </h6>
        <h4 className="font-montserrat text-[#1E293B] text-[24px] font-medium leading-[36px] text-left">
          {total}
        </h4>
      </div>
    </div>
  );
};

export default FeeBox;
