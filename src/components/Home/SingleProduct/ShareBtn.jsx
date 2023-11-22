import { BiLink, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";

const ShareBtn = () => {
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
      <button className="flex items-center justify-center w-auto h-10 px-5 border rounded-full group hover:dark:bg-dark-200 border-dark-400">
        <BiLink className="w-5 h-5 mr-2 " />
        <span className="group-hover:dark:text-white">Copy link</span>
      </button>
    </div>
  );
};

export default ShareBtn;
