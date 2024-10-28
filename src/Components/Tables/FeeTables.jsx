import React, { useState } from "react";
import TablePagination from "./TablePagination";
import Button from "../Button";
import { FaPlus, FaPrint } from "react-icons/fa6";
import ClassFeeTableComponent from "./AccountsOfficeTables/ClassFeeTables/ManageClassFeeTable";
import HostelFeeTable from "./AccountsOfficeTables/HostelFeeTables/HostelFeeTable";
import ManageClassFeeTable from "./AccountsOfficeTables/ClassFeeTables/ManageClassFeeTable";
import RoutesTable from "./AccountsOfficeTables/TransportFeeTables/RoutesTable";

const FeeTables = () => {
  const [selectedTable, setSelectedTable] = useState("Class Fee"); 

  const handleTableSelection = (tableName) => {
    setSelectedTable(tableName);
  };

  return (
    <div className="h-auto  ">
      {/* Table Header */}
      <div className="   ">
        <div className="flex gap-10 flex-wrap justify-start bg-white pt-5 rounded-t-[12px] w-full  ">
          <h2
            onClick={() => handleTableSelection("Class Fee")}
            className={` font-inter text-[20px] font-semibold leading-[24.2px] text-left cursor-pointer  pl-[13px] pb-[25px] pr-[40px] ${
              selectedTable === "Class Fee"
                ? "border-b-2 border-[#1A55A5] text-[#1A55A5]"
                : "text-[#3B424A]"
            }`}
          >
            Class Fee
          </h2>
          <h2
            onClick={() => handleTableSelection("Transport Fee")}
            className={` font-inter text-[20px] font-semibold leading-[24.2px] text-left cursor-pointer pl-[13px]  pb-[25px] pr-[40px] ${
              selectedTable === "Transport Fee"
                ? "border-b-2 border-[#1A55A5] text-[#1A55A5]"
                : "text-[#3B424A]"
            }`}
          >
            Transport Fee
          </h2>
          <h2
            onClick={() => handleTableSelection("Hostel Fee")}
            className={` font-inter text-[20px] font-semibold leading-[24.2px] text-left cursor-pointer pl-[13px]  pb-[25px] pr-[40px] ${
              selectedTable === "Hostel Fee"
                ? "border-b-2 border-[#1A55A5] text-[#1A55A5]"
                : "text-[#3B424A]"
            }`}
          >
            Hostel Fee
          </h2>
        </div>
        <div className="">
          {selectedTable === "Class Fee" && <ManageClassFeeTable />}
          {selectedTable === "Transport Fee" && <RoutesTable />}
          {selectedTable === "Hostel Fee" && <HostelFeeTable />} 
        </div>
      </div>
    </div>
  );
};

export default FeeTables;
