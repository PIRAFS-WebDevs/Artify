import { setUserRole } from "@/utils/api/user";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const SetUserRole = ({ isShow, setIsShow, _id, preRole }) => {
  if (isShow) {
  }
  const router = useRouter();

  const setRole = async (id, newRole) => {
    const res = await setUserRole(id, newRole);

    router.refresh();

    if (res?.status === 200) {
      toast.success(`Role is now ${newRole}`);
    }
  };

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
              {/*make admin and user*/}

              {/*make admin*/}
              {preRole === "user" ? (
                <div className="space-y-5 text-center">
                  <div className="flex items-center justify-center">
                    <MdAdminPanelSettings className="text-center text-green-400 cursor-pointer text-7xl" />
                  </div>
                  <p className="text-2xl font-semibold">Admin</p>
                  <p>Are you sure, you want make admin?</p>
                </div>
              ) : (
                /*make user*/ <div className="space-y-5 text-center">
                  <div className="flex items-center justify-center">
                    <FaUserAlt className="text-center text-green-400 cursor-pointer text-7xl" />
                  </div>
                  <p className="text-2xl font-semibold">User</p>
                  <p>Are you sure, you want make user?</p>
                </div>
              )}
              {/*make admin and user*/}
              <div className="flex gap-5">
                <button className="w-1/2 py-3 font-semibold rounded bg-primary hover:bg-primarySec">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsShow(false);
                    setRole(_id, preRole === "admin" ? "user" : "admin");
                  }}
                  className={
                    "w-1/2 bg-green-400 hover:bg-green-500 py-3 rounded font-semibold"
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
