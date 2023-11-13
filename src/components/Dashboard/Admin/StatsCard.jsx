import React from "react";
import { BiDollar } from "react-icons/bi";

const StatsCard = ({ title, days, income }) => {
  return (
    <div className="col-span-1 p-5 flex flex-col justify-between border dark:border-dark-300 dark:bg-dark-400 rounded">
      <div className="flex justify-between ">
        <p>
          {title} <br />
          <span className="text-xs dark:text-dark-100">({days})</span>
        </p>
        <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
          <BiDollar className="text-2xl" />
        </div>
      </div>
      <div>${income}</div>
    </div>
  );
};

export default StatsCard;
