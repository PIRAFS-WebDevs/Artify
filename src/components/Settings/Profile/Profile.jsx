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
    <div className="text-dark-100 flex gap-6 flex-col">
      <p className="text-white">Personal Information</p>

      <div className="space-y-2">
        <p className="text-sm cursor-default">Avatar</p>
        <label
          htmlFor="dropzone-file"
          className="flex items-center justify-center px-4 py-16 mx-auto text-center border border-dark-100 border-dashed rounded cursor-pointer"
        >
          <p className="text-xs">Upload Your Avatar Image (80 X 80)</p>

          <input id="dropzone-file" type="file" className="hidden w-full" />
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
                message: "invalid contact address",
              },
            })}
            id="contact"
            className={`w-full ${
              errors.contact && "border-red-400 focus:border-red-400"
            } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-40">
        <div></div>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-transparent text-white text-sm font-semibold py-4 rounded-md border border-dark-100 hover:bg-dark-200 transition-all active:scale-95">
            Cancel
          </button>
          <button
            className="bg-primary text-white text-sm font-semibold py-4 rounded-md hover:bg-primarySec
           transition-all active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
