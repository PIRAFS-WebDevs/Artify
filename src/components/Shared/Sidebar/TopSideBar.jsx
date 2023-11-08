"use client";
import AllStateContext from "@/context/AllStateContext";
import navData from "@/data/SideNavData";

import Link from "next/link";
import { useContext } from "react";

const TopSideBar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(AllStateContext);

  return (
    <div>
      {navData.map((data, index) => (
        <div key={index}>
          <Link
            href={data?.path}
            className="w-full py-5 flex xl:pl-6 md:gap-5 md:pl-6 group items-center justify-center md:justify-normal dark:hover:text-white text-warmGray-300 hover:text-white hover:bg-darkPrimary"
          >
            <span className="text-xl dark:text-darkNormal group-hover:text-white">
              {data?.icon}
            </span>
            <span
              className={`${
                sideBarOpen
                  ? "text-sm hidden md:inline-block  hover:text-white"
                  : "hidden"
              }`}
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
