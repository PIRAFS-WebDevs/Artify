"use client";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineLink } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const ShareBtn = ({ id }) => {
  const path = usePathname();

  const onCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_hostUrl}${path}`);
    toast.success("Copied successfully");
  };

  return (
    <div className="grid items-center grid-cols-2 gap-4 pt-4 border-t xl:grid-cols-4 dark:border-dark-300 border-light-500">
      <p className="dark:text-dark-100">Share this item:</p>
      <div className="flex flex-wrap items-center col-span-2 gap-2 xl:col-span-3">
        <div className="flex flex-wrap items-center col-span-1 gap-2 lg:col-span-3">
          <FacebookShareButton
            url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${id}`}
            hashtag="#Artify"
          >
            <BiLogoFacebook className="w-8 h-8 p-1 border rounded-full cursor-pointer md:p-2 md:w-10 md:h-10 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
          </FacebookShareButton>
          <TwitterShareButton
            title={"Artify"}
            url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${id}`}
            hashtags={["Artify"]}
          >
            <BiLogoTwitter className="w-8 h-8 p-1 border rounded-full cursor-pointer md:p-2 md:w-10 md:h-10 dark:border-dark-300 border-light-300 dark:hover:bg-dark-500 hover:bg-light-300" />
          </TwitterShareButton>
          <LinkedinShareButton
            title={"Artify"}
            source={`${process.env.NEXT_PUBLIC_hostUrl}/products/${id}`}
            url={`${process.env.NEXT_PUBLIC_hostUrl}/products/${id}`}
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

        {/* copy button */}
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-3 py-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-500 dark:hover:bg-dark-400 hover:bg-light-400"
        >
          <AiOutlineLink className="w-4 h-4" />
          copy link
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
