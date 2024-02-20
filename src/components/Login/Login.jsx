import { useAuthContext } from "@/hooks/useAuthContext";
import { Checkbox, Spinner } from "@nextui-org/react";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SocialButton from "../Register/SocialButton";
import CloseButton from "./CloseButton";

const Login = ({ isShow, setIsShow }) => {
  const { loginUser, loading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    const { email, password } = data;
    loginUser(email, password, reset);
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="md:p-8 p-4 rounded-sm shadow-xl cursor-default w-full sm:w-[30rem] dark:bg-dark-400 dark:text-white bg-light-300"
          >
            <div className="flex justify-end w-full">
              <CloseButton reset={reset} setIsShow={setIsShow} />
            </div>
            <form
              onSubmit={handleSubmit(formHandler)}
              className="space-y-2 md:space-y-4 dark:text-white text-dark-500"
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
                  <Checkbox defaultSelected size="sm">
                    Remember me
                  </Checkbox>
                </div>
                <p className="text-sm cursor-pointer text-primary hover:text-primarySec">
                  Forgot Password?
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 text-sm text-white transition-all duration-300 rounded-sm bg-primary md:block hover:bg-primarySec active:scale-95"
                >
                  {loading ? <Spinner size="sm" color="white" /> : "Get Login"}
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
