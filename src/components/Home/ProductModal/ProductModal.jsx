import { motion as m, AnimatePresence } from "framer-motion";
import ProductDetails from "./ProductDetails";

const ProductModal = ({ isShow, setIsShow }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsShow(false)}
          className="fixed inset-0 z-[70] grid cursor-pointer bg-slate-900/20 backdrop-blur place-items-center p-4 overflow-y-auto scrollbar"
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
            className="rounded-lg shadow-xl cursor-default dark:bg-dark-400 dark:text-white max-w-7xl"
          >
            <ProductDetails setIsShow={setIsShow} />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
