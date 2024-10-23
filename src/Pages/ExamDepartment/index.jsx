import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { FaDownload, FaPlus, FaPrint } from "react-icons/fa6";
import Button from "../../Components/Button";
import ResultTable from "../../Components/Tables/AccountsOfficeTables/ResultTable/ResultTable";
import { Link } from "react-router-dom";

const ExamDepartment = () => {
  return (
    <Layout>
      <div className="py-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Exams"} />
        <div className="flex justify-between items-center my-5 ">
          {/* <div>
            <Link to="/admin/subject-management">
              <img
                src={ArrowLeft}
                alt="back"
                className="bg-white rounded-[9px] p-[8px] cursor-pointer"
              />
            </Link>
          </div> */}
          <div className="flex items-center gap-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 pr-5 ">
              Result
            </h2>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
              >
                <option value="">All Classes</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
              >
                <option value="">Exams</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
              >
                <option value="">Terms</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <select
                id="sectionSelector"
                className="p-2 border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
              >
                <option value="">Year</option>
                <option value="section1">Section 1</option>
                <option value="section2">Section 2</option>
                <option value="section3">Section 3</option>
              </select>
            </div>
            <div>
              <button className="text-[#fff] custom-gradient rounded-[9px] p-3">
                Get
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-white">
                <span className="text-[#64748B]">
                  <FaPrint />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Print
                </span>
              </button>
            </div>
            <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-white">
                <span className="text-[#64748B]">
                  <FaDownload />
                </span>
                <span className="text-[#64748B]font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Result Sheet
                </span>
              </button>
            </div>
            <Link to="/add-result">
              <Button text={"Result"} btnImg={<FaPlus />} />
            </Link>
          </div>

          {/* <div className="flex gap-3">
            <Link to="/add-student">
              <Button text={"Add Student"} btnImg={<FaPlus />} />
            </Link>
            <Button text={"Print"} btnImg={<FiPrinter />} />
          </div> */}
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <ResultTable />
      </div>
    </Layout>
  );
};

export default ExamDepartment;
