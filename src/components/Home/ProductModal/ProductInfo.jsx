import { AiOutlineTags, AiOutlinePushpin, AiOutlineLink } from "react-icons/ai";
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

const ProductInfo = ({
  tags,
  layout,
  price,
  description,
  updatedAt,
  createdAt,
  _id,
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(
      process.env.NEXT_PUBLIC_hostUrl + "products/" + _id
    );
    toast.success("Copied successfully");
  };

  return (
    <div className="space-y-4">
      <p className="dark:text-dark-100 line-clamp-5">{description}</p>

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
          <p>{updatedAt.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <BiCalendar className="w-4 h-4" />
            Published:
          </p>{" "}
          <p>{createdAt.slice(0, 10)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlinePushpin className="w-4 h-4" />
            Layout:
          </p>{" "}
          <p>{layout}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          <p className="flex items-center gap-2 dark:text-dark-100">
            <AiOutlineTags className="w-4 h-4" />
            Tags:
          </p>{" "}
          <div className="flex flex-wrap col-span-1 gap-2 xl:col-span-3">
            {tags.map((tag, i) => (
              <button
                key={i}
                className="px-2 py-1 text-xs border rounded dark:text-white border-dark-300 hover:dark:bg-dark-500"
              >
                {tag}
              </button>
            ))}
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
            Add to Cart ${price}
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
