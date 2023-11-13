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
    icon: <FaUserCircle size={"1.25rem"} />,
    path: "/profile",
  },
  {
    name: "Purchase",
    icon: <HiShoppingBag size={"1.25rem"} />,
    path: "/purchase",
  },
  // {
  //   name: "My Cards",
  //   icon: <FaWallet size={"1.25rem"} />,
  //   path: "/my-cards",
  // },
  {
    name: "My Wishlist",
    icon: <AiFillHeart size={"1.25rem"} />,
    path: "/wishlist",
  },
  {
    name: "Deposit",
    icon: <AiFillBank size={"1.25rem"} />,
    path: "/deposit",
  },
  // {
  //   name: "My Reports",
  //   icon: <BiErrorCircle size={"1.25rem"} />,
  //   path: "/reports",
  // },
  {
    name: "My Question",
    icon: <BiMessageRoundedError size={"1.25rem"} />,
    path: "/question",
  },
  {
    name: "Password",
    icon: <BiSolidLock size={"1.25rem"} />,
    path: "/password",
  },
];
