"use client";
import Link from "next/link";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaShoppingBag } from "react-icons/fa";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import AuthContext from "@/context/AuthContext";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const {
    sideBarOpen,
    setSideBarOpen,
    mobileView,
    setMobileView,
    setCartOpen,
  } = useContext(AllStateContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="dark:bg-dark-400 dark:text-dark-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center md:gap-6">
          <button
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
          >
            <AiOutlineMenu
              className="cursor-pointer hidden md:block"
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

          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag size={"1.2rem"} />
              <span className="absolute px-1 text-sm dark:text-white rounded-full -top-2 -right-2 bg-primary">
                0
              </span>
            </button>
          </div>

          <Link
            href={"/register"}
            className="hidden px-8 py-2 dark:text-white transition-all rounded-md bg-primary md:block hover:bg-primarySec active:scale-95"
          >
            Register
          </Link>

          {/* login button */}
          {user ? <UserDropdown /> : <LoginButton />}
        </div>
      </div>

      {/* mobile nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 md:hidden dark:bg-dark-400">
        <AiFillHome size={"1.5rem"} />
        <AiOutlineSearch size={"1.5rem"} />

        <div className="relative">
          <button onClick={() => setCartOpen(true)}>
            <FaShoppingBag size={"1.2rem"} />
            <span className="absolute px-1 text-sm dark:text-white rounded-full -top-2 -right-2 bg-primary">
              0
            </span>
          </button>
        </div>

        <button
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          <AiOutlineMenu size={"1.5rem"} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
