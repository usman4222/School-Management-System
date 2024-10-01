import React from "react";
import { Link } from "react-router-dom";

const DashBoardCard = ({
  title,
  total,
  usersImage,
  plusImage,
  bgColor = "#F7B84B1A",
  textColor = "#4E5564",
  viewAllText = "View all",
}) => {
  return (
    <div className="bg-white flex flex-col justify-between w-[360px] h-[184px]  pt-[18px] gap-[10px] rounded-[10px] border-t border border-gray-200 shadow-[0px_1px_3px_0px_#0051AF1A] px-4">
      <div className="flex justify-between items-center">
        <div className={`bg-[${bgColor}] p-2 rounded-full`}>
          <img src={usersImage} alt="users" />
        </div>
        <div>
          <img src={plusImage} alt="plus" />
        </div>
      </div>
      <h4 className="font-montserrat text-base font-semibold leading-5 text-left py-3 text-[#4E5564]">
        {title}
      </h4>
      <div className="flex justify-between items-center pb-3">
        <div>
          <h5 className="font-montserrat text-2xl font-medium leading-9 text-left">
            {total}
          </h5>
        </div>
        <div>
          <Link className="font-montserrat text-base font-medium leading-6 text-left text-[#F7B84B]">
            {viewAllText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
