"use client";
import React from "react";
import Normal_Navbar from "./Links/Normal_Navbar";
import Mobile_Links from "./Links/Mobile_Links";
const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-row justify-between h-[100px] items-center">
      <div className=" text-xl font-bold">Logo</div>
      <Normal_Navbar />
      <Mobile_Links />
    </div>
  );
};

export default Navbar;
