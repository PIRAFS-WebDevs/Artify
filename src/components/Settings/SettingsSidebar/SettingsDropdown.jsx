"use client";

import { settingsSidebarData } from "@/data/SettingsSidebarData";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SettingsDropdown = () => {
  const [open, setDelOpen] = useState(false);
  const pathname = usePathname();
  const activeLink = settingsSidebarData.find((link) =>
    pathname.includes(link.name.toLowerCase())
  );

  return (
    <div className="px-4 py-2">
      <motion.div animate={open ? "open" : "closed"} className="relative z-10">
        <button
          onClick={() => setDelOpen((pv) => !pv)}
          className="flex items-center justify-between w-full px-4 py-2 transition-all bg-transparent border rounded-sm text-light-100 border-dark-300"
        >
          <span className="text-sm font-medium capitalize">
            {activeLink.name}
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 dark:bg-dark-400 text-light-100 border border-dark-300 shadow absolute rounded-sm top-[120%] left-[50%] w-full overflow-hidden"
        >
          {settingsSidebarData.map((e, i) => (
            <Link href={`${e.path}`} key={i}>
              <motion.li
                variants={itemVariants}
                onClick={() => setDelOpen(false)}
                className={`flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap hover:bg-dark-200 text-gray-300 hover:text-light-100 transition-all cursor-pointer ${
                  pathname === e.path && "text-light-100 bg-dark-200"
                }`}
              >
                <motion.span variants={actionIconVariants}>
                  {e.icon}
                </motion.span>
                <span>{e.name}</span>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default SettingsDropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    // transition: {
    //   when: "beforeChildren",
    //   staggerChildren: 0.1,
    // },
  },
  closed: {
    scaleY: 0,
    // transition: {
    //   when: "afterChildren",
    //   staggerChildren: 0.1,
    // },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    // y: 0,
    // transition: {
    //   when: "beforeChildren",
    // },
  },
  closed: {
    opacity: 0,
    // y: -15,
    // transition: {
    //   when: "afterChildren",
    // },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
