import React, { useState } from "react";
import Layout from "../../../Layout";
import Heading from "../../../Heading";

const FeeCollectionTable = () => {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected((prevSelected) => !prevSelected); 
  };

  return (
    <Layout>
      <div className="p-5 bg-[#f5f5fa]">
        <Heading page={"Accounts office"} />
        <div className="flex justify-between mb-5">
          <div className="flex items-center mt-5">
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-bold leading-6 mr-[10px]">
              Fee Collection
            </h2>
          </div>
        </div>
        <div className="bg-[#fff]  px-6 rounded-t-[12px] pt-16">
          <h2 className="font-montserrat text-[16px] font-bold leading-[22px] text-left text-[#4D515A]">
            Challan Number
          </h2>
          <div className="flex flex-wrap gap-4 mt-3 items-center">
            <div>
              <input
                type="text"
                placeholder="Enter Challan Number"
                className="border border-[#D0D5DD] font-inter text-[11px] font-normal leading-[24px] text-left rounded-[8px] pl-5 py-3 w-full"
              />
            </div>
            <div>
              <button className="bg-[#6A95D7] text-white rounded-[9px] font-montserrat text-[14px] font-medium leading-[17.07px] text-left py-2 px-3 ">
                Submit
              </button>
            </div>
          </div>
          <h3 className="font-montserrat text-[22px] font-bold leading-[22px] text-left text-[#4D515A] mt-20 pb-10">
            Challan Form
          </h3>
          <div className="flex justify-center flex-wrap   items-center gap-10">
            <div className="border w-full md:w-fit border-[#000000]">
              <div className="flex justify-end mt-5 px-5">
                <div className="flex justify-between w-full">
                  <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left">
                    Smart School
                  </h4>
                  <h6 className="font-arial text-[18px] font-normal leading-[24px] text-left">
                    Bank Copy
                  </h6>
                </div>
              </div>
              <div className="flex justify-end px-5">
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left underline mt-3">
                  Year: 2024
                </h4>
              </div>
              <div className="px-5 ">
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left mt-1">
                  Challan No: 500026679
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left mt-1">
                  Class: 6th (B)
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left mt-1">
                  Due Date: 05-Oct-2024
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left mt-1">
                  Fee Type: Normal Fee
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left underline mt-1">
                  Name: Hamid Raza
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left underline mt-1">
                  Father’s Name: Raza Ahmad
                </h4>
                <h4 className="font-arial text-[16px] font-bold leading-[24px] text-left underline mt-1">
                  Reg No. 2204
                </h4>
              </div>
              <div className="md:px-10 mt-10  overflow-x-auto flex flex-col">
                <table class="min-w-full border   border-collapse border-gray-300 ">
                  <thead>
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 ">NO.</th>
                      <th class="border border-gray-300 px-4 py-2">
                        Particulars
                      </th>
                      <th class="border border-gray-300 px-4 py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        1
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Tuition Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        2
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Exam Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        3
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Library Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        4
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Medical Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        5
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Hostel Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        6
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Transport Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        7
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Sports Fee
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        8
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        Utility Charges
                      </td>
                      <td class="border border-gray-300 px-4 py-2 text-center">
                        40,000
                      </td>
                    </tr>
                    <tr>
                      <td class=" px-4 py-2 font-arial text-[16px] font-bold leading-[24px] text-center">
                        Total
                      </td>
                      <td class=" px-4 py-2 font-arial text-[16px] font-bold leading-[24px] text-left"></td>
                      <td class=" px-4 py-2 font-arial text-[16px] font-bold leading-[24px] text-center">
                        12000
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h6 className="font-arial text-[14px] font-normal leading-[24px] text-left mt-5 mb-5">
                  (Twelve Thousand Only)
                </h6>
              </div>
            </div>
            <div className="flex flex-wrap bg-[#D0CFCF]">
              <div>
                <div className=" rounded-lg p-4 ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={handleToggle}
                      className="mr-4 accent-[#CBCBCB]"
                    />
                    <h4
                      className={`font-montserrat text-[14px] font-semibold leading-[22px] text-left uppercase ${
                        selected ? "text-[#4D515A]" : "text-[#A6A6A6]"
                      }`}
                    >
                      Partially Paid
                    </h4>
                  </div>
                  <div
                    className={`bg-[#FFFFFF] border rounded-[9px] mt-2 ${
                      selected
                        ? "bg-[#fff] border-[#7C7C7C]"
                        : " bg-[#EAEAEA] border-none"
                    }`}
                  >
                    <h2
                      className={`font-montserrat text-[14px] font-medium leading-[17.07px] text-center p-5 text-black`}
                    >
                      500
                    </h2>
                  </div>
                </div>
                <div className={" rounded-lg p-4 "}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={handleToggle}
                      className="mr-4 accent-[#CBCBCB]"
                    />
                    <h4
                      className={`font-montserrat text-[14px] font-semibold leading-[22px] text-left uppercase ${
                        selected ? "text-[#4D515A]" : "text-[#A6A6A6]"
                      }`}
                    >
                      Partially Paid
                    </h4>
                  </div>
                  <div
                    className={`bg-[#FFFFFF] border rounded-[9px] mt-2 ${
                      selected
                        ? "bg-[#fff] border-[#7C7C7C]"
                        : " bg-[#EAEAEA] border-none"
                    }`}
                  >
                    <h2
                      className={`font-montserrat text-[14px] font-medium leading-[17.07px] text-center p-5 text-black`}
                    >
                      500
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className={" rounded-lg p-4 "}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={handleToggle}
                      className="mr-4 accent-[#CBCBCB]"
                    />
                    <h4
                      className={`font-montserrat text-[14px] font-semibold leading-[22px] text-left uppercase ${
                        selected ? "text-[#4D515A]" : "text-[#A6A6A6]"
                      }`}
                    >
                      Fully Paid
                    </h4>
                  </div>
                  <div
                    className={`bg-[#FFFFFF] border rounded-[9px] mt-2 ${
                      selected
                        ? "bg-[#1D76FF]"
                        : " bg-[#90B9FA]"
                    }`}
                  >
                    <h2
                      className={`font-montserrat text-[14px] font-medium leading-[17.07px] text-center p-3 ${selected ? "text-white" : "text-[#E8E8E8]"}`}
                    >
                      Full Amount has been paid
                    </h2>
                  </div>
                </div>
                <div className={" rounded-lg p-4"}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={handleToggle}
                      className="mr-4 accent-[#CBCBCB]"
                    />
                    <h4
                      className={`font-montserrat text-[14px] font-semibold leading-[22px] text-left uppercase ${
                        selected ? "text-[#4D515A]" : "text-[#A6A6A6]"
                      }`}
                    >
                     Fully Paid
                    </h4>
                  </div>
                  <div
                    className={`bg-[#FFFFFF] border rounded-[9px] mt-2 ${
                      selected
                        ? "bg-[#1D76FF]"
                        : " bg-[#90B9FA]"
                    }`}
                  >
                    <h2
                      className={`font-montserrat text-[14px] font-medium leading-[17.07px] text-center p-3 ${selected ? "text-white" : "text-[#E8E8E8]"}`}
                    >
                      Full Amount has been paid
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeeCollectionTable;
