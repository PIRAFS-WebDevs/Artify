import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterByPrice from "./FilterByPrice";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";

const ProductsReviews = () => {
  return (
    <section className="mb-8 min-h-screen ">
      <FilterByPrice />
      <div>
        <div className="py-8 border-b border-dark-300">
          <div className="flex items-center  gap-10 ">
            <p className="bg-green-500 w-8 h-8 rounded-full"></p>
            <p className="dark:text-white font-semibold">customers</p>
            <p
              className={
                "flex items-center gap-2 bg-primary justify-center w-12 dark:text-white rounded-3xl py-1  "
              }
            >
              4 <AiFillStar />
            </p>
          </div>
          <div>
            <p className=" my-5">comment</p>
            <div className="flex items-center gap-5">
              <p>October 4, 2023</p>
              <p className="hover:text-primary">Report</p>
              <p className="flex items-center gap-3">
                0 <AiFillLike />
              </p>
              <p className="flex items-center gap-3">
                0 <AiFillDislike />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsReviews;
