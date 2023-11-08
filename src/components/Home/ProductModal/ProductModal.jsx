import { motion as m, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";
import ProductDetails from "./ProductDetails";

const ProductModal = ({ isShow, setIsShow }) => {
  return (
    <>
      <AnimatePresence>
        {isShow && (
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
              className="bg-darkSec text-white p-12 rounded-lg shadow-xl relative"
            >
              <ProductDetails setIsShow={setIsShow}/>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductModal;
