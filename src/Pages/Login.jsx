import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { MdEmail } from "react-icons/md";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle function to switch between show and hide
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-red-200 w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="bg-white rounded-[12px]">
        <div className="flex justify-center items-center py-10">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="text-[#1E293B] font-montserrat text-2xl font-medium leading-[40px] text-center">
          Welcome
        </h2>
        <h3 className="text-[#7D7D7D] font-montserrat text-lg font-normal leading-[40px] text-center">
          Sign in to continue.
        </h3>
        <div className="px-10">
          <div className="w-full max-w-sm mx-auto mt-10">
            {/* Heading */}
            <label
              htmlFor="email"
              className="block font-montserrat text-sm font-medium leading-5 text-[#344054] mb-2"
            >
              Email or Username
            </label>

            <div className="relative">
              {/* Email Icon */}
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />

              {/* Input Field */}
              <input
                id="email"
                type="email"
                placeholder="e.g. abc@gmail.com"
                className="w-full pl-10 pr-4 py-2 border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-md focus:border-blue-500 focus:outline-none font-montserrat text-base font-normal leading-6"
              />
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto my-10">
            {/* Heading */}
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              {/* Password Icon */}
              <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />

              {/* Password Input Field */}
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full pl-10 pr-4 py-2 border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-md focus:border-blue-500 focus:outline-none font-montserrat text-base font-normal leading-6"
              />

              {/* Toggle Button */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
