import React, { useState } from "react";
import threeDotsIcon from "../assets/svg/threedots.svg";
import updown from "../assets/svg/updown.svg";

const TableComponent = ({
  rows,
  columns,
  handleCheckboxChange,
  handleEdit,
  handleDelete,
  handleDropdownToggle,
  dropdownVisible,
  currentPage,
  totalPages,
  currentRangeStart,
  currentRangeEnd,
  totalRows,
  handleNextPage,
  handlePreviousPage,
  labelNames,
}) => {
  const [checkedRows, setCheckedRows] = useState([]);

  const handleRowCheckboxChange = (index) => {
    const isChecked = checkedRows.includes(index);
    if (isChecked) {
      setCheckedRows(checkedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setCheckedRows([...checkedRows, index]);
    }
  };

  const handleCheckAll = () => {
    if (checkedRows.length === rows.length) {
      setCheckedRows([]);
    } else {
      setCheckedRows(rows.map((_, index) => index));
    }
  };

  return (
    <div className="h-[100vh]">
      {/* Table Header */}
      <div className="bg-[#F8FAFC] pt-5 rounded-[12px]">
        <div className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
          {columns.map((column, index) => (
            <div
              key={index}
              className="flex uppercase gap-3 items-center w-[490.97px]"
            >
              {index === 0 && (
                <label className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
                    checked={checkedRows.length === rows.length}
                    onChange={handleCheckAll}
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5775 7.22786C3.3775 7.22786 3.1875 7.14786 3.0475 7.00786L0.2175 4.17786C-0.0725 3.88786 -0.0725 3.40786 0.2175 3.11786C0.5075 2.82786 0.9875 2.82786 1.2775 3.11786L3.5775 5.41786L8.7175 0.277864C9.0075 -0.0121362 9.4875 -0.0121362 9.7775 0.277864C10.0675 0.567864 10.0675 1.04786 9.7775 1.33786L4.1075 7.00786C3.9675 7.14786 3.7775 7.22786 3.5775 7.22786Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </label>
              )}
              <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                {labelNames[index]}
              </h6>
              <img src={updown} alt="arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      {rows.map((item, index) => (
        <div
          key={index}
          className={`w-full flex items-center h-[58px] py-2 px-6 ${
            checkedRows.includes(index)
              ? "bg-[#E2E8F0] text-white"
              : "bg-[#F8FAFC]"
          }`}
        >
          <div className="flex items-center w-[490.97px] gap-3">
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
                checked={checkedRows.includes(index)}
                onChange={() => handleRowCheckboxChange(index)}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5775 7.22786C3.3775 7.22786 3.1875 7.14786 3.0475 7.00786L0.2175 4.17786C-0.0725 3.88786 -0.0725 3.40786 0.2175 3.11786C0.5075 2.82786 0.9875 2.82786 1.2775 3.11786L3.5775 5.41786L8.7175 0.277864C9.0075 -0.0121362 9.4875 -0.0121362 9.7775 0.277864C10.0675 0.567864 10.0675 1.04786 9.7775 1.33786L4.1075 7.00786C3.9675 7.14786 3.7775 7.22786 3.5775 7.22786Z"
                    fill="white"
                  />
                </svg>
              </span>
            </label>
            <h6 className="text-[#1A55A5] font-montserrat text-sm font-semibold leading-[22px]">
              {item[columns[0].key]}
            </h6>
          </div>
          {columns.slice(1).map(
            (
              column,
              colIndex // Start from index 1 to avoid duplication
            ) => (
              <h6
                key={colIndex}
                className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[490.97px] text-left"
              >
                {item[column.key]}
              </h6>
            )
          )}
          <div className="relative">
            <img
              src={threeDotsIcon}
              alt="three dots"
              onClick={() => handleDropdownToggle(index)}
              className="cursor-pointer"
            />
            {dropdownVisible === index && (
              <div className="absolute left-0 top-0 ml-4 bg-white shadow-lg rounded-md z-10">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-end gap-3 px-5 h-[72px] bg-[#F8FAFC]">
        <div className="flex items-center gap-5 text-[#64748B]">
          <span className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            {currentRangeStart}-{currentRangeEnd} of {totalRows}
          </span>
          <span className="font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
            Rows per page: 10
          </span>
        </div>
        <div className="flex gap-[4px] items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 font-montserrat text-sm font-medium leading-[17.07px] rounded-[9px] text-[14px] border-[#E2E8F0] border ${
              currentPage === 1
                ? "bg-[#F1F2F4] text-[#B4BFCD]"
                : "bg-[#F8FAFC] text-[#1A55A5]"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 font-montserrat text-sm font-medium leading-[17.07px] rounded-[9px] text-[14px] border-[#E2E8F0] border ${
              currentPage === totalPages
                ? "bg-[#F1F2F4] text-[#B4BFCD]"
                : "bg-[#F8FAFC] text-[#1A55A5]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
