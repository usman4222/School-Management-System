import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import { FaPlus } from "react-icons/fa";
import AddResultTable from "../../Components/Tables/ExamDepartmentTables/AddResultTable";

const AddResult = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Result"} />
        <div className="flex flex-wrap items-center justify-between ">
          <div className="flex flex-wrap items-center gap-4 py-[10px]">
            <div className="flex items-center gap-[10px]">
              <BackButton path={"/exam-department/result"} />
              <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 pr-16">
                Add Result
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-[22px]">
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2  border-[#D0D5DD] text-[#1E293B] font-montserrat text-sm font-medium rounded-[8px] focus:outline-none"
                >
                  <option value="">All Classes</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="examSelector"
                  className="py-2 px-4 border-2 text-[#1E293B] font-montserrat text-sm font-medium border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Exam</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="termSelector"
                  className="py-2 px-4 border-2 text-[#1E293B] font-montserrat text-sm font-medium border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Term</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="yearSelector"
                  className="py-2 px-4 border-2 text-[#1E293B] font-montserrat text-sm font-medium border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Year</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="subjectSelector"
                  className="py-2 px-4 border-2 text-[#1E293B] font-montserrat text-sm font-medium border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Subject</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-2 px-4 border-2 text-[#1E293B] font-montserrat text-sm font-medium border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Section</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  id="infoSelector"
                  className="py-2 px-4 bg-[#D0D5DD] text-[#B4BFCD] font-montserrat text-sm font-medium border-2 border-[#D0D5DD] rounded-[8px] focus:outline-none"
                >
                  <option value="">Information</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] items-center flex-wrap">
            <Button text={"Result Sheet"} btnImg={<FaPlus />} />
            <Button text={"Save Result"} btnImg={<FaPlus />} />
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <AddResultTable />
      </div>
    </Layout>
  );
};

export default AddResult;
