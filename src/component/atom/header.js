import React from "react";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-[#232946]
  text-gray-100
  focus:text-gray-700
  rounded-b-2xl
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 rounded-full flex justify-center cursor-pointer items-center border-4 ml-10 mr-1">
            <h1 className="animate-spin-slow font-primary text-2xl ">S</h1>
          </div>
          <h1 className="font-primary text-2xl">umanzaya</h1>
        </div>
        <div className="w-1/3 flex flex-row justify-between mr-10">
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/project")}
          >
            Project
          </div>
          <h1 className="cursor-pointer font-primary hover:text-white">
            About
          </h1>
          <h1 className="cursor-pointer font-primary hover:text-white">
            Contact Us
          </h1>
        </div>
      </nav>
  );
}

export default Header;
