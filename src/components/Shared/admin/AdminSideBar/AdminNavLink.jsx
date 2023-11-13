import AllStateContext from "@/context/AllStateContext";
import ClassNames from "@/utils/ClassNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const AdminSideNavLink = ({
  href,
  title,
  icon,
  activeClassName,
  exact = false,
  ...props
}) => {
  const { sideBarOpen, setSideBarOpen, mobileView } =
    useContext(AllStateContext);
  const path = usePathname();

  const active = exact ? path === href : path.startsWith(href);
  const classes = ClassNames(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <div className="dark:hover:text-white dark:hover:bg-dark-200 dark:text-dark-100">
      <Link href={href} {...props}>
        <div
          className={`w-full py-3 flex xl:pl-6 gap-5 pl-6 group items-center  justify-normal  `}
        >
          <span className="text-xm ">{icon}</span>
          <span className={``}>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideNavLink;
