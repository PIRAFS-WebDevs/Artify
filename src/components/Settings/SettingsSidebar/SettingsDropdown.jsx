"use client";

import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settingsSidebarData } from "@/data/SettingsSidebarData";

const SettingsDropdown = () => {
  const [open, setDelOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="px-4 py-2">
      <motion.div animate={open ? "open" : "closed"} className="relative z-10">
        <button
          onClick={() => setDelOpen((pv) => !pv)}
          className="flex items-center justify-between py-2 px-4 rounded-md text-white bg-transparent border border-dark-100 transition-all w-full"
        >
          <span className="font-medium text-sm capitalize">
            {pathname.slice(1)}
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded bg-dark-400 text-white border border-dark-100 shadow absolute top-[120%] left-[50%] w-full overflow-hidden"
        >
          {settingsSidebarData.map((e, i) => (
            <Link href={`${e.path}`} key={i}>
              <motion.li
                variants={itemVariants}
                onClick={() => setDelOpen(false)}
                className={`flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded hover:bg-dark-200 text-dark-100 hover:text-white transition-all cursor-pointer ${
                  pathname === e.path && "text-white bg-dark-200"
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
