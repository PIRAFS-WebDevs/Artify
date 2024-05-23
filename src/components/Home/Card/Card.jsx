"use client";

import CardSkeleton from "@/components/Shared/Skeletons/CardSkeleton";
import DetailsSvg from "@/components/SVG/DetailsSvg";
import PreviewSvg from "@/components/SVG/PreviewSvg";
import { useProducts } from "@/hooks/product/useProducts";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { handleCart } from "@/utils/handleCart";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Card = () => {
  const { data: products = [], isLoading } = useProducts();
  const { setCartUpdated } = useAllValueContext();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : products.length <= 0 ? (
        <div className="grid min-h-screen pb-40 place-items-center">
          <img
            className="opacity-75 w-60 brightness-75"
            src="/assets/images/not_found/no_data.png"
            alt=""
          />
        </div>
      ) : (
        <div>
          <div className="grid gap-4 min-[540px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  min-[2200px]:grid-cols-6 py-6 px-6 ">
            {products?.map((product) => (
              <div
                key={product?._id}
                className="w-full col-span-1 space-y-2 rounded-sm shadow text-light-100 dark:shadow-dark-400 dark:bg-transparent bg-light-100 min-h-fit"
              >
                <div className="relative flex w-full group">
                  <Image
                    width={300}
                    height={200}
                    className="w-full h-[12rem] bg-light-100"
                    src={product.images[0] || "/assets/images/card_alt.png"}
                    alt="Product Image"
                  />
                  <div className="absolute top-0 hidden w-full h-full opacity-50 group-hover:block group-hover:bg-dark-500 Z-10"></div>
                  <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-10 p-4 transition-all opacity-0 cursor-pointer bg-dark/50 backdrop-blur group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/50">
                    <PreviewSvg id={product?._id} />
                    <Link
                      href={`/products/${product?._id}`}
                      className="relative z-10 text-xs text-center"
                    >
                      <div className="flex items-center justify-center mb-2 transition-all rounded-full dark:text-light-100 hover:bg-primary bg-dark-100 backdrop-blur-sm hover:bg-brand h-11 w-11">
                        <DetailsSvg />
                      </div>
                      Details
                    </Link>
                  </div>
                  <div></div>
                </div>

                {/* products details */}
                <div className="flex flex-col justify-between gap-4 p-2 ">
                  <Link
                    title={product?.name}
                    href={`products/${product._id}`}
                    className="line-clamp-1 text-dark-500 dark:text-light-100"
                  >
                    {product?.name}
                  </Link>
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex gap-1">
                      <p className="line-through text-dark-500 dark:text-light-100">
                        <span>$</span>
                        <span>{product?.sale_price || 0}</span>
                      </p>
                      <p className="text-primary ">
                        <span>$</span>
                        <span>{product?.price}</span>
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <Tooltip content="Add to cart">
                          <button
                            className="inline px-2 py-2 text-xs transition-all duration-200 bg-transparent border rounded-sm text-primary hover:bg-light-300 dark:hover:bg-dark-300 dark:border-dark-100 border-light-500 active:scale-95"
                            onClick={() => {
                              handleCart(
                                { id: product?._id, quantity: 1 },
                                product?._id,
                                setCartUpdated
                              );
                            }}
                          >
                            <FaShoppingCart />
                          </button>
                        </Tooltip>
                        <Link
                          href={`${product?.preview_url || ""}`}
                          target="_blank"
                          className="inline px-3 py-2 text-xs transition-all duration-200 rounded-sm text-light-100 whitespace-nowrap bg-primary hover:bg-primarySec active:scale-95"
                        >
                          Live Preview
                        </Link>
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
              <button className="px-5 py-2 text-sm font-semibold transition-all rounded-sm text-light-100 bg-primary md:block hover:bg-primarySec active:scale-95">
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
