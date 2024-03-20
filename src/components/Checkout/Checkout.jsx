"use client";

import useCookies from "@/hooks/useDeleteCookies";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Checkout = () => {
  const { cartItems = [], deleteCookies, totalPrice } = useCookies();
  return (
    <div className="relative p-10 space-y-6">
      <p className="flex justify-between gap-2">
        Your Order <span>({cartItems.length})</span>
      </p>
      <Divider />
      <div className="divide-y-1 divide-light-300 dark:divide-dark-200 max-h-[40rem] overflow-auto scrollbar pb-20">
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
            <div key={index} className="flex items-center gap-4 py-4">
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
                  <span className="px-2 py-1 bg-light-300 dark:bg-dark-200 rounded-3xl text-primarySec ">
                    {item?.sale_price}
                  </span>{" "}
                  X {"1"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-0 h-20 inset-x-10 bg-dark-300">
        <Divider />
        <div className="py-4 space-y-2">
          <p>Tax</p>
          <p>Subtotal</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
