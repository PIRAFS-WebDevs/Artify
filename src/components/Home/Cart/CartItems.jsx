"use client";

import Image from "next/image";
import iamges from "../../../../public/assets/images/branner/productsBanner1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { DeleteDataCart, GetDataCart } from "@/utils/addToCart/AddToCart";
import { useContext, useEffect, useState } from "react";
import AllStateContext from "@/context/AllStateContext";
import { getProductById, getProducts } from "@/utils/api/product";
import AllProductContext from "@/context/AllProductContext";
import toast from "react-hot-toast";

const CartItems = () => {
  const [getCartItems, setCartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);

  const { FindUser, setCartUpdated, setTotalCartItem, cartUpdated } =
    useContext(AllStateContext);
  const { products } = useContext(AllProductContext);

  const deleteCokkies = (id) => {
    (async () => {
      await DeleteDataCart(id);
      const cartItemId = await GetDataCart();
      const filterData = products?.filter((cart) =>
        cartItemId?.find((p) => p.id === cart?._id)
      );
      const total = filterData.reduce(
        (accumulator, currentData) =>
          accumulator + parseFloat(currentData.price),
        0
      );

      settotalPrice(parseFloat(total).toFixed(2));
      setCartItems(filterData);
      setCartUpdated(!cartUpdated);
      toast.success("Item has been removed from cart");
    })();
  };

  useEffect(() => {
    (async () => {
      const cartItemId = await GetDataCart();
      const filterData = products?.filter((cart) =>
        cartItemId?.find((p) => p.id === cart?._id)
      );
      const total = filterData?.reduce(
        (accumulator, currentData) =>
          accumulator + parseFloat(currentData.price),
        0
      );

      settotalPrice(parseFloat(total).toFixed(2));
      setCartItems(filterData);
      console.log(filterData);
    })();
  }, [products]);
  return (
    <>
      <div className="h-[65vh] relative overflow-y-auto scrollbar">
        <div className=" space-y-5 h-[65vh] w-full absolute left-0   top-0 ">
          {getCartItems?.length == 0 ? (
            <div className="flex items-center justify-center w-full h-full">
              <img
                className="w-24"
                src="/assets/images/not_found/no_data.png"
                alt="a"
              />
            </div>
          ) : (
            getCartItems?.map((item, index) => (
              <div key={index} className="flex items-center gap-3 ">
                <button className="text-xl hover:text-white">
                  <AiOutlineClose
                    onClick={() => deleteCokkies(item?._id)}
                    className="text-sm font-semibold dark:text-dark-100 text-dark-300 dark:hover:text-white hover:text-dark-100"
                  />
                </button>
                <div className="flex h-24 w-26">
                  <Image
                    src={iamges}
                    width={300}
                    height={200}
                    alt=""
                    className="object-cover w-full"
                  />
                </div>
                <div className="w-1/2 space-y-3">
                  <p className="line-clamp-1 text-dark-500 dark:text-dark-100">
                    {item?.name}
                  </p>
                  <p className="dark:text-dark-100">{item?.layout}</p>
                  <p className="font-semibold dark:text-dark-100">
                    <span className="px-2 py-1 dark:bg-dark-200 rounded-3xl text-primarySec ">
                      {item?.price}
                    </span>
                    X {"1"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* sub total */}
      <div className="absolute right-0 w-full h-32 space-y-8 dark:bg-dark-400 bottom-8">
        <div className="border-t dark:border-dark-300 border-light-500"></div>
        <p className="flex justify-between w-[90%] mx-auto text-dark-500 dark:text-white">
          Subtotal{" "}
          <span className="text-dark-300 dark:text-dark-100">
            $ {totalPrice}
          </span>
        </p>
        <div className="w-[90%] mx-auto py-3 bg-primary text-center rounded text-white">
          {" "}
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
