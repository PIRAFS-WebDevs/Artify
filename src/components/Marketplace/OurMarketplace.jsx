"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./Marketplace.css";

const OurMarketplace = () => {
  const isLoading = false;
  return (
    <div className="relative bg-dark-500" id="our_marketplace">
      <div className="space-y-4">
        <h1 className="inline text-2xl font-medium text-white border-b border-white ">
          Our Marketplace
        </h1>
        <div>
          {isLoading ? (
            <div className="flex gap-4 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
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
                gap: 8,
                autoWidth: true,
                pagination: false,
                arrows: true,
                breakpoints: {},
              }}
            >
              {data.map((data, index) => (
                <SplideSlide key={index}>
                  <div className="flex items-center gap-2 px-4 py-2 text-white border rounded outline-none bg-dark-300 border-dark-400 whitespace-nowrap">
                    <img
                      className="w-12 h-12 rounded"
                      src={data.image}
                      alt=""
                    />
                    <p>{data.name}</p>
                    <MdOutlineArrowRightAlt size={"1.5srem"} className="w-8" />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurMarketplace;

const data = [
  {
    id: 1,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Social Media Design",
  },
  {
    id: 2,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web App",
  },
  {
    id: 3,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Latest Design",
  },
  {
    id: 4,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Product Design",
  },
  {
    id: 5,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web Development",
  },
  {
    id: 6,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web Design",
  },
  {
    id: 7,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Social Media Design",
  },
  {
    id: 8,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web App",
  },
  {
    id: 9,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Latest Design",
  },
  {
    id: 10,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Product Design",
  },
  {
    id: 11,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web Development",
  },
  {
    id: 12,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F502%2Fimage04.png&w=2048&q=75",
    name: "Web Design",
  },
];
