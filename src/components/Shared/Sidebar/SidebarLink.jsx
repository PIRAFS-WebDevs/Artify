import { useAllValueContext } from "@/hooks/useAllValueContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ href, title, icon }) => {
  const { sidebarOpen, setSidebarOpen, mobileView, setMobileView } =
    useAllValueContext();

  const path = usePathname();

  return (
    <div
      className={`dark:hover:text-light-100 font-medium text-dark-300 dark:text-dark-100 hover:text-dark-500 dark:hover:bg-dark-300 hover:bg-light-300 ${
        path === href &&
        "dark:text-light-100 dark:bg-dark-300  text-dark-500 bg-light-400"
      }`}
    >
      <Link onClick={() => setMobileView(false)} href={href}>
        <div
          className={`w-full py-3 flex gap-4 ${
            sidebarOpen && "justify-start"
          } items-center px-6`}
        >
          <span>{icon}</span>

          <span
            className={`text-sm ${
              sidebarOpen ? "hidden md:inline-block" : "hidden"
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

export default SidebarLink;
