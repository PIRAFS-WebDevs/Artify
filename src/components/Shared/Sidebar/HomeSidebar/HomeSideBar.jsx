"use client";

import homeSidebarData from "@/data/homeSidebarData";
import HomeSidebarLink from "./HomeSidebarLink";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";

const HomeSideBar = () => {
  const { sideBarOpen, mobileView } = useContext(AllStateContext);

  return (
    <>
      <aside
        className={`${
          !sideBarOpen
            ? "md:w-16 hidden md:block min-h-screen z-40 dark:bg-dark-400 fixed"
            : "md:w-[240px] hidden md:block min-h-screen z-40 dark:bg-dark-400 fixed"
        } `}
      >
        {homeSidebarData.map((data, index) => (
          <div key={index}>
            <HomeSidebarLink
              href={data.path}
              icon={data.icon}
              title={data.title}
            />
          </div>
        ))}
      </aside>

      {/* mobile view */}

      {/* <aside
        className={`${
          mobileView
            ? "right-0 w-[240px] min-h-screen md:hidden z-20 dark:bg-dark-400 fixed"
            : "hidden "
        }  `}
      >
        <TopSideBar />
      </aside> */}
    </>
  );
};

export default HomeSideBar;
