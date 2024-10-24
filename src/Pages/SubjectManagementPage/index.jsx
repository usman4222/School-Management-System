import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import updown from "../../assets/svg/updown.svg";
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import TableComponent from "../../Components/Tables/TableComponent";
import { Link } from "react-router-dom";
import TimeTableModal from "../../Components/Modals/TimeTableModal";
import { FaPlus, FaPrint } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";

const SubjectManagementPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isDelConfirmationModalOpen, setIsDelConfirmationModalOpen] =
    useState(false);

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
      Period: "May 11, 2024",
      subjectName: "Mathematics",
      teacher: "Mr. Smith",
    },
    {
      Period: "May 12, 2024",
      subjectName: "Science",
      teacher: "Ms. Johnson",
    },
    {
      Period: "May 13, 2024",
      subjectName: "History",
      teacher: "Mr. Brown",
    },
    {
      Period: "May 14, 2024",
      subjectName: "English",
      teacher: "Ms. Davis",
    },
  ];

  const columns = [
    { label: "Period", key: "Period", icon: updown },
    { label: "Subject Name", key: "subjectName", icon: updown },
    { label: "Teacher", key: "teacher", icon: updown },
  ];

  const labelNames = ["Period", "Subject Name", "Teacher"];

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
        <Heading page={"Subject Management"} />
        <div className="flex justify-between items-center flex-wrap">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 my-5">
            Subject Management
          </h2>
          <div className="flex gap-3 my-5">
            <Button text={"Print"} btnImg={<FiPrinter/>} />
            <Link to="/admin/add-subject">
              <Button text={"Add Subject"} btnImg={<FaPlus/>} />
            </Link>
          </div>
        </div>

        <TableComponent
          rows={currentRows}
          columns={columns}
          labelNames={labelNames}
          handleCheckboxChange={handleCheckboxChange}
          checkedRows={checkedRows}
          handleEdit={handleEdit}
          handleDelete={openDelConfirmationModal}
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
          action2={"Time Table"}
        />
      </div>
      {isDelConfirmationModalOpen && (
        <TimeTableModal
          isOpen={isDelConfirmationModalOpen}
          closeModal={closeDelConfirmationModal}
          // title="Add Class"
        />
      )}
    </Layout>
  );
};

export default SubjectManagementPage;
