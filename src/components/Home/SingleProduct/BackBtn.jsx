import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackBtn = () => {
  return (
    <>
      <Link href={"/"}>
        <button className="dark:text-dark-100 font-medium hover:dark:text-white flex items-center gap-3">
        <IoIosArrowRoundBack size={30} />
 Back
        </button>
      </Link>
    </>
  );
};

export default BackBtn;
