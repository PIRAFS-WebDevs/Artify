import { motion as m, AnimatePresence } from "framer-motion";

const ProductModal = ({ isShow, setIsShow }) => {
  return (
    <>
      {isShow && (
        <AnimatePresence>
          <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsShow(false)}
        className="fixed inset-0 z-50 grid cursor-pointer bg-slate-900/20 backdrop-blur place-items-center"
      >
        <m.div
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "0deg" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#2a2a2a] text-white p-12 rounded-lg w-[1900px] h-[1070px] shadow-xl cursor-default relative"
        >



        </m.div>
      </m.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ProductModal;
