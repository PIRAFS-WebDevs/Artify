"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import AuthContext from "@/context/AuthContext";
import SearchModal from "@/components/Home/SearchModal/SearchModal";
import Cart from "@/components/Home/Cart/Cart";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import LoginButton from "../HomeNavbar/LoginButton";
import UserDropdown from "../HomeNavbar/UserDropdown";
import MobileNavbar from "../HomeNavbar/MobileNavbar";

const HomeNavbar = () => {
  const {
    searchShow,
    setSearchShow,
    mobileView,
    setMobileView,
    cartOpen,
    setCartOpen,
    totalCartItem,
  } = useContext(AllStateContext);

  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="inset-x-0 -top-[.1px] z-50 bg-white sticky dark:bg-dark-400 text-dark-100">
      <div className="flex items-center justify-between h-20 px-6">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src="/assets/logo/waresun.png"
            height={100}
            width={100}
            priority={true}
            alt="logo"
            className={`w-28`}
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          {/* search button */}
          <button onClick={() => setSearchShow(true)}>
            <AiOutlineSearch
              size={"1.5rem"}
              className="hidden cursor-pointer md:block hover:text-gray-400 dark:hover:text-white"
            />
          </button>

          {/* search modal */}
          <SearchModal searchShow={searchShow} setSearchShow={setSearchShow} />

          {/* theme button */}
          <ThemeSwitcher />

          {/* cart button */}
          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag
                size={"1.2rem"}
                className="hover:text-gray-400 dark:hover:text-white"
              />
              <span className="absolute w-5 h-5 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
                <span>{totalCartItem?.length}</span>
              </span>
            </button>
          </div>
          {/* cart sidebar */}
          <Cart />

          {/* dashboard button */}
          {!user ? (
            <Link
              href={"/register"}
              className="hidden px-6 py-2 text-sm font-semibold text-white transition-all rounded bg-primary md:block hover:bg-primarySec active:scale-95"
            >
              Register
            </Link>
          ) : (
            <Link
              href={"/dashboard/admin"}
              className="hidden px-6 py-2 text-sm font-semibold text-white transition-all rounded bg-primary md:block hover:bg-primarySec active:scale-95"
            >
              Dashboard
            </Link>
          )}

          {/* login button */}
          {user ? (
            <UserDropdown user={user} logout={logout} />
          ) : (
            <LoginButton />
          )}
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 md:hidden dark:bg-dark-400 ${
          (cartOpen || searchShow) && "hidden"
        }`}
      >
        <AiFillHome
          size={"1.5rem"}
          className="hover:text-gray-400 dark:hover:text-white"
        />
        <AiOutlineSearch
          onClick={() => setSearchShow(true)}
          size={"1.5rem"}
          className="hover:text-gray-400 dark:hover:text-white"
        />

        <div className="relative">
          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-gray-400 dark:hover:text-white"
          >
            <FaShoppingBag size={"1.2rem"} />
            <span className="absolute w-5 h-5 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
              <span>{totalCartItem?.length}</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          <AiOutlineMenu
            size={"1.5rem"}
            className="hover:text-gray-400 dark:hover:text-white"
          />
        </button>

        {/* mobile sidebar */}
        <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </nav>
  );
};

export default HomeNavbar;
