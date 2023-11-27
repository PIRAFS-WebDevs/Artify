"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MarketplaceBanner = () => {
  return (
    <div className="relative" id="marketplace_banner">
      <Splide
        options={{
          gap: 16,
          perMove: 1,
          perPage: 1,
          pagination: false,
          arrows: true,
        }}
      >
        {images.map((e, i) => (
          <SplideSlide key={i}>
            <div className="h-32 lg:h-52 sm:h-44">
              <img
                src={e}
                alt=""
                className="object-fill w-full h-full rounded"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MarketplaceBanner;

const images = [
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614850715661-902fd7e93c78?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614850715661-902fd7e93c78?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614850715661-902fd7e93c78?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
