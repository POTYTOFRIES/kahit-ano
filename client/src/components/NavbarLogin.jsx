import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineHome
} from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/AuthContext";


const NavbarLogin = () => {
  const [nav, setNav] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    auth.setUser();
    navigate("/");
  };

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
          type="search"
          placeholder="Search foods"
        />
      </div>
      </div>

      <div className="flex item-center w-[80px] ml-14 sm:w-[100px] lg:w-[200px]">
      <Link to='/home'><img className="w-28 " src="kalogo.png" alt="KA logo" /></Link>
          
      </div>


      {/* Logout button */}
      <button 
      onClick={logOut} 
      className=" bg-black border-0 text-white md:flex  items-center py-2 rounded-full">
     Logout
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

        <Link to='/home' ><img className="w-32 p-4" src="kalogo.png" alt="KA logo" /> </Link>
       
        <nav>
          <ul className="flex flex-col p-4 text-black ">
          <Link to='/home' ><li className="text-xl py-4 flex hover:text-amber-600">
              <AiOutlineHome size={25} color="green" className="mr-4" /> Home
            </li></Link>

            <Link to='/user' ><li className="text-xl py-4 flex hover:text-amber-600">
              <CgProfile size={25} color="green" className="mr-4" /> Profile
            </li></Link>
            
            <Link to='/about'>
            <li className="text-xl py-4 flex hover:text-amber-600">
              <HiOutlineInformationCircle size={25} color="green" className="mr-4" /> About
            </li>
            </Link>

            <Link to='/category'>
            <li className="text-xl py-4 flex hover:text-amber-600">
            <BiCategoryAlt size={25} color="green" className="mr-4"/>Category
            </li>
            </Link>

            <Link to='/bookmark'>
            <li className="text-xl py-4 flex hover:text-amber-600">
              <BsBookmarkHeart size={25} color="green" className="mr-4" /> Bookmark
            </li>
            </Link>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarLogin;
