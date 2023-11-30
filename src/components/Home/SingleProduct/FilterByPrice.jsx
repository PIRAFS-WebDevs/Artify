"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterByPrice = () => {
  const [isDelOpen, setDelOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between border-b h-14 dark:dark:text-white dark:border-dark-300 border-light-500">
        <p>Product Reviews</p>
        <div
          onClick={() => {
            setDelOpen(!isDelOpen);
          }}
          className="relative flex items-center justify-center gap-32"
        >
          Recent
          <IoIosArrowDown />
          <ul
            className={`${
              !isDelOpen
                ? "hidden"
                : "visible absolute  top-10 right-0 z-20 rounded-sm dark:bg-dark-400 bg-light-200"
            }`}
          >
            <li className="px-5 py-3 dark:hover:bg-dark-500 hover:bg-light-300 ">
              Recent
            </li>
            <li className="px-5 py-3 dark:hover:bg-dark-500 hover:bg-light-300">
              Ratings: Low to High
            </li>
            <li className="px-5 py-3 dark:hover:bg-dark-500 hover:bg-light-300">
              Ratings: High to Low
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
