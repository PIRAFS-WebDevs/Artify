// icons
import { AiFillAppstore, AiFillHome, AiFillLike } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { FaCode, FaOpencart } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { MdExplore } from "react-icons/md";

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
    title: "Contact",
    path: "/contact",
    icon: <BiSolidUserDetail />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoMdHelp />,
  },
];

export default homeSidebarData;
