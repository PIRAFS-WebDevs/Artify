"use client";
import Link from "next/link";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaShoppingBag } from "react-icons/fa";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";

const Navbar = () => {
  const {
    sideBarOpen,
    setSideBarOpen,
    mobileView,
    setMobileView,
    cartOpen,
    setCartOpen,
    theme,
    setTheme,
  } = useContext(AllStateContext);

  return (
    <nav className="bg-dark-400 text-dark-100 sticky top-0 z-50">
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
              width={120}
              alt="logo"
              className="w-auto h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <AiOutlineSearch size={"1.5rem"} className="hidden md:block" />
          <button onClick={() => setTheme("light")}>
            <FaMoon size={"1.2rem"} />
          </button>

          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag size={"1.2rem"} />
              <span className="absolute px-1 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
                0
              </span>
            </button>
          </div>

          <Link
            href={"/register"}
            className="hidden px-8 py-2 text-white transition-all rounded-md bg-primary md:block hover:bg-primarySec active:scale-95"
          >
            Register
          </Link>

          {/* login button */}
          <LoginButton />
        </div>
      </div>

      {/* mobile nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 md:hidden bg-dark-400">
        <AiFillHome size={"1.5rem"} />
        <AiOutlineSearch size={"1.5rem"} />

        <div className="relative">
          <button onClick={() => setCartOpen(true)}>
            <FaShoppingBag size={"1.2rem"} />
            <span className="absolute px-1 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
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
