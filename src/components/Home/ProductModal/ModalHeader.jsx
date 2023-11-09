"use state";

import { useState } from "react";
import { AiTwotoneHeart, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";

const ModalHeader = ({ setIsShow }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex justify-between gap-4 items-start lg:items-center bg-dark-500 p-8">
      <div className="flex items-center flex-wrap gap-x-6">
        <h1
          className="text-lg md:text-xl hover:text-primary cursor-pointer line-clamp-1"
          title=""
        >
          Temprador WooCommerce Landing Page Theme
        </h1>
        <div className="flex items-center gap-2">
          <img
            src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <p className="text-dark-100 text-sm">Qubitron Solutions</p>

          {like ? (
            <button onClick={() => setLike(false)}>
              <AiTwotoneHeart className="w-6 h-6 text-primary cursor-pointer" />
            </button>
          ) : (
            <button onClick={() => setLike(true)}>
              <AiOutlineHeart className="w-6 h-6 text-white cursor-pointer" />
            </button>
          )}
        </div>
      </div>

      <button onClick={() => setIsShow(false)}>
        <AiOutlineClose className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ModalHeader;
