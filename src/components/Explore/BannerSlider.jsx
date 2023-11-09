"use client";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { AnimatePresence, motion as m, MotionConfig } from "framer-motion";
import { useState } from "react";

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="p-8">
        <div className="relative overflow-hidden flex">
          <m.div
            animate={{ x: `-${index * 25}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex gap-x-8"
          >
            {images.map((e, i) => (
              <img
                key={i}
                src={e}
                alt=""
                className="w-[600] h-[220px] object-cover"
              />
            ))}
          </m.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whilehover={{ opacity: 1 }}
                onClick={() => setIndex(index - 1)}
              >
                <AiOutlineLeft className="w-8 h-8 absolute left-0 inset-y-0 my-auto text-white rounded-full bg-dark-400 hover:bg-dark-500 shadow-md cursor-pointer p-2 mx-3" />
              </button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {index + 1 < images.length && (
              <m.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whilehover={{ opacity: 1 }}
                onClick={() => setIndex(index + 1)}
              >
                <AiOutlineRight className="w-8 h-8 absolute right-0 inset-y-0 my-auto text-white rounded-full bg-dark-400 hover:bg-dark-500 shadow-md cursor-pointer p-2 mx-3" />
              </m.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
};

export default BannerSlider;

const images = [
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
  "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F935%2Fimage-2.png&w=2048&q=75",
];
