import React, { useState } from "react";
import updown from "../../../assets/svg/updown.svg";

const AddResultTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [rows, setRows] = useState([
    {
      id: 1,
      sr: "#1A55A5",
      studentName: "Hamid Nawaz",
      fatherName: "John Doe",
      attendanceStatus: "--",
      result: "",
      totalMarks: "",
    },
    {
      id: 1,
      sr: "#1A55A5",
      studentName: "Hamid Nawaz",
      fatherName: "John Doe",
      attendanceStatus: "--",
      result: "",
      totalMarks: "",
    },
  ]);

  const columns = [
    { key: "sr", label: "Sr" },
    { key: "studentName", label: "Student Name" },
    { key: "fatherName", label: "Father Name" },
    { key: "attendanceStatus", label: "Attendance Status" },
    { key: "result", label: "Result" },
    { key: "totalMarks", label: "Total Marks" },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalRows = rows.length;

  return (
    <div className="h-auto mb-20 bg-white rounded-[12px] pt-5">
      <div className="rounded-[12px] overflow-x-auto">
        <table className="w-full bg-white table-auto">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 h-[58px]">
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
              <tr key={item.id} className="border-b hover:bg-gray-50 h-[58px]">
                <td className="px-6 py-2 font-montserrat text-sm font-semibold text-[#1A55A5]">
                  {item.sr}
                </td>
                <td className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold">
                  {item.studentName}
                </td>
                <td className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold">
                  {item.fatherName}
                </td>
                <td className="px-6 py-2 text-[#4D515A] font-montserrat text-sm font-semibold">
                  {item.attendanceStatus}
                </td>
                <td className="px-6 py-2">
                  <input
                    type="text"
                    className="py-[10px] px-[14px] border-2 text-[#7B8190] font-montserrat text-[14px] font-normal leading-[20px] border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]"
                    placeholder="Enter obtained marks"
                  />
                </td>
                <td className="px-6 py-2">
                  <input
                    type="text"
                    className="py-[10px] px-[14px] border-2 text-[#7B8190] font-montserrat text-[14px] font-normal leading-[20px] border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]"
                    placeholder="00"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddResultTable;
