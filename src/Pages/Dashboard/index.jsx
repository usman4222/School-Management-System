import React, { useState } from "react";
import {
  Bell,
  Cog,
  ChevronDown,
  Plus,
  Search,
  Edit,
  Trash,
  Menu,
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calculator,
  Home,
  Truck,
  FileText,
  ChevronRight,
} from "lucide-react";

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import DashBoardCard from "../../Components/DashBoardCard";
import usersImage from "../../assets/svg/users.svg";
import plusImage from "../../assets/svg/plus.svg";
import AttendanceCard from "../../Components/AttendanceCard";

// const Sidebar = ({ isOpen, toggleSidebar }) => {

//   return (
//     <aside
//       className={`bg-[#ffffff]  text-[#3B424A] border border-[#E2E8F0]  h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out ${
//         isOpen ? "w-64" : "w-20"
//       } overflow-hidden`}
//     >
//       <div className="">
//         <div className="flex justify-between items-center pt-[21px] pl-[18.67px] pr-3 mb-8">
//           <div>
//             <img src={logo} alt="logo" className="h-[64px]" />
//           </div>
//           <button onClick={toggleSidebar}>
//             {isOpen ? (
//               <img src={menu} alt="menu" className="w-[24px]" />
//             ) : (
//               <img src={menu} alt="menu" />
//             )}
//           </button>
//         </div>
//         <nav className="pl-[10px]  gap-[4px] rounded-[9px] custom-gradient flex flex-col gap-8">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href="#"
//               className="  flex p-[14px_0px_0px_0px] "
//             >
//               {item.icon}
//               <span
//                 className={`ml-4 ${
//                   isOpen ? "" : "opacity-0"
//                 } font-montserrat text-[14px] font-medium leading-[22px] text-left text-white`}
//               >
//                 {item.label}
//               </span>
//             </a>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   );
// };

// const StatCard = ({ title, value, viewAll }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex justify-between items-center mb-2">
//       <h3 className="font-semibold">{title}</h3>
//       <button className="text-blue-500">+</button>
//     </div>
//     <p className="text-2xl font-bold">{value}</p>
//     <a href="#" className="text-sm text-blue-500">View all</a>
//   </div>
// )

// const AttendanceCard = () => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="font-semibold">Attendance</h3>
//       <button className="flex items-center text-sm text-gray-600">
//         Year <ChevronDown className="w-4 h-4 ml-1" />
//       </button>
//     </div>
//     <div className="grid grid-cols-3 gap-4 text-center">
//       {[
//         { label: 'Present', value: '1,234' },
//         { label: 'Absent', value: '50' },
//         { label: 'On Leave', value: '6' },
//       ].map(({ label, value }) => (
//         <div key={label}>
//           <p className="text-gray-600">{label}</p>
//           <p className="text-xl font-bold">{value}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )

// const FinancesCard = () => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <h3 className="font-semibold mb-4">Finances</h3>
//     {[
//       { label: 'Total Revenue', value: 'Rs. 6,85,258', color: 'bg-green-500' },
//       { label: 'Received Amount', value: 'Rs. 2,85,258', color: 'bg-yellow-500' },
//       { label: 'Due Amount', value: 'Rs. 6,85,258', color: 'bg-red-500' },
//       { label: 'Expenses', value: 'Rs. 6,65,258', color: 'bg-blue-500' },
//     ].map(({ label, value, color }) => (
//       <div key={label} className="mb-2">
//         <div className="flex justify-between text-sm mb-1">
//           <span>{label}</span>
//           <span>{value}</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div className={`${color} h-2.5 rounded-full w-3/4`}></div>
//         </div>
//       </div>
//     ))}
//   </div>
// )

// const TodoList = () => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="font-semibold">To-Do List</h3>
//       <button className="text-blue-500"><Plus className="w-5 h-5" /></button>
//     </div>
//     <div className="relative mb-4">
//       <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//       <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-full" />
//     </div>
//     {[1, 2, 3].map((item) => (
//       <div key={item} className="flex items-center justify-between bg-blue-100 p-3 rounded-lg mb-2">
//         <span>Today have to visit...</span>
//         <div>
//           <button className="mr-2"><Edit className="w-4 h-4 text-gray-600" /></button>
//           <button><Trash className="w-4 h-4 text-gray-600" /></button>
//         </div>
//       </div>
//     ))}
//   </div>
// )

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
          isOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* <Navbar /> */}
        <main className="p-4 mt-16">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {/* <StatCard title="Total Students" value="1,290" viewAll="View all" />
            <StatCard title="Total Teachers" value="26" viewAll="View all" />
            <StatCard title="Upcoming Events" value="4" viewAll="View all" /> */}

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
              bgColor = "#10B9811A"
              plusImage={plusImage}
            />
            <DashBoardCard
              title="Total Students"
              total="1,290"
              usersImage={usersImage}
              plusImage={plusImage}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <AttendanceCard />
            </div>
            {/* <FinancesCard /> */}
          </div>
          <div className="mt-4">
            {/* <TodoList /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
