import React, { useState } from "react";
import Heading from "../../Components/Heading";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import updown from "../../assets/svg/updown.svg";
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import TableComponent from "../../Components/TableComponent";

const SectionManagementPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);

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
      createdAt: "May 11, 2024",
      className: " A",
    },
    {
      createdAt: "May 11, 2024",
      className: " B",
    },
    {
      createdAt: "May 11, 2024",
      className: " B",
    },
    {
      createdAt: "May 11, 2024",
      className: " B",
    },
  ];

  const columns = [
    { label: "Created At", icon: updown },
    { label: "Class Name", icon: updown },
  ];

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
        <div className="flex justify-between mb-5">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Section Management
          </h2>
          <div className="flex gap-3">
            <Button text={"Print"} btnImg={print} />
            <Button text={"Add Section"} btnImg={plus} />
          </div>
        </div>

        <TableComponent
          rows={currentRows}
          columns={columns}
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
        />
      </div>
    </Layout>
  );
};

export default SectionManagementPage;
