import footerData from "@/data/footerData";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-6 py-8 text-sm">
      <div className="grid gap-8 pb-8 border-b lg:grid-cols-2 xl:grid-cols-4 border-dark-200">
        {footerData.map((categoryObj, index) => (
          <div key={index} className=" dark:text-dark-100">
            {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="px-3 py-3 text-base font-semibold bg-dark-400">
                  {categoryName}
                </h2>
                <ul className="px-3 space-y-2">
                  {categoryObj[categoryName].map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer first:mt-2 hover:dark:text-white"
                    >
                      {subcategory.name}
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
      </div>
      <div className="flex flex-col justify-between gap-2 pt-8 text-xs lg:flex-row dark:text-dark-100 mb-[60px] md:mb-0">
        <div className="flex flex-col gap-2 lg:items-center lg:flex-row">
          <img src="/assets/logo/waresun.png" alt="logo" className="w-32" />
          <p>© The waresun Limited. 2017-2023</p>
        </div>
        <div className="flex items-center gap-2">
          <button>Refunds</button>
          <button>Memberships</button>
          <button>Payment</button>
          <button>Authorized</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
