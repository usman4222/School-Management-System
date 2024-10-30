import React from "react";
import Layout from "../../Components/Layout";
import Heading from "../../Components/Heading";
import { FaDownload, FaPlus, FaPrint } from "react-icons/fa6";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import RoomTable from "../../Components/Tables/HostelManagementTables/RoomTable";

const Rooms = () => {
  return (
    <Layout>
      <div className="pt-3 px-5  bg-[#f5f5fa]">
        <Heading page={"Rooms"} />
        <div className="flex justify-between items-center  flex-wrap ">
          <div className="flex items-center gap-[10px] flex-wrap my-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 pr-5 ">
            Rooms
            </h2>
            <div className="flex gap-[10px] flex-wrap">
              <div className="flex flex-col space-y-2">
                <select
                  id="sectionSelector"
                  className="py-[10px] px-[14px] border-2 text-[#1E293B] font-montserrat text-[14px] font-medium leading-[20px] border-[#D0D5DD] pr-16 rounded-[8px] focus:outline-none focus:ring-[#B5BDC5]  font-montserrat text-sm "
                >
                  <option value="">Registration Number</option>
                  <option value="section1">Section 1</option>
                  <option value="section2">Section 2</option>
                  <option value="section3">Section 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10px] flex-wrap my-5 ">
            <Link to="/add-result">
              <Button text={"Add"} btnImg={<FaPlus />} />
            </Link>
            <Button text={"Print"} btnImg={<FaPrint />} />
          </div>
        </div>
      </div>
      <div className="px-5 bg-[#f5f5fa] h-[100vh]">
        <RoomTable />
      </div>
    </Layout>
  );
};

export default Rooms;
