// icons
import { AiFillHome, AiFillLike, AiFillAppstore } from "react-icons/ai";
import { MdExplore, MdFeedback } from "react-icons/md";
import { BsBoxFill, BsCodeSlash, BsChatLeftTextFill } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoHelpOutline, IoSettingsSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";

const homeSidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <MdExplore />,
  },
  {
    title: "Popular Products",
    path: "/popular-products",
    icon: <BsBoxFill />,
  },
  {
    title: "Software",
    path: "/software",
    icon: <AiFillAppstore />,
  },
  {
    title: "Application",
    path: "/application",
    icon: <BsCodeSlash />,
  },
  {
    title: "Marketplace",
    path: "/market-place",
    icon: <FaOpencart />,
  },
  {
    title: "Recommendation",
    path: "/recommendation",
    icon: <AiFillLike />,
  },
  {
    title: "Feed",
    path: "/feed.",
    icon: <MdFeedback />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <BiSolidUserDetail />,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <BsChatLeftTextFill />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoHelpOutline />,
  },
  {
    title: "Settings",
    path: "/profile",
    icon: <IoSettingsSharp />,
  },
];

export default homeSidebarData;
