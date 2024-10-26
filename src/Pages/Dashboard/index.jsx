import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar";
import DashBoardCard from "../../Components/Cards/DashBoardCard";
import threeUser from "../../assets/svg/threeUser.svg";
import DashRightArrow from "../../assets/svg/DashRightArrow.svg";
import DashAccount from "../../assets/svg/DashAccount.svg";
import DashBlueArrow from "../../assets/svg/DashBlueArrow.svg";
import DashTeacher from "../../assets/svg/DashTeacher.svg";
import DashTeacherArrow from "../../assets/svg/DashTeacherArrow.svg";
import DashEventIcon from "../../assets/svg/DashEventIcon.svg";
import DashEventArrow from "../../assets/svg/DashEventArrow.svg";
import DashExamIcon from "../../assets/svg/DashExamIcon.svg";
import DashExamArrow from "../../assets/svg/DashExamArrow.svg";
import plusImage from "../../assets/svg/plus.svg";
import AttendanceCard from "../../Components/Cards/AttendanceCard";
import FinanceCard from "../../Components/Cards/FinanceCard";
import TodoList from "../../Components/TodoList";
import Layout from "../../Components/Layout";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Layout>
        <main className="flex gap-5 p-[22px] bg-[#F1F5F9]">
          <div className=" w-full">
            <h2 className="text-2xl font-bold mb-[20px]">Dashboard</h2>
            <div className="lg:flex gap-[20px]">
              <div className="flex gap-[20px] flex-col w-full">
                <div className="rounded-[30px] bg-[#fff] flex flex-col gap-[20px]">
                  <div className="flex px-[30px] pt-[30px] justify-between items-center">
                    <div className="flex gap-[20px] items-center">
                      <div className="flex p-[23.308px] justify-center items-center  rounded-[7.769px] bg-[rgba(247,184,75,0.1)]">
                        <img src={threeUser} alt="users" />
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          Total Students
                        </h6>
                        <h4 className="text-[#4E5564] font-montserrat text-[26px] md:text-[36px] font-semibold leading-[20px] mt-2">
                          1,290
                        </h4>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <img src={DashRightArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <div className="bg-[#F4F4F4] px-[10px] ">
                      <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] py-[10px]">
                        Status
                      </h4>
                    </div>
                  </div>
                  <div className="px-[30px] ">
                    <div className="flex flex-col md:flex md:flex-row justify-between">
                      <div className="p-[18px] w-full flex flex-col gap-[10px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          Suspended
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                      <div className="p-[18px] w-full flex flex-col gap-[10px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          Struck off
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                      <div className="p-[18px] w-full flex flex-col gap-[10px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          Pending
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <div className="bg-[#F4F4F4] px-[10px] ">
                      <h4 className="text-[#1E293B] font-montserrat text-[20px] font-semibold leading-[24px] py-[10px]">
                        Attendence
                      </h4>
                    </div>
                  </div>
                  <div className="px-[30px] pb-[30px]">
                    <div className="flex flex-col md:flex  md:flex-row justify-between">
                      <div className="p-[18px] w-full flex flex-col gap-[10px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          Present
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                      <div className="p-[18px] w-full flex flex-col gap-[10px]  rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          Absent
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                      <div className="p-[18px] w-full flex flex-col gap-[10px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,81,175,0.1)]">
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] text-center">
                          On Leave
                        </h6>
                        <h4 className="text-[#1E293B] text-center font-montserrat text-[24px] font-medium leading-[36px]">
                          1,256
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:flex gap-[20px] ">
                  <div className="rounded-[30px] bg-[#fff] flex flex-col gap-[20px] w-full">
                    <div className="px-[30px]  pt-[30px] flex justify-between items-center">
                      <div className="flex items-center gap-[20px]">
                        <div className="bg-[#4BDAF71A] p-[23.308px] flex justify-center items-center">
                          <img src={DashAccount} alt="account" />
                        </div>
                        <div>
                          <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                            Accounts (Total Fee)
                          </h6>
                          <h4 className="text-[#1E293B] text-center font-montserrat text-[20px] md:text-[24px] font-medium leading-[26px] md:leading-[36px]">
                            Rs. 12930.00/-
                          </h4>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <img src={DashBlueArrow} alt="arrow" />
                      </div>
                    </div>
                    <div className="px-[30px]">
                      <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                        Received Amount
                      </h4>
                      <div className="flex items-center gap-[8px] ">
                        <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                          <div class="w-[50%] bg-[#F7B84B] rounded-[4px] h-full"></div>
                        </div>
                        <div>
                          <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                            Rs. 124.00
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="px-[30px] pb-[30px]">
                      <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                        Pending Amount
                      </h4>
                      <div className="flex items-center gap-[8px]  ">
                        <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                          <div class="w-[20%] bg-[#726BEA] rounded-[4px] h-full"></div>
                        </div>
                        <div>
                          <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                            Rs. 12134.00
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[20px] w-full mt-[20px] xl:mt-0">
                    <div className=" flex flex-col ">
                      <div className="flex px-[30px]  py-[20px] justify-between rounded-[30px] items-center bg-[#fff] ">
                        <div className="flex gap-[20px] items-center">
                          <div className="flex p-[23.308px] justify-center items-center  rounded-[7.769px] rounded-[var(--Border-Radius-4-px, 4px)] bg-[rgba(16,185,129,0.1)]">
                            <img src={DashTeacher} alt="users" />
                          </div>
                          <div>
                            <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                              Total Teachers
                            </h6>
                            <h4 className="text-[#4E5564] font-montserrat text-[26px] md:text-[36px] font-semibold leading-[20px] mt-2">
                              90
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img src={DashTeacherArrow} alt="arrow" />
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                      <div className="flex px-[30px] py-[20px] justify-between rounded-[30px] items-center bg-[#fff] ">
                        <div className="flex gap-[20px] items-center">
                          <div className="flex p-[23.308px] justify-center items-center  rounded-[7.769px] rounded-[var(--Border-Radius-4-px, 4px)] bg-[rgba(225,29,72,0.1)]">
                            <img src={DashEventIcon} alt="users" />
                          </div>
                          <div>
                            <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                              Upcoming Events
                            </h6>
                            <h4 className="text-[#4E5564] font-montserrat text-[26px] md:text-[36px] font-semibold leading-[20px] mt-2">
                              30
                            </h4>
                          </div>
                        </div>
                        <div>
                          <img src={DashEventArrow} alt="arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[45%] mt-[20px] lg:mt-0" >
                <div className="py-[30px] flex flex-col bg-[#fff] rounded-[30px] gap-[26px] ">
                  <div className="flex lg:flex-col xl:flex xl:flex-row px-[30px]  justify-between  items-center ">
                    <div className="flex lg:flex-col xl:flex  xl:flex-row gap-[20px] items-center">
                      <div className="flex p-[23.308px] justify-center items-center   rounded-[7.769px] bg-[rgba(75,247,129,0.1)]">
                        <img src={DashExamIcon} alt="users" />
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          Exams Total Percentage
                        </h6>
                        <h4 className="text-[#4E5564] font-montserrat text-[36px] font-semibold leading-[20px] mt-2">
                          80%
                        </h4>
                      </div>
                    </div>
                    <div className="lg:hidden xl:block">
                      <img src={DashExamArrow} alt="arrow" />
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      10th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[20%] bg-[#10B981] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          80%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      9th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[20%] bg-[#10B981] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          80%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      8th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[20%] bg-[#10B981] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          80%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      6th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F7B84B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      5th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F7B84B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      4th
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F7B84B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      3rd
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F7B84B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      2nd
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F74B4B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="px-[30px] pb-[30px]">
                    <h4 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px] pb-[8px]">
                      1st
                    </h4>
                    <div className="flex items-center gap-[8px]  ">
                      <div class="flex h-[10px] pr-[12px] justify-start items-center gap-[12px] flex-[1_0_0] rounded-[4px] bg-[#F8F8F8]">
                        <div class="w-[50%] bg-[#F74B4B] rounded-[4px] h-full"></div>
                      </div>
                      <div>
                        <h6 className="text-[#4E5564] font-montserrat text-[16px] font-semibold leading-[20px]">
                          40%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
