import {
  AiOutlineTags,
  AiOutlinePushpin,
  AiOutlineLink,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import {
  BiSolidDownload,
  BiCalendar,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";

const ProductInfo = () => {
  return (
    <div className="space-y-4">
      <p className="dark:text-dark-100 line-clamp-5">
        Along With Wordpress Themes & Plugins, We always try to use latest
        trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc to
        make our products special. Our rich tech choice will help you to build
        high performance applications. We are also known to provide great
        customer supports to our customers.
      </p>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 border-y border-[#3e3e3e] py-4">
        <p className="flex gap-2 items-center">
          <BsCart2 className="w-4 h-4" />
          <span>365 Sales</span>
        </p>
        <p className="flex gap-2 items-center">
          <BiSolidDownload className="w-4 h-4" />
          <span>45 Downloads</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <HiOutlineRefresh className="w-4 h-4" />
            Last Update:
          </p>{" "}
          <p>Mar 8, 2022</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <BiCalendar className="w-4 h-4" />
            Published:
          </p>{" "}
          <p>Jan 22, 2022</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlinePushpin className="w-4 h-4" />
            Layout:
          </p>{" "}
          <p>Fixed</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlineTags className="w-4 h-4" />
            Tags:
          </p>{" "}
          <div className="flex flex-wrap gap-2 col-span-1 xl:col-span-3">
            <button className="py-1 px-2 text-xs dark:text-white border border-dark-300 rounded hover:dark:bg-dark-500">
              E-commerce
            </button>
            <button className="py-1 px-2 text-xs dark:text-white border border-dark-300 rounded hover:dark:bg-dark-500">
              Retail
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-20">
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-4 items-center border-t border-[#3e3e3e] pt-4">
          <p className="dark:text-dark-100">Share this item:</p>
          <div className="flex flex-wrap gap-2 items-center col-span-2 xl:col-span-3">
            <BiLogoFacebook className="w-10 h-10 border border-dark-300 rounded-full hover:dark:bg-dark-500 cursor-pointer p-2" />
            <BiLogoTwitter className="w-10 h-10 border border-dark-300 rounded-full hover:dark:bg-dark-500 cursor-pointer p-2" />
            <BiLogoLinkedin className="w-10 h-10 border border-dark-300 rounded-full hover:dark:bg-dark-500 cursor-pointer p-2" />
            <button className="flex items-center gap-2 border border-dark-300 rounded-full hover:dark:bg-dark-500 cursor-pointer py-2 px-3">
              <AiOutlineLink className="w-4 h-4" />
              copy link
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="bg-primary dark:text-white font-semibold py-4 rounded-md hover:bg-[#00997d] transition-all active:scale-95">
            Add to Cart $77.99
          </button>
          <button className="bg-transparent dark:text-white font-semibold py-4 rounded-md border border-dark-100 hover:dark:bg-dark-500 transition-all active:scale-95">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
