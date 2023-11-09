"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterByPrice = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="dark:text-white flex items-center justify-between border-b pb-5 border-dark-300">
        <p>Product Reviews</p>
        <div
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="flex justify-center items-center gap-32 relative"
        >
          Recent
          <IoIosArrowDown />
          <ul
            className={`${
              !isOpen
                ? "hidden"
                : "visible absolute  top-10 right-0 z-20 rounded-sm border border-dark-100 "
            }`}
          >
            <li className="py-3 px-5 dark:bg-dark-400 dark:hover:bg-dark-500 border-b border-dark-100">
              Recent
            </li>
            <li className="py-3 px-5 dark:bg-dark-400 dark:hover:bg-dark-500 border border-dark-100 ">
              Ratings: Low to High
            </li>
            <li className="py-3 px-5 dark:bg-dark-400 dark:hover:bg-dark-500 border border-dark-100 ">
              Ratings: High to Low
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
