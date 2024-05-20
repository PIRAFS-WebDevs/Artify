"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";
import { handleCart } from "@/utils/handleCart";
import Link from "next/link";
import toast from "react-hot-toast";
import { AiOutlineLink, AiOutlinePushpin, AiOutlineTags } from "react-icons/ai";
import {
  BiCalendar,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiSolidDownload,
} from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const ProductInfo = ({
  tags,
  layout,
  name,
  price,
  description,
  updatedAt,
  createdAt,
  _id,
  preview_url,
}) => {
  const { setCartUpdated } = useAllValueContext();

  const onCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`
    );
    toast.success("Copied successfully");
  };

  return (
    <div className="relative space-y-4">
      <p className="dark:text-dark-100 text-dark-200 line-clamp-5">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4 py-4 xl:grid-cols-4 border-y dark:border-dark-300 border-light-300">
        <p className="flex items-center gap-2 whitespace-nowrap">
          <BsCart2 className="w-4 h-4" />
          <span>{price} Sales</span>
        </p>
        <p className="flex items-center gap-2 whitespace-nowrap">
          <BiSolidDownload className="w-4 h-4" />
          <span>{price} Downloads</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <HiOutlineRefresh className="w-4 h-4" />
            Last Update:
          </p>{" "}
          <p className="font-medium">{updatedAt?.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <BiCalendar className="w-4 h-4" />
            Published:
          </p>{" "}
          <p className="font-medium">{createdAt?.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlinePushpin className="w-4 h-4" />
            Layout:
          </p>{" "}
          <p className="font-medium">{layout}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlineTags className="w-4 h-4" />
            Tags:
          </p>{" "}
          <div className="flex flex-wrap col-span-1 gap-2 xl:col-span-3">
            {tags?.map((tag, i) => (
              <button
                key={i}
                className="px-2 py-1 text-xs font-medium border rounded-sm dark:text-light-500 dark:border-dark-300 border-light-500 dark:hover:bg-dark-300 hover:bg-light-400"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="grid items-center grid-cols-2 gap-4 pt-4 border-t lg:grid-cols-4 dark:border-dark-300 border-light-300">
          <p className="dark:text-dark-100">Share this item:</p>
          <div className="flex flex-wrap items-center col-span-1 gap-2 lg:col-span-3">
            <FacebookShareButton
              url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`}
              hashtag="#Artify"
            >
              <BiLogoFacebook className="w-8 h-8 p-1 border rounded-full cursor-pointer md:p-2 md:w-10 md:h-10 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
            </FacebookShareButton>
            <TwitterShareButton
              title={`${name}`}
              url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`}
              hashtags={["Artify"]}
            >
              <BiLogoTwitter className="w-8 h-8 p-1 border rounded-full cursor-pointer md:p-2 md:w-10 md:h-10 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
            </TwitterShareButton>
            <LinkedinShareButton
              title={`${name}`}
              summary={`${description}`}
              source={`${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`}
              url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${_id}`}
            >
              <BiLogoLinkedin className="w-8 h-8 p-1 border rounded-full cursor-pointer md:p-2 md:w-10 md:h-10 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
            </LinkedinShareButton>

            {/* copy button */}
            <button
              onClick={onCopy}
              className="flex items-center gap-2 px-2 py-2 border rounded-full cursor-pointer md:px-3 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300 max-sm:text-sm"
            >
              <AiOutlineLink className="w-4 h-4" />
              copy link
            </button>
          </div>
        </div>

        <div className="static inset-x-0 bottom-0 grid grid-cols-1 gap-4 pt-4 xl:absolute sm:grid-cols-2">
          <button
            className="py-4 font-semibold transition-all rounded-sm text-light-100 bg-primary hover:bg-primarySec active:scale-95"
            onClick={() =>
              handleCart({ data: _id, quantity: 1 }, _id, setCartUpdated)
            }
          >
            Add to Cart <span>$ </span>
            {price}
          </button>
          <Link
            href={`${preview_url}`}
            target="_blank"
            className="py-4 font-semibold text-center transition-all bg-transparent border rounded-sm dark:text-light-100 dark:border-dark-100 border-light-500 dark:hover:bg-dark-500 hover:bg-light-200 active:scale-95"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
