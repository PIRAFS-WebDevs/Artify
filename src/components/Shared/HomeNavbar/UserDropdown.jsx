import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { settingsSidebarData } from "@/data/SettingsSidebarData";
import { BiLogOut } from "react-icons/bi";

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
          <img
            src={user.photoURL}
            onClick={() => setOpen((pv) => !pv)}
            className="flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-dark-100 text-dark-500 font-semibold cursor-pointer select-none"
          />
        ) : (
          <p
            onClick={() => setOpen((pv) => !pv)}
            className="flex justify-center items-center rounded-full w-[2rem] h-[2rem] bg-dark-100 text-dark-500 font-semibold cursor-pointer select-none"
          >
            {user.displayName[0]}
          </p>
        )
      ) : (
        <button className="cursor-pointer hover:text-white">
          <FaUserCircle
            className="hover:text-white"
            onClick={() => setOpen((pv) => !pv)}
            size={"1.5rem"}
          />
        </button>
      )}

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col rounded bg-dark-400 text-gray-200 shadow absolute top-[130%] left-[-180%] w-48 overflow-hidden"
      >
        {settingsSidebarData.map((e, i) => (
          <Link href={`${e.path}`} key={i}>
            <motion.li
              variants={itemVariants}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 w-full py-3 px-4 text-xs whitespace-nowrap hover:bg-dark-200  transition-all cursor-pointer ${
                pathname === e.path && "bg-dark-200"
              }`}
            >
              <motion.span>{e.icon}</motion.span>
              <span>{e.name}</span>
            </motion.li>
          </Link>
        ))}
        <button
          onClick={() => logout()}
          className="flex items-center w-full gap-2 px-4 py-3 text-xs transition-all cursor-pointer select-none whitespace-nowrap hover:bg-dark-200"
        >
          <BiLogOut />
          <p className="text-xs">Logout</p>
        </button>
      </motion.ul>
    </motion.div>
  );
};

export default UserDropdown;

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
