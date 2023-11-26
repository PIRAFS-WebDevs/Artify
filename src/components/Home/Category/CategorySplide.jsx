"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./SplideArrow.css";
import { getCategory } from "@/utils/api/category";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AllProductContext from "@/context/AllProductContext";

const CategorySplide = () => {
  const { category, setCategory } = useContext(AllProductContext);

  const {
    data: categories = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategory(),
  });

  return (
    <div
      className="sticky inset-x-0 z-40 bg-dark-500 top-[79.9px] border-y border-dark-400"
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
                1200: {
                  perPage: 10,
                },
                1440: {
                  perPage: 12,
                },
              },
            }}
          >
            {categories.map((data, index) => (
              <SplideSlide key={index}>
                <button
                  onClick={() => setCategory(data.name)}
                  className={`${
                    data.name === category
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
