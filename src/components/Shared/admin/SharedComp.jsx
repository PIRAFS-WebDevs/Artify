"use client";

import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SharedComp = ({ type, AddType, link }) => {
  return (
    <div className=" md:min-h-[96px] dark:border-dark-300   rounded-sm  border dark:bg-dark-400 bg-white w-full mb-5  flex justify-between items-center px-5 ">
      <p className="text-xl text-center md:text-start">{type && type}</p>

      <Link className={link || "hidden"} href={link ? link : ""}>
        <button className="w-full font-semibold text-white rounded-sm h-14 md:w-auto px-7 bg-primary">
          + {AddType}
        </button>
      </Link>
    </div>
  );
};

export default SharedComp;
