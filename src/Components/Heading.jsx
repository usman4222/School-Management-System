import React from "react";
import arrow from "../assets/svg/arrow.svg";

const Heading = ({ page }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h4 className="font-montserrat text-sm font-medium leading-5 text-[#4D515A]">Dashboard</h4>
        <img src={arrow} alt="arrow" />
        <h4 className="font-montserrat text-sm font-medium leading-5 text-[#4D515A]">{page}</h4>
        <img src={arrow} alt="arrow" />
        
      </div>
    </div>
  );
};

export default Heading;
