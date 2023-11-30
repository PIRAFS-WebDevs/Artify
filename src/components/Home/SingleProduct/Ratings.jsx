import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProgressRatings from "./ProgressRatings";

const Ratings = () => {
  return (
    <section className="grid my-8 sm:grid-cols-3 md:grid-cols-4">
      <div className="flex items-center justify-start col-span-1 h-52 md:border-r md:border-b-0 sm:border-b dark:border-dark-300 border-light-500 md:justify-center">
        <div className="">
          <p className="flex items-center justify-center w-24 gap-3 py-2 text-2xl text-white bg-primary rounded-3xl ">
            0
            <span>
              <AiFillStar />
            </span>
          </p>
          <p className="mt-3 text-center">{"0"} Reviews</p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:col-span-2 md:col-span-3 h-52">
        <ProgressRatings />
      </div>
    </section>
  );
};

export default Ratings;
