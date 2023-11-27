"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./SplideArrow.css";

const BannerSplide = () => {
  return (
    <div className="relative px-6 py-6" id="explore">
      <Splide
        options={{
          perMove: 1,
          perPage: 3,
          gap: 20,
          pagination: false,
          arrows: true,
          breakpoints: {
            600: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {images.map((e, i) => (
          <SplideSlide key={i}>
            <div>
              <img src={e} alt="" className="object-fill w-full h-full" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BannerSplide;

const images = [
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
];
