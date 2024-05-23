"use client";

import useUpdateProduct from "@/hooks/product/useUpdateProduct";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { useUser } from "@/hooks/user/useUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ReviewForm = ({ id }) => {
  const { data: user } = useUser();
  const { mutateAsync: updateRatings } = useUpdateProduct(id);
  const [rating, setRating] = useState(5);

  const { setShowLoginModal } = useAllValueContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = async (data) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (user && user._id && id) {
      const reviewData = {
        user_id: user._id,
        number: rating,
        comment: data.comment,
      };

      const result = await updateRatings({ id, data: reviewData });

      if (result.success) {
        toast.success("Review submitted successfully");
      }
    }

    reset();
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="py-4">
      <h1 className="pb-4 text-lg font-semibold">Submit Your Review</h1>
      <form onSubmit={handleSubmit(formHandler)}>
        <div className="space-y-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                filled={i < rating}
                onClick={handleClick}
                index={i}
              />
            ))}
          </div>

          <div>
            <textarea
              {...register("comment", { required: "*comment is required" })}
              rows={5}
              className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-300 border-dark-100 focus:border-primary dark:dark:text-light-100 resize-y`}
            ></textarea>
            {errors.comment && (
              <p className="text-orange-500">{errors.comment.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="hidden px-6 py-2 text-sm font-semibold transition-all rounded-sm text-light-100 bg-primary md:block hover:bg-primarySec active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

const Star = ({ filled, onClick, index }) => (
  <svg
    className={`h-8 w-8 shrink-0 cursor-pointer ${
      filled ? "fill-amber-400" : "fill-gray-300"
    }`}
    viewBox="0 0 256 256"
    onClick={() => onClick(index)}
  >
    <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
  </svg>
);
