"use client";

import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

const PurchaseDropdown = () => {
  const [open, setDelOpen] = useState(false);

  return (
    <div className="flex items-center justify-center text-dark-100">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setDelOpen((pv) => !pv)}
          className="p-2 text-xs border rounded-sm text-dark-100 border-dark-300"
        >
          <BsThreeDots size={"1.25rem"} />
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 py-2 rounded-sm bg-dark-200 shadow absolute top-[120%] left-[-100%] w-48 overflow-hidden"
        >
          <motion.li
            onClick={() => setDelOpen(false)}
            className="flex items-center w-full gap-2 p-2 text-xs text-white transition-all rounded-sm cursor-pointer hover:bg-dark-300"
          >
            <span>Order Details</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default PurchaseDropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
  },
  closed: {
    scaleY: 0,
  },
};
