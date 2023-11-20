"use client";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { AnimatePresence, motion as m, MotionConfig } from "framer-motion";
import { useState } from "react";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="">
        <div className="relative overflow-hidden">
          <m.div
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex"
          >
            {images.map((e, i) => (
              <img
                key={i}
                src={e}
                alt=""
                className="object-cover w-full h-full"
              />
            ))}
          </m.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                onClick={() => setIndex(index - 1)}
              >
                <AiOutlineLeft className="absolute inset-y-0 left-0 p-2 mx-3 my-auto bg-white rounded-full shadow-2xl cursor-pointer w-9 h-9 text-dark-500 hover:text-primary" />
              </button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index + 1 < images.length && (
              <m.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                onClick={() => setIndex(index + 1)}
              >
                <AiOutlineRight className="absolute inset-y-0 right-0 p-2 mx-3 my-auto bg-white rounded-full shadow-2xl cursor-pointer w-9 h-9 text-dark-500 hover:text-primary" />
              </m.button>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-4 row-span-1 gap-4">
          {images.map((e, i) => (
            <div
              onClick={() => setIndex(i)}
              initial={"false"}
              key={i}
              className={`relative group cursor-pointer ${
                i === index && "border-2 border-primary"
              }`}
            >
              <img className="object-cover h-full" src={e} alt="" />

              <div className="absolute inset-0 z-10 hidden w-full h-full opacity-50 group-hover:block dark:bg-dark-300"></div>
            </div>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
};

export default ImageCarousel;

const images = [
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75",
];
