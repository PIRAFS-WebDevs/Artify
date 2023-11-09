import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { AnimatePresence, motion as m, MotionConfig } from "framer-motion";

const ImageCarousel = () => {
  return (
    <div className="space-y-4 grid grid-rows-4">
      <div className="relative row-span-3">
        <img
          src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75"
          alt=""
          className="h-full w-full"
        />
        <AiOutlineRight className="w-8 h-8 absolute right-0 inset-y-0 my-auto border border-gray-100 text-darkPrimary rounded-full hover:bg-gray-200 shadow-md cursor-pointer p-2 mx-3" />
        <AiOutlineLeft className="w-8 h-8 absolute left-0 inset-y-0 my-auto border border-gray-100 text-darkPrimary rounded-full hover:bg-gray-200 shadow-md cursor-pointer p-2 mx-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 row-span-1">
        {[1, 2, 3, 4].map((e) => (
          <div key={e} className="relative group cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F806%2Fimage16.png&w=2048&q=75"
              alt=""
            />

            <div className="hidden group-hover:block bg-gray-50 opacity-60 absolute w-full h-full inset-0 z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
