"use client";

import { registerUser } from "@/utils/api/user";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

// icons
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    registerUser(data);
    reset();
    console.table(data);
  };

  return (
    <div className="py-20">
      <div className="max-w-screen-2xl px-4 md:px-8 flex justify-center lg:justify-between items-center gap-4 relative">
        <div className="lg:flex flex-col gap-40 hidden">
          {/* <img
              className="w-20"
              src="/assets/images/shape/shape1.png"
              alt=""
            /> */}
          <div className="flex justify-between items-center">
            {/* <img
                className="w-20"
                src="/assets/images/shape/shape2.png"
                alt=""
              /> */}
            <svg
              className="w-40 -ml-32"
              tabIndex=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 580 580"
              role="img"
              aria-label="Circle"
            >
              <defs>
                <linearGradient
                  id="gradient-orange-pink-horizontal"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f7bc28"></stop>
                  <stop offset="100%" stopColor="#f93d66"></stop>
                </linearGradient>
              </defs>
              <path
                d="M290 0C129.8 0 0 129.8 0 290s129.8 290 290 290 290-129.8 290-290S450.2 0 290 0zm195.1 485.1c-25.4 25.4-54.9 45.3-87.7 59.2-34 14.4-70.2 21.7-107.4 21.7s-73.4-7.3-107.4-21.7c-32.9-13.9-62.4-33.8-87.7-59.2-25.3-25.4-45.3-54.9-59.2-87.7C21.3 363.4 14 327.3 14 290s7.3-73.4 21.7-107.4c13.9-32.9 33.8-62.4 59.2-87.7 25.4-25.3 54.9-45.3 87.7-59.2C216.6 21.3 252.7 14 290 14s73.4 7.3 107.4 21.7c32.9 13.9 62.4 33.8 87.7 59.2 25.4 25.4 45.3 54.9 59.2 87.7 14.4 34 21.7 70.2 21.7 107.4s-7.3 73.4-21.7 107.4c-13.9 32.9-33.8 62.4-59.2 87.7z"
                fill="url(#gradient-orange-pink-horizontal)"
              ></path>
            </svg>
            <img
              className="w-20 -rotate-45"
              src="/assets/images/shape/shape5.png"
              alt=""
            />
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="w-20 -ml-10"
              src="/assets/images/shape/shape6.png"
              alt=""
            />
            <h1 className="text-6xl font-extralight dark:text-white tracking-wide">
              Great to have you back!
            </h1>
          </div>

          <div className="flex justify-between items-center">
            {/* <img
                className="w-20"
                src="/assets/images/shape/shape3.png"
                alt=""
              /> */}
            <svg
              className="w-20 rotate-45"
              tabIndex=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 50"
              role="img"
              aria-label="Pentagon"
            >
              <defs>
                <linearGradient
                  id="gradient-purple-pink-horizontal"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6d47d9"></stop>
                  <stop offset="100%" stopColor="#f93d66"></stop>
                </linearGradient>
              </defs>
              <path
                d="M51.2,18l-24-17.6c-0.7-0.5-1.7-0.5-2.4,0L0.8,18c-0.7,0.5-1,1.4-0.7,2.2l9.2,28.4c0.3,0.8,1,1.4,1.9,1.4h29.7	c0.9,0,1.6-0.6,1.9-1.4l9.2-28.4C52.2,19.4,51.9,18.5,51.2,18z M39.4,46H12.6L4.3,20.3L26,4.5l21.7,15.8L39.4,46z"
                fill="url(#gradient-purple-pink-horizontal)"
              ></path>
            </svg>
            <img
              className="w-20 rotate-90"
              src="/assets/images/shape/shape4.png"
              alt=""
            />
          </div>
        </div>

        <div className=" max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center gap-2 rounded-lg border border-dark-100 bg-transparent px-8 py-3 text-center text-sm font-semibold dark:text-white outline-none ring-dark-100 duration-100 hover:dark:bg-dark-400 focus-visible:ring md:text-base active:scale-95 transition-all"
            >
              <svg
                className="h-5 w-5 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                  fill="#34A853"
                />
                <path
                  d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-dark-100 bg-transparent px-8 py-3 text-center text-sm font-semibold dark:text-white outline-none ring-dark-100 duration-100 hover:dark:bg-dark-400 focus-visible:ring md:text-base active:scale-95 transition-all">
              <BsFacebook className="text-blue-500 w-8 h-6" /> Continue with
              Facebook
            </button>

            <form
              onSubmit={handleSubmit(formHandler)}
              className="flex flex-col gap-4"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inset-x-0 h-px dark:bg-dark-100"></span>
                <span className="relative dark:bg-dark-400 rounded px-4 text-sm dark:text-dark-100">
                  or
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="mb-2 inline-block text-sm dark:text-white sm:text-base"
                  >
                    First name
                  </label>
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    id="first-name"
                    className={`w-full rounded border ${
                      errors.firstName && "border-red-400 focus:border-red-400"
                    } focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      *{errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="mb-2 inline-block text-sm dark:text-white sm:text-base"
                  >
                    Last name
                  </label>
                  <input
                    {...register("lastName")}
                    id="last-name"
                    className={`w-full rounded border focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm dark:text-white sm:text-base"
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
                  } rounded border focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    *{errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm dark:text-white sm:text-base"
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
                  } rounded border focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition duration-100`}
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    *{errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold dark:text-white outline-none transition-all duration-100 hover:bg-primarySec md:text-base active:scale-95"
              >
                Register
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center bg-transparent p-4 border-t">
            <p className="dark:text-white text-center text-sm">
              By creating an account with WareSun, you agree to our{" "}
              <Link
                href="/"
                className="text-primary transition duration-100 hover:primarySec active:text-primary"
              >
                Terms & Conditions
              </Link>{" "}
              and our{" "}
              <Link
                href="/"
                className="text-primary transition duration-100 hover:primarySec active:text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
