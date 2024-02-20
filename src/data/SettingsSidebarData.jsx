import { AiFillHeart } from "react-icons/ai";
import { BiMessageRoundedError, BiSolidLock } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

export const settingsSidebarData = [
  {
    name: "Profile",
    icon: <FaUserCircle />,
    path: "/profile",
  },
  {
    name: "Purchase",
    icon: <HiShoppingBag />,
    path: "/purchase",
  },
  {
    name: "My Wishlist",
    icon: <AiFillHeart />,
    path: "/wishlist",
  },
  {
    name: "My Question",
    icon: <BiMessageRoundedError />,
    path: "/question",
  },
  {
    name: "Password",
    icon: <BiSolidLock />,
    path: "/password",
  },
];
