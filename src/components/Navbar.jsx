import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineHome
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} color="black"/>
        </div>

         {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 mx-5 -mr-60 w-[100px] sm:w-[200px] lg:w-[300px]">
        <AiOutlineSearch size={25} color="black"/>
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      </div>

      <div className="flex item-center w-[80px] ml-36 sm:w-[100px] lg:w-[200px]">
      <Link to='/'><img className="w-28 " src="kalogo.png" alt="KA logo" /></Link>
          
      </div>


      {/* Login button */}
      <button className=" bg-black border-0 text-white md:flex  items-center py-2 rounded-full">
      <Link to='/login' class='font-medium mb-[-2px]'>Login</Link>
      </button>
      
      

      

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-100 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-100 z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <Link to='/' ><img className="w-32 p-4" src="kalogo.png" alt="KA logo" /> </Link>
       
        <nav>
          <ul className="flex flex-col p-4 text-black ">
          <Link to='/' ><li className="text-xl py-4 flex hover:text-amber-600">
              <AiOutlineHome size={25} color="green" className="mr-4" /> Home
            </li></Link>
            

            <li className="text-xl py-4 flex hover:text-amber-600">
              <HiOutlineInformationCircle size={25} color="green" className="mr-4" /> About
            </li>
          

            <Link to='/category'>
            <li className="text-xl py-4 flex hover:text-amber-600">
            <BiCategoryAlt size={25} color="green" className="mr-4"/>Category
            </li>
            </Link>
  
            <li className="text-xl py-4 flex hover:text-amber-600">
              <FaUserFriends size={25} color="green" className="mr-4" /> Invite Friends
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
