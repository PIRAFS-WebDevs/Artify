import Image from "next/image";

import { IoCloseCircle } from "react-icons/io5";
import { motion as m, AnimatePresence } from "framer-motion";

const AnsModal = ({ isShow, setIsShow }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsShow(false)}
          className="fixed inset-0 z-50 grid cursor-pointer bg-slate-900/20 backdrop-blur place-items-center p-4 overflow-y-auto scrollbar"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-sm shadow-xl  w-1/2 col-span-1 cursor-default min-h-[300px] relative h-auto p-5 dark:bg-dark-400 border dark:border-dark-300"
          >
            <>
              {/* productinfo */}
              <div className="flex gap-5 items-center pb-10 border-b dark:border-dark-300">
                <div className="h-12 w-20">
                  <Image
                    className="rounded"
                    src={"/assets/images/branner/productsBanner2.jpg"}
                    width={1500}
                    height={100}
                    alt="banner"
                  />
                </div>
                <div>
                  <p>Is it gutenberg based or elementor based?</p>
                  <p>Product Id: 112</p>
                </div>
              </div>
              {/* productinfo */}
              {/* ans */}
              <div className="mt-5">
                <p>Q: Q:Is it gutenberg based or elementor based?</p>

                <textarea
                  name="qusAns"
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Write me an answer"
                  className="dark:bg-dark-400 border dark:border-dark-300 rounded-sm mt-5 w-full resize-none p-2"
                ></textarea>
                <div className="h-full w-full flex justify-end mt-5">
                  <button className="px-3 py-2 bg-primary rounded">
                    Reply
                  </button>
                </div>
              </div>
              {/* close btn */}
              <IoCloseCircle
                onClick={() => setIsShow(false)}
                className="text-red-400 absolute -top-3 -right-3 text-3xl cursor-pointer"
              />
            </>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default AnsModal;
