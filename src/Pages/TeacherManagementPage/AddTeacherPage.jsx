import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import BackButton from "../../Components/BackButton";

const AddTeacherPage = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-blue-500");
  };

  const handleDragLeave = (event) => {
    event.currentTarget.classList.remove("border-blue-500");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
      event.currentTarget.querySelector('input[type="file"]').files = files;
    }
    event.currentTarget.classList.remove("border-blue-500");
  };

  return (
    <Layout>
      <div className="p-5 bg-[#F1F5F9]">
        <Heading page={"Teacher"} />
        <div className="flex flex-wrap  justify-between items-center my-[14px] ">
          <div className="flex items-center gap-[20px]">
            <div>
              <BackButton path={"/admin/teacher-management"} />
            </div>
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
              Add Teacher
            </h2>
          </div>
          <div className=" px-4 py-3 flex gap-5">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md  from-[#1A55A5] via-[#1A55A5] to-[#003F94] bg-[linear-gradient(90.6deg,#1A55A5_46.33%,#003F94_99.99%)] p-[10px_18px] text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-[9px] border border-[var(--Stroke,#E2E8F0)] bg-white shadow-[2px_4px_10px_0px_rgba(180,191,205,0.2)] p-[10px_18px] text-[#F43F5E] font-montserrat text-[14px] font-medium leading-[20px] sm:ml-3 sm:w-auto"
            >
              Discard
            </button>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row bg-white py-[24px] rounded-lg w-full h-auto">
          <div className=" px-5 w-full ">
            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px]">
              Personal Information
            </h4>
            <div className=" my-[14px] flex flex-col gap-[24px] flex-wrap">
              <div className="flex flex-col sm:flex-row  justify-between gap-[24px] ">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    First Name
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Last Name
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  CNIC Number
                </label>
                <input
                  id="addClass"
                  type="text"
                  className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="addClass"
                    type="date"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Gender
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Teacher ID
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    placeholder="1234"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Martial Status
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="sectionSelector"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Teacher Status
                </label>
                <select
                  id="sectionSelector"
                  className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                >
                  <option value="">Select...</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
            </div>
            <h4 className="text-[#1E293B] mb-[14px] font-montserrat text-[20px] font-semibold leading-[24px]">
              Contact Details
            </h4>

            <div className=" flex flex-col gap-[24px]">
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Home Address
                </label>
                <input
                  id="addClass"
                  type="text"
                  className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    City
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    State/Province
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Postal Code
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Country
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Home Phone Number
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Mobile Phone Number
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Email Address
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Emergency Contact Number
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
            </div>

            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] my-[14px]">
              Qualification Background
            </h4>

            <div className="flex  flex-col gap-[24px]">
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Degree Program
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Experience
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Previous Employment details
                </label>
                <input
                  id="addClass"
                  type="text"
                  className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
            </div>

            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] my-[14px]">
              Bank Account Information
            </h4>
            <div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Account Name
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Account Number
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
            </div>

            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] my-[14px]">
              Role in System
            </h4>

            <div>
              <div className="flex justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Select Role
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full px-10 md:px-52 xl:px-0 xl:w-[30%] pt-[37px] xl:pr-[24px] ">
            <div className="flex flex-col justify-start w-full">
              <label
                htmlFor="addClass"
                className="font-montserrat text-sm font-medium leading-5 text-[#344054] pb-[10px]"
              >
                Teacher Picture
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center p-[16px_24px] w-full h-[188px] border-2 border-[#CBC5FF] border-dashed rounded-[12px] cursor-pointer bg-[rgba(238,236,255,0.40)] hover:bg-gray-100 "
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {fileName && (
                <p className="mt-2 text-gray-700">Selected file: {fileName}</p>
              )}
            </div>
            <div className=" mt-5 md:mt-0 ">
              <button
                type="button"
                className="inline-flex w-full my-2 justify-center rounded-md  from-[#1A55A5] via-[#1A55A5] to-[#003F94] bg-[linear-gradient(90.6deg,#1A55A5_46.33%,#003F94_99.99%)] p-[10px_18px] text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex w-full my-2 justify-center rounded-[9px] border border-[var(--Stroke,#E2E8F0)] bg-white shadow-[2px_4px_10px_0px_rgba(180,191,205,0.2)] p-[10px_18px] text-[#F43F5E] font-montserrat text-[14px] font-medium leading-[20px] sm:ml-3 sm:w-auto"
              >
                Discard
              </button>
            </div>
          </div>
        </div>



        
      </div>
    </Layout>
  );
};

export default AddTeacherPage;
