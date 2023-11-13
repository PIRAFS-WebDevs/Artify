"use client";

import AllStateContext from "@/context/AllStateContext";
import { useContext } from "react";
import {
  AiFillHome,
  AiOutlineFileSearch,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaMoon, FaShoppingBag } from "react-icons/fa";
import LoginButton from "../../Navbar/LoginButton";
import Link from "next/link";
import Image from "next/image";

const AdminNavbar = () => {
  const { adminBarOpen, setAdminBarOpen } = useContext(AllStateContext);

  return (
    <nav className="dark:bg-dark-400 dark:text-dark-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center md:gap-6">
          <button
            onClick={() => {
              setAdminBarOpen(!adminBarOpen);
            }}
          >
            <AiOutlineMenu
              className="cursor-pointer lg:hidden"
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
          <AiOutlineSearch size={"1.5rem"} className="hidden md:block" />
          <button>
            <FaMoon size={"1.2rem"} />
          </button>

          <Link
            href={"/register"}
            className="hidden px-8 py-2 dark:text-white transition-all rounded-md bg-primary md:block hover:bg-primarySec active:scale-95"
          >
            Register
          </Link>

          {/* login button */}
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
