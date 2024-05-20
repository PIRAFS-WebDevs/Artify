"use client";

import { useProduct } from "@/hooks/product/useProduct";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { handleCart } from "@/utils/handleCart";
import {
  addToWishList,
  deleteWishList,
  getWishlist,
} from "@/utils/wish/wishList";
import { Skeleton } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const WishProduct = ({ id }) => {
  const { data, isLoading } = useProduct(id);
  const { setCartUpdated } = useAllValueContext();

  const [like, setLike] = useState(false);

  const getWishLists = async () => {
    const data = await getWishlist();

    const result = data.find((item) => item == id);

    if (result) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  getWishLists();

  const handleAddToCart = async () => {
    handleCart({ id, quantity: 1 }, id, setCartUpdated);
    await deleteWishList(id);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex w-full gap-4 my-4">
          <Skeleton className="w-40 h-32" />
          <div className="w-full space-y-4">
            <div className="flex flex-col w-full gap-4">
              <Skeleton className="w-[40%] h-6" />
              <Skeleton className="w-full h-8" />
            </div>
            <div className="flex justify-end gap-4">
              <Skeleton className="w-16 h-8" />
              <Skeleton className="w-16 h-8" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center">
          <div className="flex gap-4">
            <img
              src={data?.images[0] || "/assets/images/card_alt.png"}
              alt=""
              className="w-[120px] md:w-[150px]"
            />

            <div className="space-y-1">
              <p className="text-sm font-medium cursor-pointer dark:text-light-100 text-dark-500 hover:text-primary line-clamp-2">
                {data?.name}
              </p>
              <p className="text-sm text-dark-100">{data?.layout}</p>
              <p className="inline-block px-2 py-1 text-sm font-semibold rounded-full text-primary dark:bg-dark-200 bg-light-500">
                ${data?.price}
              </p>
            </div>
          </div>

          <div className="flex self-end gap-4">
            <button
              onClick={handleAddToCart}
              className="p-2 text-sm font-medium transition-all duration-200 rounded-sm text-light-100 md:p-3 bg-primary hover:bg-primarySec active:scale-95"
            >
              Add to cart
            </button>
            {like ? (
              <button onClick={() => setLike(false)}>
                <AiTwotoneHeart
                  onClick={async () => await deleteWishList(id)}
                  className="w-4 h-4 cursor-pointer md:w-6 md:h-6 text-primary"
                />
              </button>
            ) : (
              <button onClick={() => setLike(true)}>
                <AiOutlineHeart
                  onClick={async () => await addToWishList(id)}
                  className="w-4 h-4 cursor-pointer md:w-6 md:h-6 dark:text-white"
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishProduct;
