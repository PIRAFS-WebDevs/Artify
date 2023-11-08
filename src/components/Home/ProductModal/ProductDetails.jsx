"use client";

import { useState } from "react";

// icons
import {
  AiTwotoneHeart,
  AiOutlineHeart,
  AiOutlineClose,
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

const ProductDetails = ({ setIsShow }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="text-white text-sm">
      {/* product title */}
      <div className="flex justify-between gap-4 items-start lg:items-center bg-darkPrimary p-8">
        <div className="flex items-center flex-wrap gap-x-6">
          <h1
            className="text-lg md:text-xl hover:text-primary cursor-pointer line-clamp-1"
            title=""
          >
            Temprador WooCommerce Landing Page Theme
          </h1>
          <div className="flex items-center gap-2">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <p className="text-darkNormal text-sm">Qubitron Solutions</p>

            {like ? (
              <button onClick={() => setLike(false)}>
                <AiTwotoneHeart className="w-6 h-6 text-primary cursor-pointer" />
              </button>
            ) : (
              <button onClick={() => setLike(true)}>
                <AiOutlineHeart className="w-6 h-6 text-white cursor-pointer" />
              </button>
            )}
          </div>
        </div>

        <button onClick={() => setIsShow(false)}>
          <AiOutlineClose className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-darkSec">
        {/* product carousel */}
        <div className="space-y-4 grid grid-rows-4">
          <div className="relative row-span-3">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75"
              alt=""
              className="h-full w-full"
            />
            <AiOutlineRight className="w-8 h-8 absolute right-0 inset-y-0 my-auto border border-gray-100 text-darkPrimary rounded-full hover:bg-gray-200 shadow-md cursor-pointer p-2 mx-3" />
            <AiOutlineLeft className="w-8 h-8 absolute left-0 inset-y-0 my-auto border border-gray-100 text-darkPrimary rounded-full hover:bg-gray-200 shadow-md cursor-pointer p-2 mx-3" />
          </div>

          <div className="grid grid-cols-4 gap-4 row-span-1">
            {[1, 2, 3, 4].map((e) => (
              <div key={e} className="relative group cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75"
                  alt=""
                />

                <div className="hidden group-hover:block bg-gray-50 opacity-60 absolute w-full h-full inset-0 z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* product info */}
        <div className="space-y-4">
          <p className="text-darkNormal line-clamp-5">
            Along With Wordpress Themes & Plugins, We always try to use latest
            trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc
            to make our products special. Our rich tech choice will help you to
            build high performance applications. We are also known to provide
            great customer supports to our customers.
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
              <p className="flex items-center gap-2 text-darkNormal">
                <HiOutlineRefresh className="w-4 h-4" />
                Last Update:
              </p>{" "}
              <p>Mar 8, 2022</p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              <p className="flex items-center gap-2 text-darkNormal">
                <BiCalendar className="w-4 h-4" />
                Published:
              </p>{" "}
              <p>Jan 22, 2022</p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              <p className="flex items-center gap-2 text-darkNormal">
                <AiOutlinePushpin className="w-4 h-4" />
                Layout:
              </p>{" "}
              <p>Fixed</p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              <p className="flex items-center gap-2 text-darkNormal">
                <AiOutlineTags className="w-4 h-4" />
                Tags:
              </p>{" "}
              <div className="flex flex-wrap gap-2 col-span-1 xl:col-span-3">
                <button className="py-1 px-2 text-xs text-white border border-gray-600 rounded hover:bg-darkPrimary">
                  E-commerce
                </button>
                <button className="py-1 px-2 text-xs text-white border border-gray-600 rounded hover:bg-darkPrimary">
                  Retail
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="grid gap-4 grid-cols-2 xl:grid-cols-4 items-center border-t border-[#3e3e3e] pt-4">
              <p className="text-darkNormal">Share this item:</p>
              <div className="flex flex-wrap gap-2 items-center col-span-2 xl:col-span-3">
                <BiLogoFacebook className="w-10 h-10 border border-gray-600 rounded-full hover:bg-darkPrimary cursor-pointer p-2" />
                <BiLogoTwitter className="w-10 h-10 border border-gray-600 rounded-full hover:bg-darkPrimary cursor-pointer p-2" />
                <BiLogoLinkedin className="w-10 h-10 border border-gray-600 rounded-full hover:bg-darkPrimary cursor-pointer p-2" />
                <button className="flex items-center gap-2 border border-gray-600 rounded-full hover:bg-darkPrimary cursor-pointer py-2 px-3">
                  <AiOutlineLink className="w-4 h-4" />
                  copy link
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-primary text-white font-semibold py-4 rounded-md hover:bg-[#00997d] transition-all active:scale-95">
                Add to Cart $77.99
              </button>
              <button className="bg-transparent text-white font-semibold py-4 rounded-md border border-darkNormal hover:bg-darkPrimary transition-all active:scale-95">
                Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
