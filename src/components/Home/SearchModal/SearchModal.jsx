import { motion as m, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import SearchCard from "../Card/SearchCard";
import { getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";

const SearchModal = ({ searchShow, setSearchShow }) => {
  const [searchText, setSearchText] = useState(null);

  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => await getProducts(searchText),
  });

  return (
    <AnimatePresence>
      {searchShow && (
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
            className="min-h-screen p-6 rounded-sm shadow-xl cursor-default dark:bg-dark-400 bg-light-200 dark:text-white"
          >
            <div className="px-6 pt-6">
              <div className="grid w-full h-8 -mt-4 text-xl place-items-end">
                <AiOutlineClose
                  onClick={() => {
                    setSearchShow(false), setSearchText(null);
                  }}
                  className="inline-block cursor-pointer text-dark-100 dark:hover:text-white hover:text-light-500"
                />
              </div>
              <div className="w-full pb-4 border-b border-dark-200 focus:border-dark-100">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  autoFocus
                  type="text"
                  placeholder="Type anything to search..."
                  className="w-full bg-transparent outline-none dark:text-white text-dark-500 md:text-xl dark:placeholder:text-dark-100 placeholder:text-dark-300 md:placeholder:text-xl"
                />
              </div>
            </div>

            <SearchCard products={products} isLoading={isLoading} />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
