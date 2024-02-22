// icons
import { AiFillAppstore, AiFillHome, AiFillLike } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelp, IoMdInformationCircleOutline } from "react-icons/io";
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
