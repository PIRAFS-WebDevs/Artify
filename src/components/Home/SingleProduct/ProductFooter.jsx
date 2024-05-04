"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";
import { handleCart } from "@/utils/handleCart";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiTwotoneHeart,
} from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function ProductFooter({ productById }) {
  const { setCartUpdated } = useAllValueContext();
  const { name, price, _id, preview_url } = productById || {};
  const [like, setLike] = useState(false);

  return (
    <div className="bottom-0 py-4 md:sticky dark:bg-dark-500 bg-light-300 border-y dark:border-dark-300 border-light-500">
      <div className="justify-between space-y-2 lg:flex">
        <div>
          <div className="flex items-center justify-start gap-2 lg:justify-start">
            <h1 className="text-lg font-bold dark:text-light-100 ">{name}</h1>
            {like ? (
              <button onClick={() => setLike(false)}>
                <AiTwotoneHeart className="w-4 h-4 cursor-pointer md:w-6 md:h-6 text-primary" />
              </button>
            ) : (
              <button onClick={() => setLike(true)}>
                <AiOutlineHeart className="w-4 h-4 cursor-pointer md:w-6 md:h-6 dark:text-light-100" />
              </button>
            )}
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
            className="lg:w-[200px] py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-light-100 text-sm sm:text-base"
            onClick={() =>
              handleCart({ id: _id, quantity: 1 }, _id, setCartUpdated)
            }
          >
            Add to Cart <span>$</span>
            {price}
          </button>
          <Link
            href={preview_url}
            className="lg:w-[200px]  py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-light-100 text-center text-sm sm:text-base"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
