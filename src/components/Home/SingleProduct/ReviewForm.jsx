"use client";

import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    reset();
    console.table(data);
  };

  return (
    <div className="py-4">
      <h1 className="pb-4 text-lg font-semibold">Submit Your Review</h1>
      <form onSubmit={handleSubmit(formHandler)}>
        <div className="space-y-2">
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
            className="hidden px-5 py-1.5 text-sm font-semibold text-light-100 transition-all rounded-sm bg-primary md:block hover:bg-primarySec active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
