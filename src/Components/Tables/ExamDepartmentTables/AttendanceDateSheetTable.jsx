import React, { useState } from "react";
import updown from "../../../assets/svg/updown.svg";
import TablePagination from "../TablePagination";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const AttendanceDateSheetTable = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "sr", label: "Sr#" },
    { key: "class", label: "Class" },
    { key: "section", label: "Section" },
    { key: "exam", label: "Exam" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "#12345",
      class: "7",
      section: "Dummy Text",
      exam: "75",
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
    <div className="h-auto mb-20  rounded-[12px] pt-5">
      <div className=" overflow-x-auto">
        <table className="w-full bg-white rounded-[12px] table-auto">
          {/* Table Header */}
          <thead>
            <tr className=" h-[58px]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-left px-6 py-2 uppercase font-montserrat text-sm font-semibold text-[#4D515A]"
                >
                  <div className="flex items-center gap-3">
                    <span>{column.label}</span>
                    <img src={updown} alt="arrow" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id} className=" hover:bg-gray-50 h-[58px]">
                <td className="px-6 py-2 text-[#1A55A5] font-montserrat text-sm font-semibold">
                  {item[columns[0].key]}
                </td>
                {columns.slice(1).map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold"
                  >
                    {column.key === "action" ? (
                      <span className="text-[#4D515A] cursor-pointer flex items-center">
                        <FiDownload className="mr-2 text-2xl" />
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

export default AttendanceDateSheetTable;
