import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import BackButton from "../../Components/BackButton";

const index = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Subject Management"} />
        <div className="flex gap-4 items-center my-5 ">
          <div>
            <BackButton path={"/admin/subject-management"} />
          </div>
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
            Subject Management
          </h2>
        </div>
      </div>
      <div className=" p-5 w-[50%]">
        <div className="my-5 pl-5 ">
          <div className="flex flex-col space-y-2 mt-5">
            <label
              htmlFor="sectionSelector"
              className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
            >
              Select Class
            </label>
            <select
              id="sectionSelector"
              className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
            >
              <option value="">Class Name</option>
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <label
              htmlFor="sectionSelector"
              className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
            >
              Select Subject
            </label>
            <select
              id="sectionSelector"
              className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
            >
              <option value="">Class Name</option>
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <label
              htmlFor="sectionSelector"
              className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
            >
              Assign Teacher
            </label>
            <select
              id="sectionSelector"
              className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
            >
              <option value="">Class Name</option>
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <label
              htmlFor="sectionSelector"
              className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
            >
              Subject Time
            </label>
            <select
              id="sectionSelector"
              className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
            >
              <option value="">Class Name</option>
              <option value="section1">Section 1</option>
              <option value="section2">Section 2</option>
              <option value="section3">Section 3</option>
            </select>
          </div>
        </div>

        <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md  from-[#1A55A5] via-[#1A55A5] to-[#003F94] bg-[linear-gradient(90.6deg,#1A55A5_46.33%,#003F94_99.99%)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
