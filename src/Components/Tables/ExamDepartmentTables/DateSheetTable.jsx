import React, { useState } from "react";
import updown from "../../../assets/svg/updown.svg";
import TablePagination from "../TablePagination";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import threeDotsIcon from "../../../assets/svg/threedots.svg";
import TableDropdownMenu from "../TableDropdownMenu";

const DateSheetTable = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleDropdownToggle = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const columns = [
    { key: "sr", label: "Sr#" },
    { key: "subject", label: "Class" },
    { key: "date", label: "Section" },
    { key: "startTime", label: "Start Time" },
    { key: "endTime", label: "End Time" },
    { key: "examRoom", label: "Exam Room" },
    { key: "invigilatorName", label: "Invigilator Name" },
    { key: "action", label: "Action" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      subject: "English",
      date: "A",
      startTime: "Final",
      endTime: "--",
      examRoom: "75",
      invigilatorName: "--",
    },
    {
        id: 2,
        sr: "2",
        subject: "English",
        date: "A",
        startTime: "Final",
        endTime: "--",
        examRoom: "75",
        invigilatorName: "--",
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

  const handleEdit = (item) => {
    console.log("Edit item:", item);
    setDropdownVisible(null);
  };

  const handleDelete = (itemId) => {
    console.log("Delete item with ID:", itemId);
    setDropdownVisible(null);
    openDelConfirmationModal();
  };

  return (
    <div className="h-auto mb-20 rounded-[12px] pt-5">
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-[12px] table-auto">
          <thead>
            <tr className="h-[58px]">
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

          <tbody>
            {currentRows.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 h-[58px]">
                <td className="px-6 py-2 text-[#1A55A5] font-montserrat text-sm font-semibold">
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
                          onClick={() => handleDropdownToggle(item.id)}
                          className="cursor-pointer"
                        />
                        <TableDropdownMenu
                          visible={dropdownVisible === item.id}
                          onEdit={() => handleEdit(item)}
                          onDelete={() => handleDelete(item.id)}
                        />
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

export default DateSheetTable;
