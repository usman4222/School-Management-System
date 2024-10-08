import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import print from "../../assets/svg/printer.svg";
import plus from "../../assets/svg/plus.svg";
import { FaPlus } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";
import EnrollmentTable from "../../Components/Tables/EnrollmentTable";

const index = () => {
  return (
    <Layout>
      <div className="py-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Enrolment Form"} />
        <div className="flex justify-between items-center my-5 ">
          {/* <div>
            <Link to="/admin/subject-management">
              <img
                src={ArrowLeft}
                alt="back"
                className="bg-white rounded-[9px] p-[8px] cursor-pointer"
              />
            </Link>
          </div> */}
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 ">
            Enrolment Form
          </h2>
          <div className="flex gap-3">
            <Button text={"Add Student"} btnImg={<FaPlus />} />
            <Button text={"Print"} btnImg={<FiPrinter />} />
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <EnrollmentTable />
      </div>
    </Layout>
  );
};

export default index;
