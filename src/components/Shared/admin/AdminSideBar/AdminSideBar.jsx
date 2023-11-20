"use client";
import React, { useContext } from "react";

import AdminSideNavLink from "./AdminNavLink";
import adminSideNav from "@/data/AdminSideNav";
import AllStateContext from "@/context/AllStateContext";

const AdminSideBar = () => {
  const { adminBarOpen, setAdminBarOpen } = useContext(AllStateContext);

  return (
    <aside
      className={`${
        !adminBarOpen
          ? " lg:w-[15%] dark:bg-dark-400  fixed  scrollbar text-xs hidden lg:block  top-[3.9rem] z-50 bottom-0  overflow-y-auto"
          : " lg:w-[15%]  fixed scrollbar text-xs  z-50 dark:bg-dark-400  top-[3.9rem] bottom-0   overflow-y-auto scrollbar"
      } `}
    >
      <div>
        {adminSideNav.map((data, index) => (
          <div key={index}>
            <AdminSideNavLink
              exact={"/"}
              activeClassName="text-white "
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
