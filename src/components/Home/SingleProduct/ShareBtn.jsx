"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiLink, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";

const ShareBtn = () => {
  const path = usePathname();
  const copy = `http://localhost:3000/${path}`;

  return (
    <div className="flex items-center justify-between gap-10 ">
      <button className="flex items-center justify-center w-10 h-10 text-black border rounded-full hover:dark:bg-dark-200 border-dark-400">
        <BiLogoFacebook className="w-5 h-5 dark:text-white " />
      </button>
      <button className="flex items-center justify-center w-10 h-10 text-black border rounded-full hover:dark:bg-dark-200 border-dark-400">
        <BiLogoTwitter className="w-5 h-5 dark:text-white " />
      </button>
      <button className="flex items-center justify-center w-10 h-10 text-black border rounded-full hover:dark:bg-dark-200 border-dark-400">
        <GrLinkedinOption className="w-5 h-5 dark:text-white " />
      </button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(copy),
            toast.success("Copied successfully");
        }}
        className="w-auto h-10  px-5 group hover:dark:bg-dark-200 border border-dark-400 flex justify-center items-center rounded-full"
      >
        <BiLink className="h-5 w-5  mr-2 " />
        <span className="group-hover:dark:text-white">Copy link</span>
      </button>
    </div>
  );
};

export default ShareBtn;
