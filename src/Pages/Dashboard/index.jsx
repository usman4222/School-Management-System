import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import DashBoardCard from "../../Components/DashBoardCard";
import usersImage from "../../assets/svg/users.svg";
import plusImage from "../../assets/svg/plus.svg";
import AttendanceCard from "../../Components/AttendanceCard";
import FinanceCard from "../../Components/FinanceCard";
import TodoList from "../../Components/TodoList";


export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-0" : "ml-0"
        }`}
      >
        <Navbar />
        <main className="flex gap-5 p-4 mt-16">
          <div className="flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <DashBoardCard
                  title="Total Students"
                  total="1,290"
                  usersImage={usersImage}
                  plusImage={plusImage}
                />
                <DashBoardCard
                  title="Total Students"
                  total="1,290"
                  usersImage={usersImage}
                  bgColor="#10B9811A"
                  plusImage={plusImage}
                />
                <DashBoardCard
                  title="Total Students"
                  total="1,290"
                  usersImage={usersImage}
                  plusImage={plusImage}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <AttendanceCard />
              </div>
              {/* <FinancesCard /> */}
            </div>
          </div>
          <div className="">
              <FinanceCard />
              <TodoList />
            </div>
        </main>
      </div>
    </div>
  );
}
