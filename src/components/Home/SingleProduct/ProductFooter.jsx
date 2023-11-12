import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
export default function ProductFooter() {
  return (
    <div className="md:sticky bottom-0 dark:bg-dark-500 py-4">
      <div className="lg:flex justify-between ">
        <div>
          <div className="flex ">
            <h1 className="dark:text-white font-bold text-lg">
              Shoppie UI Kit PSD Ecommerce Design Template
            </h1>
            <AiOutlineHeart className="text-2xl mt-1 ml-3" />
          </div>

          <div className="mt-3 flex gap-6 dark:text-white">
            <div className="flex gap-2 items-center">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
                alt=""
                className="w-7 h-7  rounded-full"
              />
              Qubitron Solutions
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineShoppingCart className=" text-lg" />0 Sales
            </div>
            <div className="flex items-center gap-2 ">
              <IoMdDownload className=" text-lg" />0 Download
            </div>
          </div>
        </div>
        <div className="items-center flex gap-1 sm:mt-3 lg:mt-0">
          <button className="md:w-[250px] py-3 sm:w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white">
            Add to Cart
          </button>
          <button className="md:w-[250px] py-3 sm:w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white ">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
}
