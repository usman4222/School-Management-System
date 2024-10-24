import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import { FaPlus, FaPrint } from "react-icons/fa6";
import { Link } from "react-router-dom";
import StudentReportTable from "../../Components/Tables/StudentReportTable";
import { FiPrinter } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { RiAiGenerate } from "react-icons/ri";


const index = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Students"} />
        <div className="flex justify-between items-center flex-wrap">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 my-5 ">
            Student Report
          </h2>
          <div className="flex gap-3 flex-wrap my-5">
            <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <span className="text-[#64748B]">
                  <FiPrinter />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Print
                </span>
              </button>
            </div>
            <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <span className="text-[#64748B]">
                  <HiDownload />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Download
                </span>
              </button>
            </div> 
            <Button text={"Generate Report"} btnImg={<RiAiGenerate />} />
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <StudentReportTable />
      </div>
    </Layout>
  );
};

export default index;
