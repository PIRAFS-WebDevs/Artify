import useDebounce from "@/hooks/useDebounce";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../Card/Card";

const SearchModal = ({ searchModal, setSearchModal, setSearchValue }) => {
  const [search, setSearch] = useState("");
  const debounceValue = useDebounce(search);

  useEffect(() => {
    setSearchValue(debounceValue);
  }, [debounceValue]);

  const handleClose = () => {
    setSearchModal(false);
    setSearchValue("");
  };

  return (
    <AnimatePresence>
      {searchModal && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] min-h-screen w-full overflow-y-auto scrollbar"
        >
          <m.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="min-h-screen rounded-sm shadow-xl cursor-default md:p-4 dark:bg-dark-400 bg-light-200 dark:text-light-100"
          >
            <div className="px-6 pt-6">
              <div className="grid w-full h-8 -mt-4 text-xl place-items-end">
                <AiOutlineClose
                  onClick={() => handleClose()}
                  className="inline-block cursor-pointer text-dark-100 dark:hover:text-light-100 hover:text-light-500"
                />
              </div>
              <div className="w-full pb-4 border-b border-dark-200 focus:border-dark-100">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  type="text"
                  placeholder="Type anything to search..."
                  className="w-full bg-transparent outline-none dark:text-light-100 text-dark-500 md:text-xl dark:placeholder:text-dark-100 placeholder:text-dark-300 md:placeholder:text-xl"
                />
              </div>
            </div>

            <Card />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
