import { AiFillHome } from "react-icons/ai";
import {
  MdContacts,
  MdExplore,
  MdFeedback,
  MdSettingsApplications,
} from "react-icons/md";
import { SiJirasoftware } from "react-icons/si";
import { BiSolidReceipt } from "react-icons/bi";
import { TbHelpSquareFilled } from "react-icons/tb";
import { BsBoxFill, BsFillChatLeftDotsFill } from "react-icons/bs";
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
    icon: <SiJirasoftware />,
  },
  {
    title: "Application Solution",
    path: "/applicationSolution",
    icon: <MdSettingsApplications />,
  },
  {
    title: "Recommendation",
    path: "/recommendation",
    icon: <BiSolidReceipt />,
  },
  {
    title: "Feed",
    path: "/feed.",
    icon: <MdFeedback />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdContacts />,
  },
  {
    title: "Chatting",
    path: "/chatting",
    icon: <BsFillChatLeftDotsFill />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <TbHelpSquareFilled />,
  },
];

export default navData;
