import { motion as m, AnimatePresence } from "framer-motion";
import AllStateContext from "@/context/AllStateContext";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { cartOpen, setCartOpen } = useContext(AllStateContext);

  return (
    <AnimatePresence>
      {cartOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-50 grid p-4 overflow-y-auto cursor-pointer bg-slate-900/20 backdrop-blur place-items-center scrollbar"
        >
          <m.div
            initial={{ x: 450 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ x: 450 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed right-0 top-0 z-[60] w-full sm:w-[450px] min-h-screen dark:bg-dark-400 bg-white dark:text-white text-sm px-6 py-8 space-y-8 cursor-default"
          >
            <div className="flex justify-between font-medium">
              <p className="text-base dark:text-white text-dark-500">
                Shopping Cart
              </p>
              <button onClick={() => setCartOpen(false)}>
                <AiOutlineClose
                  className="dark:text-dark-100 text-dark-500 dark:hover:text-white hover:text-dark-100"
                  size={"1.2rem"}
                />
              </button>
            </div>
            <CartItems />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
