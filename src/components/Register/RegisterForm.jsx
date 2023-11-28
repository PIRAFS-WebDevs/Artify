"use client";

import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

// icons
import SocialButton from "./SocialButton";

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    const { firstName, lastName, email, password } = data;
    let name = "";

    if (lastName != "") {
      name = firstName + " " + lastName;
    } else {
      name = firstName;
    }

    registerUser(email, password, name, reset);
  };

  return (
    <div className="max-w-lg border rounded-sm  border-dark-200">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        {/* social login button */}
        <SocialButton />

        <form
          onSubmit={handleSubmit(formHandler)}
          className="flex flex-col gap-4"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inset-x-0 h-px dark:bg-dark-200"></span>
            <span className="relative px-4 text-sm rounded-sm dark:bg-dark-400 dark:text-dark-100">
              or
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm dark:text-white sm:text-base"
              >
                First name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                id="first-name"
                className={`w-full rounded-sm border border-dark-200 ${
                  errors.firstName && "border-red-400 focus:border-red-400"
                } focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">
                  *{errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-sm dark:text-white sm:text-base"
              >
                Last name
              </label>
              <input
                {...register("lastName")}
                id="last-name"
                className={`w-full rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="inline-block mb-2 text-sm dark:text-white sm:text-base"
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
              } rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="inline-block mb-2 text-sm dark:text-white sm:text-base"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password must be 8 characters",
                },
              })}
              id="password"
              type="password"
              className={`w-full ${
                errors.password && "border-red-400 focus:border-red-400"
              } rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="block px-8 py-4 text-sm font-semibold text-center transition-all duration-100 rounded-sm outline-none bg-primary dark:text-white hover:bg-primarySec md:text-base active:scale-95"
          >
            Register
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center p-4 bg-transparent border-t border-dark-200">
        <p className="text-sm text-center dark:text-white">
          By creating an account with WareSun, you agree to our{" "}
          <Link
            href="/"
            className="transition duration-100 text-primary hover:primarySec active:text-primary"
          >
            Terms & Conditions
          </Link>{" "}
          and our{" "}
          <Link
            href="/"
            className="transition duration-100 text-primary hover:primarySec active:text-primary"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
