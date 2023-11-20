"use client";
import React, { useContext } from "react";
import TopSideBar from "./TopSideBar";
import AllStateContext from "@/context/AllStateContext";

const Sidebar = () => {
  const { sideBarOpen, mobileView } = useContext(AllStateContext);
  return (
    <>
      <aside
        className={`${
          !sideBarOpen
            ? "md:w-16 hidden md:block   min-h-screen z-50 dark:bg-dark-400 fixed"
            : "md:w-[240px] hidden md:block min-h-screen z-50 dark:bg-dark-400 fixed"
        } `}
      >
        <TopSideBar />
      </aside>
      <aside
        className={`${
          mobileView
            ? "right-0 w-[240px] min-h-screen md:hidden z-20 dark:bg-dark-400 fixed"
            : "hidden "
        }  `}
      >
        <TopSideBar />
      </aside>
    </>
  );
};

export default Sidebar;
