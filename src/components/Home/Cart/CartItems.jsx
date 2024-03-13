"use client";

import useCreatePayment from "@/hooks/payment/useCreatePayment";
import { useProducts } from "@/hooks/product/useProducts";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { useUser } from "@/hooks/user/useUser";
import { DeleteDataCart, GetDataCart } from "@/utils/cart/AddToCart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const CartItems = () => {
  const [getCartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { setCartUpdated, cartUpdated, setShowLoginModal } =
    useAllValueContext();
  const { data: products = [] } = useProducts();
  const { mutateAsync: createPayment } = useCreatePayment();
  const { data: user } = useUser();
  const router = useRouter();

  const deleteCookies = (id) => {
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

      setTotalPrice(parseFloat(total).toFixed(2));
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

      setTotalPrice(parseFloat(total).toFixed(2));
      setCartItems(filterData);
    })();
  }, [products]);

  const handleCreatePayment = async () => {
    if (user === null) {
      setShowLoginModal(true);
      return;
    }

    const data = {
      email: user.email,
      items: getCartItems,
    };

    const response = await createPayment(data);
    if (response && response.url) {
      router.push(response.url);
    }
  };

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
                    onClick={() => deleteCookies(item?._id)}
                    className="text-sm font-semibold dark:text-dark-100 text-dark-300 dark:hover:text-white hover:text-dark-100"
                  />
                </button>
                <div className="flex h-24 w-26">
                  <Image
                    src={"/assets/images/branner/productsBanner1.jpg"}
                    width={300}
                    height={200}
                    alt="banner"
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
      <div className="absolute right-0 w-full h-32 space-y-8 dark:bg-dark-400 bottom-8">
        <div className="border-t dark:border-dark-300 border-light-500"></div>
        <p className="flex justify-between w-[90%] mx-auto text-dark-500 dark:text-white">
          Subtotal
          <span className="text-dark-300 dark:text-dark-100">
            $ {totalPrice}
          </span>
        </p>
        <div
          onClick={handleCreatePayment}
          className="w-[90%] mx-auto py-3 bg-primary text-center cursor-pointer rounded text-white"
        >
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
