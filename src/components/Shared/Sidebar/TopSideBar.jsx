import React from "react";
import navData from "@/data/SideNavData";
import Link from "next/link";

const TopSideBar = () => {
  console.log(navData);
  return (
    <div>
      {navData.map((data, index) => (
        <div key={index}>
          <Link
            href={data?.path}
            className="w-full py-5 flex lg:pl-5 lg:gap-5 group items-center justify-center lg:justify-normal dark:hover:text-white text-warmGray-300 hover:text-white hover:bg-darkPrimary"
          >
            <span className="text-xl dark:text-darkNormal group-hover:text-white">
              {data?.icon}
            </span>{" "}
            <span className="text-sm hidden lg:inline-block  hover:text-white hover:bg-primary">
              {data?.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopSideBar;
