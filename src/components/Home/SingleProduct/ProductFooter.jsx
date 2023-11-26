"use client";

import AllStateContext from "@/context/AllStateContext";
import { AddToCart, GetDataCart } from "@/utils/addToCart/AddToCart";
import { addToCart } from "@/utils/api/user";
import api from "@/utils/axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

export default function ProductFooter({ productById }) {
  const { FindUser , setCartUpdated, cartUpdated} = useContext(AllStateContext);
  const {
    name,
    slug,
    categories,
    tags,
    layout,
    description,
    price,
    status,
    _id,
  } = productById;
  // const data = { userId: FindUser?._id, items: [{ id: _id, quantity: 1 }] };
  const data = {  id: _id, quantity: 1 } ;
  /* (async () => {
    const cartData = await GetDataCart();
    const data = {
      userId: "6550be4ba5a5eb3ede9b34f7",
      items: cartData,
    };
    console.log(
      "🚀 ~ file: ProductFooter.jsx:11 ~ ProductFooter ~ cartData:",
      cartData
    );
    addToCart(data);
  })(); */
  
  const handelCart = async (cart) => {
    // await AddToCart(cart);
    // await addToCart(cart);
    await AddToCart(cart);
    setCartUpdated(!cartUpdated)
    toast.success("product added on the cart");
  };


  return (
    <div className="md:sticky bottom-0 dark:bg-dark-500 py-4">
      <div className="lg:flex justify-between">
        <div>
          <div className="flex lg:justify-start justify-center ">
            <h1 className="dark:text-white font-bold text-lg">{name}</h1>
            <AiOutlineHeart className="text-2xl mt-1 ml-3" />
          </div>

          <div className="mt-3 lg:flex gap-6 dark:text-white grid">
            <div className="flex gap-2 items-center">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
                alt=""
                className="w-7 h-7  rounded-full"
              />
              Waresun
            </div>
            <div className="flex gap-5 border-dark-200 border-t-2 border-b-2 lg:border-none lg:py-0 py-3">
              <div className="flex items-center gap-2">
                <AiOutlineShoppingCart className=" text-lg" />0 Sales
              </div>
              <div className="flex items-center gap-2 ">
                <IoMdDownload className=" text-lg" />0 Download
              </div>
            </div>
          </div>
        </div>
        <div className="items-center flex gap-1 sm:mt-3 lg:mt-0">
          <button
            className="lg:w-[200px]   py-3 w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white"
            onClick={() => handelCart(data)}
          >
            Add to Cart (<span>&#x9F3; </span>
                {price})
          </button>
          <button className="lg:w-[200px]  py-3 w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white ">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
}
