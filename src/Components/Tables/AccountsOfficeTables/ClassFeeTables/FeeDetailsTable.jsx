import React, { useState } from "react";
import threeDotsIcon from "../../../../assets/svg/threedots.svg";
import updown from "../../../../assets/svg/updown.svg";
import TablePagination from "../../TablePagination";
import { HiDownload } from "react-icons/hi";
import { RiAiGenerate } from "react-icons/ri";
import Button from "../../../Button";
import CheckboxComponent from "../../../CheckboxComponent";
import FeeBox from "../../../FeeBox";
import { FaPrint } from "react-icons/fa6";

const FeeDetailsTable = () => {
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
  return (
    <div className="h-auto bg-[#fff] pb-10 rounded-[12px] px-6 mt-10">
      <div className=" pt-5 rounded-[12px] ">
        <div className="flex justify-between mb-5 ">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Students
          </h2>
        </div>

        <div className="">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Fee Details
          </h2>

          <div className="flex justify-between pt-10 flex-wrap">
            <FeeBox title="Total Students" total="1,290" />
            <FeeBox title="Total Tuition Fee" total="1,290" />
            <FeeBox title="Total Tuition Fee" total="82,000" />
            <FeeBox title="Total Exam Fee" total="1,290" />
            <FeeBox title="Total Library Fee" total="1,290" />
            <FeeBox title="Total Medical Fee" total="52,000" />
            <FeeBox title="Total Sports Fee" total="1,290" />
            <FeeBox title="Total Hostel Fee" total="52,000" />
            <FeeBox title="Total Utility Fee" total="52,000" />
          </div>

          <div className="py-10">
            <button className="rounded-[10px] border border-[#E2E8F0] px-5 py-1 bg-[#6A95D7]">
              <span className="font-montserrat text-[18px] font-semibold leading-[20px] text-left text-white">
                Grand Total:
              </span>
              <span className="font-montserrat text-[18px] font-medium leading-[36px] text-left text-white">
                45,500
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-end py-5">
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
      <div className="h-[100vh] overflow-x-auto">
        <table className="w-full bg-[#F8FAFC] rounded-[12px] ">
          <thead className="bg-[#F8FAFC] ">
            <tr className="pt-5  flex">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="flex uppercase gap-3 items-center w-[180px] px-6 py-4 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] text-left"
                >
                  {column.label}
                  <img src={updown} alt="arrow" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id} className="h-[58px] py-2 flex">
                <td className="w-[180px] px-6 py-4 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                  {item[columns[0].key]}
                </td>
                {columns.slice(1).map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="w-[180px] px-6 py-4 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] text-left"
                  >
                    {column.key === "action" ? (
                      <span className="text-[#1464DF] cursor-pointer">
                        {item[column.key]}
                      </span>
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeDetailsTable;
