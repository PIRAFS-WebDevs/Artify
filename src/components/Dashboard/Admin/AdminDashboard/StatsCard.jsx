import React from "react";
import { BiDollar } from "react-icons/bi";

const StatsCard = ({ title, days, income }) => {
  return (
    <div className="col-span-1 h-36 p-5 flex flex-col justify-between border dark:border-dark-300 dark:bg-dark-400 rounded-sm text-xs md:text-base">
      <div className="flex justify-between ">
        <p>
          {title} <br />
          <span className="text-xs dark:text-dark-100">({days})</span>
        </p>
        <div className="bg-primary w-8 h-8 md:w-14 md:h-14 rounded-full flex justify-center items-center">
          <BiDollar className="md:text-2xl" />
        </div>
      </div>
      <div>${income}</div>
    </div>
  );
};

export default StatsCard;
