"use client";

import { AnimatePresence, MotionConfig, motion as m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ImageCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  const productImages = [
    "/assets/images/product/product_1.png",
    "/assets/images/product/product_2.png",
    "/assets/images/product/product_3.png",
  ];

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="max-lg:space-y-4">
        <div
          className={`relative overflow-hidden ${
            images.length !== 0 &&
            "max-sm:h-[20rem] max-md:h-[25rem] max-lg:h-[30rem]"
          }`}
        >
          <m.div
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex"
          >
            {images.length === 0
              ? productImages.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="product"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full bg-light-100"
                  />
                ))
              : images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="product"
                    width={800}
                    height={800}
                    className="object-cover w-full lg:min-w-[37rem] lg:h-[25rem] bg-light-100"
                  />
                ))}
          </m.div>

          <AnimatePresence initial={false}>
            {index > 0 && (
              <button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                onClick={() => setIndex(index - 1)}
              >
                <AiOutlineLeft className="absolute inset-y-0 left-0 p-2 mx-3 my-auto bg-white border rounded-full shadow-2xl cursor-pointer hover:border-primary w-9 h-9 text-dark-500 hover:text-primary" />
              </button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {images.length === 0
              ? index + 1 < productImages.length && (
                  <m.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    onClick={() => setIndex(index + 1)}
                  >
                    <AiOutlineRight className="absolute inset-y-0 right-0 p-2 mx-3 my-auto bg-white border rounded-full shadow-2xl cursor-pointer hover:border-primary w-9 h-9 text-dark-500 hover:text-primary" />
                  </m.button>
                )
              : index + 1 < images.length && (
                  <m.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    onClick={() => setIndex(index + 1)}
                  >
                    <AiOutlineRight className="absolute inset-y-0 right-0 p-2 mx-3 my-auto bg-white border rounded-full shadow-2xl cursor-pointer hover:border-primary w-9 h-9 text-dark-500 hover:text-primary" />
                  </m.button>
                )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-4 row-span-1 gap-4">
          {images.length === 0
            ? productImages.map((e, i) => (
                <div
                  onClick={() => setIndex(i)}
                  initial={"false"}
                  key={i}
                  className={`relative group cursor-pointer ${
                    i === index && "border-2 border-primary"
                  }`}
                >
                  <Image
                    className="object-cover max-h-[5rem]"
                    width={200}
                    height={200}
                    src={e}
                    alt="image"
                  />

                  <div className="absolute inset-0 z-10 hidden w-full h-full opacity-50 group-hover:block dark:bg-dark-300"></div>
                </div>
              ))
            : images.map((e, i) => (
                <div
                  onClick={() => setIndex(i)}
                  initial={"false"}
                  key={i}
                  className={`relative group cursor-pointer ${
                    i === index && "border-2 border-primary"
                  }`}
                >
                  <Image
                    className="object-cover max-h-[5rem]"
                    width={200}
                    height={200}
                    src={e}
                    alt="image"
                  />

                  <div className="absolute inset-0 z-10 hidden w-full h-full opacity-50 group-hover:block dark:bg-dark-300"></div>
                </div>
              ))}
        </div>
      </div>
    </MotionConfig>
  );
};

export default ImageCarousel;
