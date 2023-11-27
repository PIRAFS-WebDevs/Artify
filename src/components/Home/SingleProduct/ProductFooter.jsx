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
  const {setCartUpdated} = useContext(AllStateContext);
  const {
    name,
    price,
    _id,
  } = productById;
  
  const data = {  id: _id, quantity: 1 } ;
  
   const handleCart = async (cart, _id) => {
    const checking = async () => {
      try {
        const precart = await GetDataCart();
    
        if (precart) {
          const check = precart.some(pre => pre.id === _id);
          return check
        }
        
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
    const checked = await checking()
    if (!checked) {
          await AddToCart(cart);
          setCartUpdated(prevState => !prevState);
          toast.success("Product added to the cart"); 
    }
    else {
      toast.error("Product already added to the cart");
  } 
    
  };


  return (
    <div className="md:sticky bottom-0 dark:bg-dark-500 py-4">
      <div className="lg:flex justify-between">
        <div>
          <div className="flex lg:justify-start justify-start ">
            <h1 className="dark:text-white font-bold text-lg">{name}</h1>
            <AiOutlineHeart className="text-2xl mt-1 ml-3" />
          </div>
        </div>
        <div className="items-center flex gap-1 sm:mt-3 lg:mt-0">
          <button
            className="lg:w-[200px]   py-3 w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white"
            onClick={() => handleCart(data, _id)}
          >
            Add to Cart <span>$ </span>
                {price}
          </button>
          <button className="lg:w-[200px]  py-3 w-1/2 border rounded-md border-dark-400 bg-primary dark:text-white ">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
}
