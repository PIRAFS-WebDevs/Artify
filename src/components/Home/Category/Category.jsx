"use client"
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import categoriesData from "@/data/categoriesData";

const Category = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
    }
  };

  return (
    <section className="py-5 dark:bg-darkPrimary">
      <div className="app-category-filter-bar z-20 flex w-full overflow-hidden text-white">
        <div className="flex items-start overflow-hidden">
          <button
            onClick={scrollLeft}
            className="z-20 w-10 h-8 sticky left-0"
          >
            <MdKeyboardArrowLeft className="text-2xl text-white" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-hidden whitespace-nowrap scroll-smooth relative"
          >
            {categoriesData.map((data, index) => (
              <div key={index}>
                <button
                  className={`h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none ${
                    index === 0 ? "bg-white text-black" : "text-white hover:bg-warmGray-700"
                  }`}
                >
                  {data.name}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="z-20 w-10 h-8 sticky right-0"
          >
            <MdKeyboardArrowRight className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
