"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function formHandler(data) {
    reset();
    toast.success("Your message was sent");
  }

  return (
    <div className=" xl:w-[60%] w-full px-4 py-8 text-xs">
      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-2 lg:gap-4"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="inline-block mb-2 text-sm dark:text-dark-100 sm:text-sm"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              id="name"
              className={`w-full rounded-sm border ${
                errors.name && "border-red-400 focus:border-red-400"
              } focus:border-primary bg-transparent dark:border-dark-200 border-light-500 px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="inline-block mb-2 text-sm dark:text-dark-100 sm:text-sm"
            >
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
              } rounded-sm border focus:border-primary  dark:border-dark-200 border-light-500 bg-transparent px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="inline-block mb-2 text-sm dark:text-dark-100 sm:text-sm"
          >
            Subject
          </label>
          <input
            {...register("subject", {
              required: "subject is required",
            })}
            id="subject"
            type="subject"
            className={`w-full ${
              errors.subject && "border-red-400 focus:border-red-400"
            } rounded-sm border dark:border-dark-200 border-light-500 focus:border-primary bg-transparent px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">
              *{errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="inline-block mb-2 text-sm dark:text-dark-100 sm:text-sm"
          >
            Message
          </label>
          <textarea
            rows={8}
            {...register("message", {
              required: "message is required",
            })}
            id="message"
            type=""
            className={`w-full ${
              errors.message && "border-red-400 focus:border-red-400"
            } rounded-sm border focus:border-primary dark:border-dark-200 border-light-500 bg-transparent px-3 py-4 dark:text-dark-100 outline-none transition duration-100`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              *{errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="block px-5 py-3 text-sm font-semibold text-center transition-all duration-100 rounded-sm outline-none bg-primary hover:bg-primarySec md:text-sm active:scale-95"
          >
            Contact us
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
