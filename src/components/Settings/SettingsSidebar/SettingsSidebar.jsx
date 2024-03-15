"use client";

import { settingsSidebarData } from "@/data/SettingsSidebarData";
import { useAuthContext } from "@/hooks/useAuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import SettingsDropdown from "./SettingsDropdown";

const SettingsSidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuthContext();

  return (
    <div className="w-full md:w-[280px] md:border-r dark:border-dark-200">
      {settingsSidebarData.map((data, i) => {
        const { name, icon, path } = data;

        return (
          <Link
            href={`${path}`}
            key={i}
            className={`hidden md:flex items-center gap-4 py-4 px-6 dark:text-dark-100 text-dark-100 hover:text-dark-500 dark:hover:text-light-100 cursor-pointer w-full select-none ${
              pathname === path &&
              "dark:bg-dark-300 bg-light-500 dark:text-light-100 text-dark-500"
            }`}
          >
            {icon}
            <p className="text-sm">{name}</p>
          </Link>
        );
      })}

      <button
        onClick={() => logout()}
        className="items-center hidden w-full gap-4 px-6 py-4 cursor-pointer select-none md:flex dark:text-dark-100 text-dark-100 hover:text-dark-500 dark:hover:text-light-100"
      >
        <BiLogOut size={"1.25rem"} />
        <p className="text-sm">Logout</p>
      </button>

      <div className="block md:hidden">
        <SettingsDropdown />
      </div>
    </div>
  );
};

export default SettingsSidebar;
