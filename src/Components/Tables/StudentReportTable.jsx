import React, { useState } from "react";
import threeDotsIcon from "../../assets/svg/threedots.svg";
import updown from "../../assets/svg/updown.svg";
import TablePagination from "./TablePagination";

const StudentReportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "class", label: "Class" },
    { key: "attendance", label: "Attendance%" },
    { key: "result", label: "Result%" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 2,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 3,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 4,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 5,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 6,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 7,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 8,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 9,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 10,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
    },
    {
      id: 11,
      class: "9A",
      attendance: "50,000",
      result: "40,000",
      action: "Detail View",
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
    <div className="h-[100vh] ">
      <div className="bg-[#F8FAFC] pt-5 rounded-[12px]  overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="flex uppercase gap-3 items-center w-[376px] text-left"
                >
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
                className="w-full flex items-center h-[58px] py-2 px-6 bg-[#F8FAFC]"
              >
                <td className="flex items-center w-[376px] gap-3">
                  <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                    {item[columns[0].key]}
                  </h6>
                </td>
                {columns.slice(1).map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[376px] text-left"
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

export default StudentReportTable;
