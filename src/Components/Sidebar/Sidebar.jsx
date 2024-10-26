// import React, { useState } from "react";
// import logo from "../assets/svg/logo.svg";
// import menu from "../assets/svg/menu.svg";
// import graph from "../assets/svg/graph.svg";
// import admin from "../assets/svg/admin.svg";
// import admission from "../assets/svg/admission.svg";
// import { Link } from "react-router-dom";

// const navItems = [
//   { id: "dashboard", label: "Dashboard", path: "/", icon: graph },
//   { id: "admin", label: "Admin", icon: admin },
//   {
//     id: "enrollment",
//     label: "Enrolment Form",
//     path: "/enrollment",
//     icon: admission,
//   },
//   { id: "academics", label: "Academics", icon: admission },
//   {
//     id: "all-students",
//     label: "AllStudents",
//     path: "/all-students",
//     icon: admission,
//   },
//   {
//     id: "exam",
//     label: "Exams  Department",
//     path: "/exam-department",
//     icon: admission,
//   },
//   { id: "accountsOffice", label: "Accounts Office", icon: admission },
// ];

// const adminDropdown = [
//   {
//     id: "classManagement",
//     label: "Class Management",
//     path: "/admin/class-management",
//   },
//   {
//     id: "sectionManagement",
//     label: "Section Management",
//     path: "/admin/section-management",
//   },
//   {
//     id: "subjectManagement",
//     label: "Subject Management",
//     path: "/admin/subject-management",
//   },
//   {
//     id: "teacherManagement",
//     label: "Teacher Management",
//     path: "/admin/teacher-management",
//   },
//   {
//     id: "studentReport",
//     label: "Student Report",
//     path: "/admin/student-report",
//   },
//   { id: "attendance1", label: "Attendance1", path: "/admin/attendance1" },
//   { id: "attendance2", label: "Attendance2", path: "/admin/attendance2" },
// ];

// const academicsDropdown = [
//   { id: "students", label: "Students", path: "/academics/students" },
//   {
//     id: "pendingStudent",
//     label: "Pending Student",
//     path: "/academics/pending-students",
//   },
// ];

// const accountsOfficeDropdown = [
//   {
//     id: "feeStructure",
//     label: "Fee Structure",
//     path: "/accounts-office/fee-structure",
//   },
//   {
//     id: "feeCollection",
//     label: "Fee Collection",
//     path: "/accounts-office/fee-collection",
//   },
//   { id: "report", label: "Report", path: "/accounts-office/report" },
// ];

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const [activeNav, setActiveNav] = useState("dashboard");
//   const [activeSubNav, setActiveSubNav] = useState(null);
//   const [dropdownState, setDropdownState] = useState({
//     admin: false,
//     academics: false,
//     accountsOffice: false,
//   });

//   const handleNavClick = (id) => {
//     setActiveNav(id);
//     setActiveSubNav(null);
//     setDropdownState((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   const handleSubNavClick = (subId) => {
//     setActiveSubNav(subId);
//   };

//   return (
//     <aside
//       className={`${
//         isOpen ? "w-64" : "w-20"
//       }  border-r border-[#E2E8F0] bg-[#ffffff] pr-3 transition-all duration-300 ease-in-out`}
//     >
//       <div className="flex justify-between items-center pt-[21px] pl-[18.67px] mb-8">
//         {isOpen && (
//           <div>
//             <img src={logo} alt="logo" className="h-[64px]" />
//           </div>
//         )}
//         <button onClick={toggleSidebar}>
//           <img src={menu} alt="menu" className="w-[24px]" />
//         </button>
//       </div>
//       <div className="pl-[14px]">
//         {navItems.map(({ id, label, icon, path }) => (
//           <div key={id}>
//             <Link to={path}>
//               <nav
//                 className={`pl-[14px] py-[14px] gap-4 rounded-[9px] flex cursor-pointer ${
//                   activeNav === id && !activeSubNav
//                     ? "bg-gradient-to-r from-[#1A55A5] to-[#003F94]"
//                     : "bg-white"
//                 }`}
//                 onClick={() => handleNavClick(id)}
//               >
//                 <div>
//                   <img
//                     src={icon}
//                     alt={label}
//                     className={`w-[24px] h-[24px] ${
//                       activeNav === id ? "fill-white" : "fill-[#3B424A]"
//                     }`}
//                     style={{
//                       filter:
//                         activeNav === id
//                           ? "none"
//                           : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
//                     }}
//                   />
//                 </div>
//                 {isOpen && (
//                   <div>
//                     <span
//                       className={`font-montserrat text-[14px] font-medium leading-[22px] text-left ${
//                         activeNav === id ? "text-white" : "text-black"
//                       }`}
//                     >
//                       {label}
//                     </span>
//                   </div>
//                 )}
//               </nav>
//             </Link>
//             {id === "admin" && dropdownState.admin && (
//               <div className="pl-[14px] mt-1">
//                 {adminDropdown.map(({ id, label, path }) => (
//                   <Link
//                     to={path}
//                     key={id}
//                     onClick={() => handleSubNavClick(id)}
//                     className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
//                   >
//                     <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
//                       {label}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//             {id === "academics" && dropdownState.academics && (
//               <div className="pl-[14px] mt-1">
//                 {academicsDropdown.map(({ id, label, path }) => (
//                   <Link
//                     to={path}
//                     key={id}
//                     onClick={() => {
//                       handleClassSelect(id);
//                       setDropdownState({ ...dropdownState, academics: false });
//                     }}
//                     className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
//                   >
//                     <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
//                       {label}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//             {id === "accountsOffice" && dropdownState.accountsOffice && (
//               <div className="pl-[14px] mt-1">
//                 {accountsOfficeDropdown.map(({ id, label, path }) => (
//                   <Link
//                     to={path}
//                     key={id}
//                     onClick={() => {
//                       handleClassSelect(id);
//                       setDropdownState({
//                         ...dropdownState,
//                         accountsOffice: false,
//                       });
//                     }}
//                     className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
//                   >
//                     <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
//                       {label}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Logo from "../../assets/svg/logo.svg";
import menu from "../../assets/svg/menu.svg";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdChecklist } from "react-icons/md";
import { TbArticle } from "react-icons/tb";
import { GrArticle } from "react-icons/gr";
import {
  RiMoneyDollarCircleLine,
  RiMoneyPoundCircleLine,
} from "react-icons/ri";
import { LuCoins } from "react-icons/lu";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [adminOpen, setAdminOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [accountsOfficeOpen, setAccountsOfficeOpen] = useState(false);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);


  const adminDropdown = [
    { id: "classManagement", label: "Class Management", path: "/admin/class-management" },
    { id: "sectionManagement", label: "Section Management", path: "/admin/section-management" },
    { id: "subjectManagement", label: "Subject Management", path: "/admin/subject-management" },
    { id: "teacherManagement", label: "Teacher Management", path: "/admin/teacher-management" },
    { id: "studentReport", label: "Student Report", path: "/admin/student-report" },
    { id: "attendance1", label: "Attendance1", path: "/admin/attendance1" },
    { id: "attendance2", label: "Attendance2", path: "/admin/attendance2" },
  ];

  const academicsDropdown = [
    { id: "students", label: "Students", path: "/academics/students" },
    { id: "pendingStudent", label: "Pending Student", path: "/academics/pending-students" },
  ];

  const accountsOfficeDropdown = [
    { id: "feeStructure", label: "Fee Structure", path: "/accounts-office/fee-structure" },
    { id: "feeCollection", label: "Fee Collection", path: "/accounts-office/fee-collection" },
    { id: "report", label: "Report", path: "/accounts-office/report" },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 border-r border-[#E2E8F0] z-40 flex h-screen w-[262px] flex-col overflow-y-hidden bg-[#fff] duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between pt-[21px] gap-2 pr-[10px] pl-[18px]">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="px-[10px] py-[34px]">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("dashboard")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        className={`group relative flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium text-bodydark1 duration-300 ease-in-out   ${
                          (pathname === "/" || pathname.includes("dashboard")) &&
                          "bg-[#F3F6FA] custom-gradient"
                        }`}
                        to="/"
                      >
                        <RxDashboard />
                        Dashboard
                      </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={adminOpen}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <button
                        onClick={handleClick}
                        className={`group relative flex w-full items-center gap-2.5 rounded-[9px] p-[14px] font-montserrat font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                          pathname.includes("/admin") && "bg-[#F3F6FA] custom-gradient"
                        }`}
                      >
                        <FaRegUser />
                        Admin
                      </button>
                      <ul className={`ml-4 flex flex-col ${open ? "block" : "hidden"}`}>
                        {adminDropdown.map(({ id, label, path }) => (
                          <li key={id}>
                            <NavLink
                              to={path}
                              className={`block rounded-[9px] p-[10px] font-medium text-bodydark1  font-montserrat duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                                pathname.includes(path) && "bg-[#F3F6FA]"
                              }`}
                            >
                              {label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={academicsOpen}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <button
                        onClick={handleClick}
                        className={`group relative flex w-full items-center gap-2.5 rounded-[9px] p-[14px] font-montserrat font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                          pathname.includes("/academics") && "bg-[#F3F6FA] custom-gradient"
                        }`}
                      >
                        <HiOutlineUsers />
                        Academics
                      </button>
                      <ul className={`ml-4 flex flex-col ${open ? "block" : "hidden"}`}>
                        {academicsDropdown.map(({ id, label, path }) => (
                          <li key={id}>
                            <NavLink
                              to={path}
                              className={`block rounded-[9px] p-[10px] font-medium text-bodydark1 font-montserrat duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                                pathname.includes(path) && "bg-[#F3F6FA]"
                              }`}
                            >
                              {label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activeCondition={accountsOfficeOpen}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <button
                        onClick={handleClick}
                        className={`group relative flex w-full items-center gap-2.5 rounded-[9px] p-[14px] font-montserrat font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                          pathname.includes("/accounts-office") && "bg-[#F3F6FA] custom-gradient"
                        }`}
                      >
                        <RiMoneyDollarCircleLine />
                        Accounts Office
                      </button>
                      <ul className={`ml-4 flex flex-col ${open ? "block" : "hidden"}`}>
                        {accountsOfficeDropdown.map(({ id, label, path }) => (
                          <li key={id}>
                            <NavLink
                              to={path}
                              className={`block rounded-[9px] p-[10px] font-medium text-bodydark1 font-montserrat duration-300 ease-in-out hover:bg-[#F3F6FA] ${
                                pathname.includes(path) && "bg-[#F3F6FA] "
                              }`}
                            >
                              {label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
