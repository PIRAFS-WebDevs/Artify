"use client";
import React, { useContext } from "react";

import AdminSideNavLink from "./AdminNavLink";
import adminSideNav from "@/data/AdminSideNav";
import AllStateContext from "@/context/AllStateContext";

const AdminSideBar = () => {
  const { adminBarOpen, setAdminBarOpen } = useContext(AllStateContext);
  console.log(
    "🚀 ~ file: AdminSideBar.jsx:10 ~ AdminSideBar ~ adminBarOpen:",
    adminBarOpen
  );

  return (
    <aside
      className={`${
        !adminBarOpen
          ? "  hidden lg:block  min-h-screen "
          : " min-h-screen  z-50 dark:bg-dark-400 fixed"
      } `}
    >
      <div>
        {adminSideNav.map((data, index) => (
          <div key={index}>
            <AdminSideNavLink
              exact={data?.path === "/"}
              activeClassName="text-white"
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
