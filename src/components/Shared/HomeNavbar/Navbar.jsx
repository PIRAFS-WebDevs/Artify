"use client";

// icons
import { AiFillHome, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";

// components
import Cart from "@/components/Home/Cart/Cart";
import SearchModal from "@/components/Home/SearchModal/SearchModal";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import MobileNavbar from "./MobileNavbar";
import UserDropdown from "./UserDropdown";

// hooks
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginButton from "./LoginButton";

// next utils
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const {
    sidebarOpen,
    setSidebarOpen,
    setSearchValue,
    mobileView,
    setMobileView,
    totalCartItem,
  } = useAllValueContext();
  const { user, logout } = useAuthContext();
  const pathname = usePathname();

  const hideNavbarRoutes = [
    "/register",
    "/about-us",
    "/help",
    "/licensing",
    "/privacy",
    "/terms",
    "/profile",
    "/password",
    "/profile",
    "/purchase",
    "/question",
    "/wishlist",
  ];

  return (
    <nav className="inset-x-0 -top-[.1px] z-50 bg-white sticky dark:bg-dark-400 text-dark-100">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center md:gap-6">
          {/* menu button */}
          {!hideNavbarRoutes.includes(pathname) ? (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`hidden cursor-pointer hover:text-light-500 dark:hover:text-white md:block`}
            >
              {sidebarOpen ? (
                <HiOutlineMenu size={"1.5rem"} />
              ) : (
                <HiOutlineMenuAlt1 size={"1.5rem"} />
              )}
            </button>
          ) : (
            <></>
          )}

          {/* logo */}
          <Link href={"/"} className="flex h-16 ">
            <Image
              src="/assets/logo/artify.png"
              height={100}
              width={100}
              priority={true}
              alt="logo"
              className={`w-full`}
            />
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          {/* search button */}
          <button onClick={() => setSearchModal(true)}>
            <AiOutlineSearch
              size={"1.5rem"}
              className="hidden cursor-pointer md:block hover:text-light-500 dark:hover:text-white"
            />
          </button>

          {/* search modal */}
          <SearchModal
            searchModal={searchModal}
            setSearchModal={setSearchModal}
            setSearchValue={setSearchValue}
          />

          {/* theme button */}
          <ThemeSwitcher />

          {/* cart button */}
          <div className="relative hidden md:block">
            <button onClick={() => setCartOpen(true)}>
              <FaShoppingBag
                size={"1.2rem"}
                className="hover:text-light-500 dark:hover:text-white"
              />
              <span className="absolute w-5 h-5 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
                <span>{totalCartItem?.length}</span>
              </span>
            </button>
          </div>

          {/* cart sidebar */}
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />

          {/* dashboard button */}
          {!user ? (
            <Link
              href={"/register"}
              className="hidden px-5 py-1.5 text-sm font-semibold text-white transition-all rounded-sm bg-primary md:block hover:bg-primarySec active:scale-95"
            >
              Register
            </Link>
          ) : (
            <Link
              href={"/dashboard"}
              className="hidden px-5 py-1.5 text-sm font-semibold text-white transition-all rounded-sm bg-primary md:block hover:bg-primarySec active:scale-95"
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
        className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 md:hidden dark:bg-dark-400 bg-white ${
          (cartOpen || searchModal) && "hidden"
        }`}
      >
        <AiFillHome
          size={"1.5rem"}
          className="hover:text-light-500 dark:hover:text-white"
        />
        <AiOutlineSearch
          onClick={() => setSearchModal(true)}
          size={"1.5rem"}
          className="hover:text-light-500 dark:hover:text-white"
        />

        <div className="relative">
          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-light-500 dark:hover:text-white"
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
            className="hover:text-light-500 dark:hover:text-white"
          />
        </button>

        {/* mobile sidebar */}
        <MobileNavbar mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </nav>
  );
};

export default Navbar;
