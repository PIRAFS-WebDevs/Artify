"use client";

import AllStateContext from "@/context/AllStateContext";
import { AddToCart, GetDataCart } from "@/utils/addToCart/AddToCart";
import { addToCart } from "@/utils/api/user";
import api from "@/utils/axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function ProductFooter({ productById }) {
  const { setCartUpdated } = useContext(AllStateContext);
  const { name, price, _id } = productById;

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
    <div className="bottom-0 py-4 md:sticky dark:bg-dark-500 bg-light-300 border-y dark:border-dark-300 border-light-500">
      <div className="justify-between lg:flex">
        <div>
          <div className="flex justify-start lg:justify-start ">
            <h1 className="text-lg font-bold dark:text-white ">{name}</h1>
            <AiOutlineHeart className="mt-1 ml-3 text-2xl text-black dark:text-dark-100" />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="flex items-center gap-1">
              <AiOutlineShoppingCart className="text-dark-100" />
              <span>0 Sales</span>
            </div>
            <div className="flex items-center gap-1">
              <IoMdDownload className="text-dark-100" />
              <span>0 Download</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:mt-3 lg:mt-0">
          <button
            className="lg:w-[200px]   py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-white"
            onClick={() => handleCart(data, _id)}
          >
            Add to Cart <span>$ </span>
            {price}
          </button>
          <button className="lg:w-[200px]  py-3 w-1/2 border rounded-sm dark:border-dark-400 border-light-500 bg-primary text-white ">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
}
