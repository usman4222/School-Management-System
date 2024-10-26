import React, { useState } from "react";
import Layout from "../../../Layout";
import Heading from "../../../Heading";
import FeeBox from "../../../FeeBox";

const ReportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const columns = [
    { key: "sr", label: "Sr#" },
    { key: "class", label: "Class" },
    { key: "section", label: "Section" },
    { key: "totalFee", label: "Total Fee" },
    { key: "tuitionFee", label: "tuition Fee" },
    { key: "examFee", label: "exam Fee" },
    { key: "libraryFee", label: "Library Fee" },
    { key: "medicalFee", label: "medical Fee" },
    { key: "sportsFee", label: "sports Fee" },
    { key: "transportFee", label: "transport Fee" },
    { key: "hostelFee", label: "hostel Fee" },
  ];

  const rows = [
    {
      id: 1,
      sr: "1",
      class: "7th",
      section: "40,000",
      totalFee: "40,000",
      tuitionFee: "40,000",
      examFee: "40,000",
      libraryFee: "40,000",
      medicalFee: "40,000",
      sportsFee: "40,000",
      transportFee: "40,000",
      hostelFee: "40,000",
    },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalRows = rows.length;
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Report"} />
        <div className="flex justify-between mb-5">
          <div className="flex items-center mt-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mr-[10px]">
              Report
            </h2>
          </div>
        </div>
        <div className="bg-[#fff]  px-6 rounded-t-[12px] pt-16">
          <h2 className="font-montserrat text-[16px] font-bold leading-[24px] text-left text-[#1E293B]">
            Fee Details:
          </h2>
          <div className="flex gap-4 flex-wrap mt-3 items-center border p-3 rounded-[10px] w-fit">
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 border-[#B5BDC5] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
              >
                <option value="">Select Class</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 border-[#B5BDC5] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
              >
                <option value="">Select Month</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 border-[#B5BDC5] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
              >
                <option value="">Select Section</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 border-[#B5BDC5] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
              >
                <option value="">Select Year</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
          </div>
          <div className="h-auto mb-20 bg-white rounded-b-[12px] pt-16 overflow-x-auto">
            <table className="w-full">
              {/* Table Head */}
              <thead className="bg-[#F8FAFC]">
                <tr className="">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="uppercase text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] py-2 px-6 text-left"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {currentRows.map((item) => (
                  <tr key={item.id} className="border-b">
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="text-[#4D515A] font-montserrat text-sm font-semibold leading-[22px] py-[10px] px-6"
                      >
                        {column.key === "action" ? (
                          <span className="text-[#1464DF] cursor-pointer">
                            {item[column.key]}
                          </span>
                        ) : (
                          item[column.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-wrap justify-between  border p-5 rounded-[12px] items-center">
          <div>
            <h3 className="font-montserrat text-[32px] font-bold leading-[24px] text-left">
              Total Fee:
            </h3>
          </div>
          <div className="flex flex-wrap py-3 gap-3">
            <FeeBox title="Total Students" total="1,290" bgColor="#fff" />
            <FeeBox title="Total Tuition Fee" total="1,290" bgColor="#fff" />
            <FeeBox title="Total Tuition Fee" total="82,000" bgColor="#fff" />
            <FeeBox title="Total Exam Fee" total="1,290" bgColor="#fff" />
            <FeeBox title="Total Library Fee" total="1,290" bgColor="#fff" />
            <FeeBox title="Total Medical Fee" total="52,000" bgColor="#fff" />
            <FeeBox title="Total Sports Fee" total="1,290" bgColor="#fff" />
            <FeeBox title="Total Hostel Fee" total="52,000" bgColor="#fff" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportTable;
