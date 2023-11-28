"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className=" xl:w-[60%] w-full p-10 text-xs dark:bg-dark-400">
      <form className="flex flex-col lg:gap-4  gap-2">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 inline-block text-sm dark:text-dark-100 sm:text-sm"
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
              } focus:border-primary bg-transparent border-dark-200 px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm dark:text-dark-100 sm:text-sm"
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
              } rounded-sm border focus:border-primary  border-dark-200 bg-transparent px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 inline-block text-sm dark:text-dark-100 sm:text-sm"
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
            } rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 lg:py-4 py-3 dark:text-dark-100 outline-none transition duration-100`}
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">
              *{errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 inline-block text-sm dark:text-dark-100 sm:text-sm"
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
            } rounded-sm border focus:border-primary border-dark-200 bg-transparent px-3 py-4 dark:text-dark-100 outline-none transition duration-100`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              *{errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="block rounded-sm bg-primary px-5 py-3 text-center text-sm font-semibold dark:text-white outline-none transition-all duration-100 hover:bg-primarySec md:text-sm active:scale-95"
          >
            Contact us
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
