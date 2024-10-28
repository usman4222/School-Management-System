import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { FaDownload, FaPlus, FaPrint } from "react-icons/fa6";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import ViewResultTable from "../../Components/Tables/ExamDepartmentTables/ViewResultTable";

const ViewResult = () => {
  return (
    <Layout>
      <div className="pt-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Result"} />
        <div className="flex justify-between items-center  flex-wrap ">
          <div className="flex items-center gap-[10px] flex-wrap my-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 pr-5 ">
              View Result
            </h2>
            <div className="flex gap-[10px] flex-wrap">
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Subjects</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10px] flex-wrap my-5 ">
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
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa] h-[100vh]">
        <ViewResultTable />
      </div>
    </Layout>
  );
};

export default ViewResult;
