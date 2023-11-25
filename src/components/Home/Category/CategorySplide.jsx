"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import categoriesData from "@/data/categoriesData";
import "./SplideArrow.css";

const CategorySplide = () => {
  return (
    <div
      className="sticky inset-x-0 -top-[.1px] z-40 p-0 m-0 bg-dark-500 outline-0 sm:top-20 border-y border-dark-400"
      id="category"
    >
      <div className="relative px-6 py-6">
        <div className="mx-2">
          <Splide
            options={{
              perMove: 2,
              perPage: 12,
              gap: 8,
              autoWidth: true,
              pagination: false,
              arrows: true,
              breakpoints: {
                450: {
                  perPage: 3,
                  perMove: 1,
                },
                768: {
                  perPage: 5,
                },
                1024: {
                  perPage: 7,
                },
                1440: {
                  perPage: 10,
                },
              },
            }}
          >
            {categoriesData.map((data, index) => (
              <SplideSlide key={index}>
                <button
                  className={`${
                    index === 0
                      ? "bg-white text-dark-500"
                      : "text-white hover:bg-dark-200"
                  } px-4 py-2 text-xs font-medium border rounded-full outline-none bg-dark-300 border-dark-300 whitespace-nowrap`}
                >
                  {data.name}
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default CategorySplide;
