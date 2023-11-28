import footerData from "@/data/footerData";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-6 text-sm">
      <div className="grid gap-6 pb-6 lg:grid-cols-2 xl:grid-cols-4">
        {footerData.map((categoryObj, index) => (
          <div key={index} className=" dark:text-dark-100">
            {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="px-3 py-3 text-base font-semibold dark:bg-dark-400">
                  {categoryName}
                </h2>
                <ul className="px-3 space-y-2">
                  {categoryObj[categoryName].map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer first:mt-2 hover:dark:text-white"
                    >
                      <Link href={`${subcategory.path}`}>
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <div className="px-3 xl:col-start-4 lg:col-start-2">
          <div className="flex gap-2 text-xl dark:text-dark-100">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaSquareXTwitter className="cursor-pointer hover:text-dark-200" />
            <AiFillInstagram className="cursor-pointer hover:text-pink-600" />
            <AiFillLinkedin className="cursor-pointer hover:text-blue-900" />
            <FaPinterest className="cursor-pointer hover:text-red-600" />
            <AiFillGithub className="cursor-pointer hover:text-dark-200" />
            <BsYoutube className="cursor-pointer hover:text-red-700" />
          </div>
        </div>
        <div className="border-t col-span-full border-dark-400"></div>
        <div className="flex flex-col col-start-1 gap-2 px-3 xl:col-span-2 text-dark-100 lg:items-center lg:flex-row">
          <img src="/assets/logo/waresun.png" alt="logo" className="w-32" />
          <p>© The waresun Limited. 2017-2023</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 px-3 xl:col-start-4 text-dark-100 mb-[50px] md:mb-0">
          <button className="hover:text-white">Refunds</button>
          <button className="hover:text-white">Memberships</button>
          <button className="hover:text-white">Payment</button>
          <button className="hover:text-white">Authorized</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
