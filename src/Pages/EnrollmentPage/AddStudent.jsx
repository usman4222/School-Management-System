import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";
import BackButton from "../../Components/BackButton";
import Layout from "../../Components/Layout";

const AddStudent = () => {
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
        <Heading page={"Enrolment Form"} />
        <div className="flex  justify-between items-center my-[14px] ">
          <div className="flex items-center gap-[20px]">
            <div>
              <BackButton path={"/enrollment"} />
            </div>
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
              Enrolment Form
            </h2>
          </div>
        </div>

        <div className=" flex flex-col xl:flex-row bg-white pt-[24px] pb-[150px] rounded-lg w-full h-auto">
          <div className=" px-5 w-full ">
            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px]">
              Personal Information
            </h4>
            <div className=" my-[14px] flex flex-col gap-[24px] ">
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
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
                    placeholder="MM / DD / YYYY"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="sectionSelector"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Gender
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
              <div className="flex justify-between gap-[24px]">
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    B-Form Number
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    placeholder="1234"
                    className="p-2 border-2 w-full text-[#344054] font-inter border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full"></div>
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
              <div className="flex justify-between gap-[24px]">
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
              Academic Background
            </h4>

            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Previous School Name
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
                    Previous School Address
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
                    Previous Grade Level
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
                    Reason for Leaving Previous School
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
              Enrollment Information
            </h4>

            <div>
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="sectionSelector"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Grade
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
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="sectionSelector"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Medium
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
              <div className="flex justify-between gap-[24px] mt-5">
                <div className="flex flex-col space-y-2  w-full">
                  <label
                    htmlFor="sectionSelector"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Grade
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
                <div className="flex flex-col space-y-2 w-full"></div>
              </div>
            </div>

            <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] my-[14px]">
              Guardian/Father Details
            </h4>

            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Guardian Name
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
                    Guardian Phone Number
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
                    Guardian Email Address
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
                    Guardian Occupation
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
              Additional Attributes for Enrolment
            </h4>

            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col sm:flex-row justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Enrolment Number
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
                    Nationality
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 border-2 w-full border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-[24px]">
                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="addClass"
                    className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                  >
                    Native Language
                  </label>
                  <input
                    id="addClass"
                    type="text"
                    className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                  />
                </div>
                <div className="flex flex-col space-y-2  w-full"></div>
              </div>
            </div>
            <div className="py-[24px]">
              <div class="flex items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent  focus:ring-0"
                />
                <label
                  for="checked-checkbox"
                  class="ms-2 text-[var(--Gray-700,#344054)] font-inter text-sm font-medium leading-5"
                >
                  Siblings in School?
                </label>
              </div>
            </div>
            <div className="flex justify-between gap-[24px]">
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Admission Date
                </label>
                <input
                  id="addClass"
                  type="date"
                  placeholder="MM / DD / YYYY"
                  className="p-2 w-full border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
            </div>
          </div>

          <div className=" xl:w-[30%] px-6 md:px-0 pt-[37px] pr-[24px]">
            <div className="  sm:flex sm:flex-row-reverse sm:px-6">
              <Link to="/student-info">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md  from-[#1A55A5] via-[#1A55A5] to-[#003F94] bg-[linear-gradient(90.6deg,#1A55A5_46.33%,#003F94_99.99%)] p-[10px_18px] text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Save and Print
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddStudent;
