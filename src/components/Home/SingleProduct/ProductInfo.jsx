import React from "react";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDateRange } from "react-icons/md";

import { PiDrop } from "react-icons/pi";
import { AiOutlineTag } from "react-icons/ai";
const ProductInfo = () => {
  const tags = [
    "Dashboard",
    " E-commerce",
    "Landing Page",
    "Retail",
    " WooCommerce",
  ];
  return (
    <section className="space-y-4">
      <div>
        <p className="grid grid-cols-4">
          <span className="flex items-center gap-5 ">
            <RxUpdate className="dark:text-darkNormal h-5 w-5" /> Liquid:
          </span>
          <span className="font-semibold text-white col-span-3">
            Mar 8, 2022
          </span>
        </p>
      </div>
      <div>
        <p className="grid grid-cols-4">
          <span className="flex items-center gap-5 ">
            <MdOutlineDateRange className="dark:text-darkNormal h-5 w-5" />{" "}
            Published:
          </span>
          <span className="font-semibold text-white col-span-3">
            Jan 27, 2022
          </span>
        </p>
      </div>
      <div>
        <p className="grid grid-cols-4">
          <span className="flex items-center gap-5 ">
            {" "}
            <PiDrop className="dark:text-darkNormal h-5 w-5" />
            Layout:
          </span>
          <span className="font-semibold text-white col-span-3"> Liquid</span>
        </p>
      </div>
      <div>
        <p className="grid grid-cols-4">
          <span className="">
            <span className=" flex items-center gap-5">
              <AiOutlineTag className="dark:text-darkNormal h-5 w-5" /> Tags:
            </span>
          </span>
          <span className="font-semibold text-white col-span-3 flex flex-wrap gap-3 ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded text-xs font-medium text-white border border-darkSec dark:text-darkNormal "
              >
                {tag}
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProductInfo;
