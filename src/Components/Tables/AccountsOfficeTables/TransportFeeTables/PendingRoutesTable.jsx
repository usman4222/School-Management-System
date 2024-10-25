import React, { useState } from "react";
import { FaPrint } from "react-icons/fa6";

const PendingRoutesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "sr", label: "Sr#" },
    { key: "routeNumber", label: "Route Number " },
    { key: "routeName", label: "Route Name" },
    { key: "routeFee", label: "Route Fee" },
    { key: "busNumber", label: "BusNumber" },
    { key: "dateAdded", label: "Date Added" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      routeNumber: "7",
      routeName: "University road",
      routeFee: "Fee (Pending)",
      busNumber: "SGM-804",
      dateAdded: "04/10/2024",
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
          <div className="flex justify-between flex-wrap  px-6 ">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 my-5">
              Pending Routes
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
          <div className="h-auto overflow-x-auto">
            <table className=" bg-[#F8FAFC] rounded-[12px] ">
              <thead>
                <tr className="py-2 flex">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="w-[172px] uppercase gap-3 pl-6 py-4 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] text-left"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentRows.map((item) => (
                  <tr key={item.id} className="h-[58px] flex py-2">
                    <td className="w-[172px] pl-6 py-4 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                      {item[columns[0].key]}
                    </td>

                    {columns.slice(1).map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="w-[172px] pl-6 text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] text-left py-4"
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

export default PendingRoutesTable;
