"use client";

import useCookies from "@/hooks/useDeleteCookies";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const CartItems = () => {
  const { cartItems, deleteCookies, totalPrice } = useCookies();

  return (
    <>
      <div className="h-[65vh] relative overflow-y-auto scrollbar">
        <div className=" space-y-5 h-[65vh] w-full absolute left-0   top-0 ">
          {cartItems?.length == 0 ? (
            <div className="flex items-center justify-center w-full h-full">
              <img
                className="w-24"
                src="/assets/images/not_found/no_data.png"
                alt="no_data"
              />
            </div>
          ) : (
            cartItems?.map((item, index) => (
              <div key={index} className="flex items-center gap-3 ">
                <button className="text-xl hover:text-light-100">
                  <AiOutlineClose
                    onClick={() => deleteCookies(item._id)}
                    className="text-sm font-semibold dark:text-dark-100 text-dark-300 dark:hover:text-light-100 hover:text-dark-100"
                  />
                </button>
                <div className="flex h-[6rem] w-[8rem]">
                  <Image
                    src={item.images[0] || "/assets/images/card_alt.png"}
                    width={300}
                    height={200}
                    alt="banner"
                    className="object-cover w-full"
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <p className="line-clamp-1 text-dark-500 dark:text-dark-100">
                    {item?.name}
                  </p>
                  <p className="dark:text-dark-100">{item?.layout}</p>
                  <p className="font-semibold dark:text-dark-100">
                    <span className="px-2 py-1 bg-light-300 dark:bg-dark-200 rounded-3xl text-primary">
                      {item?.sale_price}
                    </span>{" "}
                    X {"1"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* sub total */}
      <div className="absolute right-0 w-full space-y-4 h-28 dark:bg-dark-400 bottom-4">
        <div className="border-t dark:border-dark-300 border-light-500"></div>
        <p className="flex justify-between w-[90%] mx-auto text-dark-500 dark:text-light-100">
          Subtotal
          <span className="text-dark-300 dark:text-dark-100">
            $ {totalPrice}
          </span>
        </p>
        <Link
          href="/checkout"
          className="w-[90%] mx-auto py-3 bg-primary text-center cursor-pointer rounded text-light-100 block hover:bg-primarySec active:scale-95 transition-all duration-300"
        >
          Proceed to checkout
        </Link>
      </div>
    </>
  );
};

export default CartItems;
