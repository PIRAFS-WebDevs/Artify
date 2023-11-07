import Link from "next/link";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  return (
    <div>
      <div class="py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <form class="mx-auto max-w-lg rounded-lg border">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <button class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-transparent px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-darkSec focus-visible:ring active:bg-gray-200 md:text-base">
                <svg
                  class="h-5 w-5 shrink-0"
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
              <button class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-transparent px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-darkSec focus-visible:ring active:bg-gray-200 md:text-base">
                <BsFacebook className="text-blue-500 w-8 h-6" /> Continue with
                Facebook
              </button>

              <div class="relative flex items-center justify-center">
                <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                <span class="relative bg-darkSec rounded px-4 text-sm text-gray-300">
                  or
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="first-name"
                    class="mb-2 inline-block text-sm text-white sm:text-base"
                  >
                    First name
                  </label>
                  <input
                    name="first-name"
                    class="w-full rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100"
                  />
                </div>
                <div>
                  <label
                    for="last-name"
                    class="mb-2 inline-block text-sm text-white sm:text-base"
                  >
                    Last name
                  </label>
                  <input
                    name="last-name"
                    class="w-full rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Email
                </label>
                <input
                  name="email"
                  class="w-full rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="mb-2 inline-block text-sm text-white sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  class="w-full rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100"
                />
              </div>

              <button class="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-primarySec md:text-base">
                Register
              </button>
            </div>

            <div class="flex items-center justify-center bg-transparent p-4 border-t">
                <Link
                  href="/"
                  class="text-primary transition duration-100 hover:primarySec active:text-primary"
                >
                  Terms & Conditions
                </Link>
                <span className="text-white px-4">&</span>
                <Link
                  href="/"
                  class="text-primary transition duration-100 hover:primarySec active:text-primary"
                >
                  Privacy Policy
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
