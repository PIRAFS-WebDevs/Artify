"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";
import { GetDataCart } from "@/utils/cart/AddToCart";
import {
  addToWishList,
  deleteWishList,
  getWishlist,
  handleWishList,
} from "@/utils/wish/wishList";
import { useState } from "react";
import { AiOutlineClose, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const ModalHeader = ({ setShowProductModal, name, _id }) => {
  const [like, setLike] = useState(false);

  const getWishListS = async () => {
    const data = await getWishlist();

    const result = data.find((item) => item == _id);

    if (result) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  getWishListS();

  return (
    <div className="flex items-start justify-between gap-4 p-4 md:p-8 lg:items-center dark:bg-dark-500">
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <h1 className="font-medium cursor-pointer dark:text-light-100 md:text-xl hover:text-primary line-clamp-1 text-dark-500">
          {name}
        </h1>
        <div className="flex items-center gap-2">
          <img
            src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
            alt=""
            className="w-4 h-4 rounded-full md:w-6 md:h-6"
          />
          <p className="text-xs md:text-sm dark:text-dark-100">Artify</p>

          {like ? (
            <button onClick={() => setLike(false)}>
              <AiTwotoneHeart
                onClick={async () => await deleteWishList(_id)}
                className="w-4 h-4 cursor-pointer md:w-6 md:h-6 text-primary"
              />
            </button>
          ) : (
            <button onClick={() => setLike(true)}>
<<<<<<< Updated upstream
              <AiOutlineHeart className="w-4 h-4 cursor-pointer md:w-6 md:h-6 dark:text-light-100" />
=======
              <AiOutlineHeart
                onClick={async () => await addToWishList(_id)}
                className="w-4 h-4 cursor-pointer md:w-6 md:h-6 dark:text-white"
              />
>>>>>>> Stashed changes
            </button>
          )}
        </div>
      </div>

      <div className="w-10">
        <button onClick={() => setShowProductModal(false)}>
          <AiOutlineClose size={"1.5rem"} className="hover:text-dark-100" />
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;
