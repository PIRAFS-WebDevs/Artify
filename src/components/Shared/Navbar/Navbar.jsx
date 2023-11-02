import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaUserCircle, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#252525] px-6 py-4 text-[#808080]">
      <div className="flex gap-4 items-center">
        <AiOutlineMenu size={"1.5rem"} />
        <h1 className="text-xl font-medium text-white">WareSun</h1>
      </div>
      <div className="flex gap-6 items-center">
        <AiOutlineSearch size={"1.5rem"} className="hidden md:block" />
        <FaMoon />
        <div className="relative hidden md:block">
          <FaShoppingBag size={"1.5rem"} />
          <span className="absolute -top-2 -right-2 rounded-full bg-[#00b482] text-white text-sm px-1">
            0
          </span>
        </div>
        <button className="bg-[#00b482] text-white px-8 py-2 rounded-md hidden md:block">
          Sing In
        </button>
        <FaUserCircle size={"1.5rem"} />
      </div>

      {/* mobile nav */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0 flex justify-between px-6 py-4 bg-[#252525]">
        <AiFillHome size={"1.5rem"} />
        <AiOutlineSearch size={"1.5rem"} />
        <div className="relative">
          <FaShoppingBag size={"1.5rem"} />
          <span className="absolute -top-2 -right-2 rounded-full bg-[#00b482] text-white text-sm px-1">
            0
          </span>
        </div>
        <AiOutlineMenu size={"1.5rem"} />
      </div>
    </nav>
  );
};

export default Navbar;
