import React, { useState } from "react";
import updown from "../../../assets/svg/updown.svg";
import TablePagination from "../TablePagination";
import { Link } from "react-router-dom";
import TableDropdownMenu from "../TableDropdownMenu";
import threeDotsIcon from "../../../assets/svg/threedots.svg";

const ViewResultTable = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "regNo", label: "Reg No" },
    { key: "student", label: "Student" },
    { key: "father", label: "Father" },
    { key: "obtainedMarks", label: "Obtained Marks" },
    { key: "totalMarks", label: "Total Marks" },
    { key: "percentage", label: "Percentage %" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      regNo: "#132548",
      student: "John Doe",
      father: "Joseph",
      obtainedMarks: "75",
      totalMarks: "75",
      percentage: "100%", 
      status: "Passed",
    },
    {
      id: 2,
      regNo: "#132549",
      student: "Jane Doe",
      father: "Josephine",
      obtainedMarks: "65",
      totalMarks: "75",
      percentage: "86.67%",
      status: "Failed", 
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

  const handleDropdownToggle = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  return (
    <div className="h-auto mb-20 rounded-[12px] pt-5">
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-[12px] table-auto">
          {/* Table Header */}
          <thead>
            <tr className="h-[58px] w-[180px]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-left px-6 py-2 w-[180px] uppercase font-montserrat text-sm font-semibold text-[#4D515A]"
                >
                  <div className="flex items-center gap-3">
                    <span className="block">{column.label}</span>
                    <img src={updown} alt="arrow" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 h-[58px]">
                <td className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold">
                  {item[columns[0].key]}
                </td>
                {columns.slice(1).map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold"
                  >
                    {column.key === "action" ? (
                      <div className="relative">
                        <img
                          src={threeDotsIcon}
                          alt="three dots"
                          onClick={() => handleDropdownToggle(index)}
                          className="cursor-pointer"
                        />
                        <TableDropdownMenu
                          visible={dropdownVisible === index}
                        />
                      </div>
                    ) : column.key === "status" ? (
                      <div
                        className={`w-auto inline-flex items-center px-3.5 py-1.5 rounded-full ${
                          item[column.key] === "Passed"
                            ? "bg-[#D1FAE580] text-[#028F00]"
                            : "bg-[#FFE4E6] text-[#FF0000]"
                        }`}
                      >
                        {item[column.key]}
                      </div>
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

export default ViewResultTable;
