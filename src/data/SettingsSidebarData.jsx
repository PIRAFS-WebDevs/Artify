// icons
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";
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
  },
  {
    name: "Purchases",
    icon: <HiShoppingBag size={"1.25rem"} />,
  },
  {
    name: "My Cards",
    icon: <FaWallet size={"1.25rem"} />,
  },
  {
    name: "My Wishlist",
    icon: <AiFillHeart size={"1.25rem"} />,
  },
  {
    name: "My Reports",
    icon: <BiErrorCircle size={"1.25rem"} />,
  },
  {
    name: "My Question",
    icon: <BiMessageRoundedError size={"1.25rem"} />,
  },
  {
    name: "Password",
    icon: <BiSolidLock size={"1.25rem"} />,
  },
  {
    name: "Logout",
    icon: <BiLogOut size={"1.25rem"} />,
  },
];
