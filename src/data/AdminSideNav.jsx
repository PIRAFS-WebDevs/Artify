import { AiOutlineTags } from "react-icons/ai";
import { BsBox, BsBox2, BsBoxes, BsQuestionSquare } from "react-icons/bs";
import { FiLayout, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";

const adminSideNav = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardLine />,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: <BsBox />,
  },
  {
    title: "Layouts",
    path: "/dashboard/layouts",
    icon: <FiLayout />,
  },
  {
    title: "Categories",
    path: "/dashboard/categories",
    icon: <BsBoxes />,
  },
  {
    title: "Tags",
    path: "/dashboard/tags",
    icon: <AiOutlineTags />,
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: <BsBox2 />,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <FiUsers />,
  },
  {
    title: "Questions",
    path: "/dashboard/questions",
    icon: <BsQuestionSquare />,
  },
  {
    title: "Reviews",
    path: "/dashboard/reviews",
    icon: <MdOutlineReviews />,
  },
  {
    title: "Settings",
    path: "/profile",
    icon: <IoSettingsOutline />,
  },
];

export default adminSideNav;
