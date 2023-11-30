"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./SplideArrow.css";
import { getCategory } from "@/utils/api/category";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AllProductContext from "@/context/AllProductContext";
import { Skeleton } from "@nextui-org/react";

const CategorySplide = () => {
  const { category, setCategory } = useContext(AllProductContext);

  const {
    data: categories = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });

  return (
    <div
      className="sticky inset-x-0 z-40 dark:bg-dark-500 bg-light-200 top-[63.9px] border-y dark:border-dark-400 border-light-300"
      id="category"
    >
      <div className="relative px-6 py-6 ">
        <div className="mx-2">
          {isLoading ? (
            <div className="flex gap-4 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                <Skeleton
                  key={e}
                  className="h-8 bg-gray-300 rounded-full w-28"
                ></Skeleton>
              ))}
            </div>
          ) : (
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
                  1200: {
                    perPage: 10,
                  },
                  1440: {
                    perPage: 12,
                  },
                },
              }}
            >
              <SplideSlide key={-1}>
                <button
                  onClick={() => setCategory("")}
                  className={`${
                    category === ""
                      ? "dark:bg-white dark:text-dark-500 bg-dark-300 text-white"
                      : "dark:text-white dark:hover:bg-dark-200 bg-light-300"
                  } px-4 py-2 text-xs font-medium border rounded-full outline-none dark:bg-dark-300 dark:border-dark-300 border-light-300 whitespace-nowrap`}
                >
                  All
                </button>
              </SplideSlide>
              {categories.map((data, index) => (
                <SplideSlide key={index}>
                  <button
                    onClick={() => setCategory(data.name)}
                    className={`${
                      data.name === category
                        ? "dark:bg-white dark:text-dark-500 bg-dark-300 text-white"
                        : "dark:text-white dark:hover:bg-dark-200 hover:bg-light-400 bg-light-300"
                    } px-4 py-2 text-xs font-medium border rounded-full outline-none dark:bg-dark-300 dark:border-dark-300 border-light-300 whitespace-nowrap`}
                  >
                    {data.name}
                  </button>
                </SplideSlide>
              ))}
            </Splide>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySplide;
