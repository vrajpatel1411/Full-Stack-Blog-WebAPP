"use client";
import React from "react";
import Image from "next/image";
import Normal_Navbar from "./Links/Normal_Navbar";
import Mobile_Links from "./Links/Mobile_Links";
const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-row justify-between h-[100px] items-center">
      <div className=" text-xl font-bold">
        <Image
          src="/Logo.png"
          width={200}
          height={250}
          alt="Logo"
        />
      </div>
      <Normal_Navbar />
      <Mobile_Links />
    </div>
  );
};

export default Navbar;
