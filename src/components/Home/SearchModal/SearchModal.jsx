import { motion as m, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api/product";

const SearchModal = ({ searchShow, setSearchShow }) => {
  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
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
            className="min-h-screen rounded-lg shadow-xl cursor-default dark:bg-dark-400 dark:text-white"
          >
            <div className="px-6 pt-6">
              <div className="grid w-full h-8 -mt-4 text-xl place-items-end">
                <AiOutlineClose
                  onClick={() => setSearchShow(false)}
                  className="inline-block cursor-pointer text-dark-100 hover:text-white"
                />
              </div>
              <div className="w-full pb-4 border-b border-dark-200 focus:border-dark-100">
                <input
                  autoFocus
                  type="text"
                  placeholder="Type anything to search..."
                  className="w-full text-white bg-transparent outline-none md:text-xl placeholder:text-dark-100 md:placeholder:text-xl"
                />
              </div>
            </div>

            {products.length < 0 ? (
              <Card />
            ) : (
              <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[2000px]:grid-cols-5 p-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                  <div className="w-full col-span-1 space-y-2 min-h-fit dark:text-white animate-pulse">
                    <div className="w-full h-40 bg-gray-300"></div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* Loading skeleton for the profile image */}
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>

                        <div className="space-y-1 text-sm">
                          {/* Loading skeleton for the product name */}
                          <div className="w-32 h-4 bg-gray-300"></div>

                          {/* Loading skeleton for the product brand */}
                          <div className="w-20 h-3 bg-gray-300"></div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        {/* Loading skeleton for the price */}
                        <div className="w-16 h-4 bg-gray-300"></div>

                        {/* Loading skeleton for the discounted price */}
                        <div className="w-16 h-4 bg-gray-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
