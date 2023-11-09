"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterByPrice = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="dark:text-white flex items-center justify-between border-b pb-5 border-gray-700">
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
                : "visible absolute  top-10 right-0 z-20 rounded-sm border border-darkNormal "
            }`}
          >
            <li className="py-3 px-5 dark:bg-darkSec dark:hover:bg-darkPrimary border-b border-darkNormal">
              Recent
            </li>
            <li className="py-3 px-5 dark:bg-darkSec dark:hover:bg-darkPrimary border border-darkNormal ">
              Ratings: Low to High
            </li>
            <li className="py-3 px-5 dark:bg-darkSec dark:hover:bg-darkPrimary border border-darkNormal ">
              Ratings: High to Low
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterByPrice;
