"use client";
import React, { useContext } from "react";
import TopSideBar from "./TopSideBar";
import AllStateContext from "@/context/AllStateContext";

const Sidebar = () => {
  const { sideBarOpen} = useContext(AllStateContext);
  return (
    <aside
      className={`${
        !sideBarOpen
          ? "md:w-20 hidden  md:block  min-h-screen z-50 dark:bg-darkSec fixed"
          : "md:w-[240px] hidden md:block  min-h-screen z-50 dark:bg-darkSec fixed"
      }`}
    >
      <TopSideBar />
    </aside>
  );
};

export default Sidebar;
