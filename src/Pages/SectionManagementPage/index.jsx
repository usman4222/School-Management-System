import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import updown from "../../assets/svg/updown.svg";
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import TableComponent from "../../Components/Tables/TableComponent";
import AddFormModal from "../../Components/Modals/AddFormModal";
import AddSectionFormModal from "../../Components/Modals/AddSectionFormModal";
import { FaPrint } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const SectionManagementPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

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

  const handleEdit = (id) => {
    console.log("Edit clicked for row with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for row with ID:", id);
  };

  const rows = [
    { id: 1, createdAt: "May 11, 2024", className: "A" },
    { id: 2, createdAt: "May 11, 2024", className: "B" },
    { id: 3, createdAt: "May 11, 2024", className: "A" },
  ];

  const columns = [
    { key: "createdAt", label: "Created At" },
    { key: "className", label: "Class Name" },
  ];

  const labelNames = ["Created At", "Class Name"];

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
        <Heading page={"Section Management"} />
        <div className="flex justify-between items-center flex-wrap ">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6  my-5">
            Section Management
          </h2>
          <div className="flex gap-3 my-5">
            <Button text={"Print"} btnImg={<FaPrint/>} />
            <Button text={"Add Section"} btnImg={<FaPlus />} onClick={openModal} />
          </div>
        </div>

        <TableComponent
          rows={currentRows}
          columns={columns}
          labelNames={labelNames}
          handleCheckboxChange={handleCheckboxChange}
          checkedRows={checkedRows}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDropdownToggle={handleDropdownToggle}
          dropdownVisible={dropdownVisible}
          currentPage={currentPage}
          totalPages={totalPages}
          currentRangeStart={currentRangeStart}
          currentRangeEnd={currentRangeEnd}
          totalRows={totalRows}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          action1={"Edit"}
          action2={"Delete"}
        />
      </div>
      {isModalOpen && (
        <AddSectionFormModal
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </Layout>
  );
};

export default SectionManagementPage;
