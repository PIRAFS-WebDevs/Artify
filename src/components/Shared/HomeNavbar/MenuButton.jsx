"use client";

import AllStateContext from "@/context/AllStateContext";
import { useContext } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";

const MenuButton = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(AllStateContext);

  return (
    <button
      onClick={() => setSideBarOpen(!sideBarOpen)}
      className="hidden cursor-pointer hover:text-white md:block"
    >
      {sideBarOpen ? (
        <HiOutlineMenu size={"1.5rem"} />
      ) : (
        <HiOutlineMenuAlt1 size={"1.5rem"} />
      )}
    </button>
  );
};

export default MenuButton;
