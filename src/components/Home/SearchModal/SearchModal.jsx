"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../Card/Card";

const SearchModal = ({ searchShow, setSearchShow }) => {
  return (
    <AnimatePresence>
      {searchShow && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid overflow-y-auto scrollbar place-items-center"
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
            className="min-w-full p-6 rounded-lg shadow-xl cursor-default dark:bg-dark-400 dark:text-white"
          >
            <div className="space-y-4">
              <div className="px-8">
                <button
                  onClick={() => setSearchShow(false)}
                  className="grid w-full h-8 text-xl place-items-end"
                >
                  <AiOutlineClose className="text-dark-100" />
                </button>
                <div className="w-full pb-4 border-b border-dark-200 focus:border-dark-100">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Type anything to search..."
                    className="w-full text-xl text-white bg-transparent outline-none placeholder:text-dark-100 placeholder:text-xl"
                  />
                </div>
              </div>

              <div className="p-2">
                <Card />
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
