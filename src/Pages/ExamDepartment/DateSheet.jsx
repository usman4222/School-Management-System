import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { FaDownload, FaPlus, FaPrint } from "react-icons/fa6";
import Button from "../../Components/Button";
import DateSheetTable from "../../Components/Tables/ExamDepartmentTables/DateSheetTable";

const DateSheet = () => {
  return (
    <Layout>
      <div className="pt-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Result"} />
        <div className="flex justify-between items-center  flex-wrap ">
          <div className="flex items-center justify-between gap-[10px] flex-wrap  w-full">
            <div>
              <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 pr-5 my-5">
                Date Sheet
              </h2>
            </div>
            <div className="flex gap-[10px] flex-wrap my-5">
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Classes</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Section</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
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
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Exam Terms</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Date</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[10px] flex-wrap my-5 ">
              <Button text={"Print"} btnImg={<FaPlus />} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa] h-[100vh]">
        <DateSheetTable />
      </div>
    </Layout>
  );
};

export default DateSheet;
