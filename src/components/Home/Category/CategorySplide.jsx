"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import categoriesData from "@/data/categoriesData";
import { useEffect, useRef, useState } from "react";

const CategorySplide = () => {
  const splideRef = useRef(null);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const updateArrowsVisibility = () => {
        const currentIndex = splideInstance.index;
        const totalSlides = splideInstance.length;

        setShowPrevArrow(currentIndex > 0);
        setShowNextArrow(
          currentIndex < totalSlides - splideInstance.options.perPage
        );
      };

      splideInstance.on("moved", () => {
        // Delay the visibility update to ensure Splide has settled
        setTimeout(updateArrowsVisibility, 50);
      });

      // Initial update
      updateArrowsVisibility();
    }
  }, []);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("-1");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("+1");
    }
  };

  return (
    <div className="sticky inset-x-0 z-40 bg-dark-500 top-20 border-y border-dark-400">
      <div className="relative px-6 py-6">
        <div className="mx-2">
          <Splide
            options={{
              perPage: 10,
              gap: 8,
              autoWidth: true,
              pagination: false,
              arrows: false,
            }}
            ref={splideRef}
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

        <button
          style={{
            boxShadow: "12px 10px 10px #181818",
          }}
          className={`absolute inset-y-0 left-6 z-40 my-auto bg-dark-500 shadow-2xl shadow-black ${
            showPrevArrow ? "visible" : "invisible"
          }`}
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft
            size={"2rem"}
            className="shadow-md text-dark-100 hover:text-white"
          />
        </button>
        <button
          style={{
            boxShadow: "-12px 10px 10px #181818",
          }}
          className={`absolute inset-y-0 right-6 z-40 my-auto bg-dark-500 ${
            showNextArrow ? "visible" : "invisible"
          }`}
          onClick={handleNext}
        >
          <MdKeyboardArrowRight
            size={"2rem"}
            className="shadow-md text-dark-100 hover:text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default CategorySplide;
