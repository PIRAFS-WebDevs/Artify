import AllStateContext from "@/context/AllStateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SidebarLink = ({ href, title, icon }) => {
  const { sideBarOpen, mobileView, setMobileView, setSideBarOpen } =
    useContext(AllStateContext);

  const path = usePathname();

  return (
    <div
      className={`dark:hover:text-white font-medium text-[#4b4b4b] dark:text-dark-100 hover:text-dark-500 dark:hover:bg-dark-300 hover:bg-light-300 ${
        path === href &&
        "dark:text-white dark:bg-dark-300  text-dark-500 bg-light-400"
      }`}
    >
      <Link onClick={() => setMobileView(false)} href={href}>
        <div
          className={`w-full py-3 flex gap-4 ${
            sideBarOpen && "justify-start"
          } items-center px-6`}
        >
          <span>{icon}</span>

          <span
            className={`text-sm ${
              sideBarOpen ? "hidden md:inline-block" : "hidden"
            } ${mobileView && "inline-block"}`}
          >
            {title}
          </span>
          <span
            className={`text-sm ${
              mobileView ? "inline-block md:hidden" : "hidden"
            }`}
          >
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarLink;
