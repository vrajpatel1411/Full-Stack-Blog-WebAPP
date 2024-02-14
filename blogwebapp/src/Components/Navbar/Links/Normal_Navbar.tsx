"use client";
import Nav_Links from "./Nav_Links";

const Normal_Navbar: React.FC = () => {
  return (
    <div>
      <div className=" hidden sm:block ">
        <Nav_Links />
      </div>
    </div>
  );
};
//  app__navbar-smallscreen_overlay
export default Normal_Navbar;
