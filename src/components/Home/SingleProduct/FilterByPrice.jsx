"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterByPrice = () => {
  const [isDelOpen, setDelOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between border-b h-14 dark:dark:text-light-100 dark:border-dark-300 border-light-500">
        <p>Product Reviews</p>
        <div
          onClick={() => {
            setDelOpen(!isDelOpen);
          }}
          className="relative flex items-center justify-center h-12 gap-20 px-2 cursor-pointer select-none sm:gap-32 hover:bg-light-400"
        >
          Recent
          <IoIosArrowDown />
          <ul
            className={`${
              !isDelOpen
                ? "hidden"
                : "visible absolute top-10 right-0 z-20 rounded-sm dark:bg-dark-400 bg-light-200"
            }`}
          >
            <li className="px-5 py-3 text-sm cursor-pointer dark:hover:bg-dark-500 hover:bg-light-400 md:text-base">
              Recent
            </li>
            <li className="px-5 py-3 text-sm cursor-pointer dark:hover:bg-dark-500 hover:bg-light-400 md:text-base">
              Ratings: Low to High
            </li>
            <li className="px-5 py-3 text-sm cursor-pointer dark:hover:bg-dark-500 hover:bg-light-400 md:text-base">
              Ratings: High to Low
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
