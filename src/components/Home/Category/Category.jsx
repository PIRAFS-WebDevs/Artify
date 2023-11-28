"use client";
import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import categoriesData from "@/data/categoriesData";

const Category = () => {
  const scrollContainerRef = useRef(null);
  const [isLeft, setIsLeft] = useState(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
      setIsLeft(toString(scrollContainerRef.current.scrollLeft)); // Adjust the scroll distance as needed
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
      setIsLeft(scrollContainerRef.current.scrollLeft); // Adjust the scroll distance as needed
    }
  };

  return (
    <section className="sticky inset-x-0 py-4 top-[72.5px] border-y border-dark-300 dark:bg-dark-500 z-40">
      <div className="z-20 flex w-full overflow-hidden dark:text-white">
        <div className="flex items-start overflow-hidden">
          <button
            onClick={scrollLeft}
            className={` ${
              !isLeft
                ? "invisible z-10 w-10 h-8 sticky left-0"
                : "z-10 w-10 h-8 sticky left-5 dark:bg-dark-500"
            }`}
          >
            <MdKeyboardArrowLeft className="text-2xl dark:text-white" />
          </button>

          <div
            ref={scrollContainerRef}
            className="relative flex gap-3 overflow-hidden whitespace-nowrap scroll-smooth"
          >
            {categoriesData.map((data, index) => (
              <div key={index}>
                <button
                  className={`h-[30px] shrink-0 !rounded-full border border-dark-300 px-3.5 text-xs font-medium outline-none ${
                    index === 0
                      ? "bg-white text-black "
                      : "dark:text-white hover:dark:bg-dark-300 py-1.5"
                  }`}
                >
                  {data.name}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="sticky z-10 w-10 h-8 right-4 dark:bg-dark-500"
          >
            <MdKeyboardArrowRight className="text-2xl dark:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
