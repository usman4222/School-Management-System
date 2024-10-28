import React, { useState } from "react";
import updown from "../../../assets/svg/updown.svg";
import TablePagination from "../TablePagination";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResultTable = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const columns = [
    { key: "sr", label: "Sr" },
    { key: "class", label: "Class" },
    { key: "section", label: "Section" },
    { key: "exam", label: "Exam " },
    { key: "term", label: "Term" },
    { key: "year", label: "Year" },
    { key: "percentage", label: "Percentage" },
    { key: "totalMarks", label: "Total Marks" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      class: "7",
      section: "A",
      exam: "--",
      term: "Final",
      year: "40,000",
      percentage: "40,000",
      totalMarks: "40,000",
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
                <td className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold">
                  {item[columns[0].key]}
                </td>
                {columns.slice(1).map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold"
                  >
                    {column.key === "action" ? (
                      <Link to="/exam-department/view-result">
                        <span className="text-[#4D515A] cursor-pointer flex items-center">
                          <BsArrowRight className="mr-2 text-2xl" />
                        </span>
                      </Link>
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

export default ResultTable;
