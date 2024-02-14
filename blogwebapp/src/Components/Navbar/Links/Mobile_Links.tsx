"use client";
import { useState } from "react";

import Nav_links from "./Nav_Links";

const Mobile_Links: React.FC = () => {
  const [isOpen, setIsopen] = useState<Boolean>(false);

  return (
    <div className="absolute right-0 sm:hidden">
      <button
        onClick={() => setIsopen(!isOpen)}
        className="flex flex-col mr-[50px] justify-between items-center cursor-pointer sm:hidden  ">
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-4 rounded-sm`}></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-4 rounded-sm my-0.5 `}></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-4 rounded-sm`}></span>
      </button>

      {isOpen && (
        <div className=" sm:hidden fixed top-0 right-0 w-[50%] h-full p-4 text-center  bg-red-100 animate-custom-menu">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsopen(!isOpen)}
              className=" absolute right-3 top-4 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-black">
              <span className="sr-only">Close menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Nav_links />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile_Links;
