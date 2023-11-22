"use client";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

const BannerSplide = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex py-6 overflow-hidden">
      <div className="flex gap-x-8">
        {images.map((e, i) => (
          <img
            key={i}
            src={e}
            alt=""
            className="w-[600] h-[220px] object-cover"
          />
        ))}
      </div>

      {index > 0 && (
        <button onClick={() => setIndex(index - 1)}>
          <AiOutlineLeft className="absolute inset-y-0 left-0 w-8 h-8 p-2 mx-3 my-auto text-white rounded-full shadow-md cursor-pointer bg-dark-400 hover:bg-dark-500" />
        </button>
      )}

      {index + 1 < images.length && (
        <button onClick={() => setIndex(index + 1)}>
          <AiOutlineRight className="absolute inset-y-0 right-0 w-8 h-8 p-2 mx-3 my-auto text-white rounded-full shadow-md cursor-pointer bg-dark-400 hover:bg-dark-500" />
        </button>
      )}
    </div>
  );
};

export default BannerSplide;

const images = [
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
];
