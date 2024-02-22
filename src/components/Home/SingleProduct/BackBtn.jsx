"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-3 font-medium text-dark-100 hover:dark:text-white"
    >
      <IoIosArrowRoundBack size={30} />
      Back
    </button>
  );
};

export default BackBtn;
