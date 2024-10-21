import React, { useState } from "react";
import { FaPrint } from "react-icons/fa6";
import PendingRoutesTable from "./PendingRoutesTable";

const RoutesTable = () => {
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
      routeFee: "4000",
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
      <div className="h-[100vh] mb-20  bg-white rounded-b-[12px] pt-5">
        <div className="  rounded-[12px ">
          <div className="flex justify-between mb-5 px-6 ">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
              Routes
            </h2>
            <div className="flex gap-3 ">
              <div>
                <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#6A95D7] border border-[#E2E8F0]">
                  <span className="text-[#fff] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                    Pending Routes
                  </span>
                </button>
              </div>
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
          <div className=" ">
            <div className="w-full flex items-center py-2 ">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex uppercase gap-3 items-center w-full pl-6  "
                >
                  <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                    {column.label}
                  </h6>
                </div>
              ))}
            </div>
            {currentRows.map((item) => (
              <div
                key={item.id}
                className="w-full flex items-center h-[58px] py-2 "
              >
                <div className="flex items-center w-full pl-6 gap-3 ">
                  <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                    {item[columns[0].key]}
                  </h6>
                </div>
                {columns.slice(1).map((column, colIndex) => (
                  <h6
                    key={colIndex}
                    className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-full text-left"
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
      <PendingRoutesTable/>
    </>
  );
};

export default RoutesTable;
