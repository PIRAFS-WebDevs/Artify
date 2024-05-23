"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./Marketplace.css";

const OurMarketplace = () => {
  const isLoading = false;
  return (
    <div
      className="relative px-6 bg-light-200 dark:bg-dark-500"
      id="marketplace"
    >
      <div>
        {isLoading ? (
          <div className="flex gap-4 ">
            {[1, 2, 3, 4, 5].map((e) => (
              <div
                key={e}
                className="h-8 bg-gray-300 rounded-full w-28 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <Splide
            options={{
              perMove: 1,
              perPage: 4,
              gap: 12,
              autoWidth: true,
              pagination: false,
              arrows: true,
              breakpoints: {},
            }}
          >
            {data.map((data, index) => (
              <SplideSlide key={index}>
                <div className="flex items-center gap-2 px-4 py-2 border rounded-sm shadow outline-none border-light-500 dark:text-light-100 dark:bg-dark-300 dark:border-dark-400 whitespace-nowrap">
                  <Image
                    width={200}
                    height={200}
                    className="w-10 h-10 rounded sm:w-12 sm:h-12"
                    src={data.image}
                    alt="category"
                  />
                  <p className="text-sm sm:text-base">{data.name}</p>
                  <MdOutlineArrowRightAlt size={"1.5rem"} className="w-8" />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default OurMarketplace;

const data = [
  {
    id: 1,
    image: "/assets/images/marketplace.png",
    name: "Social Media Design",
  },
  {
    id: 2,
    image: "/assets/images/marketplace.png",
    name: "Web App",
  },
  {
    id: 3,
    image: "/assets/images/marketplace.png",
    name: "Latest Design",
  },
  {
    id: 4,
    image: "/assets/images/marketplace.png",
    name: "Product Design",
  },
  {
    id: 5,
    image: "/assets/images/marketplace.png",
    name: "Web Development",
  },
  {
    id: 6,
    image: "/assets/images/marketplace.png",
    name: "Web Design",
  },
  {
    id: 7,
    image: "/assets/images/marketplace.png",
    name: "Social Media Design",
  },
  {
    id: 8,
    image: "/assets/images/marketplace.png",
    name: "Web App",
  },
  {
    id: 9,
    image: "/assets/images/marketplace.png",
    name: "Latest Design",
  },
  {
    id: 10,
    image: "/assets/images/marketplace.png",
    name: "Product Design",
  },
  {
    id: 11,
    image: "/assets/images/marketplace.png",
    name: "Web Development",
  },
  {
    id: 12,
    image: "/assets/images/marketplace.png",
    name: "Web Design",
  },
];
