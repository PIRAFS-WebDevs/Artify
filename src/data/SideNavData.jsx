import { AiFillHome, AiFillLike, AiFillAppstore } from "react-icons/ai";
import {
  MdExplore,
  MdFeedback,
} from "react-icons/md";
import {
  BsBoxFill,
  BsCodeSlash,
  BsChatLeftTextFill,
} from "react-icons/bs";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoHelpOutline } from "react-icons/io5";

const navData = [
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
    path: "/popularProducts",
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
];

export default navData;
