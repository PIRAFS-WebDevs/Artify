// icons
import { AiFillHome, AiFillLike, AiFillAppstore } from "react-icons/ai";
import { MdExplore, MdFeedback } from "react-icons/md";
import { BsBoxFill, BsChatLeftTextFill } from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaOpencart, FaCode } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

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
    icon: <FaCode />,
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
    path: "/feed",
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
    icon: <IoMdHelp />,
  },
];

export default homeSidebarData;
