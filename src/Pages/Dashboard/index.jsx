import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import DashBoardCard from "../../Components/Cards/DashBoardCard";
import usersImage from "../../assets/svg/users.svg";
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
        <main className="flex gap-5 p-[12px] ">
          <div className="flex flex-col gap-[10px]">
            <div>
              <h2 className="text-2xl font-bold mb-[20px]">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] ">
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
      </Layout>
    </>
  );
}
