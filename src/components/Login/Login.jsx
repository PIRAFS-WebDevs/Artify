import { motion as m, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginUser } from "@/utils/api/user";

const Login = ({ isShow, setIsShow }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    loginUser(data);
    reset();
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
          className="fixed inset-0 z-50 grid cursor-pointer bg-slate-900/20 backdrop-blur place-items-center p-4"
        >
          <m.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="dark:bg-dark-400 dark:text-white p-12 rounded-lg max-w-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit(formHandler)} className="space-y-4">
              <div className="flex justify-end w-full">
                <CloseButton reset={reset} setIsShow={setIsShow} />
              </div>
              <div className="pb-4 space-y-4 text-center">
                <h1 className="text-lg font-medium">Welcome Back, Get Login</h1>
                <p className="text-sm dark:text-dark-100">
                  Join your account. Don’t have account?{" "}
                  {/* create account button */}
                  <Link
                    href={"/register"}
                    className="font-medium text-primary hover:text-primarySec cursor-pointer"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 dark:text-white"
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
                  className={`w-full px-4 py-2 leading-8 dark:text-white transition-all bg-transparent border border-dark-100 rounded outline-none focus:border-primary ${
                    errors.email && "border-red-400 focus:border-red-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">
                    *{errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm leading-7 dark:text-white"
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
                  className={`w-full px-4 py-2 leading-8 dark:text-white transition-all bg-transparent border border-dark-100 rounded outline-none focus:border-primary ${
                    errors.password && "border-red-400 focus:border-red-400"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-400 text-sm">
                    *{errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm dark:text-dark-100 select-none cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                <p className="text-sm text-primary hover:text-primarySec cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full text-sm bg-primary dark:text-white px-8 py-3 rounded-md hidden md:block hover:bg-primarySec transition-all active:scale-95"
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
