import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import threedots from "../../assets/svg/threedots.svg";

const ClassManagementPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [checkedRows, setCheckedRows] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1); 
  const rowsPerPage = 10; 

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index); 
  };

  const handleDropdownToggle = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index); 
  };

  const handleCheckboxChange = (index) => {
    setCheckedRows((prevChecked) => {
      if (prevChecked.includes(index)) {
        return prevChecked.filter((i) => i !== index); 
      } else {
        return [...prevChecked, index]; 
      }
    });
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const classData = [
    {
      createdAt: "May 11, 2024",
      className: "9",
      description: "Lorem ipsum dummy text",
    },
    {
      createdAt: "May 12, 2024",
      className: "10",
      description: "Sample description for class 10",
    },
    {
      createdAt: "May 13, 2024",
      className: "11",
      description: "Sample description for class 11",
    },
    {
      createdAt: "May 14, 2024",
      className: "12",
      description: "Sample description for class 12",
    },
    {
      createdAt: "May 15, 2024",
      className: "13",
      description: "Sample description for class 13",
    },

    {
      createdAt: "May 16, 2024",
      className: "14",
      description: "Sample description for class 14",
    },
    {
      createdAt: "May 17, 2024",
      className: "15",
      description: "Sample description for class 15",
    },
    {
      createdAt: "May 18, 2024",
      className: "16",
      description: "Sample description for class 16",
    },
    {
      createdAt: "May 19, 2024",
      className: "17",
      description: "Sample description for class 17",
    },
    {
      createdAt: "May 20, 2024",
      className: "18",
      description: "Sample description for class 18",
    },
    {
      createdAt: "May 21, 2024",
      className: "19",
      description: "Sample description for class 19",
    },
    {
      createdAt: "May 22, 2024",
      className: "20",
      description: "Sample description for class 20",
    },
    {
      createdAt: "May 23, 2024",
      className: "21",
      description: "Sample description for class 21",
    },

  ];

  const indexOfLastRow = currentPage * rowsPerPage; 
  const indexOfFirstRow = indexOfLastRow - rowsPerPage; 
  const currentRows = classData.slice(indexOfFirstRow, indexOfLastRow); 

  const totalPages = Math.ceil(classData.length / rowsPerPage);
  const totalRows = classData.length; 


  const currentRangeStart = indexOfFirstRow + 1;
  const currentRangeEnd = Math.min(indexOfLastRow, totalRows); 

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1); 
    }
  };

  return (
    <div>
      <Heading page={"Class Management"} />
      <div>
        <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6">
          Class Management
        </h2>
        <button className="flex items-center w-auto h-auto p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] custom-gradient">
          <span className="mr-2">
            <img src={print} alt="print" />
          </span>
          <span className="text-white">Print</span>
        </button>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center max-w-[634px] h-[58px] py-2 px-6 gap-7 bg-[#F8FAFC]">
          <label className="flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
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
          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
            Created At
          </h6>
          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
            Class Name
          </h6>
          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
            Description
          </h6>
        </div>


        {currentRows.map((item, index) => (
          <div
            key={index + indexOfFirstRow} 
            className={`w-full flex justify-between items-center max-w-[634px] h-[58px] py-2 px-6 gap-7 ${
              checkedRows.includes(index + indexOfFirstRow)
                ? "bg-[#E2E8F0] text-white"
                : "bg-[#F8FAFC]"
            }`}
          >
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
                checked={checkedRows.includes(index + indexOfFirstRow)} 
                onChange={() => handleCheckboxChange(index + indexOfFirstRow)} 
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
            <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
              {item.createdAt}
            </h6>
            <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
              {item.className}
            </h6>
            <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
              {item.description}
            </h6>
            <div className="relative">
              <img
                src={threedots}
                alt="three dots"
                onClick={() => handleDropdownToggle(index)}
              />
              {dropdownVisible === index && (
                <div className="absolute bg-white shadow-md rounded-md p-2">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1} 
            className={`px-4 py-2 text-white rounded ${
              currentPage === 1 ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            Previous
          </button>
          <span className="self-center">
            {currentRangeStart}-{currentRangeEnd} of {totalRows}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages} 
            className={`px-4 py-2 text-white rounded ${
              currentPage === totalPages ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassManagementPage;
