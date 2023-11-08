import React from "react";
import { AiFillStar } from "react-icons/ai";
import ProgressRatings from "./ProgressRatings";

const Ratings = () => {
  return (
    <section className="grid sm:grid-cols-3 md:grid-cols-4 my-8">
      <div className="col-span-1 h-52 md:border-r  md:border-b-0 sm:border-b flex justify-center items-center">
        <div className="">
          <p className="flex items-center justify-center gap-3 bg-primary py-2 w-24 rounded-3xl text-white text-2xl">
            0
            <span>
              <AiFillStar />
            </span>
          </p>
          <p className="text-center mt-3">{'0'} Reviews</p>
        </div>
      </div>
      <div className="sm:col-span-2 md:col-span-3 h-52 flex justify-center items-center">
        <ProgressRatings/>
      </div>
    </section>
  );
};

export default Ratings;
