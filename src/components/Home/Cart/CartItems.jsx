"use client";
import Image from "next/image";
import iamges from "../../../../public/assets/images/branner/productsBanner1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { GetDataCart } from "@/utils/addToCart/AddToCart";
import { useContext, useEffect, useState } from "react";
import { getFromCart } from "@/utils/api/user";
import AllStateContext from "@/context/AllStateContext";
import { getProductById, getProducts } from "@/utils/api/product";
import AllProductContext from "@/context/AllProductContext";

const CartItems = () => {
  const [getCartItems, setCartItems] = useState([]);
  console.log(getCartItems);

  const { FindUser, setTotalCartItem } = useContext(AllStateContext);
  const {  products } = useContext(AllProductContext);
  console.log(products)
  

  useEffect(() => {
    (async () => {
      
      // const getCart = await getFromCart(FindUser?._id);
     const cartItemId = await GetDataCart()
     console.log({"cartItemId": cartItemId});
    
     
     const filterData = products?.filter( cart =>  cartItemId?.find(p => p.id  === cart?._id) )
      
      
     
     
     setCartItems(filterData)
    //  setTotalCartItem(filterData)

    //  const filter = data.filter(cart => cart?._id === )
    //  console.log(cartItemId)

      
      // setCartItems(getCart);
    })();
  }, [products]);
  return (
    <>
      {getCartItems?.map((item, index) => (
        <div className="flex items-center gap-3">
          <button className="text-xl hover:text-white">
            <AiOutlineClose className="text-sm font-semibold dark:text-dark-100 dark:hover:text-white" />
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
            <p className="line-clamp-1">
              {item?.name}
            </p>
            <p className="dark:text-dark-100">{item?.layout}</p>
            <p className="font-semibold dark:text-dark-100">
              <span className="px-2 py-1 dark:bg-dark-200 rounded-3xl text-primarySec ">
                {"59.00"}
              </span>{" "}
              X {"1"}
            </p>
          </div>
        </div>
      ))}

      {/* sub total */}
      <div className="absolute right-0 w-full h-32 space-y-8 bottom-8">
        <div className="border-t border-dark-300"></div>
        <p className="flex justify-between w-[90%] mx-auto">
          Subtotal <span>$ 100</span>
        </p>
        <div className="w-[90%] mx-auto py-3 bg-primary text-center rounded">
          {" "}
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
