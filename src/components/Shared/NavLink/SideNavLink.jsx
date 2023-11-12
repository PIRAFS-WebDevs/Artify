import AllStateContext from "@/context/AllStateContext";
import ClassNames from "@/utils/ClassNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const SideNavLink = ({
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
          className={`w-full py-5 flex xl:pl-6 gap-5 pl-6 group items-center  justify-normal  `}
        >
          <span className="text-xl ">{icon}</span>
          <span
            className={`${
              sideBarOpen
                ? "text-sm hidden md:inline-block  "
                : "hidden"
            } ${mobileView && "inline-block"}`}
          >
            {title}
          </span>
          <span
            className={`${
              mobileView
                ? "text-sm  inline-block md:hidden"
                : "hidden"
            } `}
          >
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SideNavLink;
