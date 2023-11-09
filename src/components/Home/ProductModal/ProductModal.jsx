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
          className="fixed inset-0 z-50 grid cursor-pointer bg-slate-900/20 backdrop-blur place-items-center p-4 overflow-y-auto"
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
            className="bg-dark-400 text-white rounded-lg shadow-xl max-w-7xl cursor-default"
          >
            <ProductDetails setIsShow={setIsShow} />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
