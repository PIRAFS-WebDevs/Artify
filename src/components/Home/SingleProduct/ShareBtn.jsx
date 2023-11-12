import { BiLink, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";

const ShareBtn = () => {
  return (
    <div className=" flex justify-between items-center gap-10">
      <button className="w-10 h-10 text-black hover:dark:bg-dark-200 border border-dark-400 flex justify-center items-center rounded-full">
        <BiLogoFacebook className="h-5 w-5 dark:text-white  " />
      </button>
      <button className="w-10 h-10 text-black hover:dark:bg-dark-200 border border-dark-400 flex justify-center items-center rounded-full">
        <BiLogoTwitter className="h-5 w-5 dark:text-white  " />
      </button>
      <button className="w-10 h-10 text-black hover:dark:bg-dark-200 border border-dark-400 flex justify-center items-center rounded-full">
        <GrLinkedinOption className="h-5 w-5 dark:text-white  " />
      </button>
      <button className="w-auto h-10  px-5 group hover:dark:bg-dark-200 border border-dark-400 flex justify-center items-center rounded-full">
        <BiLink className="h-5 w-5  mr-2 " />
        <span className="group-hover:dark:text-white">Copy link</span>
      </button>
    </div>
  );
};

export default ShareBtn;
