// icons
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { AiFillBank, AiFillHeart } from "react-icons/ai";
import {
  BiErrorCircle,
  BiMessageRoundedError,
  BiSolidLock,
  BiLogOut,
} from "react-icons/bi";

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
  // {
  //   name: "My Cards",
  //   icon: <FaWallet />,
  //   path: "/my-cards",
  // },
  {
    name: "My Wishlist",
    icon: <AiFillHeart />,
    path: "/wishlist",
  },
  {
    name: "Deposit",
    icon: <AiFillBank />,
    path: "/deposit",
  },
  // {
  //   name: "My Reports",
  //   icon: <BiErrorCircle />,
  //   path: "/reports",
  // },
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
