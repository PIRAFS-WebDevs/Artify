"use client";
import { AiOutlineTags, AiOutlinePushpin, AiOutlineLink } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import {
  BiSolidDownload,
  BiCalendar,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AddToCart, GetDataCart } from "@/utils/addToCart/AddToCart";
import AllStateContext from "@/context/AllStateContext";

const ProductInfo = ({
  tags,
  layout,
  price,
  description,
  updatedAt,
  createdAt,
  _id,
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(
      process.env.NEXT_PUBLIC_hostUrl + "products/" + _id
    );
    toast.success("Copied successfully");
  };
  const { setCartUpdated } = useContext(AllStateContext);

  const data = { id: _id, quantity: 1 };

  const handleCart = async (cart, _id) => {
    const checking = async () => {
      try {
        const precart = await GetDataCart();

        if (precart) {
          const check = precart.some((pre) => pre.id === _id);
          return check;
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    const checked = await checking();
    if (!checked) {
      await AddToCart(cart);
      setCartUpdated((prevState) => !prevState);
      toast.success("Product added to the cart");
    } else {
      toast.error("Product already added to the cart");
    }
  };
  return (
    <div className="relative space-y-4">
      <p className="dark:text-dark-100 text-dark-200 line-clamp-5">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4 py-4 xl:grid-cols-4 border-y dark:border-dark-300 border-light-300">
        <p className="flex items-center gap-2">
          <BsCart2 className="w-4 h-4" />
          <span>365 Sales</span>
        </p>
        <p className="flex items-center gap-2">
          <BiSolidDownload className="w-4 h-4" />
          <span>45 Downloads</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <HiOutlineRefresh className="w-4 h-4" />
            Last Update:
          </p>{" "}
          <p>{updatedAt.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <BiCalendar className="w-4 h-4" />
            Published:
          </p>{" "}
          <p>{createdAt.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlinePushpin className="w-4 h-4" />
            Layout:
          </p>{" "}
          <p>{layout}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlineTags className="w-4 h-4" />
            Tags:
          </p>{" "}
          <div className="flex flex-wrap col-span-1 gap-2 xl:col-span-3">
            {tags.map((tag, i) => (
              <button
                key={i}
                className="px-2 py-1 text-xs border rounded-sm dark:text-white dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid items-center grid-cols-2 gap-4 pt-4 border-t xl:grid-cols-4 dark:border-dark-300 border-light-300">
          <p className="dark:text-dark-100">Share this item:</p>
          <div className="flex flex-wrap items-center col-span-2 gap-2 xl:col-span-3">
            <BiLogoFacebook className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
            <BiLogoTwitter className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
            <BiLogoLinkedin className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />

            {/* copy button */}
            <button
              onClick={onCopy}
              className="flex items-center gap-2 px-3 py-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300"
            >
              <AiOutlineLink className="w-4 h-4" />
              copy link
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            className="py-4 font-semibold text-white transition-all rounded-sm bg-primary hover:bg-primarySec active:scale-95"
            onClick={() => handleCart(data, _id)}
          >
            Add to Cart <span>$ </span>
            {price}
          </button>
          <button className="py-4 font-semibold transition-all bg-transparent border rounded-sm dark:text-white dark:border-dark-100 border-light-500 dark:hover:bg-dark-500 hover:bg-light-200 active:scale-95">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
