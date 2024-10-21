import React from "react";
import Heading from "../../Components/Heading";
import Layout from "../../Components/Layout";
import { HiDownload } from "react-icons/hi";
import { RiAiGenerate } from "react-icons/ri";
import Button from "../../Components/Button";
import ClassFeeTable from "../../Components/Tables/FeeTables";
import FeeChallanGenerationTable from "../../Components/Tables/AccountsOfficeTables/ClassFeeTables/FeeChallanGenerationTable";
import ManageClassFeeTable from "../../Components/Tables/AccountsOfficeTables/ClassFeeTables/ManageClassFeeTable";
import FeeTables from "../../Components/Tables/FeeTables";

const index = () => {
  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Accounts office"} />
        <div className="flex justify-between mb-5">
          <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mt-5">
            Fee Structure
          </h2>
          <div className="flex gap-3">
            {/* <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <span className="text-[#64748B]">
                  <FiPrinter />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Print
                </span>
              </button>
            </div> */}
            {/* <div>
              <button className="flex items-center p-[10px] px-[8px] py-[10px] gap-[4px] rounded-[9px] bg-[#FFFFFF] border border-[#E2E8F0]">
                <span className="text-[#64748B]">
                  <HiDownload />
                </span>
                <span className="text-[#64748B] font-montserrat text-[14px] font-medium leading-[17.07px] text-left">
                  Download
                </span>
              </button>
            </div>
            <Button text={"Generate Report"} btnImg={<RiAiGenerate />} /> */}
          </div>
        </div>
        <div>
          <FeeTables />
        </div>
      </div>
    </Layout>
  );
};

export default index;
