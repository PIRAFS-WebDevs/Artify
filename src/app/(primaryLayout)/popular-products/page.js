import Card from "@/components/Home/Card/Card";
import React from "react";

const PopularProducts = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-8 px-8">
        <p className="text-sm text-dark-100">Total 10 products found</p>
          <div className="bg-dark-400 rounded-full p-2 flex gap-1">
            <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
              Weekly
            </button>
            <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
              Monthly
            </button>
            <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
              Yearly
            </button>
          </div>
        </div>

      <Card />
    </>
  );
};

export default PopularProducts;
