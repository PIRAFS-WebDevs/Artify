"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ sidebarData }) => {
  const { sideBarOpen } = useAllValueContext();

  return (
    <aside className="fixed hidden min-h-screen overflow-y-auto border-t border-r md:block bg-light-200 dark:bg-dark-400 border-light-300 dark:border-dark-400 w-[14rem]">
      <div className="my-2">
        {sidebarData.map((data, index) => (
          <div key={index}>
            <SidebarLink href={data.path} icon={data.icon} title={data.title} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
