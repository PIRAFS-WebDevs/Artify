import { motion as m, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import SocialButton from "../Register/SocialButton";

const Login = ({ isShow, setIsShow }) => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    const { email, password } = data;

    loginUser(email, password, reset);

    console.table(data);
  };

  return (
    <AnimatePresence>
      {isShow && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsShow(false)}
          className="fixed inset-0 z-50 grid p-2 cursor-pointer bg-slate-900/20 backdrop-blur place-items-center"
        >
          <m.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="md:p-12 p-4 rounded-sm shadow-xl cursor-default w-full sm:w-[32rem] dark:bg-dark-400 dark:text-white"
          >
            <div className="flex justify-end w-full">
              <CloseButton reset={reset} setIsShow={setIsShow} />
            </div>
            <form
              onSubmit={handleSubmit(formHandler)}
              className="space-y-2 md:space-y-4"
            >
              <div className="pb-4 space-y-2 text-center md:space-y-4">
                <h1 className="font-medium md:text-lg">
                  Welcome Back, Get Login
                </h1>
                <p className="text-xs md:text-sm dark:text-dark-100">
                  Join now. Don’t have account? {/* create account button */}
                  <Link
                    href={"/register"}
                    className="font-medium cursor-pointer text-primary hover:text-primarySec"
                  >
                    Create Account
                  </Link>
                </p>
              </div>

              {/* social button */}
              <SocialButton />

              <div className="space-y-1 md:space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 dark:text-dark-100"
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
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-1 md:py-2 leading-8 dark:text-white transition-all duration-300 bg-transparent border border-dark-100 rounded-sm outline-none focus:border-primary ${
                    errors.email && "border-red-400 focus:border-red-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">
                    *{errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-1 md:space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm leading-7 dark:text-dark-100"
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
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-4 py-1 md:py-2 leading-8 dark:text-white transition-all duration-300 bg-transparent border border-dark-100 rounded-sm outline-none focus:border-primary ${
                    errors.password && "border-red-400 focus:border-red-400"
                  }`}
                />
                {errors.password && (
                  <p className="text-sm text-red-400">
                    *{errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between py-1 md:py-2">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 cursor-pointer accent-primary"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm cursor-pointer select-none dark:text-dark-100"
                  >
                    Remember Me
                  </label>
                </div>
                <p className="text-sm cursor-pointer text-primary hover:text-primarySec">
                  Forgot Password?
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 text-sm transition-all duration-300 rounded-sm bg-primary dark:text-white md:block hover:bg-primarySec active:scale-95"
                >
                  Get Login
                </button>
              </div>
            </form>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
