"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";
import { handleCart } from "@/utils/handleCart";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function ProductFooter({ productById }) {
  const { setCartUpdated } = useAllValueContext();
  const { name, price, _id } = productById || {};

  return (
    <div className="bottom-0 py-4 md:sticky dark:bg-dark-500 bg-light-300 border-y dark:border-dark-300 border-light-500">
      <div className="justify-between lg:flex">
        <div>
          <div className="flex justify-start lg:justify-start ">
            <h1 className="text-lg font-bold dark:text-white ">{name}</h1>
            <AiOutlineHeart className="mt-1 ml-3 text-2xl text-black dark:text-dark-100" />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="flex items-center gap-1">
              <AiOutlineShoppingCart className="text-dark-100" />
              <span>0 Sales</span>
            </div>
            <div className="flex items-center gap-1">
              <IoMdDownload className="text-dark-100" />
              <span>0 Download</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:mt-3 lg:mt-0">
          <button
            className="lg:w-[200px]   py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-white"
            onClick={() =>
              handleCart({ id: _id, quantity: 1 }, _id, setCartUpdated)
            }
          >
            Add to Cart <span>$ </span>
            {price}
          </button>
          <button className="lg:w-[200px]  py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-white ">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
}
