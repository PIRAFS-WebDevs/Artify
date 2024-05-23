"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./SplideArrow.css";

const BannerSplide = () => {
  return (
    <div
      className="relative px-6 py-6 bg-light-200 dark:bg-dark-500"
      id="explore"
    >
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
  "https://img.freepik.com/free-vector/gradient-real-estate-linkedin-banner_23-2149150264.jpg?t=st=1716438295~exp=1716441895~hmac=7e152c50e8fc884fde195f35d2754d6c7de1dd5d25c8637f662f71520b158d4d&w=1060",
  "https://img.freepik.com/free-vector/flat-design-technology-twitter-header-template_23-2149182578.jpg?t=st=1716438517~exp=1716442117~hmac=0bcad526342da8b8dd9ef20362f11273170dc34312d15f304bef5a3c09164ff2&w=1060",
  "https://img.freepik.com/free-vector/flat-minimal-technology-twitter-header_23-2149210126.jpg?t=st=1716439074~exp=1716442674~hmac=64c1b9a8957f0fa4534b589feb7485db9a26d8fa50cda1012b4e76c06d8f5893&w=1060",
  "https://img.freepik.com/free-vector/gradient-real-estate-twitter-header_23-2149150265.jpg?t=st=1716438334~exp=1716441934~hmac=d0f6390d331d8b46a77df114e18822e3f14833a3c93d5906881bcf8e0cedce7e&w=1060",
  "https://img.freepik.com/free-vector/flat-design-technology-twitch-banner-template_23-2149182580.jpg?t=st=1716439288~exp=1716442888~hmac=8b669bfe6c3e22f19168174591289e6795e908eb503c768589e77f442662c698&w=1060",
  "https://img.freepik.com/free-vector/gradient-business-workshop-facebook-template_23-2149464791.jpg?t=st=1716439376~exp=1716442976~hmac=3d06d90cb12f8e2e33415908d407c267f06a951214182ca8525080d85f4bb26a&w=1060",
];
