import React, { useContext } from "react";
import footerdata from "@/data/footerData";
import { FaFacebook, FaPinterest } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {

  return (
    <div>
      <div
        className={`grid sm:grid-cols-1 mt-auto text-sm py-8 lg:grid-cols-2 xl:grid-cols-4 ml-8 mr-8 gap-10 `}
      >
        {/* {sideBarOpen?<div className="col-span-1"></div> : <div className="col-s"></div>} */}

        {footerdata.map((categoryObj, index) => (
          <div key={index} className=" dark:text-dark-100">
            {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
              <div key={categoryName}>
                <h2 className="text-base pl-3 font-bold py-3 bg-dark-400 ">{categoryName}</h2>
                <ul>
                  {categoryObj[categoryName].map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="hover:dark:text-white cursor-pointer pl-3 py-1"
                    >
                      {subcategory.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <div className="xl:col-start-4 lg:col-start-2 mr-5">
          <div className="dark:text-dark-100 flex gap-3 text-xl">
            <FaFacebook className="hover:text-blue-500  cursor-pointer" />
            <FaSquareXTwitter className="hover:text-dark-200  cursor-pointer" />
            <AiFillInstagram className="hover:text-pink-600  cursor-pointer" />
            <AiFillLinkedin className="hover:text-blue-900  cursor-pointer" />
            <FaPinterest className="hover:text-red-600  cursor-pointer" />
            <AiFillGithub className="hover:text-dark-200  cursor-pointer" />
            <BsYoutube className="hover:text-red-700  cursor-pointer" />

          </div>
        </div>
      </div>
      <div className="lg:flex items-center m-14 mb-20 md:mb-10 justify-between text-xs dark:text-dark-100">
        <div className="lg:flex  items-center">
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
        <div className="flex gap-2 items-center">
          <button>
            Refunds
          </button>
          <button>
            Memberships
          </button>
          <button>
            Payment
          </button>
          <button>
            Authorizeds
          </button>
        </div>


      </div>
    </div>



  );
};

export default Footer;
