import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackBtn = () => {
  return (
    <>
      <Link href={"/"}>
        <button className="flex items-center gap-3 font-medium text-dark-100 hover:dark:text-white">
          <IoIosArrowRoundBack size={30} />
          Back
        </button>
      </Link>
    </>
  );
};

export default BackBtn;
