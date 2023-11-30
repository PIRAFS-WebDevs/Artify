"use client";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ sidebarData }) => {
  const { sideBarOpen } = useContext(AllStateContext);

  return (
    <>
      <aside
        className={`hidden md:block min-h-screen bg-light-200 dark:bg-dark-400 fixed overflow-y-auto border-t border-r border-light-300 dark:border-dark-400 ${
          !sideBarOpen ? "md:max-w-fit" : "md:w-[240px]"
        } `}
      >
        <div className="my-2">
          {sidebarData.map((data, index) => (
            <div key={index}>
              <SidebarLink
                href={data.path}
                icon={data.icon}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
