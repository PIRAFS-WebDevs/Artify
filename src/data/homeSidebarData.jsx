// icons
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelp, IoMdInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdArticle, MdExplore } from "react-icons/md";

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
    title: "Article",
    path: "/article",
    icon: <MdArticle />,
  },
  {
    title: "Marketplace",
    path: "/market-place",
    icon: <FaCartShopping />,
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
    title: "Settings",
    path: "/profile",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoMdHelp />,
  },
  {
    title: "About Us",
    path: "/about-us",
    icon: <IoMdInformationCircleOutline />,
  },
];

export default homeSidebarData;
