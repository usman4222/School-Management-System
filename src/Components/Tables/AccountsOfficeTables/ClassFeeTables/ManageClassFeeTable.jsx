import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { RiAiGenerate } from "react-icons/ri";
import { FaPlus, FaPrint } from "react-icons/fa6";
import Button from "../../../Button";
import TablePagination from "../../TablePagination";
import updown from "../../../../assets/svg/updown.svg";
import FeeChallanGenerationTable from "./FeeChallanGenerationTable";
import FeeDetailsTable from "./FeeDetailsTable";

const ManageClassFeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "sr", label: "Sr" },
    { key: "class", label: "Class" },
    { key: "totalFee", label: "Total Fee" },
    { key: "tuitionFee", label: "Tuition Fee" },
    { key: "examFee", label: "Exam Fee" },
    { key: "sportsFee", label: "Sports Fee" },
    { key: "libraryFee", label: "Library Fee" },
    { key: "utilityCharges", label: "Utility Charges" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      class: "7th",
      totalFee: "40,000",
      tuitionFee: "40,000",
      examFee: "40,000",
      sportsFee: "40,000",
      libraryFee: "40,000",
      utilityCharges: "40,000",
      action: "Edit",
    },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalRows = rows.length;

  return (
    <>
      <div className="h-auto mb-20  bg-white rounded-b-[12px] pt-5">
        <div className="  rounded-[12px ">
          <div className="flex justify-between mb-5 px-6 ">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
              Manage Class Fee
            </h2>
            <div className="flex gap-3 ">
              <Button text={"Generate Challan"} btnImg={<FaPlus />} />
              <div>
                <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient border border-[#E2E8F0]">
                  <span className="text-[#fff]">
                    <FaPrint />
                  </span>
                  <span className="text-[#fff] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                    Print
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="w-full flex items-center py-2 ">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex uppercase gap-3 items-center w-[180px]  pl-6  "
                >
                  <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                    {column.label}
                  </h6>
                  <img src={updown} alt="arrow" />
                </div>
              ))}
            </div>
            {currentRows.map((item) => (
              <div
                key={item.id}
                className="w-full flex items-center h-[58px] py-2 "
              >
                <div className="flex items-center w-[180px] pl-6 gap-3 ">
                  <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                    {item[columns[0].key]}
                  </h6>
                </div>
                {columns.slice(1).map((column, colIndex) => (
                  <h6
                    key={colIndex}
                    className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-[180px] text-left"
                  >
                    {column.key === "action" ? (
                      <span className="text-[#1464DF] cursor-pointer">
                        {item[column.key]}
                      </span>
                    ) : (
                      item[column.key]
                    )}
                  </h6>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FeeChallanGenerationTable />
      <FeeDetailsTable/>
    </>
  );
};

export default ManageClassFeeTable;
