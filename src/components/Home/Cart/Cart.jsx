"use client";
import AllStateContext from "@/context/AllStateContext";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { cartOpen, setCartOpen} = useContext(AllStateContext);
  return (
    <>
      <section
        className={`${
          cartOpen
            ? "fixed right-0 top-0 z-[60]    w-[500px] min-h-screen dark:bg-darkSec text-white text-sm p-5 font-semibold "
            : "hidden"
        }   
      `}
      >
        <div className="flex justify-between ">
          <p>Shopping Cart</p>
          <button onClick={() => setCartOpen(false)} className="text-xl">
            <AiOutlineClose className="text-darkNormal font-semibold text-sm" />
          </button>
        </div>

        <CartItems />
      </section>
      <div
        className={`${
          cartOpen
            ? " fixed  right-0 top-0 z-50 w-screen blur-3xl opacity-90 bg-black  min-h-[110vh]  "
            : "hidden"
        } 
        `}
      ></div>
    </>
  );
};

export default Cart;
