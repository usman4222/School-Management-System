import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { MdEmail } from "react-icons/md";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-red-200 h-[100vh] flex justify-center items-center ">
      <div className="bg-white flex flex-col gap-[40px] rounded-[12px] p-[40px_24px] w-[556px]">
        <div className="flex flex-col gap-[30px]"> 
          <div className="flex justify-center items-center ">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-[#1E293B] font-montserrat text-2xl font-medium leading-[40px] text-center">
              Welcome
            </h2>
            <h3 className="text-[#7D7D7D] font-montserrat text-lg font-normal leading-[40px] text-center">
              Sign in to continue.
            </h3>
          </div>
        </div>
        <div className="">
          <div className="w-full ">
            <label
              htmlFor="email"
              className="block font-montserrat text-sm font-medium leading-5 text-[#344054] mb-2"
            >
              Email or Username
            </label>

            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />

              <input
                id="email"
                type="email"
                placeholder="e.g. abc@gmail.com"
                className="w-full pl-10 p-[14px] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-md focus:border-blue-500 focus:outline-none font-montserrat text-base font-normal leading-6"
              />
            </div>
          </div>
          <div className="w-full mt-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full pl-10 p-[14px] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-md focus:border-blue-500 focus:outline-none font-montserrat text-base font-normal leading-6"
              />

              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <MdVisibilityOff className="text-xl" />
                ) : (
                  <MdVisibility className="text-xl" />
                )}
              </button>
            </div>
            <div className="mt-[30px]">
              <button className="flex p-[14px_12px] w-full justify-center items-center gap-[var(--Border-Radius-4-px, 4px)] self-stretch rounded-[9px] bg-gradient-to-r from-[#1A55A5] to-[#003F94]">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
