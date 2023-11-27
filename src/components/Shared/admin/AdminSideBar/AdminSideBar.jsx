"use client";
import React, { useContext } from "react";

import AdminSideNavLink from "./AdminNavLink";
import adminSideNav from "@/data/AdminSideNav";
import AllStateContext from "@/context/AllStateContext";

const AdminSideBar = () => {
  const { adminBarOpen, setAdminBarOpen } = useContext(AllStateContext);

  return (
    <aside
      className={`lg:w-[15%] fixed bottom-0 z-50  overflow-y-auto  top-[3.9rem] w-[200px] dark:bg-dark-400 scrollbar text-xs${
        !adminBarOpen
          ? " hidden lg:block "
          : " "
      } `}
    >
      <div>
        {adminSideNav.map((data, index) => (
          <div key={index}>
            <AdminSideNavLink
              href={data?.path}
              icon={data?.icon}
              title={data?.title}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AdminSideBar;
