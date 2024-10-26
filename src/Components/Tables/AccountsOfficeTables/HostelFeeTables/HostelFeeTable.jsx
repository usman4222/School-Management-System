import React, { useState } from "react";
import { FaPrint } from "react-icons/fa6";

const HostelFeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "sr", label: "Sr#" },
    { key: "class", label: "Class" },
    { key: "hostelFee", label: "Hostel fee" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      class: "7th",
      hostelFee: "40,666",
      action: "Edit",
    },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalRows = rows.length;

  return (
    <>
      <div className="h-[100vh] mb-20  bg-white rounded-b-[12px] pt-5">
        <div className="  rounded-[12px ">
          <div className="flex justify-between flex-wrap px-6  ">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 my-5 ">
              Routes
            </h2>
            <div className="flex gap-3 my-5 ">
              <div>
                <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#6A95D7] border border-[#E2E8F0]">
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
          <div className="overflow-x-auto">
            <table className="w-full border-collapse ">
              <thead>
                <tr className="h-[58px] flex">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="uppercase text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[172px] pl-6 py-2 text-left "
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentRows.map((item) => (
                  <tr key={item.id} className="h-[58px] flex">
                    <td className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[172px] pl-6 py-2 ">
                      {item[columns[0].key]}
                    </td>
                    {columns.slice(1).map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[172px] pl-6 py-2 text-left "
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
      </div>
    </>
  );
};

export default HostelFeeTable;
