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
            ? "md:max-w-fit hidden md:block min-h-screen z-40 dark:bg-dark-400 fixed overflow-y-auto"
            : "md:w-[240px] hidden md:block min-h-screen z-40 dark:bg-dark-400 fixed overflow-y-auto"
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

      <aside
        className={`${
          mobileView
            ? "right-0 w-[240px] min-h-screen md:hidden z-20 dark:bg-dark-400 fixed"
            : "hidden "
        }  `}
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
    </>
  );
};

export default HomeSideBar;
