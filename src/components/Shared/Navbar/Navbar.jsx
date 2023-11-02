import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaUserCircle, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#252525] px-6 py-4 text-white">
      <div className="flex gap-4 items-center">
        <AiOutlineMenu size={"1.5rem"} />
        <h1 className="text-xl font-medium">WareSun</h1>
      </div>
      <div className="flex gap-6 items-center">
        <AiOutlineSearch size={"1.5rem"} className="hidden md:block" />
        <FaMoon />
        <FaShoppingBag size={"1.2rem"} className="hidden md:block" />
        <button className="bg-[#00b482] text-white px-8 py-2 rounded-md hidden md:block">
          Sing In
        </button>
        <FaUserCircle size={"1.5rem"} />
      </div>
    </nav>
  );
};

export default Navbar;
