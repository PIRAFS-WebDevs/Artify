"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function Password() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

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
      <p className="text-white">Password</p>

      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="currentPassword" className="text-sm">
              Current Password
            </label>
            <div className="relative">
              <input
                {...register("currentPassword", {
                  required: "Current password is required",
                  minLength: {
                    value: 8,
                    message: "password must be 8 characters",
                  },
                })}
                id="currentPassword"
                type={isPasswordVisible ? "text" : "password"}
                className={`w-full ${
                  errors.currentPassword &&
                  "border-red-400 focus:border-red-400"
                } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
              />
              <span
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-dark-200 cursor-pointer"
              >
                {isPasswordVisible ? (
                  <LuEye size={"1.5rem"} />
                ) : (
                  <LuEyeOff size={"1.5rem"} />
                )}
              </span>
            </div>
            {errors.currentPassword && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.currentPassword.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="newPassword" className="text-sm">
              New Password
            </label>
            <div className="relative">
              <input
                {...register("newPassword", {
                  required: "Current password is required",
                  minLength: {
                    value: 8,
                    message: "password must be 8 characters",
                  },
                })}
                id="newPassword"
                type={isNewPasswordVisible ? "text" : "password"}
                className={`w-full ${
                  errors.newPassword && "border-red-400 focus:border-red-400"
                } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
              />
              <span
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-dark-200 cursor-pointer"
              >
                {isNewPasswordVisible ? (
                  <LuEye size={"1.5rem"} />
                ) : (
                  <LuEyeOff size={"1.5rem"} />
                )}
              </span>
            </div>
            {errors.newPassword && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.newPassword.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  minLength: {
                    value: 8,
                    message: "password must be 8 characters",
                  },
                })}
                id="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                className={`w-full ${
                  errors.confirmPassword &&
                  "border-red-400 focus:border-red-400"
                } rounded border border-dark-100 focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition-all duration-200`}
              />
              <span
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                className="absolute inset-y-0 right-0 flex items-center px-4 text-dark-200 cursor-pointer"
              >
                {isConfirmPasswordVisible ? (
                  <LuEye size={"1.5rem"} />
                ) : (
                  <LuEyeOff size={"1.5rem"} />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                *{errors.confirmPassword.message}
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
}
