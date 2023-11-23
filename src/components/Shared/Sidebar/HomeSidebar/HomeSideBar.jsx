"use client";

import homeSidebarData from "@/data/homeSidebarData";
import HomeSidebarLink from "./HomeSidebarLink";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const HomeSideBar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(AllStateContext);

  return (
    <>
      <aside
        className={`hidden md:block min-h-screen dark:bg-dark-400 fixed top-0 overflow-y-auto z-[60] ${
          !sideBarOpen ? "md:max-w-fit" : "md:w-[240px]"
        } `}
      >
        <div className="flex items-center h-20 gap-6 px-4">
          <button
            className="text-white"
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
          >
            {sideBarOpen ? (
              <HiOutlineMenu
                className="hidden cursor-pointer md:block hover:text-white"
                size={"1.5rem"}
              />
            ) : (
              <HiOutlineMenuAlt1
                className="hidden cursor-pointer md:block hover:text-white"
                size={"1.5rem"}
              />
            )}
          </button>
          <Link href={"/"} className={`${!sideBarOpen && "hidden"}`}>
            <Image
              src="/assets/logo/waresun.png"
              height={50}
              width={80}
              priority={true}
              alt="logo"
              className={`w-28`}
            />
          </Link>
        </div>
        <div className="">
          {homeSidebarData.map((data, index) => (
            <div key={index}>
              <HomeSidebarLink
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

export default HomeSideBar;
