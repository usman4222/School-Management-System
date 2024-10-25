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

const FeeChallanGenerationTable = () => {
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
    <div className="h-auto bg-[#fff] pb-10 rounded-[12px] px-6">
      <div className=" pt-5 rounded-[12px] ">
        <div className="flex justify-between mb-5 ">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Fee Challan Generation
          </h2>
        </div>

        <div className="flex gap-5 flex-wrap">
          <select
            name="year"
            id="year"
            class="border border-custom-border  rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select
            name="year"
            id="year"
            class="border border-custom-border  rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select
            name="year"
            id="year"
            class="border border-custom-border  rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="flex gap-5 mt-2 flex-wrap">
          <select
            name="year"
            id="year"
            class="border border-custom-border rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select
            name="year"
            id="year"
            class="border border-custom-border  rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select
            name="year"
            id="year"
            class="border border-custom-border rounded-md p-2 shadow-custom focus:outline-none"
          >
            <option value="" disabled selected>
              Select a year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div className="flex justify-between py-10 gap-3 flex-wrap ">
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Tuition Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Exam Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Library Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Medical Expenses
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Sports Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Transport Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Hostel Fees
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
          <div>
            <h5 className="font-montserrat text-[14px] font-semibold leading-[22px] text-left py-4">
              Utility Charges
            </h5>
            <CheckboxComponent id="check1" label="25000" checked={true} />
          </div>
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
            <button
              style={{
                background: "linear-gradient(90deg, #1A55A5 0%, #003F94 100%)",
              }}
              className="rounded-[10px] border border-[#E2E8F0] px-5 py-1"
            >
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
      <div className="h-[100vh]">
        <div className="bg-[#F8FAFC] pt-5 rounded-[12px] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex uppercase py-2 px-6 pt-4">
                {columns.map((column, index) => (
                  <th key={index} className="flex items-center gap-3 w-[180px]">
                    <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                      {column.label}
                    </h6>
                    <img src={updown} alt="arrow" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item) => (
                <tr
                  key={item.id}
                  className="w-full flex items-center h-[58px] px-6 py-2"
                >
                  <td className="flex items-center w-[180px] gap-3">
                    <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                      {item[columns[0].key]}
                    </h6>
                  </td>
                  {columns.slice(1).map((column, colIndex) => (
                    <td
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
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-1 justify-end pt-5 pb-10 flex-wrap">
        <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient border border-[#E2E8F0]">
          <span className="text-[#fff] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Save Details
          </span>
        </button>
        <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient border border-[#E2E8F0]">
          <span className="text-[#fff] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Save & Print Challan
          </span>
        </button>
        <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient border border-[#E2E8F0]">
          <span className="text-[#fff] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Print Challan
          </span>
        </button>
      </div>
    </div>
  );
};

export default FeeChallanGenerationTable;
