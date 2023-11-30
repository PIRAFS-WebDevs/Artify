"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiLink, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";

const ShareBtn = () => {
  const path = usePathname();
  const copy = `process.env.NEXT_PUBLIC_hostUrl/${path}`;

  return (
    <div className="flex items-center justify-between gap-10 ">
      <button className="flex items-center justify-center w-10 h-10 border rounded-full group dark:text-black hover:dark:bg-dark-200 dark:border-dark-400 border-light-500 hover:bg-light-150">
        <BiLogoFacebook className="w-5 h-5 dark:text-white text-dark-100 group-hover:text-black" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 border rounded-full group dark:text-black hover:dark:bg-dark-200 dark:border-dark-400 border-light-500 hover:bg-light-150">
        <BiLogoTwitter className="w-5 h-5 dark:text-white text-dark-100 group-hover:text-black" />
      </button>

      <button className="flex items-center justify-center w-10 h-10 border rounded-full group dark:text-black hover:dark:bg-dark-200 dark:border-dark-400 border-light-500 hover:bg-light-150">
        <GrLinkedinOption className="w-5 h-5 text-dark-100 dark:text-white group-hover:text-black" />
      </button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(copy),
            toast.success("Copied successfully");
        }}
        className="flex items-center justify-center w-auto h-10 px-5 border rounded-full group hover:dark:bg-dark-200 dark:border-dark-400 border-light-500 hover:bg-light-150"
      >
        <BiLink className="w-5 h-5 mr-2 text-dark-100 group-hover:text-black" />
        <span className="group-hover:dark:text-white text-dark-100 group-hover:text-black">
          Copy link
        </span>
      </button>
    </div>
  );
};

export default ShareBtn;
