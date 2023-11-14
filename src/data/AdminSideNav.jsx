import { AiOutlineShop, AiOutlineTags, AiTwotoneShop } from "react-icons/ai";
import { BsBox, BsBox2, BsBoxes, BsQuestionSquare } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineReviews, MdPublishedWithChanges } from "react-icons/md";
import {
  RiDashboardLine,
  RiLayoutFill,
  RiSecurePaymentLine,
} from "react-icons/ri";

const adminSideNav = [
  {
    title: "Dashboard",
    path: "/dashboard/admin",
    icon: <RiDashboardLine />,
  },
  {
    title: "Shops",
    path: "/dashboard/shops",
    icon: <AiOutlineShop />,
  },
  {
    title: "My Shops",
    path: "/dashboard/my-shops",
    icon: <AiTwotoneShop />,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: <BsBox />,
  },
  {
    title: "Layouts Type",
    path: "/dashboard/layouts-type",
    icon: <RiLayoutFill />,
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
    title: "Taxes",
    path: "/dashboard/taxes",
    icon: <RiSecurePaymentLine />,
  },
  {
    title: "Withdrawals",
    path: "/dashboard/withdrawals",
    icon: <MdPublishedWithChanges />,
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
    path: "/dashboard/settings",
    icon: <IoSettingsOutline />,
  },
];

export default adminSideNav;
