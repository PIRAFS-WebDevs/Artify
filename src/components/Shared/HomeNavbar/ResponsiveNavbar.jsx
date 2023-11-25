"use context";

import React, { useContext } from "react";
import { AiFillHome, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";
import AllStateContext from "@/context/AllStateContext";

const ResponsiveNavbar = () => {
  const { mobileView, setMobileView, setCartOpen } =
    useContext(AllStateContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 md:hidden dark:bg-dark-400">
      <AiFillHome size={"1.5rem"} />
      <AiOutlineSearch size={"1.5rem"} />

      <div className="relative">
        <button onClick={() => setCartOpen(true)}>
          <FaShoppingBag size={"1.2rem"} />
          <span className="absolute px-1 text-sm rounded-full select-none dark:text-white -top-2 -right-2 bg-primary">
            0
          </span>
        </button>
      </div>

      <button
        onClick={() => {
          setMobileView(!mobileView);
        }}
      >
        <AiOutlineMenu size={"1.5rem"} />
      </button>

      {/* mobile sidebar */}
      <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
    </div>
  );
};

export default ResponsiveNavbar;
