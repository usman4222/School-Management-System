import React from "react";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import AcademicsTable from "../../Components/Tables/AcademicsTable";
import { FaPlus } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";

const index = () => {
  return (
    <Layout>
      <div className="py-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Pending Students"} />
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
            Pending Students
          </h2>
          <div className="flex gap-3">
            <Link to="/add-student">
              <Button text={"Add Student"} btnImg={<FaPlus />} />
            </Link>
            <Button text={"Print"} btnImg={<FiPrinter />} />
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <AcademicsTable />
      </div>
    </Layout>
  );
};

export default index;
