import { settingsSidebarData } from "@/data/SettingsSidebarData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const UserDropdown = ({ logout, user }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <motion.div
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
      className="relative z-10"
    >
      {user ? (
        user.photoURL ? (
          <Image
            src={user.photoURL}
            width={200}
            height={200}
            onClick={() => setOpen((pv) => !pv)}
            className="flex justify-center items-center rounded-full w-[1.7rem] h-[1.7rem] bg-dark-100 text-dark-500 font-semibold cursor-pointer select-none"
          />
        ) : (
          <h1
            onClick={() => setOpen((pv) => !pv)}
            className="flex justify-center items-center rounded-full w-[1.7rem] h-[1.7rem] bg-dark-100 hover:bg-white text-dark-500 font-semibold cursor-pointer select-none"
          >
            {user.displayName[0]}
          </h1>
        )
      ) : (
        <button className="cursor-pointer">
          <FaUserCircle onClick={() => setOpen((pv) => !pv)} size={"1.6rem"} />
        </button>
      )}

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col rounded-sm bg-white dark:bg-dark-400 dark:text-gray-200 shadow-2xl absolute top-[160%] left-[-280%] w-52 overflow-hidden"
      >
        {settingsSidebarData.map((e, i) => (
          <Link href={`${e.path}`} key={i}>
            <motion.li
              variants={itemVariants}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 w-full py-3 px-4 text-xs whitespace-nowrap hover:bg-gray-200 dark:hover:bg-dark-200 text-dark-300 dark:text-light-300  transition-all cursor-pointer ${
                pathname === e.path && "dark:bg-dark-200 bg-gray-200"
              }`}
            >
              <motion.span>{e.icon}</motion.span>
              <span>{e.name}</span>
            </motion.li>
          </Link>
        ))}
        <motion.button
          variants={itemVariants}
          onClick={() => logout()}
          className="flex items-center w-full gap-2 px-4 py-3 text-xs transition-all cursor-pointer whitespace-nowrap hover:bg-gray-200 dark:hover:bg-dark-200 text-dark-300 dark:text-light-300"
        >
          <BiLogOut />
          <motion.p className="text-xs">Logout</motion.p>
        </motion.button>
      </motion.ul>
    </motion.div>
  );
};

export default UserDropdown;

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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
