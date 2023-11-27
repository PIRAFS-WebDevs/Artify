"use client";

import DetailsSvg from "@/components/svg/DetailsSvg";
import PreviewSvg from "@/components/svg/PreviewSvg";
import Link from "next/link";
import { useContext } from "react";
import AllProductContext from "@/context/AllProductContext";
import CardSkeleton from "@/components/Shared/Skeletons/CardSkeleton";
import { FaShoppingCart } from "react-icons/fa";

const Card = () => {
  const { products, isLoading } = useContext(AllProductContext);

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : products == undefined ? (
        <div className="grid min-h-screen pb-40 place-items-center">
          <img
            className="opacity-75 w-60 brightness-75"
            src="/assets/images/not_found/no_data.png"
            alt=""
          />
        </div>
      ) : (
        // Mo18032000
        <div>
          <div className="grid gap-6 min-[540px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2200px]:grid-cols-6 py-6 px-6">
            {products?.map((product) => (
              <div
                key={product?._id}
                className="w-full col-span-1 space-y-2 bg-white rounded-sm min-h-fit dark:text-white"
              >
                <div className="relative flex w-full group">
                  <img
                    src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F781%2Fimage30.png&w=2048&q=75"
                    alt=""
                    className="object-fill w-full h-full"
                  />
                  <div className="absolute top-0 hidden w-full h-full opacity-50 group-hover:block group-hover:bg-black Z-10"></div>
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-10 p-4 transition-all opacity-0 cursor-pointer bg-dark/50 backdrop-blur group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/50">
                    <PreviewSvg id={product?._id} />
                    <Link
                      href={`/products/${product?._id}`}
                      className="relative z-10 text-xs text-center"
                    >
                      <div className="flex items-center justify-center mb-2 transition-all rounded-full hover:bg-primary bg-dark-100 backdrop-blur-sm hover:bg-brand h-11 w-11">
                        <DetailsSvg />
                      </div>
                      Details
                    </Link>
                  </div>
                  <div></div>
                </div>

                <div className="flex flex-col justify-between gap-4 p-2">
                  <h1 className="line-clamp-1 text-dark-500">
                    {product?.name}
                  </h1>
                  <div className="flex items-end justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        <p className="text-xs line-through text-dark-500">
                          <span className="text-xs">$</span>
                          <span>{product?.price}</span>
                        </p>
                        <p className="text-xs text-primary ">
                          <span className="text-xs">$</span>
                          <span>{product?.price}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-dark-500">987 Sales</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <button className="inline px-3 py-2 text-xs transition-all duration-200 bg-transparent border rounded-sm text-primary hover:bg-gray-100 border-dark-200 active:scale-95">
                          <FaShoppingCart />
                        </button>
                        <button className="inline px-3 py-2 text-xs text-white transition-all duration-200 rounded-sm bg-primary hover:bg-primarySec active:scale-95">
                          Live Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* load more button */}
          {products.length > 10 && (
            <div className="flex justify-center py-8">
              <button className="px-6 py-3 text-sm font-semibold transition-all rounded dark:text-white bg-primary md:block hover:bg-primarySec active:scale-95">
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
