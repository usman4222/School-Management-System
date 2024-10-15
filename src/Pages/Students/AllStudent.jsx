import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import { FaPlus } from "react-icons/fa6";
import AllStudentTable from "../../Components/Tables/AllStudentTable";
import { Link } from "react-router-dom";

const AllStudent = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Students"} />
        <div className="flex justify-between mb-5">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Students
          </h2>
          <div className="flex gap-3">
            <Link to="/add-enrollment">
              <Button text={"Add Student"} btnImg={<FaPlus />} />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa]">
        <AllStudentTable />
      </div>
    </Layout>
  );
};

export default AllStudent;
