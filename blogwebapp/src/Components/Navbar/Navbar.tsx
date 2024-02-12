import React from "react";
import Links from "./Links/Links";
const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-row justify-between h-[100px] items-center">
      <div className=" text-xl font-bold">Logo</div>
      <Links />
    </div>
  );
};

export default Navbar;
