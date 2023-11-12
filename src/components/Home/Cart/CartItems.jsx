import Image from "next/image";
import iamges from "../../../../public/assets/images/branner/productsBanner1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";

const CartItems = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-3 items-center">
        <button className="text-xl">
          <AiOutlineClose className="dark:text-dark-100 font-semibold text-sm" />
        </button>
        <div className="h-24  w-40 flex">
          <Image
            src={iamges}
            width={500}
            height={200}
            alt="d"
            className="w-full object-cover"
          />
        </div>
        <div className="space-y-3 w-1/2">
          <p className="line-clamp-1">
            Temprador WooCommerce Landing Page Theme
          </p>
          <p className="dark:text-dark-100">Imagineco</p>
          <p className="font-semibold dark:text-dark-100">
            <span className="dark:bg-dark-500 py-1 px-2 rounded-3xl text-primarySec ">
              {"59.00"}
            </span>{" "}
            X {"1"}
          </p>
        </div>
      </div>
      {/* sub total */}

      <div className="border-t border-dark-100 h-32 w-full absolute bottom-0 right-0 space-y-5 ">
        <p className="mt-5 flex justify-between w-[90%] mx-auto">
          Subtotal <span>$ 100</span>
        </p>
        <div className="w-[90%] mx-auto py-3 bg-primary text-center rounded">
          {" "}
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
