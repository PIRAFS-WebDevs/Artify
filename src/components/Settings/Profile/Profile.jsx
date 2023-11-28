"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const Profile = () => {
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
    <div className="mb-20 space-y-6 text-dark-100">
      <p className="text-white">Personal Information</p>

      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-6"
      >
        <div className="space-y-2">
          <p className="text-sm cursor-default">Avatar</p>
          <label
            htmlFor="dropzone-file"
            className="flex items-center justify-center px-4 py-16 mx-auto text-center border border-dashed rounded-sm cursor-pointer border-dark-100"
          >
            <p className="text-xs">Upload Your Avatar Image (80 X 80)</p>

            <input
              {...register("avatar")}
              id="dropzone-file"
              type="file"
              className="hidden w-full"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
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
              } rounded-sm border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="contact" className="text-sm">
              Contact
            </label>
            <input
              {...register("contact", {
                required: "contact is required",
                pattern: {
                  value: "",
                  message: "invalid contact number",
                },
              })}
              type="number"
              id="contact"
              className={`w-full rounded-sm border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none ${
                errors.contact && "border-red-400 focus:border-red-400"
              }`}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.contact.message}
              </p>
            )}
          </div>
          <div className="w-full col-span-2">
            <label
              htmlFor="bio"
              className="inline-block mb-2 text-sm dark:text-white"
            >
              Bio
            </label>
            <textarea
              {...register("bio")}
              id="bio"
              rows={5}
              className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-100 focus:border-primary dark:text-white resize-none ${
                errors.bio && "border-red-400 focus:border-red-400"
              }`}
            ></textarea>
          </div>
        </div>
        <div className="absolute self-end bottom-8">
          <div className="space-x-4">
            <Link
              href={"/"}
              className="px-4 py-3 text-sm font-semibold transition-all duration-200 bg-transparent border rounded-sm text-primary border-dark-200 hover:bg-dark-200 active:scale-95"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-3 text-sm font-semibold text-white transition-all duration-200 rounded-sm bg-primary hover:bg-primarySec active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
