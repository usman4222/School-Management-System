import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import menu from "../assets/svg/menu.svg";
import graph from "../assets/svg/graph.svg";
import admin from "../assets/svg/admin.svg";
import admission from "../assets/svg/admission.svg";
import { Link } from "react-router-dom";

const navItems = [
  { id: "dashboard", label: "Dashboard", path: "/", icon: graph },
  { id: "admin", label: "Admin", icon: admin },
  {
    id: "enrollment",
    label: "Enrolment Form",
    path: "/enrollment",
    icon: admission,
  },
  { id: "academics", label: "Academics", icon: admission },
  {
    id: "all-students",
    label: "AllStudents",
    path: "/all-students",
    icon: admission,
  },
  {
    id: "exam",
    label: "Exams  Department",
    path: "/exam-department",
    icon: admission,
  },
  { id: "accountsOffice", label: "Accounts Office", icon: admission },
];

const adminDropdown = [
  {
    id: "classManagement",
    label: "Class Management",
    path: "/admin/class-management",
  },
  {
    id: "sectionManagement",
    label: "Section Management",
    path: "/admin/section-management",
  },
  {
    id: "subjectManagement",
    label: "Subject Management",
    path: "/admin/subject-management",
  },
  {
    id: "teacherManagement",
    label: "Teacher Management",
    path: "/admin/teacher-management",
  },
  {
    id: "studentReport",
    label: "Student Report",
    path: "/admin/student-report",
  },
  { id: "attendance1", label: "Attendance1", path: "/admin/attendance1" },
  { id: "attendance2", label: "Attendance2", path: "/admin/attendance2" },
];

const academicsDropdown = [
  { id: "students", label: "Students", path: "/academics/students" },
  {
    id: "pendingStudent",
    label: "Pending Student",
    path: "/academics/pending-students",
  },
];

const accountsOfficeDropdown = [
  {
    id: "feeStructure",
    label: "Fee Structure",
    path: "/accounts-office/fee-structure",
  },
  {
    id: "feeCollection",
    label: "Fee Collection",
    path: "/accounts-office/fee-collection",
  },
  { id: "report", label: "Report", path: "/accounts-office/report" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [activeSubNav, setActiveSubNav] = useState(null);
  const [dropdownState, setDropdownState] = useState({
    admin: false,
    academics: false,
    accountsOffice: false,
  });

  const handleNavClick = (id) => {
    setActiveNav(id);
    setActiveSubNav(null);
    setDropdownState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSubNavClick = (subId) => {
    setActiveSubNav(subId);
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      }  border-r border-[#E2E8F0] bg-[#ffffff] pr-3 transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center pt-[21px] pl-[18.67px] mb-8">
        {isOpen && (
          <div>
            <img src={logo} alt="logo" className="h-[64px]" />
          </div>
        )}
        <button onClick={toggleSidebar}>
          <img src={menu} alt="menu" className="w-[24px]" />
        </button>
      </div>
      <div className="pl-[14px]">
        {navItems.map(({ id, label, icon, path }) => (
          <div key={id}>
            <Link to={path}>
              <nav
                className={`pl-[14px] py-[14px] gap-4 rounded-[9px] flex cursor-pointer ${
                  activeNav === id && !activeSubNav
                    ? "bg-gradient-to-r from-[#1A55A5] to-[#003F94]"
                    : "bg-white"
                }`}
                onClick={() => handleNavClick(id)}
              >
                <div>
                  <img
                    src={icon}
                    alt={label}
                    className={`w-[24px] h-[24px] ${
                      activeNav === id ? "fill-white" : "fill-[#3B424A]"
                    }`}
                    style={{
                      filter:
                        activeNav === id
                          ? "none"
                          : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                    }}
                  />
                </div>
                {isOpen && (
                  <div>
                    <span
                      className={`font-montserrat text-[14px] font-medium leading-[22px] text-left ${
                        activeNav === id ? "text-white" : "text-black"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                )}
              </nav>
            </Link>
            {id === "admin" && dropdownState.admin && (
              <div className="pl-[14px] mt-1">
                {adminDropdown.map(({ id, label, path }) => (
                  <Link
                    to={path}
                    key={id}
                    onClick={() => handleSubNavClick(id)}
                    className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
                  >
                    <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {id === "academics" && dropdownState.academics && (
              <div className="pl-[14px] mt-1">
                {academicsDropdown.map(({ id, label, path }) => (
                  <Link
                    to={path}
                    key={id}
                    onClick={() => {
                      handleClassSelect(id);
                      setDropdownState({ ...dropdownState, academics: false });
                    }}
                    className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
                  >
                    <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {id === "accountsOffice" && dropdownState.accountsOffice && (
              <div className="pl-[14px] mt-1">
                {accountsOfficeDropdown.map(({ id, label, path }) => (
                  <Link
                    to={path}
                    key={id}
                    onClick={() => {
                      handleClassSelect(id);
                      setDropdownState({
                        ...dropdownState,
                        accountsOffice: false,
                      });
                    }}
                    className={`${activeSubNav === id ? "bg-[#F3F6FA]" : ""}`}
                  >
                    <div className="text-[#3B424A] text-[14px] py-[10px] px-[14px] cursor-pointer transition-all duration-300 hover:bg-[#F3F6FA] rounded-[6px]">
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
