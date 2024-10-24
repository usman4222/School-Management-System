import React, { useState } from "react";
import updown from "../../../../assets/svg/updown.svg";

const AddResultTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [rows, setRows] = useState([
    {
      id: 1,
      sr: "1",
      studentName: "Hamid Nawaz",
      fatherName: "John Doe",
      attendanceStatus: "--",
      result: "",
      totalMarks: "",
    },
    {
        id: 1,
        sr: "2",
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
    <div className="h-auto mb-20 bg-white rounded-[12px] pt-5 ">
      <div className="rounded-[12px] ">
        <div className="">
          <div className="w-full flex items-center py-2">
            {columns.map((column, index) => (
              <div
                key={index}
                className="flex uppercase gap-3 items-center w-full pl-6"
              >
                <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                  {column.label}
                </h6>
                <img src={updown} alt="arrow" />
              </div>
            ))}
          </div>
          {currentRows.map((item) => (
            <div key={item.id} className="w-full flex items-center h-[58px] py-2">
              <div className="flex items-center w-full pl-6 gap-3">
                <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                  {item.sr}
                </h6>
              </div>
              <h6 className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-full text-left">
                {item.studentName}
              </h6>
              <h6 className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-full text-left">
                {item.fatherName}
              </h6>
              <h6 className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-full text-left">
                {item.attendanceStatus}
              </h6>
              <div className="w-full pl-6">
                <input
                  type="text"
                  className="py-[10px] px-[14px] border-2 text-[#7B8190] font-montserrat text-[14px] font-normal leading-[20px] border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]"
                  placeholder="Enter obtained marks"
                />
              </div>
              <div className="w-full pl-6">
                <input
                  type="text"
                  className="py-[10px] px-[14px] border-2 text-[#7B8190] font-montserrat text-[14px] font-normal leading-[20px] border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]"
                  placeholder="00"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddResultTable;
