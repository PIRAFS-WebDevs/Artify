"use client";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { AiOutlineLink } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const ShareBtn = () => {
  const path = usePathname();
  const onCopy = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_hostUrl}${path}`);
    toast.success("Copied successfully");
  };

  return (
    <div className="grid items-center grid-cols-2 gap-4 pt-4 border-t xl:grid-cols-4 dark:border-dark-300 border-light-500">
      <p className="dark:text-dark-100">Share this item:</p>
      <div className="flex flex-wrap items-center col-span-2 gap-2 xl:col-span-3">
        <BiLogoFacebook className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-500 dark:hover:bg-dark-400 hover:bg-light-400" />
        <BiLogoTwitter className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-500 dark:hover:bg-dark-400 hover:bg-light-400" />
        <BiLogoLinkedin className="w-10 h-10 p-2 border rounded-full cursor-pointer dark:border-dark-300 border-light-500 dark:hover:bg-dark-400 hover:bg-light-400" />

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
