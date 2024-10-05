import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import updown from "../../assets/svg/updown.svg";
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import TableComponent from "../../Components/TableComponent";
import AddFormModal from "../../Components/Modals/AddFormModal";
import DeleteConfirmationModal from "../../Components/Modals/DeleteConfirmationModal";
import threeDotsIcon from "../../assets/svg/threeDots.svg"
import eye from "../../assets/svg/eye.svg"

const ClassManagementPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelConfirmationModalOpen, setIsDelConfirmationModalOpen] =
    useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const openDelConfirmationModal = () => setIsDelConfirmationModalOpen(true);

  const closeDelConfirmationModal = () => setIsDelConfirmationModalOpen(false);

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
  const rows = [
    {
      TeacherId: "#132548",
      Name: "Jane Smith",
      Role: "Professor",
      Contact: "+1 (670) 960-8854",
      Joining: "04/07/23",
    },

  ];
  

  const columns = [
    { key: "TeacherId", label: "Teacher Id", icon: updown },
    { key: "Name", label: "Name", icon: updown },
    { key: "Role", label: "Role", icon: updown },
    { key: "Contact", label: "Contact", icon: updown },
    { key: "Joining", label: "Joining", icon: updown },
  ];

  const labelNames = ["Teacher Id", " Name", "Role", "Contact", "Joining"];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const totalRows = rows.length;

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
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Teacher"} />
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-10">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6">
              Teacher Management
            </h2>
            <div className="mr-[20px]">
              <select className="flex w-[316px] h-[44px] px-[15.94px] py-[9.94px] justify-center items-start gap-[4.005px] flex-shrink-0 rounded border border-[#B5BDC5] bg-[#FFF]">
                <option value="">Teacher Employment</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <Button text={"Add Teacher"} btnImg={plus} onClick={openModal} />
          </div>
        </div>

        <div className="h-[100vh]">
          {/* Table Header */}
          <div className="bg-[#F8FAFC] pt-5 rounded-[12px]">
            <div className="w-full flex items-center py-2 px-6 bg-[#F8FAFC] pt-4">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex uppercase gap-[24px] items-center w-[296px]"
                >
                  {index === 0 && (
                    <label className="flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-[6px] shadow hover:shadow-md border border-slate-300 checked:bg-[#1A55A5] checked:border-[#1A55A5]"
                        checked={checkedRows.length === rows.length}
                        // onChange={handleCheckAll}
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
              <div className="flex items-center w-[296px] gap-[24px]">
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
                  colIndex 
                ) => (
                  <h6
                    key={colIndex}
                    className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[296px] text-left"
                  >
                    {item[column.key]}
                  </h6>
                )
              )}
              <div className="relative">
                <img
                  src={eye}
                  alt="eye"
                  onClick={() => handleDropdownToggle(index)}
                  className="cursor-pointer"
                />
                {/* {dropdownVisible === index && (
                  <div className="absolute left-0 top-0 ml-4  shadow-lg rounded-md z-10">
                    <div className="flex flex-col items-start gap-[10px] self-stretch">
                      <button
                        className=" p-[5px_18px] text-sm text-gray-700"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className=" p-[5px_18px] text-sm text-gray-700 mr-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Del
                      </button>
                    </div>
                  </div>
                )} */}
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
      </div>

      {/* {isModalOpen && (
        <AddFormModal
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
        {isDelConfirmationModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDelConfirmationModalOpen}
          closeModal={closeDelConfirmationModal}
        />
      )} */}
    </Layout>
  );
};

export default ClassManagementPage;
