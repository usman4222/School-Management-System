import React, { useEffect, useRef, useState } from "react";
import threeDotsIcon from "../../assets/svg/threedots.svg";
import updown from "../../assets/svg/updown.svg";
import TableDropdownMenu from "./TableDropdownMenu";
import TablePagination from "./TablePagination";

const EnrollmentTable = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;


  const columns = [
    { key: "Sr", label: "Sr#" },
    { key: "student", label: "Student" },
    { key: "class", label: "Class" },
    { key: "phone", label: "Phone" },
    { key: "gender", label: "Gender" },
    { key: "feeStatus", label: "Fee Status" },
    { key: "dateAdded", label: "Date Added" },
    { key: "medium", label: "Medium" },
  ];

  const rows = [
    {
      id: 1,
      Sr: "John Doe",
      student: "Mathematics",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334F",
      gender: "Male",
      feeStatus: "Paid",
      dateAdded: "2024-07-21",
    },
    {
      id: 2,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 3,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Paid",
      dateAdded: "2024-07-22",
    },
    {
      id: 4,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 5,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 6,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 7,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 8,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 9,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 10,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Unpaid",
      dateAdded: "2024-07-22",
    },
    {
      id: 11,
      Sr: "Jane Smith",
      student: "Science",
      class: "Active",
      medium: "2024-09-10",
      phone: "03245345334M",
      gender: "Female",
      feeStatus: "Paid",
      dateAdded: "2024-07-22",
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

  const handleDropdownToggle = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleEdit = (item) => {
    console.log("Edit item:", item);
    setDropdownVisible(null);
  };

  const handleDelete = (itemId) => {
    console.log("Delete item with ID:", itemId);
    setDropdownVisible(null); 
  };



  return (
    <div className="h-[100vh]">
      {/* Table Header */}
      <div className="bg-[#F8FAFC] pt-5 rounded-[12px] ">
        <div className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
          {columns.map((column, index) => (
            <div
              key={index}
              className="flex uppercase gap-3 items-center w-[180px]"
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
                {column.label}
              </h6>
              <img src={updown} alt="arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* Table Rows */}
      {currentRows.map((item, index) => (
        <div
          key={item.id}
          className={`w-full flex items-center h-[58px] py-2 px-6 ${
            checkedRows.includes(index) ? "bg-[#E2E8F0]" : "bg-[#F8FAFC]"
          }`}
        >
          <div className="flex items-center w-[180px] gap-3">
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
          {columns.slice(1).map((column, colIndex) => (
            <h6
              key={colIndex}
              className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[180px] text-left"
            >
              {column.key === "feeStatus" ? (
                <div
                  className={`w-auto inline-flex items-center px-3.5 py-1.5 rounded-full ${
                    item[column.key] === "Paid"
                      ? "bg-[rgba(16,191,0,0.10)] text-[#028F00]"
                      : "bg-[rgba(255,0,0,0.26)] text-[#FF0000]"
                  }`}
                >
                  {item[column.key]}
                </div>
              ) : (
                item[column.key]
              )}
            </h6>
          ))}
          <div className="relative">
            <img
              src={threeDotsIcon}
              alt="three dots"
              onClick={() => handleDropdownToggle(index)}
              className="cursor-pointer"
            />
            <TableDropdownMenu
              visible={dropdownVisible === index}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item.id)}
            />
          </div>
        </div>
      ))}

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

export default EnrollmentTable;
