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
                className="w-full h-full object-cover"
              />
            ))}
          </m.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                onClick={() => setIndex(index - 1)}
              >
                <AiOutlineLeft className="w-8 h-8 absolute left-0 inset-y-0 my-auto border border-dark-200 text-dark-500 rounded-full hover:b1-dark-200 shadow-md cursor-pointer p-2 mx-3" />
              </button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index + 1 < images.length && (
              <m.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                onClick={() => setIndex(index + 1)}
              >
                <AiOutlineRight className="w-8 h-8 absolute right-0 inset-y-0 my-auto border border-dark-200 text-dark-500 rounded-full hover:bg-dark-100 shadow-md cursor-pointer p-2 mx-3" />
              </m.button>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-4 gap-4 row-span-1">
          {images.map((e, i) => (
            <div
              onClick={() => setIndex(i)}
              initial={false}
              whileHover={{ opacity: 1 }}
              key={i}
              className={`relative group cursor-pointer ${
                i === index && "border-2 border-primary"
              }`}
            >
              <img className="h-full object-cover" src={e} alt="" />

              <div className="hidden group-hover:block bg-dark-300 opacity-50 absolute w-full h-full inset-0 z-10"></div>
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
