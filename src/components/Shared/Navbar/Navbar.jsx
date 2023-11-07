import Image from "next/image";
import Link from "next/link";

// icons
import { AiOutlineMenu, AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaMoon, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="bg-darkSec text-darkNormal">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <AiOutlineMenu size={"1.5rem"} />
          <Link href={"/"} className="text-xl font-medium text-white">
            <Image/>
          </Link>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <AiOutlineSearch size={"1.5rem"} className="hidden md:block" />
          <FaMoon size={"1.2rem"} />

          <div className="relative hidden md:block">
            <FaShoppingBag size={"1.2rem"} />
            <span className="absolute px-1 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
              0
            </span>
          </div>

          {/* login button */}
          <LoginButton />

          <FaUserCircle size={"1.5rem"} />
        </div>
      </div>

      {/* mobile nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around py-4 sm:hidden bg-darkSec">
        <AiFillHome size={"1.5rem"} />
        <AiOutlineSearch size={"1.5rem"} />

        <div className="relative">
          <FaShoppingBag size={"1.5rem"} />
          <span className="absolute px-1 text-sm text-white rounded-full -top-2 -right-2 bg-primary">
            0
          </span>
        </div>

        <AiOutlineMenu size={"1.5rem"} />
      </div>
    </nav>
  );
};

export default Navbar;
