import React from "react";
import TopSideBar from "./TopSideBar";

const Sidebar = () => {
  return (
    <aside className="hidden xl:block xl:w-[240px] min-h-screen z-50 dark:bg-darkSec fixed">
      <TopSideBar />
    </aside>
  );
};

export default Sidebar;
