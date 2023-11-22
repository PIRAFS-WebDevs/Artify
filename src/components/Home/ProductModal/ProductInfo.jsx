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
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

const ProductInfo = () => {
  const path = usePathname();

  const onCopy = () => {
    navigator.clipboard.writeText(path);
    toast.success("Copied successfully");
  };

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
        <p className="flex items-center gap-2">
          <BsCart2 className="w-4 h-4" />
          <span>365 Sales</span>
        </p>
        <p className="flex items-center gap-2">
          <BiSolidDownload className="w-4 h-4" />
          <span>45 Downloads</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <HiOutlineRefresh className="w-4 h-4" />
            Last Update:
          </p>{" "}
          <p>Mar 8, 2022</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <BiCalendar className="w-4 h-4" />
            Published:
          </p>{" "}
          <p>Jan 22, 2022</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlinePushpin className="w-4 h-4" />
            Layout:
          </p>{" "}
          <p>Fixed</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlineTags className="w-4 h-4" />
            Tags:
          </p>{" "}
          <div className="flex flex-wrap col-span-1 gap-2 xl:col-span-3">
            <button className="px-2 py-1 text-xs border rounded dark:text-white border-dark-300 hover:dark:bg-dark-500">
              E-commerce
            </button>
            <button className="px-2 py-1 text-xs border rounded dark:text-white border-dark-300 hover:dark:bg-dark-500">
              Retail
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-20">
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-4 items-center border-t border-[#3e3e3e] pt-4">
          <p className="dark:text-dark-100">Share this item:</p>
          <div className="flex flex-wrap items-center col-span-2 gap-2 xl:col-span-3">
            <BiLogoFacebook className="w-10 h-10 p-2 border rounded-full cursor-pointer border-dark-300 hover:dark:bg-dark-500" />
            <BiLogoTwitter className="w-10 h-10 p-2 border rounded-full cursor-pointer border-dark-300 hover:dark:bg-dark-500" />
            <BiLogoLinkedin className="w-10 h-10 p-2 border rounded-full cursor-pointer border-dark-300 hover:dark:bg-dark-500" />

            {/* copy button */}
            <button
              onClick={onCopy}
              className="flex items-center gap-2 px-3 py-2 border rounded-full cursor-pointer border-dark-300 hover:dark:bg-dark-500"
            >
              <AiOutlineLink className="w-4 h-4" />
              copy link
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button className="py-4 font-semibold transition-all rounded-md bg-primary dark:text-white hover:bg-primarySec active:scale-95">
            Add to Cart $77.99
          </button>
          <button className="py-4 font-semibold transition-all bg-transparent border rounded-md dark:text-white border-dark-100 hover:dark:bg-dark-500 active:scale-95">
            Live Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
