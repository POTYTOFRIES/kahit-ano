import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        {/* Search Input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 mx-5 -mr-60 w-[100px] sm:w-[200px] lg:w-[300px]">
          <AiOutlineSearch size={25} color="black" />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="search"
            placeholder="Search foods"
          />
        </div>
      </div>

      <div className="flex item-center w-[80px] ml-14 sm:w-[100px] lg:w-[200px]">
        <Link to="/">
          <img className="w-28 " src="kalogo.png" alt="KA logo" />
        </Link>
      </div>

      {/* Login button */}
      <button className=" bg-black border-0 text-white md:flex  items-center py-2 rounded-full">
        <Link to="/login" class="font-medium mb-[-2px]">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
