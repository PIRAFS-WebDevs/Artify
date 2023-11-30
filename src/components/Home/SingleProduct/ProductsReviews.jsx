import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterByPrice from "./FilterByPrice";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";

const ProductsReviews = () => {
  return (
    <section className="mb-4 ">
      <FilterByPrice />
      <div>
        <div className="py-8 border-b dark:border-dark-300 border-light-500">
          <div className="flex items-center gap-10 ">
            <p className="w-8 h-8 bg-green-500 rounded-full"></p>
            <p className="font-semibold dark:text-white">customers</p>
            <p
              className={
                "flex items-center gap-2 bg-primary justify-center w-12 dark:text-white rounded-3xl py-1 text-white "
              }
            >
              4 <AiFillStar />
            </p>
          </div>
          <div>
            <p className="my-5 ">comment</p>
            <div className="flex items-center gap-5">
              <p>October 4, 2023</p>
              <p className="hover:text-primary">Report</p>
              <p className="flex items-center gap-3">
                0 <AiFillLike className="text-dark-100" />
              </p>
              <p className="flex items-center gap-3">
                0 <AiFillDislike className="text-dark-100" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsReviews;
