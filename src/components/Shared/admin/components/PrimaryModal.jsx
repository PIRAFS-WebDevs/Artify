import { IoCloseCircle } from "react-icons/io5";
import { motion as m, AnimatePresence } from "framer-motion";

const SetUserRole = ({ isShow, setIsShow }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsShow(false)}
          className="fixed inset-0 z-50 grid p-4 overflow-y-auto cursor-pointer bg-slate-900/20 backdrop-blur place-items-center scrollbar"
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
            className="rounded-lg shadow-xl  w-1/2 col-span-1 cursor-default min-h-[300px] relative h-auto p-5 dark:bg-dark-400 border dark:border-dark-300"
          >
            <>
              {/* info */}

              {/* close btn */}
              <IoCloseCircle
                onClick={() => setIsShow(false)}
                className="absolute text-3xl text-red-400 cursor-pointer -top-3 -right-3"
              />
            </>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SetUserRole;
