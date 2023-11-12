"use client";

import { settingsSidebarData } from "@/data/SettingsSidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[280px] md:border-r border-dark-200">
      {settingsSidebarData.map((data, i) => {
        const { name, icon, path } = data;

        return (
          <Link
            href={`${path}`}
            key={i}
            className={`flex items-center gap-4 py-4 px-6 text-dark-100 hover:text-white cursor-pointer w-full select-none ${
              pathname === path && "bg-dark-300"
            }`}
          >
            {icon}
            <p className="text-dark-100 text-sm">{name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
