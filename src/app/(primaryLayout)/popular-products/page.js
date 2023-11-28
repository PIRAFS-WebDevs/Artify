import Card from "@/components/Home/Card/Card";
import React from "react";

const PopularProducts = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 pt-6">
        <p className="text-sm text-dark-100">Total 10 products found</p>
        <div className="flex gap-1 p-2 rounded-full dark:bg-dark-400">
          <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
            Weekly
          </button>
          <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
            Monthly
          </button>
          <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
            Yearly
          </button>
        </div>
      </div>

      <Card />
    </>
  );
};

export default PopularProducts;
