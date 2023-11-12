"use client";

import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const Dropdown = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-center text-dark-100">
//       <motion.div animate={open ? "open" : "closed"} className="relative">
//         <button
//           onClick={() => setOpen((pv) => !pv)}
//           className="p-3 rounded text-dark-100 border border-dark-200"
//         >
//           <span className="text-sm">Profile</span>
//           <motion.span variants={iconVariants}>
//             <FiChevronDown />
//           </motion.span>
//         </button>

//         <motion.ul
//           initial={wrapperVariants.closed}
//           variants={wrapperVariants}
//           style={{ originY: "top", translateX: "-50%" }}
//           className="flex flex-col gap-2 p-2 rounded bg-dark-200 shadow absolute top-[120%] left-[-100%] w-48 overflow-hidden"
//         >
//           {settingsSidebarData.map((e, i) => (
//             <Link
//               href={`${e.path}`}
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-2 w-full p-2 text-xs rounded hover:bg-dark-300 text-white transition-all cursor-pointer"
//             >
//               {e.icon}
//               <span>{e.name}</span>
//             </Link>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </div>
//   );
// };

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
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
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default DropDown;

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

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
