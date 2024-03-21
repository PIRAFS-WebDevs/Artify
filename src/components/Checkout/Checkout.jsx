"use client";

import useCreatePayment from "@/hooks/payment/useCreatePayment";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import useCookies from "@/hooks/useDeleteCookies";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const Checkout = () => {
  const { cartItems = [], deleteCookies, totalPrice } = useCookies();
  const { user } = useAuthContext();
  const { setShowLoginModal } = useAllValueContext();
  const router = useRouter();
  const { mutateAsync: createPayment } = useCreatePayment();

  const handleCheckout = async () => {
    if (user === null) {
      setShowLoginModal(true);
      return;
    }

    const data = {
      email: user.email,
      items: cartItems,
    };

    const response = await createPayment(data);

    if (response && response.url) {
      router.push(response.url);
    }
  };

  return (
    <div className="relative p-10 space-y-6">
      <p className="flex justify-between gap-2 text-xl">
        Your Order <span className="text-dark-100">({cartItems.length})</span>
      </p>
      <Divider />
      <div className="divide-y-1 divide-light-300 dark:divide-dark-200 max-h-[40rem] overflow-auto scrollbar pb-40">
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
                <Link href={`/products/${item._id}`}>
                  <p className="line-clamp-1 text-dark-500 dark:text-dark-100">
                    {item?.name}
                  </p>
                </Link>
                <p className="dark:text-dark-100">{item?.layout}</p>
                <p className="font-semibold dark:text-dark-100">
                  <span className="px-2 py-1 bg-light-300 dark:bg-dark-200 rounded-3xl text-primary ">
                    {item?.sale_price}
                  </span>{" "}
                  X {"1"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-0 h-40 inset-x-10 dark:bg-dark-300 bg-light-100">
        <Divider />
        <div className="py-6 space-y-2">
          <div className="pb-2 space-y-2">
            <p className="flex justify-between gap-2">
              Tax
              <span className="text-dark-100">Included in price</span>
            </p>
            <p className="flex justify-between gap-2">
              Subtotal
              <span className="text-dark-100">{totalPrice}$</span>
            </p>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full px-6 py-2 transition-all duration-300 rounded cursor-pointer bg-primary text-light-100 hover:bg-primarySec active:scale-95"
          >
            Go To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
