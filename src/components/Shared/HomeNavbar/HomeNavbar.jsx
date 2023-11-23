"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import AllStateContext from "@/context/AllStateContext";
import AuthContext from "@/context/AuthContext";
import UserDropdown from "./UserDropdown";
import { getUserByEmail } from "@/utils/api/user";
import SearchButton from "./SearchButton";
import MobileNavbar from "./MobileNavbar";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaShoppingBag } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const HomeNavbar = () => {
  const [FindUser, setFindUser] = useState([]);
  const [dark, setDark] = useState(true);

  const { mobileView, setMobileView, setCartOpen } =
    useContext(AllStateContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      (async () => {
        const data = await getUserByEmail(user?.email);
        setFindUser(data?.data);
      })();
    }
  }, [user]);

  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-white dark:bg-dark-400 dark:text-dark-100">
      <div className="flex items-center justify-between h-20 px-6">
        <div className="flex items-center md:gap-6">
          <Link href={"/"} className={`md:ml-10`}>
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

        <div className="flex items-center gap-6 md:gap-10">
          {/* search button */}
          <SearchButton />

          <button className="hover:text-white" onClick={() => setDark(!dark)}>
            {dark ? <FaMoon size={"1.2rem"} /> : <BsSunFill size={"1.2rem"} />}
          </button>

          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag size={"1.2rem"} className="hover:text-white" />
              <span className="absolute px-1 text-sm rounded-full dark:text-white -top-2 -right-2 bg-primary">
                0
              </span>
            </button>
          </div>

          {!user ? (
            <Link
              href={"/register"}
              className="hidden px-6 py-2 text-sm font-semibold transition-all rounded dark:text-white bg-primary md:block hover:bg-primarySec active:scale-95"
            >
              Register
            </Link>
          ) : (
            <Link
              href={"/dashboard/admin"}
              className="hidden px-6 py-2 text-sm font-semibold transition-all rounded dark:text-white bg-primary md:block hover:bg-primarySec active:scale-95"
            >
              Dashboard
            </Link>
          )}

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
            <span className="absolute px-1 text-sm rounded-full select-none dark:text-white -top-2 -right-2 bg-primary">
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

        {/* mobile sidebar */}
        <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </nav>
  );
};

export default HomeNavbar;
