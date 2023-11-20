import React, { useContext } from "react";
import footerdata from "@/data/footerData";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div
        className={`grid sm:grid-cols-1 mt-auto text-sm py-8 px-6 lg:grid-cols-2 xl:grid-cols-4 gap-10 `}
      >
        {/* {sideBarOpen?<div className="col-span-1"></div> : <div className="col-s"></div>} */}

        {footerdata.map((categoryObj, index) => (
          <div key={index} className=" dark:text-dark-100">
            {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
              <div key={categoryName}>
                <h2 className="py-3 pl-3 text-base font-bold bg-dark-400 ">
                  {categoryName}
                </h2>
                <ul>
                  {categoryObj[categoryName].map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-1 pl-3 cursor-pointer hover:dark:text-white"
                    >
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <div className="mr-5 xl:col-start-4 lg:col-start-2">
          <div className="flex gap-3 text-xl dark:text-dark-100">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaSquareXTwitter className="cursor-pointer hover:text-dark-200" />
            <AiFillInstagram className="cursor-pointer hover:text-pink-600" />
            <AiFillLinkedin className="cursor-pointer hover:text-blue-900" />
            <FaPinterest className="cursor-pointer hover:text-red-600" />
            <AiFillGithub className="cursor-pointer hover:text-dark-200" />
            <BsYoutube className="cursor-pointer hover:text-red-700" />
          </div>
        </div>
      </div>
      <div className="items-center justify-between mb-20 text-xs lg:flex m-14 md:mb-10 dark:text-dark-100">
        <div className="items-center lg:flex">
          <Image
            src="/assets/logo/waresun.png"
            height={50}
            width={80}
            priority={true}
            alt="logo"
            className="w-auto h-auto"
          />
          <p>© The waresun Limited. 2017-2023</p>
        </div>
        <div className="flex items-center gap-2">
          <button>Refunds</button>
          <button>Memberships</button>
          <button>Payment</button>
          <button>Authorizeds</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
