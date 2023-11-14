"use client";

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
    <div className="text-dark-100 space-y-6">
      <p className="text-white">Personal Information</p>

      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-6"
      >
        <div className="space-y-2">
          <p className="text-sm cursor-default">Avatar</p>
          <label
            htmlFor="dropzone-file"
            className="flex items-center justify-center px-4 py-16 mx-auto text-center border border-dark-100 border-dashed rounded cursor-pointer"
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

        <div className="grid md:grid-cols-2 gap-4">
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
              } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
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
              className={`w-full ${
                errors.contact && "border-red-400 focus:border-red-400"
              } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
            />
            {errors.contact && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.contact.message}
              </p>
            )}
          </div>
        </div>
        <div className="self-end absolute bottom-8">
          <button
            className="bg-primary text-white text-sm font-semibold px-6 py-4 rounded-md hover:bg-primarySec
           transition-all active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
