"use client";

import navData from "@/data/SideNavData";

import SideNavLink from "../NavLink/SideNavLink";

const TopSideBar = () => {
  return (
    <div>
      {navData.map((data, index) => (
        <div key={index}>
          <SideNavLink
            exact={data?.path === "/"}
            activeClassName="text-white"
            href={data?.path}
            icon={data?.icon}
            title={data?.title}
          />
        </div>
      ))}
    </div>
  );
};

export default TopSideBar;
