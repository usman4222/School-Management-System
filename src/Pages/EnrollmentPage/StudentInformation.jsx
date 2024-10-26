import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import BackButton from "../../Components/BackButton";
import { FaPlus } from "react-icons/fa6";
import Button from "../../Components/Button";
import { RiEdit2Line } from "react-icons/ri";
import { FiPrinter } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";

const StudentInformation = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#F1F5F9] h-auto">
        <div>
          <Heading page={"Enrolment Form"} />
          <div className="flex flex-wrap justify-between items-center  ">
            <div className="flex items-center gap-[20px] my-[14px]">
              <BackButton path={"/add-student"} />
              <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
                Enrolment Form
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 items-center my-[14px]">
              <Button text={"Edit"} btnImg={<RiEdit2Line />} />
              <Button text={"Print Fee"} btnImg={<FiPrinter />} />
            </div>
          </div>
        </div>

        <div className="bg-white p-[24px] rounded-[12px]">
          <div className=" w-full flex-col xl:flex-row flex gap-20 items-center justify-between">
            <div className=" flex flex-col sm:flex-row justify-between w-full">
              <div className="flex flex-col gap-[12px] my-3">
                <h4 className="text-black font-inter text-lg font-semibold">
                  Student ID: 167895
                </h4>
                <h6 className="text-gray-500 font-inter text-base font-medium">
                  Joined: Mon, July 22,2022
                </h6>
                <div className="flex w-fit p-[6px_14px] rounded-[20px] bg-[rgba(209,250,229,0.5)] ">
                  <span className="text-[#059691] font-inter text-base font-medium">
                    Accepted
                  </span>
                </div>
              </div>
              <div className="bg-[#E9E9E9] rounded-full w-[189.004px] h-[189.004px] flex justify-center items-center my-3">
                <RiUserLine className="text-[75.792px]" />
              </div>
            </div>
            <div className="flex  flex-col xl:flex-row  justify-between w-full xl:items-center gap-5  ">
              <div className="flex flex-col gap-[5.94px]">
                <h4 className="text-[#1E293B] font-inter text-2xl font-semibold leading-[28px]">
                  Hamid Nawaz
                </h4>
                <div className="flex items-center gap-[12px]">
                  <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                    Date of Birth:
                  </h6>
                  <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                    22/07/2024
                  </span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                    Gender:
                  </h6>
                  <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                    Male
                  </span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                    B Form#:
                  </h6>
                  <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                    1981749347230
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 my-3">
                <button className=" text-[#5D5FEF] font-inter text-base font-medium leading-[20px]  p-[18px_26px] justify-center items-center gap-[4px] rounded-[9px] border stroke-[#E2E8F0] border-[#E2E8F0] bg-white">
                  Download info
                </button>
                <button className=" text-[#5D5FEF] text-xl p-[18px_26px] justify-center items-center gap-[4px] rounded-[9px] border stroke-[#E2E8F0] border-[#E2E8F0] bg-white">
                  <FiPrinter />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-[60px] mt-[50px]">
            <div className="flex w-full flex-col gap-[5.94px]">
              <h4 className="text-[#1E293B] font-inter text-2xl font-semibold leading-[28px]">
                Contact Information
              </h4>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Home Address
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  House # 648 Block A Satellite Town Sargodha
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  City
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Sargodha
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  State
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Punjab
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Postal Code
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  40100
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Country
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Pakistan
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[5.94px]">
              <h4 className="text-[#1E293B] font-inter text-2xl font-semibold leading-[28px]">
                Enrollment Information
              </h4>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Enrollment Grade Level:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Lorem ipsum
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Enrollment Date:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Sep 11, 2024
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Program:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Science
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Guardian Name:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  John D
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Guardian Phone Number:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  +92301234567
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Guardian Email Address:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Email@email.com
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Guardian Occupation:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Teacher
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-[60px] mt-[50px]">
            <div className="flex w-full flex-col gap-[5.94px]">
              <h4 className="text-[#1E293B] font-inter text-2xl font-semibold leading-[28px]">
                Academic Background
              </h4>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Previous School Name
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Allied School System
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  School Address
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  House # 648 Block A Satellite Town Sargodha
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Previous Grade Level
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Lorem ipsum
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Reason For Leaving
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Lorem ipsum is a dummy text
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-[5.94px]">
              <h4 className="text-[#1E293B] font-inter text-2xl font-semibold leading-[28px]">
                Additional Attributes for Admission
              </h4>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Admission Number:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Ad_0138209
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Enrollment Date:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Sep 11, 2024
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Nationality:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Pakistani
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Language Spoken At Home:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  English
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Guardian Phone Number:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  +92301234567
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Siblings in School:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  No
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Admission Status:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Paid
                </span>
              </div>
              <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                <h6 className="text-[#B0B0B0] font-inter text-[16.389px] font-medium leading-[22px]">
                  Admission Date:
                </h6>
                <span className="text-[#14171D] font-inter text-lg font-normal leading-[22px]">
                  Jan 11, 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentInformation;
