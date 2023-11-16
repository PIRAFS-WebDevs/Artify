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
    path: "/dashboard/admin/shops",
    icon: <AiOutlineShop />,
  },
  {
    title: "My Shops",
    path: "/dashboard/admin/my-shops",
    icon: <AiTwotoneShop />,
  },
  {
    title: "Products",
    path: "/dashboard/admin/products",
    icon: <BsBox />,
  },
  {
    title: "Layouts Type",
    path: "/dashboard/admin/layouts-type",
    icon: <RiLayoutFill />,
  },
  {
    title: "Categories",
    path: "/dashboard/admin/categories",
    icon: <BsBoxes />,
  },
  {
    title: "Tags",
    path: "/dashboard/admin/tags",
    icon: <AiOutlineTags />,
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: <BsBox2 />,
  },
  {
    title: "Users",
    path: "/dashboard/admin/users",
    icon: <FiUsers />,
  },
  {
    title: "Taxes",
    path: "/dashboard/admin/taxes",
    icon: <RiSecurePaymentLine />,
  },
  {
    title: "Withdrawals",
    path: "/dashboard/admin/withdrawals",
    icon: <MdPublishedWithChanges />,
  },
  {
    title: "Questions",
    path: "/dashboard/admin/questions",
    icon: <BsQuestionSquare />,
  },
  {
    title: "Reviews",
    path: "/dashboard/admin/reviews",
    icon: <MdOutlineReviews />,
  },
  {
    title: "Settings",
    path: "/dashboard/admin/settings",
    icon: <IoSettingsOutline />,
  },
];

export default adminSideNav;
