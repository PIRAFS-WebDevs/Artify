import AllStateContext from "@/context/AllStateContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const HomeSidebarLink = ({ href, title, icon }) => {
  const { sideBarOpen, mobileView } = useContext(AllStateContext);
  const path = usePathname();

  return (
    <div
      className={`hover:text-white hover:bg-dark-200 ${
        path === href ? "text-white bg-dark-200" : "text-dark-100"
      }`}
    >
      <Link href={href}>
        <div
          className={`w-full py-4 flex gap-4 ${
            sideBarOpen ? "justify-start" : "justify-center"
          } items-center px-6`}
        >
          <span>{icon}</span>

          {/* {sideBarOpen && (
            <span className="hidden text-sm md:inline-block">{title}</span>
          )} */}

          <span
            className={`${
              sideBarOpen ? "text-sm hidden md:inline-block" : "hidden"
            } ${mobileView && "inline-block"}`}
          >
            {title}
          </span>
          <span
            className={`${
              mobileView ? "text-sm inline-block md:hidden" : "hidden"
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
