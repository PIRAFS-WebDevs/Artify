"use client";

import {
  addToWishList,
  deleteWishList,
  getWishlist,
} from "@/utils/wish/wishList";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const ModalHeader = ({ setShowProductModal, name, _id }) => {
  const [like, setLike] = useState(false);

  const getWishLists = async () => {
    const data = await getWishlist();

    const result = data.find((item) => item == _id);

    if (result) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  getWishLists();

  const handleAddWishList = async () => {
    await addToWishList(_id);
    toast.success("Product added to wishlist");
  };

  const handleDeleteWishList = async () => {
    await deleteWishList(_id);
    toast.success("Product removed to wishlist");
  };

  return (
    <div className="flex items-start justify-between gap-4 p-4 md:p-8 lg:items-center dark:bg-dark-500">
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        <h1 className="font-medium cursor-pointer dark:text-light-100 md:text-xl hover:text-primary line-clamp-1 text-dark-500">
          {name}
        </h1>
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt=""
            className="w-4 h-4 rounded-full md:w-6 md:h-6"
          />
          <p className="text-xs md:text-sm dark:text-dark-100">Artify</p>

          {like ? (
            <button onClick={() => setLike(false)}>
              <AiTwotoneHeart
                onClick={handleDeleteWishList}
                className="w-4 h-4 cursor-pointer md:w-6 md:h-6 text-primary"
              />
            </button>
          ) : (
            <button onClick={() => setLike(true)}>
              <AiOutlineHeart
                onClick={handleAddWishList}
                className="w-4 h-4 cursor-pointer md:w-6 md:h-6 dark:text-white"
              />
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
