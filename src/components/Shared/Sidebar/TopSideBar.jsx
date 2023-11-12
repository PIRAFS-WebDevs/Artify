"use client";
import AllStateContext from "@/context/AllStateContext";
import navData from "@/data/SideNavData";

import Link from "next/link";
import { useContext } from "react";

const TopSideBar = () => {
  const { sideBarOpen, setSideBarOpen, mobileView } =
    useContext(AllStateContext);

  return (
    <div>
      {navData.map((data, index) => (
        <div key={index}>
          <Link
            href={data?.path}
            className="w-full py-5 flex xl:pl-6 gap-5 pl-6 group items-center  justify-normal dark:hover:dark:text-white dark:text-dark-100 hover:dark:text-white hover:dark:bg-dark-500"
          >
            <span className="text-xl dark:text-dark-100 group-hover:dark:text-white">
              {data?.icon}
            </span>
            <span
              className={`${
                sideBarOpen
                  ? "text-sm hidden md:inline-block  hover:dark:text-white"
                  : "hidden"
              } ${mobileView && "inline-block"}`}
            >
              {data?.title}
            </span>
            <span
              className={`${
                mobileView
                  ? "text-sm  inline-block md:hidden hover:dark:text-white"
                  : "hidden"
              } `}
            >
              {data?.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopSideBar;
