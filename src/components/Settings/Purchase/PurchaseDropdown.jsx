"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";

const PurchaseDropdown = ({ _id }) => {
  const [open, setDelOpen] = useState(false);

  const router = useRouter();
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDelOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const onCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`
    );
    toast.success("Copied successfully");
  };

  const handleCopyLink = () => {
    setDelOpen(false);
    onCopy();
  };

  const handleDetails = () => {
    setDelOpen(false);
    router.push(`/purchase/${_id}`);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex items-center justify-center dark:text-dark-100 text-dark-500"
    >
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
          className="flex flex-col gap-1 py-2 rounded-sm dark:bg-dark-200 bg-light-100 shadow-xl absolute top-[120%] left-[-100%] w-48 overflow-hidden"
        >
          <motion.li
            onClick={handleDetails}
            className="flex items-center w-full gap-2 p-2 text-xs transition-all rounded-sm cursor-pointer dark:text-light-100 text-dark-500 dark:hover:bg-dark-300 hover:bg-light-300"
          >
            <span>Order Details</span>
          </motion.li>
          <motion.li
            onClick={handleCopyLink}
            className="flex items-center w-full gap-2 p-2 text-xs transition-all rounded-sm cursor-pointer dark:text-light-100 text-dark-500 dark:hover:bg-dark-300 hover:bg-light-300"
          >
            <span>Copy Link</span>
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
