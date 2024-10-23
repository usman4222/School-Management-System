import React, { useState } from "react";
import updown from "../../../../assets/svg/updown.svg";

const ResultTable = () => {
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
        action: "Edit",
      },
    ];
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
    const totalRows = rows.length;



  return (
    <div className="h-auto mb-20  bg-white rounded-b-[12px] pt-5">
      <div className="  rounded-[12px ">
        <div className=" ">
          <div className="w-full flex items-center py-2 ">
            {columns.map((column, index) => (
              <div
                key={index}
                className="flex uppercase gap-3 items-center w-[180px]  pl-6  "
              >
                <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                  {column.label}
                </h6>
                <img src={updown} alt="arrow" />
              </div>
            ))}
          </div>
          {currentRows.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center h-[58px] py-2 "
            >
              <div className="flex items-center w-[180px] pl-6 gap-3 ">
                <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                  {item[columns[0].key]}
                </h6>
              </div>
              {columns.slice(1).map((column, colIndex) => (
                <h6
                  key={colIndex}
                  className="text-[#4D515A] pl-6 font-montserrat text-sm font-semibold leading-[22px] w-[180px] text-left"
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
  );
};

export default ResultTable;
