import Image from "next/image";

import { IoCloseCircle } from "react-icons/io5";
import { motion as m, AnimatePresence } from "framer-motion";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

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
            className="rounded-lg shadow-xl  w-1/4 col-span-1 cursor-default min-h-[300px] h-auto p-5 dark:bg-dark-400 border dark:border-dark-300 flex flex-col justify-between"
          >
            <>
              {/* productinfo */}
              <div className="space-y-5 text-center">
                <div className="flex items-center justify-center">
                  <MdAdminPanelSettings className="text-center text-green-400 cursor-pointer text-7xl" />
                </div>
                <p className="text-2xl font-semibold">Admin</p>
                <p>Are you sure, you want make admin?</p>
              </div>
              {/* productinfo */}
              {/* ans */}
              <div className="flex gap-5">
                <button className="w-1/2 py-3 font-semibold rounded bg-primary">
                  Cancel
                </button>
                <button
                  className={
                    "w-1/2 bg-green-400 hove:bg-red-600 py-3 rounded font-semibold"
                  }
                >
                  Confirm
                </button>
              </div>
              {/* close btn */}
            </>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SetUserRole;
