"use client";

import AllStateContext from "@/context/AllStateContext";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaUserCircle } from "react-icons/fa";

import { useAuthContext } from "@/hooks/useAuthContext";
import Image from "next/image";
import Link from "next/link";

const AdminNavbar = () => {
  const { adminBarOpen, setAdminBarOpen } = useContext(AllStateContext);
  const { user } = useAuthContext();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-400 dark:text-dark-100">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center ">
          <button
            onClick={() => {
              setAdminBarOpen(!adminBarOpen);
            }}
          >
            <AiOutlineMenu
              className="mr-5 cursor-pointer lg:hidden "
              size={"1.5rem"}
            />
          </button>
          <Link href={"/"}>
            <Image
              src="/assets/logo/waresun.png"
              height={50}
              width={80}
              priority={true}
              alt="logo"
              className="w-auto h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <button>
            <FaMoon size={"1.2rem"} />
          </button>

          {/* login button */}

          {user ? (
            user.photoURL ? (
              <img
                src={user.photoURL}
                className="flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-dark-100 text-dark-500 font-semibold cursor-pointer select-none"
              />
            ) : (
              <p className="flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-dark-100 text-dark-500 font-semibold cursor-pointer select-none">
                {user.displayName[0]}
              </p>
            )
          ) : (
            <FaUserCircle size={"1.5rem"} className="cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
