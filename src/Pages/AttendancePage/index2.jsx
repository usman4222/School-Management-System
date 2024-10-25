import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import updown from "../../assets/svg/updown.svg";
import print from "../../assets/svg/printer.svg";

const index2 = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const columns = [
    { key: "SrNo", label: "Sr No" },
    { key: "RegNo", label: "Reg No" },
    { key: "Student", label: "Student" },
    { key: "FatherName", label: "Father Name" },
    { key: "OnLeave", label: "On Leave" },
    { key: "Present", label: "Present" },
    { key: "Absent", label: "Absent" },
    { key: "Remarks", label: "Remarks" },
  ];

  const rows = [
    {
      SrNo: "#132548",
      RegNo: "#132548",
      Student: "Hamid Nawaz",
      FatherName: "John",
      OnLeave: "2",
      Present: "2",
      Absent: "2",
      Remarks: "John",
    },
    {
      SrNo: "#132548",
      RegNo: "#132548",
      Student: "Hamid Nawaz",
      FatherName: "John",
      OnLeave: "2",
      Present: "2",
      Absent: "2",
      Remarks: "John",
    },
    {
      SrNo: "#132548",
      RegNo: "#132548",
      Student: "Hamid Nawaz",
      FatherName: "John",
      OnLeave: "2",
      Present: "2",
      Absent: "2",
      Remarks: "John",
    },

    // ... Repeat for other rows as needed
  ];

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

  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Add Attendance"} />
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center flex-wrap my-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mr-[10px]">
              Add Attendance
            </h2>
            <div className="mr-[20px] my-5">
              <select className="flex w-fit h-[44px] px-[15.94px] py-[9.94px] justify-center items-start gap-[4.005px] flex-shrink-0 rounded border border-[#B5BDC5] bg-[#FFF]">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                className="flex w-fit h-[44px] px-[15.94px] py-[9.94px] justify-center items-start gap-[4.005px] flex-shrink-0 rounded border border-[#B5BDC5] bg-[#FFF]"
              />
            </div>
          </div>
        </div>

        <div className="h-[100vh]">
          {/* Table Header */}
          <div className="bg-[#F8FAFC] pt-5 rounded-[12px] overflow-x-auto">
            <table className="w-full">
              <thead>
                <div className="w-full justify-between flex items-center py-2 px-6 bg-[#F8FAFC] pr-[14px] pl-[24px]">
                  <div className="flex items-center gap-[100px]">
                    <h4 className="text-[#1E293B] font-montserrat text-[16px] font-bold leading-[28px]">
                      {" "}
                      All Classes
                    </h4>
                    <div className="flex items-center gap-[70px]">
                      <div className="flex items-center">
                        <div className="w-[6px] h-[6px] bg-[#E07706] mr-[10px]"></div>
                        <h6 className="text-[#E07706] font-montserrat text-[14px] font-semibold leading-[22px] uppercase mr-[20px]">
                          Leave
                        </h6>
                        <p className="text-[#4D515A] font-montserrat text-[14px] font-semibold leading-[22px] uppercase">
                          10
                        </p>
                      </div>

                      <div className="flex items-center">
                        <div className="w-[6px] h-[6px] bg-[#189200] mr-[10px]"></div>
                        <h6 className="text-[#189200] font-montserrat text-[14px] font-semibold leading-[22px] uppercase mr-[20px]">
                          Present
                        </h6>
                        <p className="text-[#4D515A] font-montserrat text-[14px] font-semibold leading-[22px] uppercase">
                          10
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-[6px] h-[6px] bg-[#FF0000] mr-[10px]"></div>
                        <h6 className="text-[#FF0000] font-montserrat text-[14px] font-semibold leading-[22px] uppercase mr-[20px]">
                          Absent
                        </h6>
                        <p className="text-[#4D515A] font-montserrat text-[14px] font-semibold leading-[22px] uppercase">
                          10
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[120px]">
                    <div className="flex items-center gap-[10px]">
                      <h5 className="text-[#1E293B] font-montserrat text-[16px] font-medium leading-[28px]">
                        Teacher Name:
                      </h5>
                      <span className="text-black font-montserrat text-[16px] font-medium leading-[28px]">
                        Jogn
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <h5 className="text-[#1E293B] font-montserrat text-[16px] font-medium leading-[28px]">
                        Last Updated:
                      </h5>
                      <span className="text-black font-montserrat text-[16px] font-medium leading-[28px]">
                        2h Ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <button className="flex items-center p-[10px] gap-[4px] rounded-[9px] custom-gradient">
                      <span className="text-white font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                        Print
                      </span>
                    </button>
                    <button className="flex items-center p-[10px] gap-[4px] rounded-[9px] custom-gradient">
                      <span className="text-white font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                        Download
                      </span>
                    </button>
                  </div>
                </div>
                <tr className="flex uppercase gap-[28px] py-2 px-6 ">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="flex items-center gap-3 w-[153px] text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]"
                    >
                      {column.label}
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
                    className={`w-full flex items-center gap-[28px] h-[58px] py-2 px-6 ${
                      checkedRows.includes(index)
                        ? "bg-[#E2E8F0] text-white"
                        : "bg-[#F8FAFC]"
                    }`}
                  >
                    <td className="flex items-center w-[153px] gap-3">
                      <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                        {item.SrNo}
                      </h6>
                    </td>
                    {columns.slice(1).map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="flex items-center w-[153px] gap-3"
                      >
                        {colIndex === 0 ? (
                          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                            {item.RegNo}
                          </h6>
                        ) : colIndex === 1 ? (
                          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                            {item.Student}
                          </h6>
                        ) : colIndex === 2 ? (
                          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                            {item.FatherName}
                          </h6>
                        ) : colIndex === 3 ||
                          colIndex === 4 ||
                          colIndex === 5 ? (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="mr-2 w-[24px] h-[24px]"
                            />
                          </div>
                        ) : colIndex === 6 ? (
                          <input
                            type="text"
                            placeholder=""
                            className="flex w-[229px] p-2.5 items-center gap-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <h6 className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px]">
                            {item.Status}
                          </h6>
                        )}
                      </td>
                    ))}
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

export default index2;
