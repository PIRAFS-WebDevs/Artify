"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import AuthContext from "@/context/AuthContext";
import SearchModal from "@/components/Home/SearchModal/SearchModal";
import Cart from "@/components/Home/Cart/Cart";
import UserDropdown from "../HomeNavbar/UserDropdown";
import LoginButton from "../HomeNavbar/LoginButton";
import MobileNavbar from "../HomeNavbar/MobileNavbar";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaShoppingBag } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const RootNavbar = () => {
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

  const dark = true;

  // useEffect(() => {
  //   if (user?.email) {
  //     (async () => {
  //       const data = await getUserByEmail(user?.email);
  //       setFindUser(data?.data);
  //     })();
  //   }
  // }, [user]);

  return (
    <nav className="sticky inset-x-0 top-0 z-[80] bg-white dark:bg-dark-400 dark:text-dark-100">
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
              className="hidden cursor-pointer md:block hover:text-white"
            />
          </button>

          {/* search modal */}
          <SearchModal searchShow={searchShow} setSearchShow={setSearchShow} />

          {/* theme button */}
          <button className="hover:text-white">
            {dark ? <FaMoon size={"1.2rem"} /> : <BsSunFill size={"1.2rem"} />}
          </button>

          {/* cart button */}
          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag size={"1.2rem"} className="hover:text-white" />
              <span className="absolute w-5 h-5 text-sm rounded-full dark:text-white -top-2 -right-2 bg-primary">
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
          cartOpen && "hidden"
        }`}
      >
        <AiFillHome size={"1.5rem"} className="hover:text-white" />
        <AiOutlineSearch
          onClick={() => setSearchShow(true)}
          size={"1.5rem"}
          className="hover:text-white"
        />

        <div className="relative">
          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-white"
          >
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
          <AiOutlineMenu size={"1.5rem"} className="hover:text-white" />
        </button>

        {/* mobile sidebar */}
        <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </nav>
  );
};

export default RootNavbar;
