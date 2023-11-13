"use client";

import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import { settingsSidebarData } from "@/data/SettingsSidebarData";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center text-dark-100">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="p-3 rounded text-dark-100 border border-dark-200"
        >
          <span className="text-sm">Profile</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded bg-dark-200 shadow absolute top-[120%] left-[-100%] w-48 overflow-hidden"
        >
          {settingsSidebarData.map((e, i) => (
            <motion.li
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 w-full p-2 text-xs rounded hover:bg-dark-300 text-white transition-all cursor-pointer"
            >
              <span>Order Details</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Dropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};
