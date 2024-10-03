"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import cross from "../assets/svg/cross.svg";

export default function DeleteModal() {
  const [openDel, setOpenDel] = useState(true);

  return (
    <Dialog open={openDel} onClose={setOpenDel} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-lg bg-white p-7 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white rounded-full absolute top-[-15px] right-[-15px] w-[28px] h-[28px] flex items-center justify-center border-[0.7px] border-[#E2E8F0] shadow-[1.4px_2.8px_7px_0px_rgba(180,191,205,0.2)]">
              <button onClick={() => setOpenDel(false)}>
                <img src={cross} alt="cross" />
              </button>
            </div>
            <h3 className="font-montserrat text-base font-bold leading-6 text-[#4D515A] uppercase">
              Delete Class
            </h3>

            <h6 class="font-montserrat text-sm font-normal leading-5 text-left text-[#1E293B] mt-5">
              Do you want to delete this class? By deleting the class the whole
              data will be gone.
            </h6>
            <div className="mt-5">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Username
                </label>
                <input
                  id="addClass"
                  type="text"
                  placeholder="Enter here"
                  className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-3">
                <label
                  htmlFor="addClass"
                  className="font-montserrat text-sm font-medium leading-5 text-left text-[#344054]"
                >
                  Admin Password
                </label>
                <input
                  id="addClass"
                  type="text"
                  placeholder="*****"
                  className="p-2 border-2 border-[#B5BDC5] rounded-[4px] focus:outline-none focus:ring-[#B5BDC5] text-[#667085] font-montserrat text-sm font-normal leading-6"
                />
              </div>
            </div>

            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-3">
              <button
                type="button"
                onClick={() => setOpenDel(false)}
                className="inline-flex w-full justify-center rounded-md  from-[#A51A1A] to-[#940000] bg-[linear-gradient(90.6deg,#A51A1A_46.33%,#940000_99.99%)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpenDel(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}