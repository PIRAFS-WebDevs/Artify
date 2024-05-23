"use client";

import { useGetUser } from "@/hooks/user/useGetUser";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import FilterByPrice from "./FilterByPrice";

const ProductsReviews = ({ productById }) => {
  return (
    <section className="py-4">
      <FilterByPrice />
      {productById?.ratings?.map((rating) => (
        <SingleReview key={rating?._id} rating={rating} />
      ))}
    </section>
  );
};

export default ProductsReviews;

const SingleReview = ({ rating }) => {
  const { data: user } = useGetUser(rating?.user_id);

  return (
    <div className="py-8 border-b dark:border-dark-300 border-light-500">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          {user?.imgUrl ? (
            <img src={user?.imgUrl} className="w-8 h-8 rounded-full" />
          ) : (
            <BiUserCircle size={"2rem"} />
          )}

          <p className="font-semibold dark:text-light-100">{user?.name}</p>
        </div>
        <p
          className={
            "flex items-center gap-2 bg-primary justify-center w-12 dark:text-light-100 rounded-3xl py-1 text-light-100"
          }
        >
          {rating?.number} <AiFillStar />
        </p>
      </div>
      <div>
        <p className="my-5">{rating?.comment}</p>
        <div className="flex items-center gap-5">
          <p>{rating?.date?.slice(0, 10)}</p>
          <p className="cursor-pointer hover:text-primary">Report</p>
          <p className="flex items-center gap-3">
            0 <AiFillLike className="text-dark-100" />
          </p>
          <p className="flex items-center gap-3">
            0 <AiFillDislike className="text-dark-100" />
          </p>
        </div>
      </div>
    </div>
  );
};
