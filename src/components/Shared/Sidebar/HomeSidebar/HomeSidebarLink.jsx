import AllStateContext from "@/context/AllStateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const HomeSidebarLink = ({ href, title, icon }) => {
  const { sideBarOpen, mobileView, setMobileView } =
    useContext(AllStateContext);
  const path = usePathname();

  return (
    <div
      className={`dark:hover:text-white font-medium text-dark-100 hover:text-dark-500 dark:hover:bg-dark-300 hover:bg-light-300 ${
        path === href
          ? "dark:text-white dark:bg-dark-300 text-dark-500 bg-light-400"
          : "dark:text-gray-300"
      }`}
    >
      <Link onClick={() => setMobileView(false)} href={href}>
        <div
          className={`w-full py-3 flex gap-4 ${
            sideBarOpen && "justify-start"
          } items-center px-6`}
        >
          <span>{icon}</span>

          <span
            className={`text-sm ${
              sideBarOpen ? "hidden md:inline-block" : "hidden"
            } ${mobileView && "inline-block"}`}
          >
            {title}
          </span>
          <span
            className={`text-sm ${
              mobileView ? "inline-block md:hidden" : "hidden"
            }`}
          >
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default HomeSidebarLink;
