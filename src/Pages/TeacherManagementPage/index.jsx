import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import updown from "../../assets/svg/updown.svg";
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import TableComponent from "../../Components/Tables/TableComponent";
import AddFormModal from "../../Components/Modals/AddFormModal";
import DeleteConfirmationModal from "../../Components/Modals/DeleteConfirmationModal";
import eye from "../../assets/svg/eye.svg";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

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
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center md:gap-10 flex-wrap ">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 my-5">
              Teacher Management
            </h2>
            <div className="mr-[20px]">
              <select className="flex w-full h-[44px] px-[15.94px] py-[9.94px] justify-center items-start gap-[4.005px] flex-shrink-0 rounded border border-[#B5BDC5] bg-[#FFF]">
                <option value="">Teacher Employment</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 my-5 ">
            <Link to="/admin/add-teacher">
              <Button text={"Add Teacher"} btnImg={<FaPlus />} />
            </Link>
          </div>
        </div>

        <div className="h-[100vh]">
          {/* Table Header */}
          <div className="bg-[#F8FAFC] pt-5 rounded-[12px] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="flex uppercase gap-[24px] items-center py-2 px-6">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="text-[#4D515A] flex gap-3 w-[272px] font-montserrat text-sm font-semibold leading-[22px]"
                    >
                      {labelNames[index]}
                      <img src={updown} alt="arrow" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Table Rows */}
                {rows.map((item, index) => (
                  <tr
                    key={index}
                    className={`w-full flex items-center h-[58px] py-2 px-6 ${
                      checkedRows.includes(index)
                        ? "bg-[#E2E8F0] text-white"
                        : "bg-[#F8FAFC]"
                    }`}
                  >
                    <td className="flex items-center w-[296px] gap-[24px]">
                      <h6 className="text-[#1A55A5] font-montserrat text-sm font-semibold leading-[22px]">
                        {item[columns[0].key]}
                      </h6>
                    </td>
                    {columns.slice(1).map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] w-[296px] text-left"
                      >
                        {item[column.key]}
                      </td>
                    ))}
                    <td className="relative">
                      <img
                        src={eye}
                        alt="eye"
                        onClick={() => handleDropdownToggle(index)}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClassManagementPage;
