"use client";

import { useForm } from "react-hook-form";

const RecommendationForm = () => {
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
    <div>
      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2 md:col-span-1">
            <label htmlFor="name" className="text-sm">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              id="name"
              className={`w-full rounded-sm border dark:border-dark-300 border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-light-100 outline-none transition-all duration-200${
                errors.name && "border-red-400 focus:border-red-400"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.name.message}
              </p>
            )}
          </div>
          <div className="col-span-2 space-y-2 md:col-span-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              id="email"
              type="email"
              className={`w-full ${
                errors.email && "border-red-400 focus:border-red-400"
              } rounded-sm border dark:border-dark-300 border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-light-100 outline-none transition-all duration-200`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.email.message}
              </p>
            )}
          </div>

          <div className="col-span-2 space-y-2 md:col-span-1">
            <label htmlFor="subject" className="text-sm">
              Subject
            </label>
            <input
              {...register("subject", {
                required: "subject is required",
              })}
              type="text"
              id="subject"
              className={`w-full rounded-sm border dark:border-dark-300 border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-light-100 outline-none transition-all duration-200${
                errors.subject && "border-red-400 focus:border-red-400"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.subject.message}
              </p>
            )}
          </div>

          <div className="col-span-2 space-y-2 md:col-span-1">
            <label htmlFor="category" className="text-sm">
              Category
            </label>
            <input
              {...register("category", {
                required: "category is required",
              })}
              type="text"
              id="category"
              className={`w-full rounded-sm border dark:border-dark-300 border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-light-100 outline-none transition-all duration-200${
                errors.category && "border-red-400 focus:border-red-400"
              }`}
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.category.message}
              </p>
            )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="details"
              className="inline-block mb-2 text-sm dark:dark:text-light-100"
            >
              Details
            </label>
            <textarea
              {...register("details")}
              id="details"
              rows={3}
              className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-300 border-dark-100 focus:border-primary dark:dark:text-light-100 resize-none ${
                errors.details && "border-red-400 focus:border-red-400"
              }`}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecommendationForm;
