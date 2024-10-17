import React, { useState } from "react";
import threeDotsIcon from "../../assets/svg/threedots.svg";
import updown from "../../assets/svg/updown.svg";
import TablePagination from "./TablePagination";
import { HiDownload } from "react-icons/hi";
import { RiAiGenerate } from "react-icons/ri";
import Button from "../Button";
import { FaPlus, FaPrint } from "react-icons/fa6";

const ClassFeeTable = () => {
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
    {
        id: 2,
        sr: "2",
        class: "7th",
        totalFee: "40,000",
        tuitionFee: "40,000",
        examFee: "40,000",
        sportsFee: "40,000",
        libraryFee: "40,000",
        utilityCharges: "40,000",
        action: "Edit",
      },
      {
        id: 3,
        sr: "3",
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

  const handleNextPage = () => {
    if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  //   font-montserrat text-2xl font-bold leading-6 text-left
  return (
    <div className="h-[100vh]">
      {/* Table Header */}
      <div className="bg-[#F8FAFC] pt-5 rounded-[12px] ">
        <div className="flex justify-between mb-5 px-6">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Fee Structure
          </h2>
          <div className="flex gap-3 ">
            {/* <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <span className="text-[#64748B]">
                  <FiPrinter />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Print
                </span>
              </button>
            </div> */}
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
        <div className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
          {columns.map((column, index) => (
            <div
              key={index}
              className="flex uppercase gap-3 items-center w-[180px]"
            >
              <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                {column.label}
              </h6>
              <img src={updown} alt="arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      {currentRows.map((item) => (
        <div
          key={item.id}
          className="w-full flex items-center h-[58px] py-2 px-6 bg-[#F8FAFC]"
        >
          <div className="flex items-center w-[180px] gap-3">
            <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
              {item[columns[0].key]}
            </h6>
          </div>
          {columns.slice(1).map((column, colIndex) => (
            <h6
              key={colIndex}
              className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[180px] text-left"
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

      <TablePagination
        currentPage={currentPage}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default ClassFeeTable;
